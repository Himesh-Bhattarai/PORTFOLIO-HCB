import React from 'react'
import Menu from './Menu'


export default function Resume({ profileImage, intervalforpp }) {

  return (
    <>
      <div className="whole-container" style={{ display: "flex" }}>
        {/* Left-side menu */}
        <div className="menu-container" >
          <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
        </div>
        {/* Main content area */}
        <div className="content-container">
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
                  {/* EDUCATION SECTION START FROM HERE */}
                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>Bachlour level ➢ BCA</h4>
                    <h5>2024-present</h5>
                    <p>
                      <em>Xavier international collage, Kathmandu, NEPAL</em>
                    </p>
                    <p>
                      Currently studying BCA in xavier internationl collage, tushal. With dedication to improve skill
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Secondary Education ➢ +2</h4>
                    <h5>2023 - 2025 (Expected)</h5>
                    <p>
                      <em>Orchid College, Biratnagar</em>
                    </p>
                    <p>
                      Completed my secondary education in Computer management with 3.06 GPA.
                    </p>
                  </div>
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

        </div>
      </div>

    </>
  )
}
