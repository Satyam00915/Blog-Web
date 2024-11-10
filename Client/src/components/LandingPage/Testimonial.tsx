
const Testimonial = () => {
  return (
    <section className="min-w-screen flex min-h-screen items-center justify-center sm:py-5">
      <div className="w-full text-gray-800 sm:px-5 sm:py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="mb-5 text-5xl font-bold text-gray-800 dark:text-gray-200 sm:text-6xl md:text-7xl">
              What people <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                are saying.
              </span>
            </h1>
            <h3 className="mb-5 text-xl font-light text-gray-800 dark:text-gray-200">
              Check out what our customers have to say about us!
            </h3>
            <div className="mb-4 text-center sm:mb-10">
              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-[#FE6019]"></span>
              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-[#FE6019]"></span>
              <span className="inline-block h-1 w-40 rounded-full bg-[#FE6019]"></span>
              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-[#FE6019]"></span>
              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-[#FE6019]"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

const TestimonialCard = ({ name, image, description, index }: any) => {
  return (
    <div
      className={`w-full border-gray-300 font-light text-gray-800 dark:border-[#27272A] sm:p-5 ${
        index === 0 || index === 1
          ? "lg:border-b lg:border-r"
          : index === 2
          ? "lg:border-b"
          : index === 3 || index === 4
          ? "lg:border-r"
          : ""
      }`}
    >
      <div className="flex h-full flex-col justify-between">
        <p className="mb-6 text-base leading-snug text-gray-800 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-4 flex items-center">
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-gray-500 dark:border-gray-700">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-3">
            <h6 className="text-base font-bold text-gray-800 dark:text-gray-200">
              {name}
            </h6>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Position @Company
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Sarah Chen",
    image: "https://i.pravatar.cc/100?img=1",
    description:
      "This blog has been an invaluable resource for my tech journey. The articles are well-researched, easy to understand, and always up-to-date with the latest developments in web development. I particularly love the practical code examples!",
  },
  {
    name: "Marcus Rodriguez",
    image: "https://i.pravatar.cc/100?img=2",
    description:
      "I've been following this blog for over a year now. The in-depth tutorials and coding best practices have helped me grow from a beginner to a confident developer. The writing style makes complex concepts accessible.",
  },
  {
    name: "Emily Watson",
    image: "https://i.pravatar.cc/100?img=3",
    description:
      "What sets this blog apart is how it breaks down complicated programming concepts into digestible pieces. The step-by-step guides have been crucial in my learning process. It's my go-to resource for staying current in tech.",
  },
  {
    name: "David Kim",
    image: "https://i.pravatar.cc/100?img=4",
    description:
      "The quality of content here is exceptional. Whether it's React, TypeScript, or general web development topics, each article provides valuable insights and practical knowledge that I can immediately apply to my projects.",
  },
  {
    name: "Lisa Thompson",
    image: "https://i.pravatar.cc/100?img=5",
    description:
      "As someone transitioning into tech, this blog has been a goldmine of information. The tutorials are comprehensive, and I appreciate how the author takes time to explain the 'why' behind each concept.",
  },
  {
    name: "James Mitchell",
    image: "https://i.pravatar.cc/100?img=6",
    description:
      "The weekly articles have become part of my professional development routine. The mix of beginner-friendly content and advanced topics ensures there's always something new to learn. Highly recommended for any developer!",
  },
];
