import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../assets/style/style.css";

import music1 from "../assets/images/music1.jpg";
import music2 from "../assets/images/music2.jpg";
import music3 from "../assets/images/music3.jpg";
import music4 from "../assets/images/music4.jpg";
import music5 from "../assets/images/music5.jpg";

const galleryItems = [
  {
    image: music1,
    title: "Melody",
    text: "Feel the rhythm",
  },
  {
    image: music2,
    title: "Vibes",
    text: "Music for your soul",
  },
  {
    image: music3,
    title: "Beats",
    text: "Turn up the energy",
  },
  {
    image: music4,
    title: "Chill",
    text: "Relax with music",
  },
  {
    image: music5,
    title: "Sound",
    text: "Every beat matters",
  },
];

function Home() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const cards = galleryRef.current.querySelectorAll(".accordion-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="music-section">
      <div className="section-heading">


      </div>

      <div className="accordion-gallery" ref={galleryRef}>
        {galleryItems.map((item, index) => (
          <div
            className={`accordion-card card-${index + 1}`}
            key={index}
          >
            <div className="rainbow-border"></div>

            <img src={item.image} alt={item.title} />

            <div className="image-overlay"></div>

            <div className="music-icon">
              <span>♪</span>
            </div>

            <div className="card-content">
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>

              <div className="play-button">
                ▶
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
