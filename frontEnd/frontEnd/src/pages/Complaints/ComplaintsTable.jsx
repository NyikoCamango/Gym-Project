import React, { Component } from "react";

export default class ComplaintsTable extends Component {
  render() {
    return (
      <div>
        <div>
          <div className='row'>
            <div className='col-12'>
              <div className='card'>
                <div className='card-header'>
                  <h3 className='card-title'>Complaints Table</h3>
                </div>
                <div className='card-body'>
                  <table className='table table-bordered table-hover'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>183</td>
                        <td>John Doe</td>
                        <td>11-7-2014</td>
                        <td>Approved</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='true'>
                        <td>219</td>
                        <td>Alexander Pierce</td>
                        <td>11-7-2014</td>
                        <td>Pending</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='true'>
                        <td>657</td>
                        <td>Alexander Pierce</td>
                        <td>11-7-2014</td>
                        <td>Approved</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>175</td>
                        <td>Mike Doe</td>
                        <td>11-7-2014</td>
                        <td>Denied</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>134</td>
                        <td>Jim Doe</td>
                        <td>11-7-2014</td>
                        <td>Approved</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>494</td>
                        <td>Victoria Doe</td>
                        <td>11-7-2014</td>
                        <td>Pending</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>832</td>
                        <td>Michael Doe</td>
                        <td>11-7-2014</td>
                        <td>Approved</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>982</td>
                        <td>Rocky Doe</td>
                        <td>11-7-2014</td>
                        <td>Denied</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
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
      </div>
    );
  }
}
