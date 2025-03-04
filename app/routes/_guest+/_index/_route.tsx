import type { MetaFunction } from "@remix-run/node";
// import Pricing from "~/components/Pricing";
import Features from "./Features";
import Benefits from "./Benefits";
import Cta from "./Cta";
// import Testimonials from "./Testimonials";

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

export default function IndexPage() {
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
        <Cta />
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
        <Cta />
      </section>
    </div>
  );
}
