import React, { Component } from "react";
/*import axios from 'axios';*/
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "@mui/material/Container";
import AdminNavigation from "./Navigation/AdminNavigation";
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: "",
      date: new Date(),
      users: [],
    };
  }
  //Submit Announcement to the DB
  SubmitAnnouncement() {}
  componentDidMount() {
    /* axios.get('')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })*/
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const announcement = {
      description: this.state.description,
      date: this.state.date,
    };
    let url = `https://fetch-your-body.herokuapp.com/public/announcement`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: this.state.description,
        date: this.state.date,
      }),
    });
    const { user } = await response.json();
    console.log(user);
    alert("Successfully created new Announcement");
    console.log("Successfully created new Announcement");
    console.log(announcement);

    /*  axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';*/
  };

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
              <h4>UJ GYMNASIUM</h4>
            </ul>
          </nav>
        </header>

        <AdminNavigation />

        <Container>
          <footer className='main-footer'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h3>Create new announement</h3>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label>Description: </label>
                <input
                  type='text'
                  required
                  className='form-control'
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className='form-group'>
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>

              <div className='form-group'>
                <input
                  type='submit'
                  value='Create announcement'
                  className='btn btn-primary'
                  onclick={this.onSubmit()}
                />
              </div>
            </form>
          </footer>
        </Container>

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
