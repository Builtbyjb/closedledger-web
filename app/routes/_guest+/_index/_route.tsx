import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  CheckCircle,
  ArrowRight,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-react";
import type { MetaFunction } from "@remix-run/node";
// import Pricing from "~/components/Pricing";
import Features from "./Features";
import Benefits from "./Benefits";
import Cta from "./Cta";
// import Testimonials from "./Testimonials";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to ClosedLedger" },
  ];
};

export default function IndexPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-8 pb-2 px-4 mb-8">
        <div className="">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-[1.3]">
              Keep track of your business health.
            </h1>
            <p className="text-gray-400 mb-6">
              We help business owners like you track your business health
              efficiently through automated and accurate bookkeeping and
              AI-powered financial analysis—all while giving you full control of
              your financial data.
            </p>
            <Button
              size="lg"
              className="bg-accent text-white hover:bg-accent font-poppins"
            >
              Join the waitlist
            </Button>
          </div>
        </div>
      </section>
      {/* <hr /> */}
      {/* Features Section */}
      <section id="features" className="px-4 mb-16">
        <Features />
      </section>

      {/* Benefits section */}
      <section id="benefits" className="px-4 mb-16">
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
      <section className="px-4 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Ready to run a health business?
        </h2>
        <p className="text-gray-400 mb-4">
          Join the waitlist to get early access.
        </p>
        <Button
          size="lg"
          className="bg-accent text-white hover:bg-accent font-poppins"
        >
          Join the waitlist
        </Button>
        {/* <Cta /> */}
      </section>

      <footer className="text-white px-4 py-8">
        <div className="font-poppins">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-outfit">ClosedLedger</span>
            </div>
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
