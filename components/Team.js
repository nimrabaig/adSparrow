import Link from "next/link";

const Team = () => {
  return (
    <section className="team-section fix footer-bg section-padding" id="team">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
            <img src="assets/img/bale.png" alt="img" />
            Team Member
          </span>
          <h2 className="text-white aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
            Meet Our Professional Team Members
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
            
          >
            <div className="team-card-items">
              <div className="team-image">
                <img src="assets/img/team/06.jpg" alt="team-img" />
                <div className="icon-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h4>
                  <Link href="team-details">Eduardo D. Howard</Link>
                </h4>
                <p>CEO &amp; Founder</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
            
          >
            <div className="team-card-items">
              <div className="team-image">
                <img src="assets/img/team/07.jpg" alt="team-img" />
                <div className="icon-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h4>
                  <Link href="team-details">Jeremiah D. Marshall</Link>
                </h4>
                <p>Business Consultant</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
            
          >
            <div className="team-card-items">
              <div className="team-image">
                <img src="assets/img/team/08.jpg" alt="team-img" />
                <div className="icon-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h4>
                  <Link href="team-details">Jeremy B. Forsberg</Link>
                </h4>
                <p>Senior Manager</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
            
          >
            <div className="team-card-items">
              <div className="team-image">
                <img src="assets/img/team/09.jpg" alt="team-img" />
                <div className="icon-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h4>
                  <Link href="team-details">Duane V. McCormick</Link>
                </h4>
                <p>Junior Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
