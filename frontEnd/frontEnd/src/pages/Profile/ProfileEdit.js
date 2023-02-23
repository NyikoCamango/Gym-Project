import React, { Component } from "react";

export default class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <div class='row'>
          <div class='col-md-6'>
            <div class='card card-primary'>
              <div class='card-header'>
                <h3 class='card-title'>User Settings</h3>
                <div class='card-tools'>
                  <button
                    type='button'
                    class='btn btn-tool'
                    data-card-widget='collapse'
                    title='Collapse'
                  >
                    <i class='fas fa-minus'></i>
                  </button>
                </div>
              </div>
              <div class='card-body'></div>
              <div class='form-group'>
                <label for='inputName'>User Name</label>
                <input type='text' id='inputName' class='form-control' />
              </div>

              <div class='form-group'>
                <label for='inputStatus'>Status</label>
                <select id='inputStatus' class='form-control custom-select'>
                  <option disabled>Select TimeFrame</option>
                  <option>0-3 Months</option>
                  <option>3-6 months</option>
                  <option selected>6-12 months</option>
                </select>
              </div>
              <div class='form-group'>
                <label for='inputStatus'>Body Goal</label>
                <select id='inputStatus' class='form-control custom-select'>
                  <option disabled>Select BodyGoal</option>
                  <option>Lose Weight</option>
                  <option>Bulk Up</option>
                  <option selected>Tone Body</option>
                </select>
              </div>
            </div>
            <div class='form-group'>
              <label for='inputProjectLeader'>Trainer</label>
              <select id='inputStatus' class='form-control custom-select'>
                <option>Tshepo Mthembu</option>
                <option>James Ruth</option>
                <option>Marty Byrde</option>
                <option>Susan Flutter</option>
                <option>William Swam</option>
                <option>Nyiko Yuth</option>
                <option>Jessica Radebe</option>
                <option>Paul Wilt</option>
                <option>Dan Bambu</option>
                <option>Sihle George</option>
                <option>Martin tyler</option>
                <option>Piet Groem</option>
              </select>
              <div class='form-group'>
                <label for='inputDescription'>Project Description</label>
                <textarea id='inputDescription' class='form-control' rows='4'>
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh
                  dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.
                </textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
