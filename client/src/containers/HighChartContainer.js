// LIBS
import React, { useState } from "react";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
// COMPONENTS
import Highchart from "../components/HighChart.jsx";
import Highcharts from "highcharts";
import { transparent } from "material-ui/styles/colors";

var pieColors = (function(data) {
  var colors = [],
    base = Highcharts.getOptions().colors[0],
    i;

  for (i = 0; i < 10; i += 1) {
    // Start out with a darkened base color (negative brighten), and end
    // up with a much brighter color
    colors.push(
      Highcharts.Color(base)
        .brighten((i - 3) / 7)
        .get()
    );
  }
  return colors;
})();

class HighChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Gases",
          data: [
            {
              name: "Argon",
              y: 0.9,
              color: "#3498db"
            },
            {
              name: "Nitrogen",
              y: 78.1,
              color: "#9b59b6"
            },
            {
              name: "Oxygen",
              y: 20.9,
              color: "#2ecc71"
            },
            {
              name: "Trace Gases",
              y: 0.1,
              color: "#f1c40f"
            }
          ]
        }
      ]
    };
  }

  highChartsRender() {

    Highcharts.chart("graphic", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
        backgroundColor: transparent,
      },
      title: {
        text: ""
      },
      credits: {
        text: ""
      },
      exporting: {
        buttons: []
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          colors: pieColors,
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b><br>{point.percentage:.1f} %",
            distance: -50,
            filter: {
              property: "percentage",
              operator: ">",
              value: 4
            }
          }
        }
      },
      series: [
        {
          name: "Share",
          data: this.props.data && this.props.data
        }
      ]
    });
  }

  componentDidUpdate() {
    if(this.props.data){
      this.highChartsRender();
    }
    
  }
  render() {
    return <Highchart />;
  }
}

HighChartContainer.propTypes = {};

const mapStateToProps = state => {
  return {
      data:state.chart.data
  };
};

export default connect(mapStateToProps)(HighChartContainer);
