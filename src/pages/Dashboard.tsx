import Banner from "../components/Banner";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div className="w-screen bg-[#cccec4] flex flex-col items-center">
      <header className="flex justify-center w-screen border border-b-[#3A35411F] bg-white">
        <Navbar />
      </header>
      <main className="flex flex-col gap-[24px] w-full max-w-[360px] max-h-[2587px] px-[20px] py-[28px] sm:w-[1440px] sm:max-w-full h-auto sm:max-h-[2581px] sm:py-[64px] sm:px-[120px] sm:gap-[64px]">
        <Hero />
        <Course />
        <Banner />
      </main>
      <footer className="flex justify-center w-screen border border-t-[#3A35411F] bg-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Login;
