import { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene3D from "./Scene3D";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".intro", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      .from(".hero-title", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      }, "-=0.4")

      .from(".subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6")

      .from(".hero-button", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5")

      .from(".navbar", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.8");
      gsap.from(".about-header", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".about-content", {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".skill-item", {
  y: 60,
  opacity: 0,
  duration: 0.7,
  stagger: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".skills-list",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".contact-header", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".contact-content", {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});
    }, heroRef);

    return () => ctx.revert();
          gsap.from(".projects-title", {
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
  }, []);
  useEffect(() => {
  const cards = document.querySelectorAll(".project-card");

  const handleMouseMove = (event) => {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);

      const distance = Math.sqrt(x * x + y * y);

      if (distance < 250) {
        gsap.to(card, {
          x: x * 0.05,
          y: y * 0.05,
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        gsap.to(card, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
 useEffect(() => {
  const handleMouseMove = (event) => {
    gsap.to(".mouse-glow", {
      x: event.clientX,
      y: event.clientY,
      duration: 1,
      ease: "power3.out",
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

useEffect(() => {
  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    gsap.to(".hero-title", {
      x: x * 20,
      y: y * 10,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
    useEffect(() => {
    const button = document.querySelector(".hero-button");

    const handleMouseMove = (event) => {
      const rect = button.getBoundingClientRect();

      const buttonX = rect.left + rect.width / 2;
      const buttonY = rect.top + rect.height / 2;

      const distanceX = event.clientX - buttonX;
      const distanceY = event.clientY - buttonY;

      const distance = Math.sqrt(
        distanceX * distanceX + distanceY * distanceY
      );

      if (distance < 150) {
        gsap.to(button, {
          x: distanceX * 0.25,
          y: distanceY * 0.25,
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="app" ref={heroRef}>
  <div className="mouse-glow"></div>
  <div className="custom-cursor"></div>

  <nav className="navbar">
    <div className="logo">AHMED</div>

    <div className="nav-links">
      <a href="#work">WORK</a>
      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>
    </div>
  </nav>

      <main className="hero">

        <p className="intro">HELLO, I'M</p>

        <h1 className="hero-title">AHMED</h1>

        <p className="subtitle">
          IT STUDENT & CYBERSECURITY ENTHUSIAST
        </p>

       <a href="#work" className="hero-button">
  EXPLORE
</a>

      </main>
      <section className="projects-section" id="work">
        <p className="section-label">SELECTED WORK</p>

        <h2 className="projects-title">
          PROJECTS
        </h2>

        <div className="projects-grid">

          <div className="project-card">
            <span>01</span>
            <h3>CYBERSECURITY</h3>
            <p>Security analysis and threat research.</p>
          </div>

          <div className="project-card">
            <span>02</span>
            <h3>WEB DEVELOPMENT</h3>
            <p>Interactive websites and digital experiences.</p>
          </div>

          <div className="project-card">
            <span>03</span>
            <h3>IT PROJECTS</h3>
            <p>Technology projects and experiments.</p>
          </div>

        </div>
      </section>
      <section className="about-section" id="about">
  <div className="about-header">
    <p className="section-label">WHO I AM</p>
    <h2>ABOUT<br />ME</h2>
  </div>

  <div className="about-content">
    <p className="about-intro">
      I'm Ahmed, an IT student and cybersecurity enthusiast
      passionate about technology, security, and creating
      digital experiences.
    </p>

    <p>
      I'm currently building my skills in cybersecurity,
      web development, and information technology while
      working on projects that allow me to learn by doing.
    </p>

    <div className="about-details">
      <div>
        <span>BASED IN</span>
        <strong>MALAYSIA</strong>
      </div>

      <div>
        <span>FIELD</span>
        <strong>INFORMATION TECHNOLOGY</strong>
      </div>

      <div>
        <span>FOCUS</span>
        <strong>CYBERSECURITY</strong>
      </div>
    </div>
  </div>
</section>
<section className="skills-section" id="skills">
  <div className="skills-heading">
    <p className="section-label">WHAT I DO</p>

    <h2>
      SKILLS &
      <br />
      EXPERTISE
    </h2>
  </div>

  <div className="skills-list">
    <div className="skill-item">
      <span>01</span>
      <div>
        <h3>CYBERSECURITY</h3>
        <p>
          Threat analysis, security awareness, network security,
          and cybersecurity fundamentals.
        </p>
      </div>
    </div>

    <div className="skill-item">
      <span>02</span>
      <div>
        <h3>WEB DEVELOPMENT</h3>
        <p>
          Building responsive and interactive websites with
          modern web technologies.
        </p>
      </div>
    </div>

    <div className="skill-item">
      <span>03</span>
      <div>
        <h3>INFORMATION TECHNOLOGY</h3>
        <p>
          Understanding IT systems, operating systems,
          networks, and technology solutions.
        </p>
      </div>
    </div>

    <div className="skill-item">
      <span>04</span>
      <div>
        <h3>PROBLEM SOLVING</h3>
        <p>
          Learning through practical projects, experimentation,
          and solving technical problems.
        </p>
      </div>
    </div>
  </div>
</section>
            <section className="three-section">


        <div className="three-content">
          <p className="section-label">EXPERIMENTAL</p>

          <h2>3D EXPERIENCE</h2>

          <p>
            Interactive 3D graphics built with Three.js.
          </p>
        </div>

        <div className="three-canvas">
          <Scene3D />
        </div>
        <section className="contact-section" id="contact">
  <div className="contact-header">
    <p className="section-label">GET IN TOUCH</p>

    <h2>
      LET'S
      <br />
      CONNECT
    </h2>
  </div>

  <div className="contact-content">
    <p>
      Interested in working together, discussing technology,
      or just saying hello? Feel free to reach out.
    </p>

    <a
      href="mailto:foysal.claude09234@gmail.com"
      className="contact-email"
    >
      foysal.claude09234@gmail.com
    </a>

    <div className="contact-links">
      <a href="#" target="_blank" rel="noreferrer">
        GITHUB
      </a>

      <a href="#" target="_blank" rel="noreferrer">
        LINKEDIN
      </a>

      <a href="#" target="_blank" rel="noreferrer">
        INSTAGRAM
      </a>
    </div>
  </div>
</section>

      </section>
    </div>
  );
}

export default App;