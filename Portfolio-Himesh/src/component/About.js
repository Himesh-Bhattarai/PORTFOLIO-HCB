import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom';
export default function About({ profileImage, intervalforpp}) {

  return (
    <>
           
    <div className="whole-container" style={{ display: "flex" }}>
      {/* Left-side menu */}
      <div className="menu-container">
      <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
      </div>
      {/* Main content area */}
      <div className="content-container" >
      <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
  I'm Himesh Bhattarai, a passionate app and web developer from Prakashpur, Sunsari, Nepal. From a young age, I was fascinated by technology, and this curiosity drove me to explore the world of coding and software development. My journey began with simple HTML pages, but soon, I was diving into complex web applications and mobile app development.
</p>

      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
      <img src="/assets/img/Realpic/profile-pic.jpeg" alt="" className="img-fluid"/>
          </div>
          <div className="col-lg-8 content">
            <h2>App Developer &amp; Web Developer.</h2>
            <p className="fst-italic py-3">
            My goal is to create intuitive, efficient, and user-friendly applications that solve real-world problems. I'm particularly interested in front-end development and have been sharpening my skills in React, JavaScript, and other modern web technologies. I aspire to work on projects that challenge me and allow me to grow as a developer.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>23 Dec 2006</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><Link to ='github.com/Himesh-Bhattarai'>Himesh-Bhattarai</Link></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+977 9806352021</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Prakashpur, Sunsari, NEPAL</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>18</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>+2</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>himesh.hcb@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Github:</strong> <span><Link to ='github.com/Himesh-Bhattarai'>Himesh-Bhattarai</Link></span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
  Over the past few years, I have developed a wide range of web and mobile applications. My expertise lies in JavaScript frameworks like React and Node.js, and I am also skilled in database management and server-side programming. I enjoy solving complex problems and am always eager to learn new technologies that enhance my ability to deliver quality software.
</p>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
   </>

  )
}
