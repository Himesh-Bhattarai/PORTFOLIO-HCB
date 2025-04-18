import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Projects({ profileImage, intervalforpp }) {
 
  // Example projects data
  // const projects = [
  //   { title: "Portfolio Website", status: "Complete", progress: 100 },
  //   { title: "E-commerce App", status: "In Progress", progress: 60 },
  //   { title: "Blog Platform", status: "One Third Finished", progress: 33 },
    // Add more projects as needed
  // ];

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="menu-container" style={{ width: "20%" }}>
          <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
        </div>

        <div className="content-container row gy-4 isotope-container">
        <section id="projects" className="projects section">
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
        </div>
      </div>
    </>
  );
}
