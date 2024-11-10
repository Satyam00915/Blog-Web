import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="bg-white text-gray-900 transition-colors duration-300 dark:bg-black  dark:text-white">
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
      />
      <main className="container mx-auto px-4 py-20 overflow-y-hidden text-center">
        <div className="mb-4 flex items-center justify-center">
          <div className="mr-2 rounded-full border border-neutral-300 bg-neutral-100 p-1.5 dark:border-neutral-700 dark:bg-neutral-900">
            <img
              src="https://svgl.app/library/google.svg"
              alt="Google logo"
              className="size-7"
            />
          </div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="size-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-gray-500 dark:text-gray-400">
            Rated 4.8 of 5
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Exploring the Future of
          <br />
          Technology & Development
        </h1>
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
          Discover Insights on Software, AI, and the Latest Tech Trends
        </p>

        <button
          onClick={() => {
            !isSignedIn
              ? toast.error("Please SignUp!")
              : navigate("/dashboard");
          }}
          className="rounded-full bg-orange-500 px-8 py-3 text-lg font-medium text-white"
        >
          Get Started
        </button>
      </main>

      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-16 md:grid-cols-4">
        {[
          { number: "500+", text: "Articles Published" },
          { number: "100K+", text: "Monthly Readers" },
          { number: "50+", text: "Tech Topics Covered" },
          { number: "1000+", text: "Developer Community" },
        ].map((stat, index) => (
          <div
            key={index}
            className="rounded-lg border border-neutral-300 bg-black/5 px-6 py-10 text-center dark:border-neutral-700 dark:bg-white/10"
          >
            <h2 className="mb-2 text-4xl font-bold">{stat.number}</h2>
            <p className="text-gray-600 dark:text-gray-400">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
