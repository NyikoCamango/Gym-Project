import React from "react";
import { Form } from "antd";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import t1 from "../image/trainer1.jpg";
import t2 from "../image/trainer2.jpg";
import t3 from "../image/trainer3.jpg";
import t4 from "../image/trainer5.jpg";
import Usernavigation from "./Navigation/Usernavigation";

const APBTrainersPages = () => {
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
            <nav>
              <ul class='nav-menu'>
                <li className='nav-item d-none d-sm-inline-block'>
                  <a href='home' className='nav-link'>
                    <h1>
                      <b>UJ GYMNASIUM</b>
                    </h1>
                  </a>
                </li>
              </ul>
            </nav>
          </ul>
        </nav>
      </header>
      <br></br>
      <br></br>
      <Usernavigation />

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
                    <h4>Featured Trainers</h4>
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
                    <Card>
                      <div class='Trainer-wrapper'>
                        <p>
                          <i class='bi bi-geo-fill'></i>Trainer 1
                        </p>
                        <img src={t1} alt='' width='90%' height='90%'></img>
                        <br></br>
                        <br></br>
                        <div class='action'></div>
                      </div>
                    </Card>
                    <Card>
                      <div class='Trainer-wrapper'>
                        <p>
                          <i class='bi bi-geo-fill'></i> Trainer 2
                        </p>
                        <img src={t2} alt='' width='70%' height='40%'></img>

                        <br></br>
                        <br></br>
                        <div class='action'></div>
                      </div>
                    </Card>
                    <Card>
                      <div class='Trainer-wrapper'>
                        <p>
                          <i class='bi bi-geo-fill'></i> Trainer 3
                        </p>
                        <img src={t3} alt='' width='70%' height='40%'></img>
                        <br></br>
                        <br></br>
                        <div class='action'></div>
                      </div>
                    </Card>
                    <Card>
                      <div class='Trainer-wrapper'>
                        <p>
                          <i class='bi bi-geo-fill'></i> Trainer 4
                        </p>
                        <img src={t4} alt='' width='70%' height='40%'></img>

                        <div class='action'></div>
                      </div>
                    </Card>
                  </Box>
                </Container>
              </div>
            </Box>
          </Box>
        </Container>
      </footer>

      <br></br>
      <br></br>
      <br></br>
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
        <br></br>
      </footer>
    </div>
  );
};
export default APBTrainersPages;
