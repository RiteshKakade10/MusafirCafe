import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VideoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const context = gsap.context(() => {
      /* Video zoom while scrolling */
      gsap.fromTo(
        video,
        {
          scale: 1.15,
        },
        {
          scale: 1,
          ease: "none",

          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      /* Text reveal */
      gsap.fromTo(
        section.querySelectorAll("[data-video-reveal]"),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          duration: 1,

          stagger: 0.15,

          ease: "power3.out",

          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        }
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="video-section"
      aria-label="Musafir Cafe experience"
    >

      {/* VIDEO */}
      <video
        ref={videoRef}
        className="section-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="/videos/musafir-story.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="section-video-overlay" />

      {/* CONTENT */}
      <div className="video-section-content">

        <p
          data-video-reveal
          className="video-label"
        >
          THE MUSAFIR EXPERIENCE
        </p>

        <h2 data-video-reveal>
          MORE THAN
          <br />
          JUST COFFEE.
        </h2>

        <p
          data-video-reveal
          className="video-description"
        >
          A place to slow down,
          connect and stay a little longer.
        </p>

      </div>

    </section>
  );
}

export default VideoSection;

