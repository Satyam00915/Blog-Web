import FAQ from "../components/LandingPage/Faq";
import Feature from "../components/LandingPage/Features";
import Footer from "../components/LandingPage/Footer";
import Hero from "../components/LandingPage/Hero";
import Navbar from "../components/LandingPage/Navbar";
import States from "../components/LandingPage/Stats";
import Testimonial from "../components/LandingPage/Testimonial";

const Landing = () => {
  return (
    <div className="bg-white pb-10 text-gray-900 transition-colors duration-300 dark:bg-black  dark:text-white">
      <Navbar />
      <Hero />
      <Feature />
      <States />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Landing;
