import "./Home.css";
import heroImg from "/hero1.png";

export default function Home() {
  const downloadApp = () => {
    window.open("/app.apk", "_blank");
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank");
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        {/* Background decorations */}
        <div className="hero-bg-circle hero-bg-circle-1" />
        <div className="hero-bg-circle hero-bg-circle-2" />
        <div className="hero-bg-circle hero-bg-circle-3" />

        <div className="hero-container">
          {/* LEFT - TEXT CONTENT */}
          <div className="hero-content">
            <span className="hero-badge">Welcome To Laksh365</span>

            <h1 className="hero-title">
              India's Most
              <br />
              Trusted
              <br />
              <span className="highlight">
                Matka
                <br />
                Application
              </span>
            </h1>

            <p className="hero-subtitle">
              Play Matka Safety With Real-Time Updates And Instant Payouts. Best
              Market Rates
            </p>

            <div className="hero-buttons">
              {/* Download App Button */}
              <button className="hero-btn-download" onClick={downloadApp}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download App
              </button>

              {/* WhatsApp Support Button */}
              <button className="hero-btn-whatsapp" onClick={openWhatsApp}>
                <svg viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Support
              </button>
            </div>
            <div className="hero-features">
        <div className="hero-feature-item">
          <div className="hero-feature-icon">
            {/* Shield / Secure Icon */}
            <svg viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <div className="hero-feature-title">100% Secure</div>
            <p className="hero-feature-desc">Safe Payments</p>
          </div>
        </div>

        <div className="hero-feature-item">
          <div className="hero-feature-icon">
            {/* Clock / Instant Icon */}
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <div className="hero-feature-title">Instant Payouts</div>
            <p className="hero-feature-desc">Within Minutes</p>
          </div>
        </div>

        <div className="hero-feature-item">
          <div className="hero-feature-icon">
            {/* Trophy / Best Rates Icon */}
            <svg viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
          </div>
          <div>
            <div className="hero-feature-title">Best Rates</div>
            <p className="hero-feature-desc">Guaranteed</p>
          </div>
        </div>
      </div>
          </div>

          {/* RIGHT - HERO IMAGE */}
          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src={heroImg}
              alt="Laksh365 - India's Most Trusted Matka Application"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ===== FEATURES BAR ===== */}
      
    </>
  );
}