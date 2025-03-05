import type { MetaFunction } from "@remix-run/node";
import Features from "./Features";
import Benefits from "./Benefits";
import Cta from "./Cta";
import { Link, useFetcher } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";
import { validateData } from "~/lib/utils";
import * as z from "zod";
import { AxiosError } from "axios";
import api from "~/lib/api";
import type { ActionFunctionArgs } from "@remix-run/node";
import { WaitlistFormActionResponse } from "~/lib/types";
// import Testimonials from "./Testimonials";
// import Pricing from "~/components/Pricing";

export const meta: MetaFunction = () => {
  return [
    { title: "ThinkLedger" },
    {
      name: "description",
      content: `Welcome to ThinkLedger. We help business owners like you 
      to effortlessly track your business’s financial health with automated, 
      accurate bookkeeping and AI-driven financial analysis while keeping 
      you in full control of your financial data.`,
    },
  ];
};

const sendGridAPIKey = import.meta.env.VITE_SENDGRID_API_KEY;
const sendGridURL = import.meta.env.VITE_SENDGRID_URL;
const sendGridListID = import.meta.env.VITE_SENDGRID_LIST_ID;

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "First name must be at least 2 characters long.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters long.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type ActionInput = z.TypeOf<typeof formSchema>;

export async function action({
  request,
}: ActionFunctionArgs): Promise<WaitlistFormActionResponse | undefined> {
  const formData = await request.formData();

  const data = {
    list_ids: [sendGridListID],
    contacts: [
      {
        first_name: formData.get("firstname"),
        last_name: formData.get("lastname"),
        email: formData.get("email"),
      },
    ],
  };

  console.log(sendGridURL);

  // console.log(data);

  try {
    const response = await api.put(sendGridURL, data, {
      headers: {
        Authorization: `Bearer ${sendGridAPIKey}`,
        "Content-Type": `application/json`,
      },
    });
    console.log(response.data);
    if (response.status === 202) {
      return Response.json({ success: true });
    } else {
      return Response.json({ success: false });
    }
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response?.data);
    return Response.json({ success: false });
  }
}

export default function IndexPage() {
  const fetcher = useFetcher<WaitlistFormActionResponse>();
  const formRef = useRef<HTMLFormElement>(null);
  const [shouldClose, setShouldClose] = useState<boolean>(false);

  useEffect(() => {
    if (fetcher.data) {
      if (fetcher.data.success === true) {
        setShouldClose(true);
      } else {
        alert(
          "Something went wrong while adding you to the waitlist. Please try again."
        );
      }
      console.log(fetcher.data);
    }
  }, [fetcher.data]);

  const waitlistHandleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const { errors } = await validateData<ActionInput>({
        formData,
        formSchema,
      });

      if (errors === null) {
        fetcher.submit(formData, { method: "PUT" });
      }
    }
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="pb-2 mb-24 text-center">
        <h1 className="text-white text-5xl md:text-5xl lg:text-5xl font-bold mb-4 leading-[1.3]">
          Keep track of your business's financial health.
        </h1>
        <p className="text-white mb-8">
          We help business owners like you to effortlessly track your business’s
          financial health with automated, accurate bookkeeping and AI-driven
          financial analysis while keeping you in full control of your financial
          data.
        </p>

        <p className="text-white mb-4">Join the waitlist to get early access</p>
        <Cta
          formRef={formRef}
          handleSubmit={waitlistHandleSubmit}
          fetch={fetcher}
          shouldClose={shouldClose}
        />
      </section>
      {/* <hr /> */}
      {/* Features Section */}
      <section id="features" className="mb-24">
        <Features />
      </section>

      {/* Benefits section */}
      <section id="benefits" className="mb-24">
        <Benefits />
      </section>

      {/* Pricing Section */}
      {/* <section id="pricing" className="">
          <Pricing />
        </section> */}

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="">
          <Testimonials />
        </section> */}

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          Running a health business has never been easier.
        </h2>
        <p className="mb-4">Join the waitlist to get early access today!.</p>
        <Cta
          formRef={formRef}
          handleSubmit={waitlistHandleSubmit}
          fetch={fetcher}
          shouldClose={shouldClose}
        />
      </section>
    </div>
  );
}
