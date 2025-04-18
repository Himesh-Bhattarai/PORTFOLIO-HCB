import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import 'aos/dist/aos.css';

export default function Images() {
  
 
  useEffect(() => {

    // Initialize AOS and GLightbox
    AOS.init({
      duration: 300,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    const lightbox = GLightbox({
      selector: '.glightbox',
    });

    // Cleanup
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>          
  
          <section id="gallery" className="gallery section">
<div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
  <div className="row gy-4 justify-content-center">
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt="" />
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <Link to="assets/img/gallery/gallery-1.jpg" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></Link>
          <Link to="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></Link>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <Link to="assets/img/gallery/gallery-2.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></Link>
          <Link to="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></Link>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <Link to="assets/img/gallery/gallery-2.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></Link>
          <Link to="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></Link>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <Link to="assets/img/gallery/gallery-2.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></Link>
          <Link to="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></Link>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <Link to="assets/img/gallery/gallery-2.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></Link>
          <Link to="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></Link>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <Link to="assets/img/gallery/gallery-2.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></Link>
          <Link to="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></Link>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <Link to="assets/img/gallery/gallery-2.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></Link>
          <Link to="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></Link>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <Link to="assets/img/gallery/gallery-2.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></Link>
          <Link to="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></Link>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <Link to="assets/img/gallery/gallery-2.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></Link>
          <Link to="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></Link>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <Link to="assets/img/gallery/gallery-2.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></Link>
          <Link to="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></Link>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
       {/* </div> */}
    </>
  );
}


