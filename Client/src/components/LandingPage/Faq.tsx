import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionProps {
  i: number;
  expanded: number | null;
  setExpanded: React.Dispatch<React.SetStateAction<number | null>>;
  title: string;
  description: string;
}

const accordionItems: AccordionItem[] = [
  {
    title: "How often is the blog content updated?",
    description:
      "Our blog is updated weekly with fresh content covering the latest trends, tutorials, and insights in web development. We publish new articles every Tuesday and Thursday, ensuring you always have access to current and relevant information.",
  },
  {
    title: "Can I contribute to the blog as a guest writer?",
    description:
      "Yes! We welcome guest contributions from experienced developers. To get started, send us your article pitch through our 'Write for Us' page. We're particularly interested in practical tutorials, case studies, and in-depth technical articles that provide value to our community.",
  },
  {
    title: "How can I stay updated with new blog posts?",
    description:
      "There are several ways to stay connected: subscribe to our newsletter for weekly digests, follow us on Twitter/X for real-time updates, or enable browser notifications. You can also join our Discord community where we announce all new content and discuss topics in depth.",
  },
  {
    title: "Do you offer RSS feeds for your blog content?",
    description:
      "Yes, we provide RSS feeds for all our content categories. You can subscribe to our main feed for all articles, or choose specific category feeds like 'Tutorials', 'Case Studies', or 'Tech News'. Find the RSS feed links in the footer of our website.",
  },
  {
    title: "How can I search for specific topics or articles?",
    description:
      "Our blog features a powerful search functionality with filters for categories, tags, and date ranges. You can also browse content by topic using our tag cloud or category navigation. For more specific queries, use the advanced search option to find exactly what you're looking for.",
  },
];

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-2xl py-16 sm:px-4">
      <h1 className="mb-4 bg-gradient-to-b from-[#434343] to-[#494949] bg-clip-text text-center text-3xl font-bold text-[#F4FFFA00] dark:from-[#fafafa] dark:to-[#b4b4b4]">
        Frequently asked questions
      </h1>
      <p className="mb-10 text-center text-gray-600 dark:text-gray-400">
        Need help with something? Here are our most frequently asked questions.
      </p>

      <div className="space-y-4">
        {accordionItems.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  i,
  expanded,
  setExpanded,
  title,
  description,
}) => {
  const isOpen = i === expanded;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        delay: 0.2 * i,
        duration: 0.8,
      }}
      className="overflow-hidden rounded-lg border border-gray-300 dark:border-[#27272a]"
    >
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isOpen
            ? "bg-gray-100 dark:bg-gray-800"
            : "bg-white dark:bg-gray-900",
        }}
        onClick={() => setExpanded(isOpen ? null : i)}
        className="flex cursor-pointer items-center justify-between p-4"
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <div>
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="size-5 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="bg-gray-500/10 p-4 text-gray-700 dark:bg-neutral-500/10 dark:text-gray-300">
              {description}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;
