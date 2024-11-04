import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Articles", href: "#" },
    { name: "Categories", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Newsletter", href: "#" },
  ];
  const navigate = useNavigate();
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between p-4  w-full">
        <div className="flex items-center">
          <div className="mr-2 size-14 rounded-full">
            <img src="/logo.png" alt="Logo" />
          </div>
          <span className="text-xl text-white font-bold">Blog Vista</span>
        </div>
        <div className="hidden space-x-4 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsActive(link.name);
              }}
              className={
                link.name === isActive
                  ? "font-medium text-white"
                  : "text-gray-500 dark:text-gray-400"
              }
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/auth")}
            className="hidden rounded-full bg-orange-500 px-4 py-2 font-medium text-white md:block"
          >
            Sign Up
          </button>
          <button onClick={toggleMobileMenu} className="md:hidden">
            <Menu className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-black ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2 size-8 rounded-full bg-orange-500"></div>
                <span className="text-xl font-bold">Outstand</span>
              </div>
              <button onClick={toggleMobileMenu}>
                <X className="size-6" />
              </button>
            </div>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block text-lg">
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col items-start space-y-4">
              <button
                onClick={() => navigate("/auth")}
                className="mt-8 w-fit rounded-full bg-orange-500 px-4 py-2 font-medium text-white"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
