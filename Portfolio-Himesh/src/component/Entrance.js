import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import Menu from "./Menu";
import AOS from 'aos';
import "aos/dist/aos.css";
import MyLocMap from "./MyLocMap";
import Typed from 'typed.js';

export default function Entrance({ textStyle, interval, ImageURI, profileImage, intervalforpp }) {

  //#code for changing background-image every 12 hrs//
  
    const [currentImage, setCurrentImage] = useState(ImageURI[0]);
  
    useEffect(() => {
      let index = 0;
      const intervalId = setInterval(() => {
        index = (index + 1) % ImageURI.length;
        setCurrentImage(ImageURI[index]);
      }, interval);
  
      return () => clearInterval(intervalId);
    }, [ImageURI, interval]);
  
  

  //Home container moving text
  
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
  
    useEffect(() => {
      AOS.init();
    }, []);


    //scroll to top section but scroll is not smooth

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.scrollY > 100);
      };
  
      // Adding the scroll event listener with the passive option
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
  return (
    <>
     <div className="whole-container" style={{ display: "flex" }}>
        {/* Left-side menu */}
        <div className="menu-container" >
          <Menu  profileImage={profileImage} intervalforpp={intervalforpp}/>
        </div>
        {/* Main content area */}
        <div className="content-container">
          {/* <main className="main section dark-background"> */}
          {/* homesection */}
            <section id="hero" className="hero section dark-background">
              <img  src={currentImage} alt="" data-aos="fade-in" className="" />
              <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h3 className="section-div-h3">Hello, It's Me,</h3>
                <h3 className="section-div-name">HimeshChanchal Bhattarai</h3>
                <h3 className="section-div-floattext">And I'm <span ref={typeText} style={textStyle}></span></h3>
              </div>
            </section>
            <Link to="/" id="scroll-top" className={`scroll-top d-flex align-items-center justify-content-center ${showScrollTop ? 'active' : ''}`}><i className="bi bi-arrow-up-short"></i></Link>

            {/* aboutsection */}

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
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><Link to ='www.github.com/Himesh-Bhattarai'>Himesh.hcb</Link></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+977 9806352021</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Prakashpur, Sunsari, NEPAL</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>18</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>+2</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>himesh.hcb@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Github:</strong> <span><Link to="https://www.facebook.com/himesh.hcb/">Himesh_Bhattarai</Link></span></li>
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


{/* resume section */}
   <section id="resume" className="resume section">
  <div className="container section-title" data-aos="fade-up">
    <h2>Resume</h2>
    <p>
      I am a dedicated and passionate developer with a strong foundation in app and web development. My education and hands-on experience in various projects have equipped me with the skills to deliver innovative solutions that meet user needs and exceed expectations.
    </p>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h3 className="resume-title">Summary</h3>
        <div className="resume-item pb-0">
          <h4>Himeshchanchal Bhattarai</h4>
          <p>
            <em>
              A motivated and detail-oriented app and web developer with a strong passion for creating user-friendly and efficient digital solutions. I thrive in collaborative environments and am always eager to take on new challenges that enhance my skills.
            </em>
          </p>
          <ul>
            <li>Barahakshetra-10, Prakashpur, NEPAL</li>
            <li>(+977) 9806352021</li>
            <li>himesh.hcb@gmail.com</li>
          </ul>
        </div>

        <h3 className="resume-title">Education</h3>
        <div className="resume-item">
          <h4>Primary Education ➢ SEE</h4>
          <h5>2008-2017</h5>
          <p>
            <em>Sunshine English Boarding School, Prakashpur, NEPAL</em>
          </p>
          <p>
            Completed my primary education with a GPA of 3.6, during which I developed a keen interest in technology and foundational computer skills.
          </p>
        </div>
        <div className="resume-item">
          <h4>Secondary Education ➢ +2</h4>
          <h5>2023 - 2025</h5>
          <p>
            <em>Orchid College, Biratnagar</em>
          </p>
          <p>
            Currently pursuing my higher secondary education with a focus on Science and Technology, with a strong emphasis on gaining deeper insights into software development and programming.
          </p>
        </div>
      </div>

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <h3 className="resume-title">Skills</h3>
        <div className="resume-item pb-0">
          <ul>
            <li>Proficient in JavaScript, React, HTML, CSS</li>
            <li>Experience with version control using Git and GitHub</li>
            <li>Basic knowledge of server-side programming and databases</li>
            <li>Ability to design responsive and user-friendly web interfaces</li>
            <li>Strong problem-solving skills and ability to work under pressure</li>
          </ul>
        </div>
        <h3 className="resume-title">Projects</h3>
        <div className="resume-item">
          <h4>Personal Portfolio Website</h4>
          <p>
            <em>A personal project showcasing my skills and previous work, built using React and Bootstrap.</em>
          </p>
        </div>
        <div className="resume-item">
          <h4>Small Business Website</h4>
          <p>
            <em>Designed and developed a website for a local business, focusing on an intuitive user experience and responsive design.</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* portfolio */}

<section id="portfolio" className="portfolio section dark-background">
  <div className="container section-title" data-aos="fade-up">
    <h2>Portfolio</h2>
    <p>From the age of 15 I have been in the field of technology.</p>
  </div>
  <div className="container dark-background" >
    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
      <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
        <li data-filter="*" className="filter-active">All</li>
        <li data-filter=".filter-app">App</li>
        <li data-filter=".filter-product">Website</li>
        <li data-filter=".filter-branding">Branding</li>
        <li data-filter=".filter-books">Books</li>
      </ul>
      <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
          <div className="card" style={{ width: '18rem' }}>
            <img src="assets/img/portfolio/app-1.jpg" className="card-img-top" alt="App 1"/>
            <div className="card-body dark-background">
              <h5 className="card-title">App 1</h5>
              <p className="card-text">Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="btn btn-primary glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="btn btn-secondary details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
          <div className="card" style={{ width: '18rem' }}>
            <img src="assets/img/portfolio/product-1.jpg" className="card-img-top" alt="Product 1"/>
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="btn btn-primary glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="btn btn-secondary details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
          <div className="card" style={{ width: '18rem' }}>
            <img src="assets/img/portfolio/branding-1.jpg" className="card-img-top" alt="Branding 1"/>
            <div className="card-body">
              <h5 className="card-title">Branding 1</h5>
              <p className="card-text">Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="btn btn-primary glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="btn btn-secondary details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
          <div className="card" style={{ width: '18rem' }}>
            <img src="assets/img/portfolio/books-1.jpg" className="card-img-top" alt="Books 1"/>
            <div className="card-body">
              <h5 className="card-title">Books 1</h5>
              <p className="card-text">Lorem ipsum, dolor sit amet consectetur</p>
              <a href="assets/img/portfolio/books-1.jpg" title="Books 1" data-gallery="portfolio-gallery-book" className="btn btn-primary glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" className="btn btn-secondary details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>


{/* service section */}
    <section id="services" className="services section">
  <div className="container section-title" data-aos="fade-up">
    <h2>Services</h2>
    <p>
      I offer a range of services designed to help businesses and individuals establish a strong online presence. My focus is on creating user-friendly, responsive, and aesthetically pleasing websites and applications that meet the specific needs of my clients.
    </p>
  </div>
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
        <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
        <div>
          <h4 className="title"><Link to="service-details.html" className="stretched-link">Web Development</Link></h4>
          <p className="description">
            I create fully responsive websites that are optimized for performance and accessibility. From landing pages to full-scale e-commerce sites, I can bring your online vision to life.
          </p>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
        <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
        <div>
          <h4 className="title"><Link to="service-details.html" className="stretched-link">App Development</Link></h4>
          <p className="description">
            Whether you need a simple mobile app or a complex web application, I provide end-to-end development services to ensure your app is user-friendly and scalable.
          </p>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
        <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
        <div>
          <h4 className="title"><Link to="service-details.html" className="stretched-link">UI/UX Design</Link></h4>
          <p className="description">
            I design intuitive and engaging user interfaces that enhance the user experience, ensuring that your digital product is not only functional but also visually appealing.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
        <div className="icon flex-shrink-0"><i className="bi bi-binoculars"></i></div>
        <div>
          <h4 className="title"><Link to="service-details.html" className="stretched-link">Website Maintenance</Link></h4>
          <p className="description">
            I offer ongoing support and maintenance services to ensure your website remains up-to-date, secure, and running smoothly, so you can focus on your business.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
        <div className="icon flex-shrink-0"><i className="bi bi-brightness-high"></i></div>
        <div>
          <h4 className="title"><Link to="service-details.html" className="stretched-link">SEO Optimization</Link></h4>
          <p className="description">
            I provide SEO services to help your website rank higher in search engine results, increasing visibility and driving more traffic to your site.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
        <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week"></i></div>
        <div>
          <h4 className="title"><Link to="service-details.html" className="stretched-link">Consulting</Link></h4>
          <p className="description">
            I offer consulting services to help you plan and execute your digital projects effectively. Whether you're starting from scratch or need advice on improving an existing project, I'm here to help.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* contact? */}

<section id="contact" className="contact section">
  <div className="container section-title" data-aos="fade-up">
    <h2>Contact</h2>
    <p>If you have any questions or need further information, feel free to reach out to me through any of the methods below.</p>
  </div>
  
  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row gy-4">
      
      <div className="col-lg-5">
        <div className="info-wrap">
          
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>Kathmandu, New Baneshwor</p>
            </div>
          </div>
          
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <i className="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Phone</h3>
              <p>+977 9806352021</p>
            </div>
          </div>
          
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email</h3>
              <p>himesh.hcb@gmail.com</p>
            </div>
          </div>
          
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div>
              <h3>My Location</h3>
              <MyLocMap />
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="col-lg-7">
        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-4">
            
            <div className="col-md-6">
              <label htmlFor="name-field" className="pb-2">Your Name</label>
              <input type="text" name="name" id="name-field" className="form-control" required />
            </div>
            
            <div className="col-md-6">
              <label htmlFor="email-field" className="pb-2">Your Email</label>
              <input type="email" className="form-control" name="email" id="email-field" required />
            </div>
            
            <div className="col-md-12">
              <label htmlFor="subject-field" className="pb-2">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject-field" required />
            </div>
            
            <div className="col-md-12">
              <label htmlFor="message-field" className="pb-2">Message</label>
              <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
            </div>
            
            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
              <button type="submit">Send Message</button>
            </div>
            
          </div>
        </form>
      </div>
      
    </div>
  </div>
  
  <div>
    <Link to="/" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
      <i className="bi bi-arrow-up-short"></i>
    </Link>
  </div>
  
</section>

  {/* </main> */}
  </div>
  </div>
  </>
  )
}
