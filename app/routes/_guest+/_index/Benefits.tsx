import { HandCoins, Lightbulb, MousePointerClick, Timer } from "lucide-react";

const benefits = [
  {
    title: "Cost savings",
    icon: HandCoins,
    description:
      "We lower labor costs by reducing the need for manual bookkeeping and by preventing costly mistakes that could lead to penalties or financial losses.",
  },
  {
    title: "Time efficiency",
    icon: Timer,
    description:
      "We reduce the time spent on financial management by eliminating manual tasks, streamlining processes, and improving efficiency.",
  },
  {
    title: "Real time financial insights",
    icon: Lightbulb,
    description:
      "Access to up-to-date financial information allows you to make quick, informed decisions. It helps identify trends, adjust pricing strategies, and manage cash flow effectively.",
  },
  {
    title: "Easy of use",
    icon: MousePointerClick,
    description:
      "We use familiar technologies like Gmail, Google Drive, and Google Sheets. This allows you to fully understand your business without needing to hire experts or spend time learning new software.",
  },
];

export default function Benefits() {
  return (
    <>
      <h2 className="text-3xl mb-8 text-white leading-[1.3]">
        Why you will love ClosedLedger
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="">
            <div className="flex items-center text-white">
              <benefit.icon className="w-8 h-8 mb-4 me-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            </div>
            <p className="text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
