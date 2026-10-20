"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type ProjectImageSliderProps = {
  images: readonly string[];
  title: string;
  imageDescription?: string;
};

export const ProjectImageSlider = ({
  images,
  title,
  imageDescription,
}: ProjectImageSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div
      className="relative overflow-hidden border border-purple-400/25 bg-white/[0.03]"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") showPrevious();
        if (event.key === "ArrowRight") showNext();
      }}
      tabIndex={0}
      aria-label={`${title} project image slider`}
    >
      <div className="relative aspect-[16/10] w-full">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={`${image}-${index}`} className="relative h-full min-w-full shrink-0">
              <Image
                src={image}
                alt={`${title} ${imageDescription ?? `screen ${index + 1} of ${images.length}`}`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={showPrevious}
        aria-label="Previous project image"
        className="absolute left-3 top-1/2 -translate-y-1/2 border border-white/20 bg-[#030014aa] p-2 text-white backdrop-blur-sm transition hover:border-cyan-300 hover:text-cyan-200"
      >
        <FiChevronLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label="Next project image"
        className="absolute right-3 top-1/2 -translate-y-1/2 border border-white/20 bg-[#030014aa] p-2 text-white backdrop-blur-sm transition hover:border-cyan-300 hover:text-cyan-200"
      >
        <FiChevronRight aria-hidden="true" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 border border-white/10 bg-[#030014aa] px-3 py-2 backdrop-blur-sm">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show project image ${index + 1}`}
            aria-current={activeIndex === index}
            className={`h-2 w-2 rounded-full transition ${activeIndex === index ? "bg-cyan-300" : "bg-white/40 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
};
