"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import "./styles/styles.css"
import profile from './img/me.png'
import leftimage from "../../public/img/IT-Tech.gif"


export default function Home() {
  const getPNGImage = (name: string) => `/icons/${name}.png`;
  const getJPGImage = (name: string) => `/img/${name}.jpg`;

  const [isFlipped, setisFlipped] = useState(false);
  const [showResume, setshowResume] = useState(false);

  const toolsAndLanguages = [
    { name: "HTML", src: "/icons/html.png" },
    { name: "CSS", src: "/icons/css.png" },
    { name: "Vue", src: "/icons/vue.png" },
    { name: "NextJS", src: "/icons/nextjs.png" },
    { name: "ReactJS", src: "/icons/react.svg" },
    { name: "Laravel", src: "/icons/laravel.svg" },
    { name: "C#", src: "/icons/csharp.png" },
    { name: "Python", src: "/icons/python.png" },
    { name: "SQL", src: "/icons/ms-sql.png" },
    { name: "Firebase", src: "/icons/firebase.png" },
    { name: "Javascript", src: "/icons/javascript.png" },
  ]


  useEffect(() => {
    if (typeof window !== "undefined") {
      const items = document.querySelectorAll(".tag *");

      const HandleScroll = () => {
        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            item.classList.add("visible");
          } else {
            item.classList.remove("visible");
          }
        });
      };

      window.addEventListener("scroll", HandleScroll);
      HandleScroll();

      return () => window.removeEventListener("scroll", HandleScroll);
    }
  }, []);


  return (
    <div>
      <nav className="navmenu">
        <div className="nav-left">

        </div>
        <div className="nav-center">
          <ul className="nav-links">
            <div className="li-wrapper">
              <li>
                <a href="#wr-information">Home</a>
              </li>
            </div>
            <div className="li-wrapper">
              <li>
                <a href="#certificate">Projects</a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <hr />
      <main>
        <div className="tag wr-information">
          <div className="wr-profile">
            <div className="profile-img">
              <img src={profile.src} alt="ROLAND_MELECIO_IMG" />
            </div>
            <div className="name">
              <h1>Roland A. Melecio Jr.</h1>
              <h3 className="text-lg">Web Developer</h3>
            </div>
          </div>
          <div className="wr-description">
            <div className="head-text">
              <h1 className="text-2xl font-semibold">BS Information Technology at HCDC</h1>
            </div>
            <br />
            <div className="description">
              <p>I pursued my Information Technology studies at Holy Cross of Davao College. My primary focus is
                on backend projects, though I don't work on website design that much. Despite this, I'm
                eager to explore various design techniques and new concepts to enhance my growth and skills
                as a web developer.
              </p>
            </div>
            <button type="button" className="resume-btn"
              onClick={() => {
                console.log("Before:", showResume);
                setshowResume(true);
              }}>View Resume</button>
          </div>
        </div>
        {showResume && (
          <div className="resume-modal">
            <div className="resume-modal-content">
              <span className="close-btn" onClick={() => setshowResume(false)}>&times;</span>
              <iframe
                src="/img/roland_melecio_resume.pdf"
                width="100%"
                height="500px"
                title="Resume"
              ></iframe>
            </div>
          </div>
        )}
        <section className="tag wr-experience">
          <div className="experiences">
            <h1 className="text-2xl">PROGRAMMING / WEB DEVELOPMENT TOOLS AND LANGUAGES LEARNED</h1>
            <div className="tools-languages">
              <div className="marquee">
                {toolsAndLanguages.concat(toolsAndLanguages).map((tool, index) => (
                  <div key={index} className="tool-item">
                    <img src={tool.src} alt={tool.name} className="tool-icon" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="tag projects">
            <div>

            </div>
          </div>
        </section>
        <section className="tag wr-contact">
          <div className="leftimage">
            <Image src={leftimage} alt="it-tech" />
          </div>
          <div className="contact">
            <div className="reach-out">
              <h1 className="text-2xl font-bold">Reach Out!</h1>
              <p>"Let's build something amazing together! Whether a project you came up, some assistance in web DEVELOPMENT
                , or just want to chat about tech, feel free to reach out. I'd love to hear from you!
                "</p>
            </div>
            <div className="social-icons">
              <a href="https://github.com/RLMelecio" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="mailto:roland.meleciojr@gmail.com">
                <FaEnvelope className="icon" />
              </a>
              <a href="https://www.facebook.com/voss.pi" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
