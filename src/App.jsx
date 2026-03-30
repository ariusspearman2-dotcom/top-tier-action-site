const services = [
  {
    title: "Media & Visuals",
    desc: "Photo, video, branded visuals, and creative content support for businesses, artists, and events.",
  },
  {
    title: "Drone Services",
    desc: "Aerial footage, inspection support, real estate visuals, and high-perspective content for premium presentation.",
  },
  {
    title: "Service Operations",
    desc: "A growing umbrella built to support practical service branches, reliable operators, and long-term expansion.",
  },
]

const team = [
  {
    name: "Arius Spearman Jr.",
    role: "Founder / Creative Lead",
    bio: "Vision, direction, partnerships, brand building, and growth strategy.",
    links: ["Instagram", "Portfolio", "Contact"],
  },
  {
    name: "Featured Operator",
    role: "Independent Contractor",
    bio: "A trusted specialist operating within the Top Tier Action network.",
    links: ["Instagram", "Work", "Book"],
  },
  {
    name: "Featured Operator",
    role: "Independent Contractor",
    bio: "Additional collaborators and future operators can be featured here as the company grows.",
    links: ["Instagram", "Work", "Book"],
  },
]

const portfolio = [
  {
    title: "Music Video",
    type: "Creative Production",
    desc: "Performance-based visuals, cinematic edits, and artist-focused direction.",
  },
  {
    title: "Promo Shoot",
    type: "Brand Content",
    desc: "Clean visuals for products, businesses, launches, or social campaigns.",
  },
  {
    title: "Aerial Feature",
    type: "Drone / Visual Add-On",
    desc: "High-angle shots that add range, movement, and a stronger final presentation.",
  },
]

function SectionHeading({ label, title, body }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {body ? <p className="section-body">{body}</p> : null}
    </div>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <div className="pill">Top Tier Action</div>
            <h1>Built for action.</h1>
            <p className="hero-copy">
              Top Tier Action is a growing team focused on getting things done —
              across media, aerial, and on-the-ground work.
            </p>
            <div className="button-row">
              <a className="button button-solid" href="#portfolio">
                See the work
              </a>
              <a className="button button-outline" href="#team">
                View Operators
              </a>
            </div>
          </div>

          <div className="hero-cards">
            <div className="card glow-card">
              <p className="eyebrow">Vision</p>
              <p className="card-copy">
                A reliable team delivering media, aerial, and on-the-ground
                services — with room to grow as your needs evolve.
              </p>
            </div>

            <div className="mini-card-grid">
              <div className="card">
                <p className="eyebrow">Structure</p>
                <p className="card-copy">
                  Owners, operators, independent contractors, and specialized
                  roles.
                </p>
              </div>
              <div className="card">
                <p className="eyebrow">Growth</p>
                <p className="card-copy">
                  Built to add trusted people, branches, and systems over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <SectionHeading
              label="What we do"
              title="Simple for now. Built to expand."
              body="Core services today, with room to grow as the network expands."
            />
            <div className="grid grid-3">
              {services.map((service) => (
                <div key={service.title} className="card">
                  <h3>{service.title}</h3>
                  <p className="card-copy">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container split-grid">
            <div>
              <p className="eyebrow">Why this matters</p>
              <h2>Not just a service page. A base of operations.</h2>
              <p className="section-body">
                We keep things simple on purpose. Strong work, reliable people,
                and room to grow.
              </p>
            </div>
            <div className="card">
              <p className="eyebrow">Link hub idea</p>
              <ul className="clean-list">
                <li>Main Top Tier Action site</li>
                <li>Owner / operator profiles</li>
                <li>Social links or Linktree-style buttons</li>
                <li>Future branch pages as they launch</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="team" className="section">
          <div className="container">
            <SectionHeading
              label="Featured people"
              title="Operators in the network."
              body="Founders, contractors, and operators working within the network."
            />
            <div className="grid grid-3">
              {team.map((person) => (
                <div key={`${person.name}-${person.role}`} className="card">
                  <div className="placeholder-box">Photo / Logo Area</div>
                  <h3>{person.name}</h3>
                  <p className="role">{person.role}</p>
                  <p className="card-copy">{person.bio}</p>
                  <div className="tag-row">
                    {person.links.map((link) => (
                      <span key={link} className="tag">
                        {link}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <SectionHeading
              label="Pricing"
              title="Simple. Clear. Built to scale."
              body="Starting points for projects. Final pricing depends on scope, time, and creative direction."
            />
            <div className="grid grid-3">
              <div className="card">
                <h3>Basic Video</h3>
                <p className="muted">Starting at</p>
                <p className="price">$250–$300</p>
                <ul className="clean-list">
                  <li>1–2 hour shoot</li>
                  <li>Basic edit</li>
                  <li>Quick turnaround</li>
                </ul>
              </div>
              <div className="card">
                <h3>Standard Package</h3>
                <p className="muted">Starting at</p>
                <p className="price">$350–$500</p>
                <ul className="clean-list">
                  <li>Shooting + full edit</li>
                  <li>Creative direction</li>
                  <li>1–2 revisions</li>
                </ul>
              </div>
              <div className="card">
                <h3>Editing Only</h3>
                <p className="muted">Starting at</p>
                <p className="price">$150–$300</p>
                <ul className="clean-list">
                  <li>Client-provided footage</li>
                  <li>Full edit</li>
                  <li>Optional revisions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section section-alt">
          <div className="container">
            <SectionHeading
              label="Portfolio"
              title="Work in motion."
              body="A few examples of the kind of work Top Tier Action can deliver. Replace these with real projects as they come in."
            />
            <div className="grid grid-3">
              {portfolio.map((item) => (
                <div key={item.title} className="card dark-card">
                  <div className="placeholder-box tall">Video / Photo Placeholder</div>
                  <p className="eyebrow">{item.type}</p>
                  <h3>{item.title}</h3>
                  <p className="card-copy">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="section">
          <div className="container split-grid booking-grid">
            <div>
              <p className="eyebrow">Booking</p>
              <h2>What are we working on?</h2>
              <p className="section-body">
                Reach out with the type of work you need, your timeline, and
                any key details. Swap these placeholders with your real email,
                Instagram, or booking system later.
              </p>
              <div className="contact-block">
                <p><span className="muted">Email:</span> booking@toptieraction.com</p>
                <p><span className="muted">Instagram:</span> @toptieraction</p>
                <p><span className="muted">Response:</span> Usually within 24–48 hours</p>
              </div>
            </div>

            <form className="card form-card" onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid">
                <div>
                  <label>Name</label>
                  <input placeholder="Your name" />
                </div>
                <div>
                  <label>Project Type</label>
                  <input placeholder="Video, photo, drone..." />
                </div>
              </div>

              <div className="form-grid">
                <div>
                  <label>Budget</label>
                  <input placeholder="Estimated budget" />
                </div>
                <div>
                  <label>Timeline</label>
                  <input placeholder="When you need it" />
                </div>
              </div>

              <div>
                <label>Project Details</label>
                <textarea placeholder="Tell us what you need." rows="6" />
              </div>

              <button className="button button-solid" type="submit">
                Start the job
              </button>
            </form>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-panel">
              <div>
                <p className="eyebrow">Next step</p>
                <h2>Start here. Build from there.</h2>
                <p className="section-body">
                  This version establishes presence, explains the umbrella, and
                  creates room for the business to scale. Later, you can add
                  service detail pages, booking, project galleries,
                  branch-specific branding, and the deeper Spaceman layer.
                </p>
              </div>
              <div className="button-stack">
                <a className="button button-solid" href="#booking">
                  Contact Top Tier Action
                </a>
                <a className="button button-outline" href="#team">
                  View Operators
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
