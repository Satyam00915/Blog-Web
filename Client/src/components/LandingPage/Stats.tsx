const stats = [
  {
    value: "1000+",
    label: "Technical Articles",
    description:
      "In-depth articles covering the latest in technology and development.",
  },
  {
    value: "500K+",
    label: "Monthly Views",
    description:
      "Developers and tech enthusiasts visiting our blog each month.",
  },
  {
    value: "50K+",
    label: "Newsletter Subscribers",
    description: "Tech professionals receiving our curated weekly insights.",
  },
  {
    value: "100+",
    label: "Expert Contributors",
    description:
      "Industry experts and developers sharing their knowledge and experience.",
  },
];

const States = () => {
  return (
    <div className="flex my-10 items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-8">
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div>
            <h1 className="mb-2 text-4xl font-bold">Our Impact in Numbers</h1>
            <p className="text-gray-400">
              Empowering developers with knowledge and insights that matter.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="rounded bg-purple-600 px-4 py-2 font-bold text-white hover:bg-purple-700">
              Get started
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-lg font-semibold">{stat.label}</p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default States;
