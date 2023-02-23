import React from "react";
//import AsyncStorage from "react-async";
import { useState } from "react";
import UserNavigation from "../Navigation/Usernavigation";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBProgress,
  MDBProgressBar,
  MDBListGroup,
} from "mdb-react-ui-kit";
import DefaultCalendar from "../../components/DefaultCalendar/DefaultCalendar";
import Mealss from "../../components/Meals/Mealss";
import PieChart from "../../components/Charts/PieChart";

export default function ProfileSummary({ context }) {
  const [user, setUser] = useState();

  /*const Profileuser={
    const:url= `https://fetch-your-body.herokuapp.com/public/Register`,
    const: response= await fetch(url,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        surname,
        role,

      })
    })
   }
  */
  const userprofile = {
    name: "James",
    surname: "Bond",
    email: " bond@mail.com",
    role: " Student",
    gym: ["APK", "SWC", "APB", "DFC"],
    goal: "LoseWeight",
  };
  const userStreak = {
    key: ["Leg Day", "Chest Day", "Abs Day", "Shoulder Day", "Bench Day"],
    value: ["Bad Streak", "Okay Streak", "Great Streak"],
    img: "",
  };
  //Save Button cliecked to save UserProfile
  /*const handleSave = () => {};
  //edit profile picture code
  const handlePictureSelected = async ({ event }) => {
    var picture = event.target.files[0];
    var src = URL.createObjectURL(picture);

    this.setState({
      picture: picture,
      src: src,
    });
  };*/

  //function to get User ID
  const getUser = async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/members/5`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { events } = await response.json();
    //
    //setInitLoading(false);
    setUser(events);
  };
  //function to get Events
  const getEvents = async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/events`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { events } = await response.json();
    //
    //setInitLoading(false);
    setUser(events);
  };
  //  useEffect(() => {
  //  getUser();
  //, [context]);
  return (
    <div>
      <header id='header'>
        <nav className='main-header navbar navbar-expand navbar-blue navbar-light'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' data-widget='pushmenu' role='button'>
                <i className='fas fa-bars' />
              </a>
            </li>
            <h4>UJ GYMNASIUM</h4>
          </ul>
        </nav>
      </header>

      <footer className='main-footer'>
        <section style={{ backgroundColor: "#eee" }}>
          <br />
          <MDBContainer className='py-5'>
            <MDBRow>
              <MDBCol lg='4'>
                <MDBCard className='mb-4'>
                  <MDBCardBody className='text-center'>
                    <MDBCardImage
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                      alt='avatar'
                      className='rounded-circle'
                      style={{ width: "150px" }}
                      fluid
                    />
                    <p className='text-muted mb-1'>{userprofile.name}</p>
                    <p className='text-muted mb-4'>{userprofile.goal}</p>
                    <div className='d-flex justify-content-center mb-2'>
                      <MDBBtn outline className='ms-2'>
                        SAVE
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className='mb-4 mb-lg-0'>
                  <MDBCardBody className='p-0'>
                    <MDBListGroup flush className='rounded-3'></MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg='8'>
                <MDBCard className='mb-4'>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>User Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {userprofile.name}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>User Surname</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {userprofile.surname}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {userprofile.email}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Role</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {userprofile.role}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Preferred Gym</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {userprofile.gym[2]}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Body Goal</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {userprofile.goal}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>

                <MDBRow>
                  <MDBCol md='6'>
                    <MDBCard className='mb-12 mb-md-0'>
                      <MDBCardBody>
                        <MDBCardText className='mb-12'>
                          <span className='text-primary font-italic me-1'>
                            BodyGoal
                          </span>{" "}
                          Status
                        </MDBCardText>
                        <MDBCardText
                          className='mb-1'
                          style={{ fontSize: ".77rem" }}
                        >
                          {userprofile.goal}
                        </MDBCardText>
                        <MDBProgress className='rounded'>
                          <MDBProgressBar
                            width={80}
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <PieChart />
                </MDBRow>
              </MDBCol>
              {/*-=-------------------------------*/}
              <br />
              <hr />
              <MDBRow>
                <MDBCol md='12'>
                  <MDBCard className='mb-12 mb-md-12'>
                    <MDBCardBody>
                      {/***************************************************************** */}
                      <div className='row'>
                        <div className='col-12'>
                          <div className='card'>
                            <div className='card-header'>
                              <h1 className='card-title'>
                                <span>
                                  <b> Users Streak Table</b>
                                </span>
                              </h1>
                              <div className='card-tools'>
                                <div
                                  className='input-group input-group-sm'
                                  style={{ width: 656 }}
                                ></div>
                              </div>
                            </div>
                            <div
                              className='card-body table-responsive p-0'
                              style={{ height: 300 }}
                            >
                              <table className='table table-head-fixed text-nowrap'>
                                <thead>
                                  <tr>
                                    <th>WorkOut</th>

                                    <th>Progress</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{userStreak.key[0]}</td>

                                    <td>
                                      <span className='tag tag-success'>
                                        {userStreak.value[0]}
                                      </span>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{userStreak.key[1]}</td>

                                    <td>
                                      <span className='tag tag-success'>
                                        {userStreak.value[1]}
                                      </span>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{userStreak.key[2]}</td>

                                    <td>
                                      <span className='tag tag-success'>
                                        {userStreak.value[2]}
                                      </span>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{userStreak.key[3]}</td>

                                    <td>
                                      <span className='tag tag-success'>
                                        {userStreak.value[0]}
                                      </span>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>{userStreak.key[4]}</td>

                                    <td>
                                      <span className='tag tag-success'>
                                        {userStreak.value[2]}
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBRow>
            <div>
              <DefaultCalendar />
              <p>
                <i>Calendar showing Workout and Events Schedule</i>
              </p>
            </div>
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
                        You need to focus more on Chest days ,you have completed
                        less than 50% of your exercises
                      </p>
                      <br />
                      <p class='card-text'>
                        You need to focus more on Abs days , you only completed
                        less than 50% of your exercises
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
          </MDBContainer>
        </section>
      </footer>

      <UserNavigation />
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
        <br></br>
      </footer>
    </div>
  );
}
