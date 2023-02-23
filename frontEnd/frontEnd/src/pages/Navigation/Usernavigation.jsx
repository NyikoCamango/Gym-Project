import React from "react";

function Usernavigation() {
  return (
    <div>
      <div>
        <aside className='main-sidebar sidebar-primary elevation-4'>
          <div className='sidebar'>
            <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
              <div className='image'>
                <img
                  src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                  className='img-circle elevation-2'
                  alt='User Image'
                />
              </div>
              <div className='info'>
                <a href='ProfileSummary' className='d-block'>
                  <span>
                    <h2>
                      <i>
                        <b> James</b>
                      </i>
                    </h2>
                  </span>
                </a>
              </div>
            </div>
            <div className='form-inline'>
              <div className='input-group' data-widget='sidebar-search'>
                <input
                  className='form-control form-control-sidebar'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <div className='input-group-append'>
                  <button className='btn btn-sidebar'>
                    <i className='fas fa-search fa-fw' />
                  </button>
                </div>
              </div>
            </div>
            <nav className='mt-2'>
              <ul
                className='nav nav-pills nav-sidebar flex-column'
                data-widget='treeview'
                role='menu'
                data-accordion='false'
              >
                <li className='nav-item menu-open'>
                  <ul className='nav nav-treeview'></ul>
                </li>
                <li className='nav-item'>
                  <a href='#' className='nav-link'>
                    <i className='nav-icon fa fa-burn' />
                    <p>
                      Body goal
                      <i className='right fas fa-angle-left' />
                    </p>
                  </a>
                  <ul className='nav nav-treeview'>
                    <li className='nav-item'>
                      <a href='Lose' className='nav-link'>
                        <i className='far fa-circle nav-icon' />
                        <p>Lose weight</p>
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='Gain' className='nav-link'>
                        <i className='far fa-circle nav-icon' />
                        <p>Gain weight</p>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <a href='Trainers' className='nav-link'>
                    <i className='nav-icon fa fa-user' />
                    <p>
                      View trainers
                      <i />
                    </p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='gymlocation' className='nav-link'>
                    <i className='nav-icon fa fa-map-marker' />
                    <p>
                      View gym location
                      <i />
                    </p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='attendance' className='nav-link'>
                    <i className='nav-icon fa fa-clock-o' />
                    <p>
                      Submit Attendance
                      <i />
                    </p>
                  </a>
                  <ul className='nav nav-treeview'></ul>
                </li>

                <li className='nav-item'>
                  <a href='usercomplaints' className='nav-link'>
                    <i className='nav-icon fa fa-frown-o' />
                    <p>
                      Add complain
                      <span className='right badge badge-danger'></span>
                    </p>
                  </a>
                </li>

                <li className='nav-item'>
                  <a href='pages/calendar.html' className='nav-link'>
                    <i className='nav-icon far fa-calendar-alt' />
                    <p>
                      Calendar
                      <span className='badge badge-info right'></span>
                    </p>
                  </a>
                </li>

                <li className='nav-item'>
                  <a href='mealsss' className='nav-link'>
                    <i className='nav-icon fas fa-hamburger' />
                    <p>
                      Meal plan
                      <span className='badge badge-info right'></span>
                    </p>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='Overall' className='nav-link'>
                    <i className='nav-icon fas fa-spinner' />
                    <p>
                      Overall progress
                      <span className='badge badge-info right'></span>
                    </p>
                  </a>
                </li>

                <li className='nav-header'>USER SETTINGS </li>
                <li className='nav-item'>
                  <a href='#' className='nav-link'>
                    <i className='nav-icon far fa-plus-square' />
                    <p>
                      Extras
                      <i className='fas fa-angle-left right' />
                    </p>
                  </a>
                  <ul className='nav nav-treeview'>
                    <li className='nav-item'>
                      <a href='profilesummary' className='nav-link'>
                        <i className='far fa-circle nav-icon' />
                        <p>
                          Change user details
                          <i className='fas fa-angle-left right' />
                        </p>
                      </a>
                      <ul className='nav nav-treeview'>
                        <li className='nav-item'>
                          <a href='profilesummary' className='nav-link'>
                            <i className='far fa-circle nav-icon' />
                            <p>Change Password</p>
                          </a>
                        </li>
                      </ul>
                      <ul className='nav nav-treeview'>
                        <li className='nav-item'>
                          <a href='profilesummary' className='nav-link'>
                            <i className='far fa-circle nav-icon' />
                            <p>View profile</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <a href='home' className='nav-link'>
                    <i className='nav-icon  fa fa-sign-out' />
                    <p>
                      Log-out
                      <span className='badge badge-info right'></span>
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Usernavigation;
