import React, { Component } from "react";
import Container from "@mui/material/Container";
import Mealss from "../../src/components/Meals/Mealss";
import Box from "@mui/material/Box";
import { Form } from "antd";
import { MDBCard } from "mdb-react-ui-kit";

import Typography from "@mui/material/Typography";
import Usernavigation from "./Navigation/Usernavigation";

export default class OverallPage extends Component {
  render() {
    const userprofile = {
      name: "James",
      surname: "Bond",
      email: " bond@mail.com",
      role: " Student",
      gym: ["APK", "SWC", "APB", "DFC"],
      goal: "LoseWeight",
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
                  href='home'
                  role='button'
                >
                  <i className='fas fa-bars' />
                </a>
              </li>
              <h4>UJ GYMNASIUM</h4>
            </ul>
          </nav>
        </header>
        <br></br>
        <br></br>

        <Container component='main' maxWidth='xs'>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <br></br>
            <br></br>

            <Form
              name='basic'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              autoComplete='off'
            >
              <Typography component='h1' variant='h5' sx={{ m: 1 }}>
                OverallPage
              </Typography>

              <div>
                <div>
                  <div>
                    <div class='card card-primary card-outline'>
                      <div class='card-body'>
                        <h1 class='card-title'>
                          <span>OverallPage</span>
                        </h1>
                        <p>
                          <hr />{" "}
                          <label>
                            <i>
                              <b>User Name</b>
                            </i>
                          </label>{" "}
                          {userprofile.name}
                        </p>
                        <p>
                          {" "}
                          <label>
                            <i>
                              <b>User Goal</b>
                            </i>
                          </label>{" "}
                          {userprofile.goal}
                        </p>
                        <hr />{" "}
                        <label>
                          <i>
                            <b>
                              Next Workout is{" "}
                              <span>
                                <i>Abs DAY</i>
                              </span>
                            </b>
                          </i>
                        </label>{" "}
                        <hr />
                        <p>
                          <hr />{" "}
                          <label>
                            <i>
                              <b>IMPROVEMENTS</b>
                            </i>
                          </label>{" "}
                          <p class='card-text'>
                            You have improved on Back Days , you have completed
                            more than 75% of your exercises
                          </p>
                        </p>
                        <br />
                        <p class='card-text'>
                          You have improved on Leg workout days, you have
                          completed all your exercises
                        </p>
                        <hr />
                        <p>
                          <label>Focus Points</label>
                        </p>
                        <p class='card-text'>
                          You need to focus more on Chest days ,you have
                          completed less than 50% of your exercises
                        </p>
                        <br />
                        <p class='card-text'>
                          You need to focus more on Abs days , you only
                          completed less than 50% of your exercises
                        </p>
                        <div>
                          <hr />{" "}
                          <MDBCard>
                            <label>
                              <i>
                                <b>
                                  Next{" "}
                                  <span>
                                    <i>MealPlan</i>
                                  </span>
                                </b>
                              </i>
                            </label>{" "}
                            <Mealss />
                            <p>
                              <i>
                                Please Note We reccommend eating Less than 400
                                Calcories when your body goal is to loseWeight
                              </i>
                            </p>
                          </MDBCard>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <i>Reccomendations from UJ-GYMNASIUM for YOU</i>
                </p>
              </div>
            </Form>
          </Box>
        </Container>
        <Usernavigation />

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
                    <a href='announcement'>
                      <i class='fa fa-facebook'></i>
                    </a>
                    <a href='announcement'>
                      <i class='fa fa-instagram'></i>
                    </a>
                    <a href='announcement'>
                      <i class='fa fa-envelope'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class='col-lg-3  col-md-8 col-sm8'>
                <div class='single-footer-widget'>
                  <h4>Terms of service</h4>
                  <li>
                    <a href='announcement'>Privacy Policy</a>
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
