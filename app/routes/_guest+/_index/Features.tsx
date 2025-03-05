import { BookText, ChartLine, Database } from "lucide-react";

const features = [
  {
    title: "Full control of financial data",
    icon: Database,
    description: `No risk of losing access to critical data if you decide to 
    switch software providers or hire an in-house accounting team.`,
  },
  {
    title: "Automated bookkeeping",
    icon: BookText,
    description: `We monitor your business transactions and automatically 
    create journal entries, generate financial statements, process invoices, 
    and send you email reminders when accounts payable and accounts 
    receivable are due.`,
  },
  {
    title: "AI powered financial analysis",
    icon: ChartLine,
    description: `We use Artificial Intelligence (AI) to analyze your 
    financial data and provide actionable insights on how and where 
    improvements can be made to enhance your business health.`,
  },
];

export default function Features() {
  return (
    <div className="text-center">
      <h2 className="text-4xl text-white font-bold leading-[1.3] mb-8">
        More on what we offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="">
            <div className="flex items-center text-white">
              <feature.icon className="w-8 h-8 mb-4 me-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            </div>
            <p className="text-white">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
