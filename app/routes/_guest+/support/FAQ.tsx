import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/components/ui/accordion";

const faqs = [
	{
		question: "How does the AI accounting software work?",
		answer: "Our AI accounting software uses machine learning algorithms to automate bookkeeping tasks, categorize transactions, reconcile accounts, and generate financial reports. It learns from your data patterns to improve accuracy over time.",
	},
	{
		question: "Is my financial data secure?",
		answer: "Yes, we take security seriously. All data is encrypted both in transit and at rest. We use bank-level security protocols and regular security audits to ensure your financial information remains protected.",
	},
	{
		question: "Can I integrate with my existing accounting software?",
		answer: "Yes, our platform offers seamless integration with popular accounting software like QuickBooks, Xero, and Sage. We also provide API access for custom integrations with your existing systems.",
	},
	{
		question: "How accurate is the AI in categorizing transactions?",
		answer: "Our AI achieves over 95% accuracy in transaction categorization from day one. As it learns from your corrections and patterns, accuracy typically improves to 98-99% within the first few months of use.",
	},
	{
		question: "Do I still need an accountant if I use your software?",
		answer: "While our AI handles day-to-day bookkeeping and reporting, we recommend maintaining a relationship with an accounting professional for strategic advice, tax planning, and compliance oversight. Many accountants use our platform to collaborate with clients more efficiently.",
	},
	{
		question: "What kind of support do you offer?",
		answer: "We provide multiple support channels including live chat, email support, and an extensive knowledge base. Premium plans include dedicated account managers and priority support response times.",
	},
];

export default function FAQ() {
	return (
		<Accordion type="single" collapsible className="w-full">
			{faqs.map((faq, index) => (
				<AccordionItem key={index} value={`item-${index}`}>
					<AccordionTrigger>{faq.question}</AccordionTrigger>
					<AccordionContent>
						<p>{faq.answer}</p>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
