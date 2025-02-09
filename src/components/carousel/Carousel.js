import React, { useState, useEffect } from 'react';
import './Carousel.css'

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    {
      image: "https://wallpapercat.com/w/full/2/6/2/1381705-3840x2160-desktop-4k-movie-poster-wallpaper-photo.jpg",
      title: "First slide label",
      text: "Some representative placeholder content for the first slide."
    },
    {
      image: "https://wallpaperaccess.com/full/1331390.jpg",
      title: "Second slide label",
      text: "Some representative placeholder content for the second slide."
    },
    {
      image: "https://wallpaperaccess.com/full/12060590.jpg",
      title: "Third slide label",
      text: "Some representative placeholder content for the third slide."
    },
    {
      image: "https://wallpaperaccess.com/full/3231246.png",
      title: "Fourth slide label",
      text: "Some representative placeholder content for the first slide."

    },
    {
      image: "https://wallpaperaccess.com/full/888128.jpg",
      title: "Fifth slide label",
      text: "Some representative placeholder content for the second slide."
    },
    {
      image: "https://wallpaperaccess.com/full/1087419.jpg",
      title: "Sixth slide label",
      text: "Some representative placeholder content for the third slide."

    },
    {
      image: "https://wallpaperaccess.com/full/314747.png",
      title: "Seventh slide label",
      text: "Some representative placeholder content for the first slide."

    },
    {
      image: "https://4kwallpapers.com/images/wallpapers/pushpa-2-the-rule-5120x2880-17953.jpg",
      title: "Eighth slide label",
      text: "Some representative placeholder content for the second slide."

    },
    {
      image: "https://wallpaperaccess.com/full/5571669.jpg",
      title: "Ninth slide label",
      text: "Some representative placeholder content for the third slide."

    },
    {
      image: "https://wallpaperaccess.com/full/7282714.jpg",
      title: "Tenth slide label",
      text: "Some representative placeholder content for the second slide."

    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 2000); // Increased interval to 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
    >
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            className={index === activeSlide ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeSlide ? "active" : ""}`}
          >
            <img src={slide.image} className="d-block w-100" alt={slide.title} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{slide.title}</h5>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel