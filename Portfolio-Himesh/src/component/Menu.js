import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Menu({ profileImage = [], intervalforpp = 5000 }) {
  const [activeLink, setActiveLink] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isNavActive, setIsNavActive] = useState(false);
  const headerToggleBtn = useRef(null);
  const navMenuRef = useRef(null);

  // Toggle mobile navigation
  const handleHeaderToggle = () => {
    setIsNavActive(prev => !prev);
    if (headerToggleBtn.current) {
      headerToggleBtn.current.classList.toggle('bi-list');
      headerToggleBtn.current.classList.toggle('bi-x');
    }
  };

  // Close mobile navigation on same-page/hash links
  useEffect(() => {
    const navLinks = navMenuRef.current?.querySelectorAll('a');

    navLinks?.forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (isNavActive) {
          handleHeaderToggle();
        }
      });
    });

    return () => {
      navLinks?.forEach(navmenu => {
        navmenu.removeEventListener('click', handleHeaderToggle);
      });
    };
  }, [isNavActive]);

  // Scrollspy to manage active link
  const handleScrollspy = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        const id = section.getAttribute('id');
        setActiveLink(id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollspy, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollspy);
    };
  }, []);

  // Background image rotation logic
  const [currentPic, setCurrentPic] = useState(profileImage[0] || '');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % profileImage.length;
      setCurrentPic(profileImage[index]);
    }, intervalforpp);

    return () => clearInterval(intervalId);
  }, [profileImage, intervalforpp]);

  return (
    <header id="header" className={`header dark-background d-flex flex-column ${isNavActive ? 'header-show' : ''}`}>
      <i
        className="header-toggle d-xl-none bi bi-list"
        onClick={handleHeaderToggle}
        ref={headerToggleBtn}
      ></i>
      <div className="profile-img">
        <img src={currentPic} alt="" className="img-fluid rounded-circle" />
      </div>
      <Link to="#" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Himesh Bhattarai</h1>
      </Link>
      <div className="social-links text-center">
        <Link to="#" className="twitter"><i className="bi bi-twitter-x"></i></Link>
        <Link to="https://www.facebook.com/himesh.hcb/" className="facebook"><i className="bi bi-facebook"></i></Link>
        <Link to="https://www.instagram.com/himesh.hcb/" className="instagram"><i className="bi bi-instagram"></i></Link>
        <Link to="https://wa.me/9806352021" className="whatsapp"><i className="bi bi-whatsapp"></i></Link>
        <Link to="https://github.com/Himesh-Bhattarai" className="github"><i className="bi bi-github"></i></Link>
      </div>
      <nav id="navmenu" className="navmenu" ref={navMenuRef}>
        <ul>
          <li>
            <Link to="/Home" className={activeLink === 'home' ? 'active' : ''}>
              <i className="bi bi-house navicon"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/About" className={activeLink === 'about' ? 'active' : ''}>
              <i className="bi bi-person navicon"></i> About
            </Link>
          </li>
          <li>
            <Link to="/Resume" className={activeLink === 'resume' ? 'active' : ''}>
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </Link>
          </li>
          <li>
            <Link to="/Portfolio" className={activeLink === 'portfolio' ? 'active' : ''}>
              <i className="bi bi-images navicon"></i> Portfolio
            </Link>
          </li>
          <li>
            <Link to="/Service" className={activeLink === 'services' ? 'active' : ''}>
              <i className="bi bi-hdd-stack navicon"></i> Services
            </Link>
          </li>
          <li className="dropdown">
            <Link to="#" onClick={() => setActiveDropdown(activeDropdown === 1 ? null : 1)}>
              <i className="bi bi-menu-button navicon"></i> <span>More++</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
            </Link>
            <ul className={`dropdown-menu ${activeDropdown === 1 ? 'dropdown-active' : ''}`}>
              <li><Link to="/Vault">Images</Link></li>
              <li><Link to="/Biodata">Biograph</Link></li>
              <li><Link to="/Projects" className={activeLink === 'projects' ? 'active' : ''}>Projects</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/Contact" className={activeLink === 'contact' ? 'active' : ''}>
              <i className="bi bi-envelope navicon"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
