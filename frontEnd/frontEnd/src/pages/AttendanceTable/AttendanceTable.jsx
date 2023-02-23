import React, { Component } from "react";
import Adminnavigation from "../../pages/Navigation/AdminNavigation";
import Container from "@mui/material/Container";

export default class AttendanceTable extends Component {
  render() {
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

              <nav>
                <ul class='nav-menu'>
                  <li className='nav-item d-none d-sm-inline-block'>
                    <a href='dash' className='nav-link'>
                      HOME
                    </a>
                  </li>
                </ul>
              </nav>
            </ul>
          </nav>
        </header>
        <br></br>
        <br></br>
        <Adminnavigation></Adminnavigation>

        <br></br>
        <br></br>
        <Container>
          <footer className='main-footer'>
            <div className='row'>
              <div className='col-12'>
                <div className='card'>
                  <div className='card-header'>
                    <h1 className='card-title'>
                      <span>
                        <b>Attendance Table</b>
                      </span>
                    </h1>
                    <div className='card-tools'>
                      <div
                        className='input-group input-group-sm'
                        style={{ width: 150 }}
                      >
                        <input
                          type='text'
                          name='table_search'
                          className='form-control float-right'
                          placeholder='Search'
                        />
                        <div className='input-group-append'>
                          <button type='submit' className='btn btn-default'>
                            <i className='fas fa-search' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='card-body table-responsive p-0'
                    style={{ height: 300 }}
                  >
                    <table className='table table-head-fixed text-nowrap'>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>User</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>183</td>
                          <td>John Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className='tag tag-success'>Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>219</td>
                          <td>Alexander Pierce</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className='tag tag-warning'>Pending</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>657</td>
                          <td>Bob Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className='tag tag-primary'>Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>175</td>
                          <td>Mike Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className='tag tag-danger'>Denied</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>134</td>
                          <td>Jim Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className='tag tag-success'>Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>494</td>
                          <td>Victoria Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className='tag tag-warning'>Pending</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>832</td>
                          <td>Michael Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className='tag tag-primary'>Approved</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                        <tr>
                          <td>982</td>
                          <td>Rocky Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className='tag tag-danger'>Denied</span>
                          </td>
                          <td>
                            Bacon ipsum dolor sit amet salami venison chicken
                            flank fatback doner.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </Container>

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
        <br></br>
        <br></br>
      </div>
    );
  }
}
