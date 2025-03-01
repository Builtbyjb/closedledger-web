import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Basic",
    price: "$29",
    features: ["5 Users", "10 Projects", "Basic Support"],
  },
  {
    name: "Pro",
    price: "$79",
    features: [
      "Unlimited Users",
      "Unlimited Projects",
      "Priority Support",
      "Advanced Analytics",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "Dedicated Account Manager",
      "Custom Integrations",
      "SLA",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Simple, Transparent Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 p-8 rounded-lg shadow-md flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 transition duration-200 ease-in-out transform hover:scale-105">
              Choose Plan
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
