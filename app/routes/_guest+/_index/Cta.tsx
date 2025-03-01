import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Cta() {
  return (
    <div className="">
      <form>
        <div className="flex mb-4 font-poppins">
          <Input
            type="text"
            placeholder="First name"
            className="w-1/2 text-gray-700 me-4"
          />
          <Input
            type="text"
            placeholder="Last name"
            className="w-1/2 text-gray-700"
          />
        </div>
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-full text-gray-700 mb-4 font-poppins"
        />

        <Button
          size="lg"
          className="bg-accent text-white hover:bg-accent font-poppins"
        >
          Join the waitlist
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
