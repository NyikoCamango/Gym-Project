import React, { Component } from "react";
import Heads from "../dashboard/Heads";
import Menu from "../dashboard/Menu";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Heads />
        <Menu />
        <div className='content-wrapper'>
          <section className='content-header'>
            <div className='container-fluid'>
              <div className='row mb-2'>
                <div className='col-sm-6'>
                  <h1>Profile</h1>
                </div>
                <div className='col-sm-6'>
                  <ol className='breadcrumb float-sm-right'>
                    <li className='breadcrumb-item'>
                      <a href='#'>Home</a>
                    </li>
                    <li className='breadcrumb-item active'>User Profile</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section className='content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='card card-primary card-outline'>
                    <div className='card-body box-profile'>
                      <div className='text-center'>
                        <img
                          className='profile-user-img img-fluid img-circle'
                          src='../../dist/img/user4-128x128.jpg'
                          alt='User profile picture'
                        />
                      </div>
                      <h3 className='profile-username text-center'>
                        Nina Mcintire
                      </h3>
                      <p className='text-muted text-center'>
                        Software Engineer
                      </p>
                      <ul className='list-group list-group-unbordered mb-3'>
                        <li className='list-group-item'>
                          <b>Followers</b> <a className='float-right'>1,322</a>
                        </li>
                        <li className='list-group-item'>
                          <b>Following</b> <a className='float-right'>543</a>
                        </li>
                        <li className='list-group-item'>
                          <b>Friends</b> <a className='float-right'>13,287</a>
                        </li>
                      </ul>
                      <a href='#' className='btn btn-primary btn-block'>
                        <b>Follow</b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
