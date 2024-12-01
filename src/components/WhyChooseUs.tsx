import { FaUsers, FaHeadset, FaCogs } from "react-icons/fa";

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: <FaUsers className="text-4xl text-blue-500" />,
    title: "Experienced Guides",
    description:
      "Our team of professional guides ensures a safe, enjoyable, and insightful travel experience.",
  },
  {
    id: 2,
    icon: <FaHeadset className="text-4xl text-green-500" />,
    title: "24/7 Support",
    description:
      "We are available around the clock to assist you with any queries or emergencies during your trip.",
  },
  {
    id: 3,
    icon: <FaCogs className="text-4xl text-purple-500" />,
    title: "Customizable Packages",
    description:
      "Tailor your trip according to your preferences, from accommodations to activities.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100" id="why-choose-us">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mb-12">
          We provide exceptional services to ensure your travel experience is
          memorable and seamless.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
