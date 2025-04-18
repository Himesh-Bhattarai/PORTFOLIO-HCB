import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Menu from "./Menu";
import AOS from 'aos';
import Typed from 'typed.js';
import "aos/dist/aos.css";
import PropTypes from 'prop-types';

export default function Home({ textStyle, interval = 5000, ImageURI = [], profileImage, intervalforpp }) {
  // Changing background image every interval
  const [currentImage, setCurrentImage] = useState(ImageURI.length > 0 ? ImageURI[0] : '');

  useEffect(() => {
    if (ImageURI.length > 0) {
      let index = 0;
      const intervalId = setInterval(() => {
        index = (index + 1) % ImageURI.length;
        setCurrentImage(ImageURI[index]);
        AOS.refresh(); // Refresh AOS animations after changing the image
      }, interval);

      return () => clearInterval(intervalId);
    }
  }, [ImageURI, interval]);

  // Typing effect code
  const typeText = useRef(null);
  useEffect(() => {
    if (typeText.current) {
      const typed = new Typed(typeText.current, {
        strings: ['a Student', 'part-time Web Developer', 'very dedicated toward my work.'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  // Scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="whole-container" style={{ display: "flex" }}>
        <div className="menu-container">
          <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
        </div>
        <div className="content-container">
          <section id="hero" className="hero section dark-background">
            {currentImage && (
              <img
                src={currentImage}
                alt="Background"
                data-aos="fade-in"
                className=""
                style={{ width: "100%", height: "auto" }}
              />
            )}
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <h3 className="section-div-h3">Hello, It's Me,</h3>
              <h3 className="section-div-name">HimeshChanchal Bhattarai</h3>
              <h3 className="section-div-floattext">
                And I'm <span ref={typeText} style={textStyle}></span>
              </h3>
            </div>
          </section>
          <Link
            to="/"
            id="scroll-top"
            className={`scroll-top d-flex align-items-center justify-content-center ${showScrollTop ? 'active' : ''}`}
          >
            <i className="bi bi-arrow-up-short"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

Home.propTypes = {
  textStyle: PropTypes.object,
  interval: PropTypes.number,
  ImageURI: PropTypes.arrayOf(PropTypes.string),
  profileImage: PropTypes.arrayOf(PropTypes.string),
  intervalforpp: PropTypes.number,
};
