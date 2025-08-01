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
        Revenume & Profits
    </h1>
<LineChart
  xAxis={[
    {
      data: ['2019', '2019', '2020', '2021', '2022', '2023', '2025'],
      scaleType: 'point',
    },
  ]}
  series={[
    {
      data: [8, 9, 6, 6, 9, 8, 10, 6, 6, 7, 9, 6].sort(),
      label: 'Revuenue',
      color: '#EF03C5',
      showMark: false,
    },
    {
      data: [3, 5, 4, 4, 3, 5, 4, 4, 5, 2, 3, 5],
      label: 'Profit',
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
