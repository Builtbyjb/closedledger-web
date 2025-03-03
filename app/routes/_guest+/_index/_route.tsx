import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Mail, Instagram, Linkedin } from "lucide-react";
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
      content: `Welcome to ThinkLedger.We empower business owners like you 
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
      <section className="mt-24 pb-2 mb-24">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            Keep track of your business health.
          </h1>
          <div className="lg:w-1/2 mx-auto">
            <p className="text-gray-400 mb-6">
              We empower business owners like you to effortlessly track your
              business’s financial health with automated, accurate bookkeeping
              and AI-driven financial analysis while keeping you in full control
              of your financial data.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-accent text-white hover:bg-accent font-poppins"
          >
            Join the waitlist
          </Button>
        </div>
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
      <section className="mb-24 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Running a health business has never been easier.
        </h2>
        <p className="text-gray-400 mb-4">
          Join the waitlist to get early access today!.
        </p>
        <Button
          size="lg"
          className="bg-accent text-white hover:bg-accent font-poppins"
        >
          Join the waitlist
        </Button>
        {/* <Cta /> */}
      </section>

      <footer className="text-white py-8">
        <div className="font-poppins">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* <div>
              <span className="text-2xl font-outfit">ClosedLedger</span>
            </div> */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Integrations
                  </a>
                </li>
              </ul>
            </div> */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex hover:text-gray-300">
                    <Mail className="me-2" />
                    Email
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-gray-300">
                    X
                  </a>
                </li> */}
                <li>
                  <a href="#" className="flex hover:text-gray-300">
                    <Instagram className="me-2" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex hover:text-gray-300">
                    <Linkedin className="me-2" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Support
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2025 ClosedLedger. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
