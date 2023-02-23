import React from "react";
import AdminNavigation from "./Navigation/AdminNavigation";
const ToDoListPage = () => {
  return (
    <div>
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
      </div>
      <AdminNavigation />

      <footer className='main-footer'>
        <div className='card'>
          <div className='card-header'>
            <h3 className='card-title'>
              <i className='ion ion-clipboard mr-1' />
              To Do List
            </h3>
            <div className='card-tools'>
              <ul className='pagination pagination-sm'>
                <li className='page-item'>
                  <a href='announcement' className='page-link'>
                    «
                  </a>
                </li>
                <li className='page-item'>
                  <a href='announcement' className='page-link'>
                    1
                  </a>
                </li>
                <li className='page-item'>
                  <a href='announcement' className='page-link'>
                    2
                  </a>
                </li>
                <li className='page-item'>
                  <a href='announcement' className='page-link'>
                    3
                  </a>
                </li>
                <li className='page-item'>
                  <a href='announcement' className='page-link'>
                    »
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='card-body'>
            <ul className='todo-list' data-widget='todo-list'>
              <li>
                <span className='handle'>
                  <i className='fas fa-ellipsis-v' />
                  <i className='fas fa-ellipsis-v' />
                </span>
                <div className='icheck-primary d-inline ml-2'>
                  <input
                    type='checkbox'
                    defaultValue
                    name='todo1'
                    id='todoCheck1'
                  />
                  <label htmlFor='todoCheck1' />
                </div>
                <span className='text'>Get new Bumbelss</span>
                <small className='badge badge-danger'>
                  <i className='far fa-clock' /> 200 mins
                </small>
                <div className='tools'>
                  <i className='fas fa-edit' />
                  <i className='fas fa-trash-o' />
                </div>
              </li>
              <li>
                <span className='handle'>
                  <i className='fas fa-ellipsis-v' />
                  <i className='fas fa-ellipsis-v' />
                </span>
                <div className='icheck-primary d-inline ml-2'>
                  <input
                    type='checkbox'
                    defaultValue
                    name='todo2'
                    id='todoCheck2'
                    defaultChecked
                  />
                  <label htmlFor='todoCheck2' />
                </div>
                <span className='text'>
                  Create Announcement for SRC Voting Campaign
                </span>
                <small className='badge badge-info'>
                  <i className='far fa-clock' /> 15mins
                </small>
                <div className='tools'>
                  <i className='fas fa-edit' />
                  <i className='fas fa-trash-o' />
                </div>
              </li>
              <li>
                <span className='handle'>
                  <i className='fas fa-ellipsis-v' />
                  <i className='fas fa-ellipsis-v' />
                </span>
                <div className='icheck-primary d-inline ml-2'>
                  <input
                    type='checkbox'
                    defaultValue
                    name='todo3'
                    id='todoCheck3'
                  />
                  <label htmlFor='todoCheck3' />
                </div>
                <span className='text'>
                  Confirm with Dr Long for Nutrition seminar
                </span>
                <small className='badge badge-warning'>
                  <i className='far fa-clock' /> 1 day
                </small>
                <div className='tools'>
                  <i className='fas fa-edit' />
                  <i className='fas fa-trash-o' />
                </div>
              </li>
              <li>
                <span className='handle'>
                  <i className='fas fa-ellipsis-v' />
                  <i className='fas fa-ellipsis-v' />
                </span>
                <div className='icheck-primary d-inline ml-2'>
                  <input
                    type='checkbox'
                    defaultValue
                    name='todo4'
                    id='todoCheck4'
                  />
                  <label htmlFor='todoCheck4' />
                </div>
                <span className='text'>Sanitize the Showers</span>
                <small className='badge badge-success'>
                  <i className='far fa-clock' /> 3 days
                </small>
                <div className='tools'>
                  <i className='fas fa-edit' />
                  <i className='fas fa-trash-o' />
                </div>
              </li>
              <li>
                <span className='handle'>
                  <i className='fas fa-ellipsis-v' />
                  <i className='fas fa-ellipsis-v' />
                </span>
                <div className='icheck-primary d-inline ml-2'>
                  <input
                    type='checkbox'
                    defaultValue
                    name='todo5'
                    id='todoCheck5'
                  />
                  <label htmlFor='todoCheck5' />
                </div>
                <span className='text'>
                  Check your messages and notifications
                </span>
                <small className='badge badge-primary'>
                  <i className='far fa-clock' /> 1 week
                </small>
                <div className='tools'>
                  <i className='fas fa-edit' />
                  <i className='fas fa-trash-o' />
                </div>
              </li>
              <li>
                <span className='handle'>
                  <i className='fas fa-ellipsis-v' />
                  <i className='fas fa-ellipsis-v' />
                </span>
                <div className='icheck-primary d-inline ml-2'>
                  <input
                    type='checkbox'
                    defaultValue
                    name='todo6'
                    id='todoCheck6'
                  />
                  <label htmlFor='todoCheck6' />
                </div>

                <div className='tools'>
                  <i className='fas fa-edit' />
                  <i className='fas fa-trash-o' />
                </div>
              </li>
            </ul>
          </div>
          <div className='card-footer clearfix'>
            <button type='button' className='btn btn-primary float-right'>
              <i className='fas fa-plus' /> Add new TODO
            </button>
          </div>
        </div>
      </footer>

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
export default ToDoListPage;
