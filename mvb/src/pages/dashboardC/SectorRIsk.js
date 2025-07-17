import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col  , Row} from "react-bootstrap";
import { PieChart } from '@mui/x-charts/PieChart';

import { BarChart , LineChart  } from '@mui/x-charts';
export default class SectorRIsk extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      
        <Col
        className=" shadow p-3 m-4 bg-body-tertiary rounded  "
        style={{ backgroundColor: "white" }}
        xxl={8}
        xl={8}
        lg={8}
        md={8}
        sm={8}
        xs={8}
        >
        <Row>
            <Col> <h1>
                Risk by sector
            </h1></Col>
           <Col>
            <h1>
               Risk by Ragion
            </h1></Col>
        </Row>
        <Row>
          <Col> <BarChart
  xAxis={[{ id: 'barCategories', data: ['Retail', 'Manufacturing', 'Construction', 'Transport'] }]}
  series={[
    {
      data: [3, 4, 5, 4],
      label: '2024 Score',
      stack: 'sectorStack',
      color: '#3886dc'
    },
    {
      data: [1, 2, 3, 2],
      label: '2025 Score',
      stack: 'sectorStack',
      color: '#fecf5c'
    },
    {
      data: [8, 5, 6, 8],
      label: '2025 Score',
      stack: 'sectorStack',
      color: '#f76f71'
    },
  ]}
  height={300}
/></Col>
    <Col>
   <LineChart
  xAxis={[
    {
      data: ['Riyadh', 'Jeddah', 'Dubai', 'Doha', 'Cairo', 'Istanbul', 'Amman', 'Beirut', 'Manama', 'Kuwait', 'Other'],
      scaleType: 'point',
    },
  ]}
  series={[
    {
      data: [12, 18, 14, 11, 17, 16, 19, 13, 15, 10, 9],
      color: '#f76f71',
      showMark: true,
      label: 'City Value',
    },
  ]}
  height={300}
  width={600}
/>

    </Col>
       
        </Row>

        </Col>
      
    )
  }
}
