import { useState, useRef, useEffect } from "react";
import { Link, useFetcher } from "@remix-run/react";
import type { ActionFunctionArgs } from "@remix-run/node";
import * as z from "zod";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
// import api from "~/lib/api";
import { validateData } from "~/lib/utils";
import { X } from "lucide-react";

type ActionInput = z.TypeOf<typeof formSchema>;

type Errors = {
  firstname: string;
  lastname: string;
  email: string;
};

type ActionResponse = Response & {
  errors?: Errors;
  error?: string;
  success?: string;
};

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

export async function action({
  request,
}: ActionFunctionArgs): Promise<ActionResponse | undefined> {
  const formData = await request.formData();
  const jsonData = Object.fromEntries(formData);

  try {
    const response = await fetch("http://127.0.0.1:3000/auth/v0/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });
    if (response.status === 200) {
      return Response.json({ success: "User registered" });
    } else {
      return Response.json({ error: "User registration failed" });
    }
  } catch (error) {
    return Response.json({ error: "Server error, the issue is being fixed" });
  }
}

export default function JoinWaitlist() {
  const [errorMessage, setErrorMessage] = useState("");
  const fetcher = useFetcher<ActionResponse>();
  const formRef = useRef<HTMLFormElement>(null);
  const [show, setShow] = useState<boolean>(false);

  if (!show) {
    return (
      <Button
        size="lg"
        onClick={() => setShow(true)}
        className="bg-accent text-white hover:bg-accent font-poppins"
      >
        Join waitlist
      </Button>
    );
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const { errors } = await validateData<ActionInput>({
        formData,
        formSchema,
      });

      if (errors === null) {
        fetcher.submit(formData, { method: "POST" });
      }
    }
  };

  return (
    <div
      className={`w-[100%] h-[100%] bg-primary bg-opacity-[0.8] fixed top-0 left-0 flex items-center justify-center`}
    >
      <div className="mx-auto w-[30rem] bg-primary p-8 text-left">
        <div className="flex w-full justify-between mb-8 items-center">
          <h3 className="text-white text-xl">Join our waitlist</h3>
          <div>
            <X
              className="cursor-pointer hover:text-red-600"
              onClick={() => setShow(false)}
            />
            <span className="sr-only">Close</span>
          </div>
        </div>
        <p className="text-white mb-4">
          Be the first to know when we launch. Get early access to our product.
        </p>
        <fetcher.Form ref={formRef} className="space-y-4">
          <div>
            <Label htmlFor="firstname" className="text-white font-poppins">
              First name
            </Label>
            <Input
              className="font-poppins"
              placeholder="Enter your first name"
              name="firstname"
              type="text"
            />
            <p className="text-sm text-red-500 dark:text-red-400">
              {fetcher.data?.errors?.firstname}
            </p>
          </div>
          <div>
            <Label htmlFor="lastname" className="text-white font-poppins">
              Last name
            </Label>
            <Input
              placeholder="Enter your last name"
              name="lastname"
              type="text"
              className="font-poppins"
            />
            <p className="text-sm text-red-500 dark:text-red-400">
              {fetcher.data?.errors?.lastname}
            </p>
          </div>
          <div>
            <Label htmlFor="email" className="text-white font-poppins">
              Email
            </Label>
            <Input
              placeholder="Enter your email"
              className="font-poppins"
              type="email"
              name="email"
            />
            <p className="text-sm text-red-500 dark:text-red-400">
              {fetcher.data?.errors?.email}
            </p>
          </div>
          <p className="text-sm">
            Your privacy matters to us, and we will never share or sell your
            information. Read our{" "}
            <Link to={"/privacy-policy"} className="underline text-white">
              privacy policy
            </Link>{" "}
            for more information.
          </p>
          <Button
            type="submit"
            className="w-full bg-accent text-white font-poppins"
            onClick={handleSubmit}
          >
            Join waitlist
          </Button>
        </fetcher.Form>
      </div>
    </div>
  );
}
