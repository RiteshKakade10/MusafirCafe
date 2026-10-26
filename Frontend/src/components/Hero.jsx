import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const elements = hero.querySelectorAll("[data-reveal]");

    const context = gsap.context(() => {
      gsap.fromTo(
        elements,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, hero);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      aria-label="Musafir Cafe coming soon"
    >
      {/* HERO VIDEO */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/poster.webp"
        aria-hidden="true"
      >
        <source
          src="/videos/musafir-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="video-overlay" />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO CONTENT */}
      <div className="hero-content">

        <p data-reveal className="eyebrow">
          A PLACE TO PAUSE
        </p>

        <h1 data-reveal>
          MUSAFIR CAFE
        </h1>
        <h4 data-reveal>(मुसाफिर कॅफे)</h4>

        <span
          data-reveal
          className="hero-divider"
          aria-hidden="true"
        />

        <p data-reveal className="subtitle">
          COFFEE <span>•</span> FOOD <span>•</span> STORIES
        </p>

      </div>

      {/* HERO BOTTOM */}
      <div className="hero-bottom">

        <p data-reveal className="coming-soon">
          COMING SOON
        </p>

        <div
          data-reveal
          className="scroll-indicator"
        >
          <span>SCROLL TO EXPLORE</span>

          <i aria-hidden="true" />
        </div>

        {/* <p data-reveal className="year">
        Opening February 2027 — Stay Tuned!
        </p> */}
        <p data-reveal className="year">Opening February 2027 — Crafted for Moments.</p>
     {/* <p data-reveal className="year">Get ready for great coffee, delicious food, and good vibes. ❤️</p> */}

      </div>

    </section>
  );
}

export default Hero;

