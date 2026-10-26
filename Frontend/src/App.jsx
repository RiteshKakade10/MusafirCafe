import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Navbar from "./components/Navbar";
import Contact from "../src/Pages/Contact.jsx";
import OurStory from "../src/Pages/OurStory.jsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicPlayer from "./Pages/MusicPlayer.jsx";

function Home() {
  return (
    <main className="site">

      {/* SECTION 1 */}
      <Hero />

      {/* SECTION 2 */}
      <section className="story">

        <p className="section-label">
          THE JOURNEY BEGINS
        </p>

        <h2>
          EVERY JOURNEY
          <br />
          NEEDS A PLACE
          <br />
          TO PAUSE.
        </h2>

        <p className="story-description">
          A place for slow mornings, long conversations,
          good coffee and stories worth remembering.
        </p>

      </section>

      {/* SECTION 3 */}
      <VideoSection />

      {/* SECTION 4 — LOCATION */}
      <section className="location-section">
        <div className="location-left">
          <p className="section-label">FIND US</p>

          <h2>
            COME
            <br />
            FIND
            <br />
            US.
          </h2>
        </div>

        <div className="location-right">
          <div className="location-block">
            <span>LOCATION</span>
            <p>
              Musafir Cafe,
              <br />
              Maharashtra,
              <br />
              India
            </p>
          </div>

          <div className="location-block">
            <span>OPENING HOURS</span>
            <p>
              MON — SUN
              <br />
              08:00 AM — 11:00 PM
            </p>
          </div>

          <div className="location-block">
            <span>CONTACT</span>
            <p>
              Ritesh Kakade
              <br />
              +91 8626081096
              <br />
              hello@musafircafe.com
            </p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-link"
          >
            GET DIRECTIONS
            <span>↗</span>
          </a>
        </div>
      </section>

    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourstory" element={<OurStory />} />
      </Routes>
    <MusicPlayer/>
    </BrowserRouter>
  );
}

export default App;