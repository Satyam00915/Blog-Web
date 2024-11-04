import { Dock, Receipt, ScanSearch, ShieldBan } from "lucide-react";

const features = [
  {
    icon: <ShieldBan />,
    title: "In-Depth Tech Reviews",
    description:
      "Comprehensive analysis of the latest tools, frameworks, and technologies in the dev world",
    color: "#b62ad9",
  },
  {
    icon: <Dock />,
    title: "Expert Tutorials",
    description:
      "Step-by-step guides and best practices from experienced developers",
    color: "#30abc6",
  },
  {
    icon: <ScanSearch />,
    title: "Latest Tech News",
    description:
      "Stay updated with breaking news and trends in the tech industry",
    color: "#eb9d2a",
  },
  {
    icon: <Receipt />,
    title: "Code Examples",
    description:
      "Real-world code snippets and practical examples to help you learn and implement",
    color: "#2f80fa",
  },
];

const Feature = () => {
  return (
    <section className="mb-24 mt-1 bg-white text-gray-900 transition-colors duration-300 dark:bg-black  dark:text-white">
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="m-0 mb-6 text-center text-4xl font-bold sm:mb-10 sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Full control
          </span>{" "}
          of your customer data
        </h2>
        <div className="flex justify-center">
          <ul className="relative m-0 inline-grid list-none justify-evenly p-0 before:absolute before:left-1/2 before:top-0 before:hidden before:h-full after:absolute after:left-0 after:top-1/2 after:hidden after:w-full sm:grid-cols-2 sm:before:block sm:after:block">
            {features.map((feature, index) => (
              <li
                key={index}
                className="relative py-4 pl-16 pr-2 md:max-w-md md:py-8 md:pl-20 md:pr-6"
              >
                <span className="top-4.5 md:top-6.5 dark:text-primary-dark absolute left-4 inline-block text-primary opacity-60 md:left-8">
                  {feature.icon}
                </span>
                <h5
                  className="mb-2 text-lg font-bold leading-none"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h5>
                <p className="opacity-75">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;
