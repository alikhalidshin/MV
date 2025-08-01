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
            <Col className=' d-flex flex-column align-items-center justify-content-center'>
             <h1>
                Risk by sector
            </h1>
            <span>{"(ISIC)"}</span>
            </Col>
            <Col md={7} xxl={7} xl={7} className='p-4' > <BarChart
  xAxis={[{ id: 'barCategories', data: ['Retail', 'Manufacturing', 'Construction', 'logistics'] }]}
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
        </Row>
        <Row>
          <Col className=' d-flex flex-column align-items-center justify-content-center'>
             <h1>
                Risk by Region
            </h1>
            
            </Col>
    <Col md={11} xxl={11} xl={11} lg={11} className='p-4' style={{overflow: 'hidden'}}>
   <LineChart
  xAxis={[
    {
      data: ['Riyadh', 'Jeddah', 'Dubai', 'Doha', 'Cairo', 'Istanbul', 'Amman', 'Beirut', 'Manama', 'Kuwait', 'Al-madina'],
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
