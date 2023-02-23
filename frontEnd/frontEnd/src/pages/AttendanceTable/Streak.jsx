import React, { Component } from "react";

const userdata = {
  name: "Kabelo",
  surname: "Mabena",
  date: "2022-06-12",
  progress: ["Bad", "Okay", "Great"],
  streak: ["Great Stream", "Okay Streak", "Bad Streak"],
};
const userdata1 = {
  name: "Vuyo",
  surname: "Makhaluza",
  date: "2022-02-02",
  progress: ["Bad", "Okay", "Great"],
  streak: ["Great Stream", "Okay Streak", "Bad Streak"],
};
const userdata2 = {
  name: "Dan",
  surname: "RuthChild",
  date: "2022-03-11",
  progress: ["Bad", "Okay", "Great"],
  streak: ["Great Stream", "Okay Streak", "Bad Streak"],
};
const userdata3 = {
  name: "Samantha",
  surname: "Fluir",
  date: "2022-09-1",
  progress: ["Bad", "Okay", "Great"],
  streak: ["Great Stream", "Okay Streak", "Bad Streak"],
};
const userdata4 = {
  name: "Frank",
  surname: "HurlWind",
  date: "2022-05-13",
  progress: ["Bad", "Okay", "Great"],
  streak: ["Great Stream", "Okay Streak", "Bad Streak"],
};
const userdata5 = {
  name: "Juwel",
  surname: "Flont",
  date: "2022-04-11",
  progress: ["Bad", "Okay", "Great"],
  streak: ["Great Stream", "Okay Streak", "Bad Streak"],
};
const userdata6 = {
  name: "James",
  surname: "Bond",
  date: "2022-03-22",
  progress: ["Bad", "Okay", "Great"],
  streak: ["Great Stream", "Okay Streak", "Bad Streak"],
};
const userdata7 = {
  name: "James",
  surname: "Bond",
  date: "2022-03-22",
  progress: ["Bad", "Okay", "Great"],
  streak: ["Great Stream", "Okay Streak", "Bad Streak"],
};
export default class Streak extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-header'>
                <h1 className='card-title'>
                  <span>
                    <b>New Users Streak Table</b>
                  </span>
                </h1>
                <div className='card-tools'>
                  <div
                    className='input-group input-group-sm'
                    style={{ width: 150 }}
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
                      <th>Name</th>
                      <th>Surname</th>
                      <th>Date Joined </th>
                      <th>Streak</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{userdata.name}</td>
                      <td> {userdata.surname}</td>
                      <td>{userdata.date}</td>
                      <td>{userdata.streak[1]}</td>
                      <td>
                        <span className='tag tag-success'>
                          {userdata.progress[0]}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>{userdata1.name}</td>
                      <td> {userdata1.surname}</td>
                      <td>{userdata1.date}</td>
                      <td>{userdata1.streak[2]}</td>
                      <td>
                        <span className='tag tag-success'>
                          {userdata1.progress[2]}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>{userdata2.name}</td>
                      <td> {userdata2.surname}</td>
                      <td>{userdata2.date}</td>
                      <td>{userdata2.streak[1]}</td>
                      <td>
                        <span className='tag tag-success'>
                          {userdata2.progress[2]}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>{userdata3.name}</td>
                      <td> {userdata3.surname}</td>
                      <td>{userdata3.date}</td>
                      <td>{userdata3.streak[2]}</td>
                      <td>
                        <span className='tag tag-success'>
                          {userdata3.progress[0]}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>{userdata4.name}</td>
                      <td> {userdata4.surname}</td>
                      <td>{userdata4.date}</td>
                      <td>{userdata4.streak[2]}</td>
                      <td>
                        <span className='tag tag-success'>
                          {userdata4.progress[0]}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>{userdata5.name}</td>
                      <td> {userdata5.surname}</td>
                      <td>{userdata5.date}</td>
                      <td>{userdata5.streak[1]}</td>
                      <td>
                        <span className='tag tag-success'>
                          {userdata5.progress[2]}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>{userdata6.name}</td>
                      <td> {userdata6.surname}</td>
                      <td>{userdata6.date}</td>
                      <td>{userdata6.streak[1]}</td>
                      <td>
                        <span className='tag tag-success'>
                          {userdata6.progress[1]}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
