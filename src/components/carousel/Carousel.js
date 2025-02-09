import React, { useState, useEffect } from 'react';
import './Carousel.css'

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    {
      image: "https://wallpapercat.com/w/full/2/6/2/1381705-3840x2160-desktop-4k-movie-poster-wallpaper-photo.jpg",
      title: "Zack Snyder's Justice League",
      text: "Zack Snyder's Justice League is a visually stunning and emotionally rich epic that restores his true vision with deeper character arcs and a darker tone. With breathtaking action and the return of Darkseid, it stands as a triumph of artistic integrity."
    },
    {
      image: "https://wallpaperaccess.com/full/1331390.jpg",
      title: "One Piece",
      text: "One Piece is an epic adventure about Monkey D. Luffy and his crew searching for the legendary treasure, the One Piece. With rich world-building, deep storytelling, and unforgettable characters, it's a journey of dreams, friendship, and freedom."
    },
    {
      image: "https://wallpaperaccess.com/full/12060590.jpg",
      title: "Salaar-Ceasefire",
      text: "Salaar: Ceasefire is a high-octane action thriller directed by Prashanth Neel, starring Prabhas in a fierce and intense role. Packed with stunning visuals, gripping storytelling, and power-packed action sequences, the film explores themes of loyalty, power, and rebellion in a rugged, violent world."
    },
    {
      image: "https://wallpaperaccess.com/full/3231246.png",
      title: "Solo Leveling Arise",
      text: "Solo Leveling: Ragnarok continues the legacy of Solo Leveling, focusing on Sung Jin-Woo's son, Sung Su-Ho, as he inherits his father's power. With new threats emerging, he embarks on an action-packed journey, blending epic battles, mystery, and adventure in a world still recovering from past chaos."
    },
    {
      image: "https://wallpaperaccess.com/full/888128.jpg",
      title: "Game of Thrones",
      text: "Game of Thrones is a gripping fantasy saga of power, betrayal, and war, set in the brutal world of Westeros. With complex characters, shocking twists, and epic battles, it weaves a tale of noble houses fighting for the Iron Throne, where loyalty is fleeting, and survival is never guaranteed."
    },
    {
      image: "https://wallpaperaccess.com/full/1087419.jpg",
      title: "Stranger Things",
      text: "Stranger Things is a thrilling blend of sci-fi, horror, and nostalgia, set in the 1980s town of Hawkins. When a young boy disappears, his friends uncover a secret world of government experiments, supernatural forces, and a mysterious girl with incredible powers."
    },
    {
      image: "https://wallpaperaccess.com/full/314747.png",
      title: "Naruto Shippuden",
      text: "Naruto Shippuden is an action-packed anime that follows Naruto Uzumaki's journey from an outcast ninja to the hero of his village. Filled with intense battles, emotional depth, and powerful friendships, it explores themes of perseverance, destiny, and the true meaning of strength."
    },
    {
      image: "https://4kwallpapers.com/images/wallpapers/pushpa-2-the-rule-5120x2880-17953.jpg",
      title: "Pushpa 2 The Rule",
      text: "The Rule is a high-octane action thriller continuing the rise of Pushpa Raj in the red sandalwood smuggling underworld. With intense action, gripping drama, and Allu Arjun's fierce performance, the film promises a power-packed showdown as Pushpa faces new enemies and challenges to his rule."
    },
    {
      image: "https://wallpaperaccess.com/full/5571669.jpg",
      title: "Jujutsu Kaisen",
      text: "Jujutsu Kaisen is a high-energy dark fantasy anime that follows Yuji Itadori as he joins a secret society of Jujutsu Sorcerers to battle cursed spirits. With intense battles, stunning animation, and deep character arcs, it blends supernatural horror with exhilarating action and emotional storytelling."
    },
    {
      image: "https://wallpaperaccess.com/full/7282714.jpg",
      title: "Demon Slayer Kimetsu no Yaiba",
      text: "Demon Slayer is a visually stunning anime that follows Tanjiro Kamado's journey to avenge his family and cure his demon-turned sister. Filled with breathtaking battles, deep emotions, and rich storytelling, it blends action, heart, and beautiful animation into an unforgettable adventure."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 2000); // Adjust the interval as needed

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