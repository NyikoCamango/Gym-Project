import React, { Component } from "react";
import UserNavigation from "../Navigation/Usernavigation";
import Heads from "./Heads";

export default class UserDashboard extends Component {
  render() {
    return (
      <div>
        <Heads />
        <UserNavigation />
        <div className='content-wrapper'>
          <br></br>
          <br></br>

          <section className='content'>
            <div className='container-fluid'>
              <div className='row'>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          </section>
        </div>

        <footer className='main-footer'>
          <br></br>

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
          <br></br>
        </footer>
      </div>
    );
  }
}
