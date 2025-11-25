import React, { useState, useEffect } from "react";

const info = [
  { title: "Mountain Vista", image: "/image/card.jpg", link: "/slide1" },
  { title: "City Skyline", image: "/image/card2.jpg", link: "/slide2" },
  { title: "Forest Stream", image: "/image/card3.jpg", link: "/slide3" },
  { title: "Desert Sunset", image: "/image/card4.jpg", link: "/slide4" },
  { title: "Ocean Waves", image: "/image/card5.jpg", link: "/slide5" },
  { title: "Stellar Night", image: "/image/card6.jpg", link: "/slide6" },
  { title: "Aurora Lights", image: "/image/card7.jpg", link: "/slide7" },
  { title: "Tropical Beach", image: "/image/card.jpg", link: "/slide8" },
];

const SLIDE_INTERVAL = 3500;

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(4); // default desktop

  // --- Responsive slides ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1); // Mobile: show only 1
      } else {
        setVisibleSlides(4); // Desktop: show 4
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = info.length;
  const maxIndex = Math.max(0, totalSlides - visibleSlides);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (i) => setActiveIndex(Math.min(i, maxIndex));

  // Auto-play
  useEffect(() => {
    if (totalSlides <= visibleSlides || isHovered) return;

    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [activeIndex, visibleSlides, isHovered]);

  const slideWidthStyle = `calc((100vw - (${
    visibleSlides - 1
  } * 1rem)) / ${visibleSlides})`;

  const trackStyle = {
    "--slide-width": slideWidthStyle,
    transform: `translateX(calc(-${activeIndex} * (var(--slide-width) + 1rem)))`,
  };

  const placeholderImage =
    "https://placehold.co/1000x1000/000/fff?text=No+Image";

  return (
    <div
      className="w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div id="full-screen-carousel" className="relative w-full h-full">
        <div className="relative h-full flex items-center overflow-hidden">
          <div
            className="flex w-max transition-transform duration-700 ease-in-out gap-2"
            style={trackStyle}
          >
            {info.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="flex-shrink-0 relative group block focus:outline-none focus:ring-4 focus:ring-indigo-500/50 rounded-none transition duration-300 hover:scale-[1.01]"
                style={{ width: slideWidthStyle, height: "70vh" }}
              >
                <img
                  src={item.image || placeholderImage}
                  className="block w-full h-full object-cover shadow-2xl transition group-hover:opacity-85"
                  alt={item.title}
                />

                <div className="absolute inset-0 top-auto h-1/4 p-4 bg-black/70 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight truncate w-full text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm underline hover:text-indigo-400 mt-1">
                    Click to View Details
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <div className="absolute z-30 flex -translate-x-1/2 bottom-8 left-1/2 space-x-3 bg-black/20 p-2 rounded-full">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition ${
                  i === activeIndex
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
        )}

        {activeIndex > 0 && (
          <button
            className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group"
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 text-white group-hover:bg-black/80 shadow-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </span>
          </button>
        )}

        {activeIndex < maxIndex && (
          <button
            className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group"
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 text-white group-hover:bg-black/80 shadow-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
