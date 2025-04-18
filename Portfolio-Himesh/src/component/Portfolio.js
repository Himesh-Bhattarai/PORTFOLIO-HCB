import React from 'react'
import Menu from './Menu'


export default function More({  profileImage, intervalforpp }) {
 
  return (
    
    <>
              
       <div className="whole-container" style={{ display: "flex" }}>
      {/* Left-side menu */}
      <div className="menu-container">
      <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
      </div>

      <div className="content-container">
      <section id="portfolio" className="portfolio section dark-background">
  <div className="container">
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
            <div className="card-body">
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
        {/* Add more cards as needed following the same structure */}
      </div>
    </div>
  </div>
</section>

        </div>
      </div>  
    </>
   
  )
}

