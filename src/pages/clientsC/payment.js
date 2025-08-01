import React, { Component } from 'react'
import  { Col,Row , Card} from 'react-bootstrap'
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";



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
      constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          data: [10, 12, 8, 14, 11],
          label: 'بيانات',
          color: '#007bff',
          area: false,
           showTicks: false,
           showAxisLine: false,

        },
      ],
      xAxis: [
        {
          data: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو'],
          scaleType: '',
          valueFormatter: () => '',
          showTicks: false,
        },
      ],
      yAxis: [
        {
          showTicks: false,
          valueFormatter: () => '',
        },
      ],
      chartSize: {
        width: 600,
        height: 300,
      },
    };
  }

  render() {
    const { series, xAxis, yAxis, chartSize } = this.state;
    return (
      <Row className='mt-3'>
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
         <Col className='rounded-4 m-2'>
 <Card style={{
  
}}>
  <Card.Body>
    <div className='d-flex align-items-center'>
      <FaArrowTrendUp size={30} />
      <p className="fs-4 ms-3 mb-0">
        Bounced Payment
      </p>
    </div>
    <p className="fs-2 mt-3">
      1
    </p>
  </Card.Body>
</Card>

        </Col>


        
      </Row>
      
    )
  }
}
