import React from "react";

function AdminNavigation() {
  return (
    <div>
      <aside className='main-sidebar sidebar-primary elevation-4'>
        <div className='sidebar'>
          <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
            <div className='image'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp'
                className='img-circle elevation-2'
                alt='ADMIN'
              />
            </div>
            <div className='info'>
              <a href='home' className='d-block'>
                <span>
                  <i>
                    <b>ADMIN</b>
                  </i>
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
                <a href='welcome' className='nav-link'>
                  <i className='nav-icon fa fa-user' />
                  <p>
                    View members
                    <i className='right badge badge-danger' />
                  </p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='attendancetable' className='nav-link'>
                  <i className='nav-icon fa fa-clock-o' />
                  <p>
                    View attendance
                    <i className='right fas fa-angle-left' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='LineChart' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>View line graph</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='BarGraph' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>View bar graph</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className='nav-item'>
                <a href='   announcement' className='nav-link'>
                  <i className='nav-icon fa fa-bullhorn' />
                  <p>
                    Make an announcement
                    <span className='right badge badge-danger'></span>
                  </p>
                </a>
              </li>

              <li className='nav-item'>
                <a href='Complaints' className='nav-link'>
                  <i className='nav-icon fa fa-frown-o' />
                  <p>
                    View complains
                    <span className='right badge badge-danger'></span>
                  </p>
                </a>
              </li>

              <li className='nav-item'>
                <a href='DefaultCalender' className='nav-link'>
                  <i className='nav-icon far fa-calendar-alt' />
                  <p>
                    Calendar
                    <span className='badge badge-info right'></span>
                  </p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='announcement' className='nav-link'>
                  <i className='nav-icon fa fa-money' />
                  <p>
                    View Announcements
                    <span className='right badge badge-danger'></span>
                  </p>
                </a>
              </li>

              <li className='nav-item'>
                <a href='qrcode' className='nav-link'>
                  <i className='nav-icon fa fa-qrcode' />
                  <p>
                    Generate QR-Code
                    <span className='right badge badge-danger'></span>
                  </p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='todolist' className='nav-link'>
                  <i className='nav-icon fa fa-paper-plane ' />
                  <p>
                    View to do list
                    <i className='right badge badge-danger' />
                  </p>
                </a>
              </li>

              <li className='nav-item'>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='pages/tables/simple.html' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>Simple Tables</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className='nav-header'>ADMIN SETTINGS </li>
              <li className='nav-item'>
                <a href='home' className='nav-link'>
                  <i className='nav-icon far fa-plus-square' />
                  <p>
                    Extras
                    <i className='fas fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='dash' className='nav-link'>
                      <i className='far fa-circle nav-icon' />
                      <p>
                        Change user details
                        <i className='fas fa-angle-left right' />
                      </p>
                    </a>
                    <ul className='nav nav-treeview'>
                      <li className='nav-item'>
                        <a
                          href='pages/examples/forgot-password-v2.html'
                          className='nav-link'
                        >
                          <i className='far fa-circle nav-icon' />
                          <p>Change Password</p>
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
  );
}

export default AdminNavigation;
