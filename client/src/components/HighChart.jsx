import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

const HighChart = ({options}) => {
    return (
        <div id="graphic">
            </div>
        // <HighchartsReact highcharts={Highcharts} options={options} />
    );
};

HighChart.propTypes = {

};

export default HighChart;