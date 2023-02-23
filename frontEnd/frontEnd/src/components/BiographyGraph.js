import React, { Component } from "react";

export default class BiographyGraph extends Component {
  /*
   * BAR CHART
   * ---------
   */

  /*    var bar_data = {
        data: [
          
          [2, 8],
          
          [4, 13],
          
          [6, 9],
        ],
        bars: { show: true },
      };
      $.plot("#bar-chart", [bar_data], {
        grid: {
          borderWidth: 1,
          borderColor: "#f3f3f3",
          tickColor: "#f3f3f3",
        },
        series: {
          bars: {
            show: true,
            barWidth: 0.5,
            align: "center",
          },
        },
        colors: ["#3c8dbc"],
        xaxis: {
          ticks: [
            
            [2, "Events"],
            
            [4, "Attendance"],
            
            [6, "COmplaints"],
          ],
        },
      });*/
  /* END BAR CHART */
  render() {
    return (
      <div>
        <div>Overall Stats</div>
        <br />
        <div class='col-md-6'>
          <div class='card card-primary card-outline'>
            <div class='card-header'>
              <h3 class='card-title'>
                <i class='far fa-chart-bar'></i>
                Bar Chart
              </h3>
              <div class='card-tools'>
                <button
                  type='button'
                  class='btn btn-tool'
                  data-card-widget='collapse'
                >
                  <i class='fas fa-minus'></i>
                </button>
                <button
                  type='button'
                  class='btn btn-tool'
                  data-card-widget='remove'
                >
                  <i class='fas fa-times'></i>
                </button>
              </div>
            </div>
            <div class='card-body'>
              <div id='bar-chart'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
