import { useState } from "react";
import SavedBlogCard from "./SavedBlogCard";

const Saved = () => {
  const sampleBlogs = [
    {
      author: "John Doe",
      createdAt: "2024-03-20",
      title: "Getting Started with TypeScript",
      description:
        "A comprehensive guide to TypeScript fundamentals and best practices",
      tag: "Technology",
    },
    {
      author: "Jane Smith",
      createdAt: "2024-03-19",
      title: "Modern Web Development Trends",
      description:
        "Exploring the latest trends and tools in web development for 2024",
      tag: "Development",
    },
    {
      author: "Mike Johnson",
      createdAt: "2024-03-18",
      title: "React Best Practices",
      description:
        "Learn how to write clean and efficient React code with these proven practices",
      tag: "React",
    },
    {
      author: "Mike Johnson",
      createdAt: "2024-03-18",
      title: "React Best Practices",
      description:
        "Learn how to write clean and efficient React code with these proven practices",
      tag: "React",
    },
    {
      author: "Mike Johnson",
      createdAt: "2024-03-18",
      title: "React Best Practices",
      description:
        "Learn how to write clean and efficient React code with these proven practices",
      tag: "React",
    },
    {
      author: "Mike Johnson",
      createdAt: "2024-03-18",
      title: "React Best Practices",
      description:
        "Learn how to write clean and efficient React code with these proven practices",
      tag: "React",
    },
    {
      author: "Mike Johnson",
      createdAt: "2024-03-18",
      title: "React Best Practices",
      description:
        "Learn how to write clean and efficient React code with these proven practices",
      tag: "React",
    },
  ];
  const [init, setInit] = useState(0);
  const firstThreeBlogs = sampleBlogs.slice(init, init + 3);

  return (
    <div className="h-screen">
      <div className="flex flex-wrap gap-5">
        {firstThreeBlogs.map(
          ({ author, createdAt, title, description, tag }) => {
            return (
              <SavedBlogCard
                author={author}
                description={description}
                title={title}
                tag={tag}
                createdAt={createdAt}
              />
            );
          }
        )}
      </div>
      <div className="join pt-10 grid-cols-2 items-center flex justify-center">
        <button
          onClick={() => {
            init === 0 ? setInit(0) : setInit(init - 3);
          }}
          className="join-item bg-black btn text-white font-semibold w-1/5"
          disabled={init === 0}
        >
          Previous page
        </button>
        <button
          onClick={() => {
            init + 3 >= sampleBlogs.length ? null : setInit(init + 3);
          }}
          className="join-item btn bg-black text-white font-semibold  w-1/5"
          disabled={init + 3 >= sampleBlogs.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Saved;
