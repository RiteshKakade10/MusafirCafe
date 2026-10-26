import "../Pages/contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <p className="contact-eyebrow">GET IN TOUCH</p>

          <h1>
            Let’s <span>Connect.</span>
          </h1>

          <p className="contact-description">
            Whether you’re planning a visit, have a question, or simply want
            to say hello — we’d love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-content">

          {/* Left Side */}
          <div className="contact-info">

            <div className="contact-item">
              <span>01</span>
              <div>
                <h3>Visit Us</h3>
                <p>
                  Shrigonda,Maharashtra
                </p>
              </div>
            </div>

            <div className="contact-item">
              <span>02</span>
              <div>
                <h3>Call Us</h3>
                <p>+91 8626081096</p>
              </div>
            </div>

            <div className="contact-item">
              <span>03</span>
              <div>
                <h3>Email</h3>
                <p>hello@musafircafe.com</p>
              </div>
            </div>

            <div className="contact-socials">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Google Maps</a>
            </div>

          </div>

          {/* Right Side - Form */}
          <form className="contact-form">

            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="What would you like to talk about?"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              <span>Send Message</span>
              <span className="arrow">↗</span>
            </button>

          </form>

        </div>

        {/* Bottom */}
        <div className="contact-bottom">
          <span>MUSAFIR CAFE</span>
          <span>OPENING — FEBRUARY 2027</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;