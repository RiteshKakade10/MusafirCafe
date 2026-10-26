
import { useEffect } from "react";
import "./OurStory.css";

const images = {
  hero: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=85",
  journey: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
  cafe: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=85",
  coffee: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
  mountains: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=85",
};

function OurStory() {
  useEffect(() => {
    const elements = document.querySelectorAll(".story-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("story-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="our-story">
      {/* Hero */}
      <section
        className="story-hero"
        style={{ "--hero-image": `url("${images.hero}")` }}
      >
        <div className="story-hero-content">
          <span className="story-eyebrow">THE STORY OF MUSAFIR</span>

          <h1>
            More Than
            <br />
            Just a <em>Cafe.</em>
          </h1>

          <p>
            Not just a place to have coffee.
            <br />
            A feeling, a pause, and a journey.
          </p>

          <a href="#our-inspiration" className="story-link">
            DISCOVER OUR STORY <span>↓</span>
          </a>
        </div>

        <div className="story-hero-bottom">
          <span>EST. 2027</span>
          {/* <span>SHRIGONDA, INDIA</span> */}
        </div>
      </section>

      {/* Inspiration */}
      <section
        className="story-section story-light"
        id="our-inspiration"
      >
        <div className="story-container story-grid">
          <div className="story-image-wrap story-reveal">
            <img
              src={images.journey}
              alt="Mountain landscape representing the spirit of a journey"
              className="story-image"
              loading="lazy"
            />
            <span className="story-image-caption">
              THE BEAUTY IS IN THE JOURNEY
            </span>
          </div>

          <div className="story-copy story-reveal">
            <span className="story-eyebrow">01 — THE INSPIRATION</span>

            <h2>
              Every name
              <br />
              has a <em>story.</em>
            </h2>

            <p>
              The word “Musafir” means a traveller — someone who
              explores, experiences, and collects stories along
              the way.
            </p>

            <p>
              To us, it represents more than travelling from one
              place to another. It is about the people we meet,
              the conversations we remember, and the little
              moments that make a journey meaningful.
            </p>

            <p>
              We imagined a place where every traveller could
              slow down, feel welcome, and simply be present.
            </p>

            <span className="story-signature">The beginning of Musafir.</span>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="story-section story-dark">
        <div className="story-container story-grid story-grid-reverse">
          <div className="story-copy story-reveal">
            <span className="story-eyebrow">02 — OUR VISION</span>

            <h2>
              A space for
              <br />
              good <em>conversations.</em>
            </h2>

            <p>
              We envision more than just a cafe. We want to
              create a thoughtfully designed space where good
              coffee, comforting food, and meaningful moments
              come together.
            </p>

            <p>
              A place for a quiet morning, an overdue catch-up,
              a little time alone, or a conversation that lasts
              longer than expected.
            </p>

            <p>
              No rush. No occasion needed. Just a place that
              feels right to return to.
            </p>

            <a href="/contact" className="story-link story-link-light">
              BE PART OF OUR JOURNEY <span>↗</span>
            </a>
          </div>

          <div className="story-image-wrap story-reveal">
            <img
              src={images.cafe}
              alt="A welcoming cafe space with warm natural light"
              className="story-image"
              loading="lazy"
            />
            <span className="story-image-caption">
              A PLACE TO FEEL AT HOME
            </span>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="story-section story-light">
        <div className="story-container story-grid">
          <div className="story-image-wrap story-reveal">
            <img
              src={images.coffee}
              alt="Coffee beans, the beginning of every cup"
              className="story-image"
              loading="lazy"
            />
            <span className="story-image-caption">
              THE SIMPLE THINGS MATTER
            </span>
          </div>

          <div className="story-copy story-reveal">
            <span className="story-eyebrow">03 — OUR PHILOSOPHY</span>

            <h2>
              Good coffee.
              <br />
              <em>Good people.</em>
            </h2>

            <p>
              We believe the best experiences are often the
              simplest ones. A cup worth slowing down for.
              Food shared with someone you love. A space where
              you can feel comfortable being yourself.
            </p>

            <p>
              Every detail at Musafir is an opportunity to make
              an ordinary day feel a little more special.
            </p>

            <p>
              Because hospitality is not just about what we
              serve. It is about how we make you feel.
            </p>

            <span className="story-signature">
              We look forward to welcoming you.
            </span>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section
        className="story-closing"
        style={{ "--closing-image": `url("${images.mountains}")` }}
      >
        <div className="story-closing-content story-reveal">
          <span className="story-eyebrow">A NEW CHAPTER BEGINS</span>

          <h2>
            Every journey deserves
            <br />
            a place to <em>pause.</em>
          </h2>

          <p>
            We are getting ready to welcome you.
            <br />
            Until then, the journey continues.
          </p>

          <a href="/" className="story-outline-button">
            RETURN HOME <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default OurStory;
