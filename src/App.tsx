import { useState } from "react";
import { Offline, Online } from "react-detect-offline";
import "./App.scss";
import scss from "./assets/scss.svg";
import star from "./assets/star.gif";
import pdfFile from "./assets/Emp-Code-centric-Reviews.pdf";
import PinnedRepos from "./PinnedRepos";
import ThemeSwitcher from "./ThemeSwitcher";
import LinkedInContinuation from "./LinkedInContinuation";

function App() {
  const [isShown, setIsShown] = useState(false);

  const experience = [
    {
      title: "Web Engineer | Frontend Developer",
      company: "Refurbed",
      period: "October 2022 - Present",
      description:
        "Developing user interfaces for a refurbished sustainable market platform, with a focus on accessibility and performance.",
      achievements: [
        "Build and maintain scalable UI components",
        "Run A/B tests to optimize product pages",
        "Implement modern UI/UX designs with focus on accessibility",
        "Optimize application performance and user experience",
      ],
    },
  ];

  return (
    <>
      <Online>
        <div className="App">
          <ThemeSwitcher />
          {/* Hero Section */}
          <section className="Hero">
            <div className="Hero-content">
              <h1 className="Hero-name">Irene Tomaini</h1>
              <h2 className="Hero-title">UI Engineer & Frontend Developer</h2>
              <p className="Hero-description">
                Experienced Frontend Developer specialized in UI development,
                design systems, and modern frontend technologies.
                <br /> Passionate about building clean, accessible, and scalable
                user interfaces.{" "}
                <img src={scss} alt="scss rocks" width="20" height="20" />
              </p>
              <div className="Hero-contacts">
                <a
                  href="https://www.linkedin.com/in/irenetomaini/"
                  className="Contact-link"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ir3ne"
                  className="Contact-link"
                  aria-label="GitHub Profile"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="Experience">
            <h2 className="Section-title">Professional Experience</h2>
            <div className="Experience-list">
              {experience.map((job, index) => (
                <div key={index} className="Experience-item">
                  {job.period.includes("Present") && (
                    <div className="Experience-badge">Current Role</div>
                  )}
                  <div className="Experience-header">
                    <h3 className="Experience-title">{job.title}</h3>
                    <div className="Experience-meta">
                      <span className="Experience-company">{job.company}</span>
                      <span className="Experience-period">{job.period}</span>
                    </div>
                  </div>
                  <p className="Experience-description">{job.description}</p>
                  <ul className="Experience-achievements">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <LinkedInContinuation />
          </section>

          {/* Talks Section */}
          <section className="Talks">
            <h2 className="Section-title">Speaking & Contributions</h2>
            <div className="Talks-list">
              <div className="Talk-item">
                <a
                  href={pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Talk-link"
                >
                  <h3>Code Reviews: Empathetic Code-centric Communication</h3>
                  <p>
                    A presentation on improving team collaboration through
                    thoughtful code review practices.
                  </p>
                  <span className="Talk-cta">View Presentation →</span>
                </a>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="Projects">
            <PinnedRepos />
          </section>

          <div
            className="Offline"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <svg
              width="54px"
              height="41px"
              viewBox="0 0 54 41"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Artboard"
                  transform="translate(-1289.000000, -73.000000)"
                  fill="currentColor"
                  fillRule="nonzero"
                >
                  <g id="wifi" transform="translate(1289.000000, 73.000000)">
                    <path
                      d="M53.6373571,10.5524818 C46.3600412,3.74690885 36.8986867,0 26.999955,0 C17.1012233,0 7.63997426,3.74690885 0.36265831,10.5524818 C-0.0943360381,10.9784974 -0.12291796,11.698026 0.296740593,12.1595964 L26.1716066,40.6318542 C26.3847581,40.8665365 26.6857648,41 26.999955,41 C27.3141452,41 27.6151518,40.8665365 27.8283034,40.6318542 L53.7031694,12.1595964 C54.1229334,11.698026 54.0943515,10.9783906 53.6373571,10.5524818 Z M26.999955,38.1794349 L2.72472741,11.4666536 C9.46594775,5.53307813 18.0440048,2.27763542 27.0000604,2.27763542 C35.9561161,2.27763542 44.5341731,5.53307813 51.2753935,11.4666536 L26.999955,38.1794349 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <div className="Offline-text">
              <span>Go Offline</span>
            </div>
            {isShown && (
              <div className="Offline-tooltip">
                <div>
                  Disable <b>WiFi</b>
                </div>
                <img width="180px" src={star} alt="offline" />
              </div>
            )}
          </div>
        </div>
      </Online>
      <Offline>
        <div className="OfflineWrapper">
          <div className="OfflineContent">
            <div>
              I did not want to move.
              <br />
              For I had the feeling that this was a place, once seen, that could
              not be seen again.
              <br />
              If I left and then came back, it would not be the same; no matter
              how many times I might return to this particular spot the place
              and feeling would never be the same, something would be lost or
              something would be added, and there never would exist again,
              through all eternity, all the integrated factors that made it what
              it was in this magic moment.
            </div>
            <div className="author">~ Clifford D. Simak ~</div>
          </div>
        </div>
      </Offline>
    </>
  );
}

export default App;
