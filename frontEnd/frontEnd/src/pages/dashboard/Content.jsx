import React, { Component } from "react";
//import BiographyGraph from "../../components/BiographyGraph";
import BarGraph from "../../components/Charts/BarGraph";
import LineChartDemo from "../../components/Charts/LineChartDemo";
import ComplaintPage from "../../components/complaints";
//import Complaintslist from "../../components/complaintslist";
import DefaultCalendar from "../../components/DefaultCalendar/DefaultCalendar";
//import AttendanceGraph from "../AttendanceTable/AttendanceGraph";
import Streak from "../AttendanceTable/Streak";

export default class Content extends Component {
  render() {
    return (
      <div>
        <div div className='content-wrapper'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <section className='content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-3 col-6'>
                  <div className='small-box bg-info'>
                    <div className='inner'>
                      <h3>15</h3>
                      <p>new students</p>
                    </div>
                    <div className='icon'>
                      <i className='ion ion-person-add' />
                    </div>
                    <a href='Ulink.co.za' className='small-box-footer'>
                      More info <i className='fas fa-arrow-circle-right' />
                    </a>
                  </div>
                </div>

                <div className='col-lg-3 col-6'>
                  <div className='small-box bg-warning'>
                    <div className='inner'>
                      <h3>9</h3>
                      <p>Todays Attendance</p>
                    </div>
                    <div className='icon'>
                      <i className='ion ion-person-add' />
                    </div>
                    <a href='Ulink.co.za' className='small-box-footer'>
                      More info <i className='fas fa-arrow-circle-right' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-3 col-6'>
                  <div className='small-box bg-info'>
                    <div className='inner'>
                      <h3>112</h3>
                      <p>Total Members</p>
                    </div>
                    <div className='icon'>
                      <i className='ion ion-person-add' />
                    </div>
                    <a href='Ulink.co.za' className='small-box-footer'>
                      More info <i className='fas fa-arrow-circle-right' />
                    </a>
                  </div>
                </div>

                <div className='col-lg-3 col-6'>
                  <div className='small-box bg-danger'>
                    <div className='inner'>
                      <h3>5</h3>
                      <p>new Complaints </p>
                    </div>
                    <div className='icon'>
                      <i className='ion ion-person-add' />
                    </div>
                    <a href='#' className='small-box-footer'>
                      More info <i className='fas fa-arrow-circle-right' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='row'></div>
            </div>
          </section>

          <section>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-12 col-12'>
                  <br />
                  <br />
                  <div>
                    <Streak />
                    <p>
                      <i>
                        New Users Streak Table Showing number of complete works
                        and progress towards their goals
                      </i>
                    </p>
                  </div>
                  <div>
                    <br />
                    <LineChartDemo />
                    <p>
                      <i>
                        Graph showing attendance of beginners, intermediate and
                        experienced Users
                      </i>
                    </p>
                  </div>
                  <div>
                    <ComplaintPage />
                    <p>
                      <i> List of Complaints from Gym Users</i>
                    </p>
                  </div>
                  <br />
                  <div>
                    <DefaultCalendar />
                    <p>
                      <i>Calendar showing default gym Events</i>
                    </p>
                  </div>
                  <br />

                  <div>
                    <BarGraph />
                  </div>
                  <br />
                </div>
                <br />
                <div>
                  <div></div>
                  <br />
                </div>
                <br />
              </div>{" "}
            </div>
          </section>
        </div>
      </div>
    );
  }
}
