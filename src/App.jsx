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

        <button className="hero-button">
          EXPLORE
        </button>

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

      </section>
    </div>
  );
}

export default App;