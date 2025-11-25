import React, { useState, useEffect } from "react";
import Maincarousel from "../constant/maincarousel";
import Footer from "../constant/footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Card from "../components/card";
import Carousel from "../components/carousel";
import Form from "../components/form";

const Index = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  gsap.registerPlugin("splitText");

  useEffect(() => {
    gsap.fromTo(
      ".split",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <section className="relative text-black md:p-12 roboto-default ">
        {/* HEADER */}
        <section
          className={`fixed top-0 left-0 w-full px-6 md:px-8 py-4 z-50 bg-white/60 backdrop-blur-xl shadow-sm transition-transform duration-300 ${
            showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <p className="text-xl md:text-2xl font-bold tracking-wide text-[#0A3D62]">
              AT Property
            </p>
            <div className="flex gap-2 md:gap-3">
              <button className="w-10 md:w-12 h-10 bg-white/90 shadow rounded text-sm uppercase hover:bg-[#0A3D62] hover:text-white transition">
                EN
              </button>
              <button className="w-10 md:w-12 h-10 bg-white/90 shadow rounded text-sm uppercase hover:bg-[#0A3D62] hover:text-white transition">
                PT
              </button>
            </div>
          </div>
        </section>

        {/* HERO */}
        <section className="relative flex flex-col md:flex-row items-center h-screen overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/your-video.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>

          {/* GOLD CURVE VIDEO */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full [clip-path:ellipse(100%_55%_at_100%_50%)] overflow-hidden hidden md:block">
            <video className="w-full h-full object-cover" autoPlay loop muted>
              <source src="/video/landscape.mp4" type="video/mp4" />
            </video>
          </div>

          {/* TEXT */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-screen gap-8 p-6 text-black md:mix-blend-difference md:mt-0 mt-14">
            <p className="text-4xl md:text-5xl font-semibold tracking-tight split">
              Developing landmarks for tomorrow.
            </p>
            <p className="text-2xl md:text-3xl opacity-90">
              Over 40 years of excellence in real estate.
            </p>
            <p className="max-w-md opacity-80 text-base md:text-lg">
              Setting new standards in quality, design, and sustainability,
              creating environments where innovation meets heritage.
            </p>
            <a href="#form">
              <button className="w-40 h-12 bg-[#0A3D62] text-white rounded shadow-md hover:bg-[#082f4a] transition">
                Let's connect
              </button>
            </a>
          </div>
        </section>

        {/* CHAIRMAN SECTION */}
        <section className="py-16 px-4 md:px-10 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 max-w-7xl mx-auto">
          <img
            src="/image/ceo.jpg"
            className="w-full md:w-[28vw] h-[50vh] md:h-[70vh] object-cover rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-6 w-full md:w-2/5 text-base md:text-lg leading-relaxed">
            <p className="font-bold text-xl md:text-2xl tracking-wide text-[#0A3D62]">
              Message from the Chairman
            </p>
            <p>
              AT Property Development is more than a business — it is a vision
              shaped by four decades of innovation, resilience, and passion for
              real estate.
            </p>
            <p>
              From the earliest days, we saw potential where others did not. We
              invested in transforming urban spaces, revitalizing communities,
              and building projects that stand the test of time.
            </p>
            <p>
              What began as bold investments in retail, tourism, and
              construction evolved into a mission to develop iconic landmarks
              blending modern innovation with timeless quality.
            </p>
            <p>
              With trust, expertise, and strong financial foundations, AT
              Property Development continues shaping a better future, one
              landmark at a time.
            </p>
            <p className="text-right font-semibold">Acácio Teixeira</p>
          </div>
        </section>

        {/* CARD SECTION */}
        <Card></Card>

        {/* CAROUSEL */}
        <section className="p-4">
          <Carousel></Carousel>
        </section>

        {/* CONTACT FORM */}
        <section className="py-16 px-4 md:px-8 lg:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Intro Section */}
            <section className="flex flex-col gap-4 mb-10">
              <p className="text-xl md:text-2xl font-semibold">Let’s connect</p>
              <p className="text-sm md:text-base tracking-wide text-gray-700">
                We believe in the power of meaningful connections. Do you have a
                question, want to explore a partnership, or simply want to learn
                more about what we do?, we’re here for you. Our team is ready to
                listen, collaborate, and work with you to turn possibilities
                into realities.
              </p>
            </section>

            {/* Form Section */}
            <section id="form">
              <Form></Form>
            </section>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default Index;
