import React, { Component } from "react";

export default class Heads extends Component {
  render() {
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
        </div>
      </div>
    );
  }
}
