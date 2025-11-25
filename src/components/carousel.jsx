import React, { useState, useEffect } from "react";

// Using placeholder image URLs for reliability.
// NOTE: I've increased the placeholder count to ensure enough unique images are available.
const info = [
  {
    title: "Mountain Vista",
    image: "/image/card.jpg",
    link: "/slide1",
  },
  {
    title: "City Skyline",
    image: "/image/card2.jpg",
    link: "/slide2",
  },
  {
    title: "Forest Stream",
    image: "/image/card3.jpg",
    link: "/slide3",
  },
  {
    title: "Desert Sunset",
    image: "/image/card4.jpg",
    link: "/slide4",
  },
  {
    title: "Ocean Waves",
    image: "/image/card5.jpg",
    link: "/slide5",
  },
  {
    title: "Stellar Night",
    image: "/image/card6.jpg",
    link: "/slide6",
  },
  {
    title: "Aurora Lights",
    image: "/image/card7.jpg",
    link: "/slide7",
  },
  {
    title: "Tropical Beach",
    image: "/image/card.jpg",
    link: "/slide8",
  },
];

const SLIDE_INTERVAL = 3500; // Auto-play interval set to 3.5 seconds
const VISIBLE_SLIDES = 4; // Now displaying 4 images simultaneously

export default function App() {
  // activeIndex now represents the index of the leftmost visible slide
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = info.length;
  // Calculate the index limit for the last visible group of slides
  const maxIndex = Math.max(0, totalSlides - VISIBLE_SLIDES); // Use Math.max to handle cases where totalSlides < VISIBLE_SLIDES

  // --- Logic Functions ---

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const goToSlide = (index) => {
    // Ensure index doesn't go beyond the max allowable start position
    setActiveIndex(Math.min(index, maxIndex));
  };

  // --- Auto-play Effect ---
  useEffect(() => {
    // Disable auto-play if all slides are visible or if the carousel is hovered
    if (totalSlides <= VISIBLE_SLIDES || isHovered) return;

    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [activeIndex, totalSlides, isHovered]); // Restart when index or hover state changes

  // Calculate the width of one slide step (1 / VISIBLE_SLIDES)
  // We use `calc` in the style to account for the `gap-4` (1rem or 16px)
  const slideWidthStyle = `calc((100vw - (${
    VISIBLE_SLIDES - 1
  } * 1rem)) / ${VISIBLE_SLIDES})`;

  // Calculate the total translation required based on the active index.
  // Translation includes the slide width and the gap width for each step.
  const trackStyle = {
    // We use a CSS variable to pass the slide width calculation for the transform
    "--slide-width": slideWidthStyle,
    transform: `translateX(calc(-${activeIndex} * (var(--slide-width) + 1rem)))`,
  };

  // --- Render ---

  // Placeholder for missing image assets (optional safety)
  const placeholderImage =
    "https://placehold.co/1000x1000/000/fff?text=No+Image";

  return (
    // Set to full viewport width (w-screen) and height (h-screen)
    <div
      className="w-full h-screen  overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div id="full-screen-carousel" className="relative w-full h-full">
        {/* Carousel wrapper - acts as the view window. Centered vertically */}
        <div className="relative h-full flex items-center overflow-hidden">
          {/* Inner track - holds all slides and is translated */}
          <div
            className="flex w-max transition-transform duration-700 ease-in-out gap-2"
            style={trackStyle}
          >
            {info.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="flex-shrink-0 relative group block focus:outline-none focus:ring-4 focus:ring-indigo-500/50 rounded-none transition duration-300 hover:scale-[1.01] ease-out"
                style={{ width: slideWidthStyle, height: "70vh" }} // Use 70vh for visible height
                aria-label={item.title}
              >
                <img
                  src={item.image || placeholderImage}
                  className="block w-full h-full object-cover shadow-2xl transition duration-300 ease-in-out group-hover:opacity-85"
                  alt={item.title}
                />

                {/* Title Overlay */}
                <div className="absolute inset-0 top-auto h-1/4 p-4 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight truncate w-full text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm underline hover:text-indigo-400 transition mt-1">
                    Click to View Details
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Slider Indicators (Dots) */}
        {maxIndex > 0 && (
          <div className="absolute z-30 flex -translate-x-1/2 bottom-8 left-1/2 space-x-3 bg-black/20 p-2 rounded-full">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide group ${i + 1}`}
                aria-current={i === activeIndex ? "true" : "false"}
                onClick={() => goToSlide(i)}
              ></button>
            ))}
          </div>
        )}

        {/* Slider controls (Prev) */}
        {activeIndex > 0 && (
          <button
            type="button"
            className="absolute top-0 start-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={prevSlide}
            aria-label="Previous Slide Group"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 text-white group-hover:bg-black/80 transition shadow-xl">
              <svg
                className="w-6 h-6 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
          </button>
        )}

        {/* Slider controls (Next) */}
        {activeIndex < maxIndex && (
          <button
            type="button"
            className="absolute top-0 end-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
            aria-label="Next Slide Group"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 text-white group-hover:bg-black/80 transition shadow-xl">
              <svg
                className="w-6 h-6 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
