import React, { Component } from 'react'
import  { Col,Row , Card} from 'react-bootstrap'
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Paper, Typography } from '@mui/material';

import { LineChart } from '@mui/x-charts';


const data = {
  labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو'],
  datasets: [
    {
      label: 'بيانات',
      data: [10, 12, 8, 14, 11],
      backgroundColor: 'rgba(0,123,255,0.4)',
      borderColor: '#007bff',
      fill: true,
      tension: 0.3,
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};


export default class Graphs extends Component {
      constructor(props)
  {
    super(props)
    this.state={
      backgroundColor:"#fcfafa",
      text:"#070303",
      primary:"#ab615f",
      secondary:"#ed8787",
      accent:"#b09696"

    }
  }
  render() {
    return (
      <Row className='mt-3'>
        <Col className='rounded-4 m-2'>
         <Card style={{
          
        }}>
          <Card.Body>
            <div className='d-flex align-items-center'>
              <FaArrowTrendUp size={30} />
              <p className="fs-4 ms-3 mb-0">
                Revnue
              </p>
            </div>
            <p className="fs-2 mt-3">
              25,4M
            </p>
          </Card.Body>
        </Card>
        
                </Col>
         <Col className='rounded-4 m-2'>
          <Card style={{
           
         }}>
           <Card.Body>
             <div className='d-flex align-items-center'>
               <FaArrowTrendUp size={30} />
               <p className="fs-4 ms-3 mb-0">
                AVG.Day
               </p>
             </div>
             <p className="fs-2 mt-3">
              12 DAY
             </p>
           </Card.Body>
         </Card>
         
                 </Col>
        
      </Row>
      
    )
  }
}
