import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class='loader_bg'></div>

        <header id='header'>
          <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
            <ul className='navbar-nav'>
              <nav className='my-h2'>
                <a href='home' className='nav-link'>
                  UJ GYMNASIUM
                </a>
              </nav>
            </ul>
          </nav>
        </header>
        <br></br>

        <section class='banner_main'>
          <div class='container-fluid'>
            <div class='row d_flex'>
              <div class='col-md-6'>
                <div class='text-bg'>
                  <div class='padding_lert'>
                    <h1>GYM AND FITNESS</h1>
                    <span></span>
                    <p>
                      {" "}
                      The UJ Gymnasia are premier fitness centres with
                      state-of-the-art equipment.The gyms have a team of
                      experienced instructors who ensure that members receive
                      the best fitness results. The Gymnasia contribute to
                      enhancing the quality of lives of the University
                      community. The Gym services are catered to UJ students.
                    </p>
                    <a class='read_more' href='Register'>
                      Register
                    </a>
                    <br></br>
                    <br></br>
                    <a class='read_more' href='Login'>
                      Login
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-md-6'>
                <div class='text-img'>
                  <figure>
                    <img src='assets/images/toy_img.png' alt='#' />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class='Features'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-12'>
                <div class='titlepage'>
                  <h2>Our Features Classes</h2>
                  <span>CHECKOUT OUR FITNESS CLASSES THIS SUMMER</span>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col-md-4'>
                <div class='Our_box'>
                  <i>
                    <img src='assets/icon/icon1.png' alt='#' />
                  </i>
                  <h4>
                    HOW TO USE EQUIPMENTS<br></br>CLASSES
                  </h4>
                </div>
              </div>
              <div class='col-md-4'>
                <div class='Our_box'>
                  <i>
                    <img src='assets/icon/icon2.png' alt='#' />
                  </i>
                  <h4>
                    BULKING UP <br></br>CLASSES
                  </h4>
                </div>
              </div>
              <div class='col-md-4'>
                <div class='Our_box'>
                  <i>
                    <img src='assets/icon/icon3.png' alt='#' />
                  </i>
                  <h4>
                    WEIGHT LOSS <br></br>CLASSES
                  </h4>
                </div>
              </div>
              <div class='col-md-12'>
                <a class='read_more' href='Ulink.co.za'>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class='discount'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-12'>
                <div class='titlepage'>
                  <h2>FITNESS CLASSES THIS SUMMER.</h2>
                  <span>
                    Which are special events that are going to be introduced
                    this summer. They will be held outside the gym on the sports
                    field.Everybody is welcome to join
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <footer class='footer-area section-gap'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-3  col-md-6 col-sm6'>
                <div class='single-footer-widget'>
                  <h4>About Us</h4>
                  <p>
                    The UJ Gymnasia are premier fitness centres with
                    state-of-the-art equipment.The gyms have a team of
                    experienced instructors who ensure that members receive the
                    best fitness results. The Gymnasia contribute to enhancing
                    the quality of lives of the University community. The Gym
                    services are catered to UJ students.
                  </p>
                </div>
              </div>

              <div class='col-lg-3  col-md-6 col-sm6'>
                <div class='single-footer-widget'>
                  <h4>Contact Us</h4>
                  <p>APK Gym: (011) 559 2284</p>
                  <p>APB Gym: (011) 559 1570</p>
                  <p>DFC Gym: (011) 559 6413</p>
                  <p>SWC Gym: (011) 559 5034</p>
                  <p>Email: darshanr@uj.ac.za</p>
                </div>
              </div>

              <div class='col-lg-3  col-md-6 col-sm6'>
                <div class='single-footer-widget'>
                  <h4> ​Follow UJ Gym</h4>
                  <div class='footer-social col-lg-6'>
                    <a href='Ulink.co.za'>
                      <i class='fa fa-facebook'></i>
                    </a>
                    <a href='Ulink.co.za'>
                      <i class='fa fa-instagram'></i>
                    </a>
                    <a href='Ulink.co.za'>
                      <i class='fa fa-envelope'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class='col-lg-3  col-md-8 col-sm8'>
                <div class='single-footer-widget'>
                  <h4>Terms of service</h4>
                  <li>
                    <a href='Ulink.co.za'>Privacy Policy</a>
                  </li>
                </div>
              </div>

              <div class='footer-bottom row'>
                <p class='footer-text m-0 col-lg-6'>
                  &copy; 2022 Fetch Your Body UJ. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default Home;
