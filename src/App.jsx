import React from 'react';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">NexusTech</div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
        </div>
        <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Contact Us</a>
      </nav>

      <section className="hero">
        <div className="hero-bg"></div>
        <h1 className="animate-fade-up">Building the <span>Future</span> of Digital Experiences</h1>
        <p className="animate-fade-up delay-1">
          We are a premium software engineering agency specializing in AI, Web3, and scalable full-stack applications.
        </p>
        <div className="animate-fade-up delay-2">
          <a href="#contact" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'inline-block', textDecoration: 'none' }}>
            Start Your Project
          </a>
        </div>
      </section>

      <section id="services" className="features">
        <h2 className="section-title">Our Expertise</h2>
        <div className="grid">
          <div className="card">
            <div className="card-icon">🧠</div>
            <h3>Artificial Intelligence</h3>
            <p>Custom machine learning models, natural language processing, and predictive analytics to give your business an unfair advantage.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔗</div>
            <h3>Web3 & Blockchain</h3>
            <p>Smart contract development, decentralized applications (DApps), and quantum-resistant cryptographic solutions.</p>
          </div>
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>Full-stack Engineering</h3>
            <p>High-performance, scalable web and mobile applications built with React, Node, and cloud-native architectures.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <div className="about-grid">
            <div className="about-text">
              <h3>We build what others say is impossible.</h3>
              <p>NexusTech was founded with a singular vision: to bridge the gap between bleeding-edge technology and real-world business value.</p>
              <p>Our team consists of elite engineers, designers, and strategists who have worked at top-tier tech companies. We don't just write code; we craft digital masterpieces that scale.</p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Delivered</p>
              </div>
              <div className="stat">
                <h4>99%</h4>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat">
                <h4>$500M+</h4>
                <p>Value Generated</p>
              </div>
              <div className="stat">
                <h4>24/7</h4>
                <p>Global Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="work">
        <h2 className="section-title">Our Work</h2>
        <div className="work-grid">
          <div className="work-card">
            <div className="work-img project-1"></div>
            <div className="work-info">
              <h3>DeFi Protocol X</h3>
              <p>A next-gen decentralized exchange with zero gas fees and sub-second finality.</p>
              <div className="tags">
                <span className="tag">Web3</span>
                <span className="tag">Solidity</span>
              </div>
            </div>
          </div>
          <div className="work-card">
            <div className="work-img project-2"></div>
            <div className="work-info">
              <h3>NeuroPredict AI</h3>
              <p>Enterprise AI platform for predictive maintenance in manufacturing.</p>
              <div className="tags">
                <span className="tag">Machine Learning</span>
                <span className="tag">Python</span>
              </div>
            </div>
          </div>
          <div className="work-card">
            <div className="work-img project-3"></div>
            <div className="work-info">
              <h3>OmniCommerce</h3>
              <p>Headless e-commerce solution processing $1M+ daily volume.</p>
              <div className="tags">
                <span className="tag">Next.js</span>
                <span className="tag">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-box">
          <h2>Ready to innovate?</h2>
          <p>Let's discuss how we can transform your vision into reality.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Tell us about your project" rows="4" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="logo" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>NexusTech</div>
          <p>&copy; {new Date().getFullYear()} NexusTech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
