const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "SaaSCo has revolutionized our workflow. It's an indispensable tool for our team.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director, GrowthCo",
    content:
      "The analytics features have given us invaluable insights into our operations.",
  },
  {
    name: "Mike Johnson",
    role: "Project Manager, BuildIt",
    content:
      "The collaboration tools are top-notch. It's like the platform was built for our needs.",
  },
];
export default function Testimonials() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
            <div className="flex items-center">
              <img
                src="/placeholder.webp"
                alt={testimonial.name}
                width="40"
                height="40"
                className="rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
