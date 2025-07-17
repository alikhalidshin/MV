import React, { Component } from 'react'
import { BarChart , LineChart  } from '@mui/x-charts';

import { Col } from "react-bootstrap";
class Trend extends Component {
  render() {
    return (
      <Col
        className=" shadow p-3 m-4 bg-body-tertiary rounded  "
        style={{ backgroundColor: "white" }}>
    <h1>
        Trends
    </h1>
<LineChart
  xAxis={[
    {
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      scaleType: 'point',
    },
  ]}
  series={[
    {
      data: [5, 7, 3, 6, 9, 2, 8, 5, 6, 7, 4, 6],
      label: 'Data A',
      color: '#EF03C5',
      showMark: false,
    },
    {
      data: [3, 6, 4, 7, 5, 8, 6, 4, 7, 5, 6, 9],
      label: 'Data B',
      color: '#393199',
      showMark: false,
    },
  ]}
  width={1200}
  height={300}
/>
        </Col>
    )
  }
}
export default Trend
