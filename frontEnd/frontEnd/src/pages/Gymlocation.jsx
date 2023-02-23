import React from "react";
import { Form } from "antd";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import APKGYM from "../image/apk-uj.jpg";
import APBGYM from "../image/apb-gym.jpg";
import DFCGYM from "../image/dfc-gym.jpg";
import SWCGYM from "../image/soweto-gym.jpg";
import UserNavigation from "./Navigation/Usernavigation";
const GymLocationPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div>
      <header id='header'>
        <nav className='main-header navbar navbar-expand navbar-blue navbar-light'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a
                className='nav-link'
                data-widget='pushmenu'
                href='#'
                role='button'
              >
                <i className='fas fa-bars' />
              </a>
            </li>

            <nav>
              <ul class='nav-menu'>
                <li className='nav-item d-none d-sm-inline-block'>
                  <a href='dash' className='nav-link'>
                    HOME
                  </a>
                </li>
                <li className='nav-item d-none d-sm-inline-block'>
                  <a href='#' className='nav-link'>
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>

            <ul className='navbar-nav ml-auto'>
              <li className='nav-item dropdown'>
                <a className='nav-link' data-toggle='dropdown' href='#'>
                  <i className='far fa-bell' />
                  <span className='badge badge-warning navbar-badge'>15</span>
                </a>
                <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
                  <span className='dropdown-item dropdown-header'>
                    15 Notifications
                  </span>
                  <div className='dropdown-divider' />
                  <a href='#' className='dropdown-item'>
                    <i className='fas fa-envelope mr-2' /> 4 new messages
                    <span className='float-right text-muted text-sm'>
                      3 mins
                    </span>
                  </a>
                  <div className='dropdown-divider' />
                  <a href='#' className='dropdown-item'>
                    <i className='fas fa-users mr-2' /> 8 friend requests
                    <span className='float-right text-muted text-sm'>
                      12 hours
                    </span>
                  </a>
                  <div className='dropdown-divider' />
                  <a href='#' className='dropdown-item'>
                    <i className='fas fa-file mr-2' /> 3 new reports
                    <span className='float-right text-muted text-sm'>
                      2 days
                    </span>
                  </a>
                  <div className='dropdown-divider' />
                  <a href='#' className='dropdown-item dropdown-footer'>
                    See All Notifications
                  </a>
                </div>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  data-widget='fullscreen'
                  href='#'
                  role='button'
                >
                  <i className='fas fa-expand-arrows-alt' />
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  data-widget='control-sidebar'
                  data-controlsidebar-slide='true'
                  href='#'
                  role='button'
                >
                  <i className='fas fa-th-large' />
                </a>
              </li>
            </ul>
          </ul>
        </nav>
      </header>

      <footer className='main-footer'>
        <Container component='main' maxWidth='ms'>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "",
            }}
          >
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2 }}
            >
              <Form
                name='basic'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 50 }}
                initialValues={{ remember: true }}
                autoComplete='off'
              ></Form>

              <Container component='main' maxWidth='ms'>
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div class='Trainers' id='Trainers'>
                    <h4>FEATURED GYMS</h4>
                  </div>
                </Box>
              </Container>

              <div class='opp-layout' id='opp-layout'>
                <Container component='main' maxWidth='md'>
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "",
                    }}
                  >
                    <div class='Trainer-wrapper'>
                      <h5>
                        {" "}
                        <p>
                          <i class='bi bi-geo-fill'></i>APK UJ GYM
                        </p>
                      </h5>
                      <img src={APKGYM} alt='' width='100%' height='380'></img>
                      <h5>
                        <p>
                          Address: Corner Kingsway and University Road, Auckland
                          Park, Johannesburg, 2092
                        </p>
                      </h5>
                      <div class='action'>
                        <a href='Trainers'></a>
                      </div>
                    </div>

                    <br></br>

                    <div class='Trainer-wrapper'>
                      <h5>
                        <p>
                          <i class='bi bi-geo-fill'></i> APB UJ GYM
                        </p>
                      </h5>
                      <img src={APBGYM} alt='' width='100%' height='380'></img>
                      <h5>
                        <p>Address: Cottesloe, Johannesburg, 2092</p>
                      </h5>
                      <div class='action'>
                        <a href='Trainers'></a>
                      </div>
                    </div>
                    <br></br>

                    <div class='Trainer-wrapper'>
                      <h5>
                        {" "}
                        <p>
                          <i class='bi bi-geo-fill'></i>DFC UJ GYM
                        </p>
                      </h5>
                      <img src={DFCGYM} alt='' width='100%' height='380'></img>
                      <h5>
                        <p>
                          Address: 55 Beit St, Doornfontein, Johannesburg, 2028
                        </p>
                      </h5>
                      <div class='action'>
                        <a href='Trainers'></a>
                      </div>
                    </div>
                    <br></br>

                    <div class='Trainer-wrapper'>
                      <h5>
                        <p>
                          <i class='bi bi-geo-fill'></i> SWC UJ GYM
                        </p>
                      </h5>
                      <img
                        src={SWCGYM}
                        alt='SOWETO GYM'
                        width='100%'
                        height='380'
                      ></img>
                      <h5>
                        <p>Address: Chris Hani, Soweto, Johannesburg, 1809</p>
                      </h5>
                      <div class='action'>
                        <a href='Trainers'></a>
                      </div>
                    </div>
                  </Box>
                </Container>
              </div>
            </Box>
          </Box>
        </Container>
      </footer>

      <UserNavigation />

      <br></br>
      <br></br>
      <br></br>
      <footer className='main-footer'>
        <br></br>

        <div class='container'>
          <div class='row'>
            <div class='col-lg-3  col-md-6 col-sm6'>
              <div class='single-footer-widget'>
                <h4>About Us</h4>
                <p>
                  The UJ Gymnasia are premier fitness centres with
                  state-of-the-art equipment.The gyms have a team of experienced
                  instructors who ensure that members receive the best fitness
                  results. The Gymnasia contribute to enhancing the quality of
                  lives of the University community. The Gym services are
                  catered to UJ students.
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
                  <a href='#'>
                    <i class='fa fa-facebook'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-instagram'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-envelope'></i>
                  </a>
                </div>
              </div>
            </div>

            <div class='col-lg-3  col-md-8 col-sm8'>
              <div class='single-footer-widget'>
                <h4>Terms of service</h4>
                <li>
                  <a href='#'>Privacy Policy</a>
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
        <br />
      </footer>
    </div>
  );
};
export default GymLocationPage;
