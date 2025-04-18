import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom';

export default function Service({ profileImage, intervalforpp}) {
 
  return (
    <>

   <div className="whole-container" style={{ display: "flex" }}>
      {/* Left-side menu */}
      <div className="menu-container">
      <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
      </div>
      <div style={{ width: "80%" }}>
      <section id="services" className="services section dark-background">
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

        </div>
      </div>  
    </>
  )
}
