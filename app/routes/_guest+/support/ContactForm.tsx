import type React from "react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";
import { Label } from "~/components/ui/label";
import { Form } from "@remix-run/react";

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsSubmitting(false);

		// Reset form
		(e.target as HTMLFormElement).reset();
	};

	return (
		<Form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<Label htmlFor="contact-name">Name</Label>
				<Input
					id="contact-name"
					type="text"
					placeholder="Your name"
					required
					className="text-gray-900 bg-gray-200 focus:border-2 focus:border-accent"
				/>
			</div>
			<div>
				<Label htmlFor="contact-email">Email</Label>
				<Input
					id="contact-email"
					type="email"
					placeholder="Your email address"
					required
					className="text-gray-900 bg-gray-200 focus:border-2 focus:border-accent"
				/>
			</div>
			<div>
				<Label htmlFor="contact-subject">Subject</Label>
				<Input
					id="contact-subject"
					type="text"
					placeholder="Brief description of your issue"
					required
					className="text-gray-900 bg-gray-200 focus:border-2 focus:border-accent"
				/>
			</div>
			<div>
				<Label htmlFor="contact-description">Description</Label>
				<Textarea
					id="contact-description"
					placeholder="Please provide a detailed description your issue or question"
					className="min-h-[120px] text-gray-900 bg-gray-200 focus:border-2 focus:border-accent"
					required
				/>
			</div>
			<p className="text-sm">
				We typically respond within 1 business day
			</p>
			<Button
				type="submit"
				className="bg-accent hover:bg-blue-900"
				disabled={isSubmitting}
			>
				{isSubmitting ? "Sending..." : "Send Message"}
			</Button>
		</Form>
	);
}
