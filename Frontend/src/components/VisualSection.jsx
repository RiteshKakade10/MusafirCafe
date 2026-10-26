import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VisualSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
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
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="visual-section"
      aria-label="Musafir Cafe"
    >
      <picture>
        {/* Mobile image */}
        <source
          media="(max-width: 768px)"
          srcSet="/images/musafir-mobile.webp"
        />

        {/* Desktop image */}
        <img
          ref={imageRef}
          src="/images/musafir-desktop.webp"
          alt="Musafir Cafe atmosphere"
          loading="lazy"
        />
      </picture>

      <div className="visual-overlay" />

      <div className="visual-content">
        <p>THE JOURNEY</p>

        <h2>BEGINS HERE.</h2>
      </div>
    </section>
  );
}

export default VisualSection;
