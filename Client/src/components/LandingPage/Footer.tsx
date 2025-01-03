const navigation = [
  { name: "About", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Licensing", href: "#" },
  { name: "Contact", href: "#" },
];

const Footer = () => {
  return (
    <footer className="overflow-hidden pb-0 md:rounded-t-2xl xl:py-6">
      <div className="w-full space-y-4 sm:space-y-4">
        <div className="flex flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
          <a href="/" className="block max-w-fit">
            <div className="inline-flex items-center space-x-2">
              <img src="/logo.png" className="h-10 w-12" />
              <p className="text-base">
                <span className="font-bold">Blog</span>
                Vista
              </p>
            </div>
          </a>
          <ul className="mb-2 flex flex-wrap items-center font-medium sm:mb-0">
            {navigation.map((item) => {
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="me-4 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 md:me-6"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="border-[#E4E4E7] dark:border-[#27272A]" />
        <p className="text-center text-sm leading-5 text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} BlogVista consultancy, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
