import React, { Component } from 'react'
import { Row ,Col} from 'react-bootstrap'
import { RiDownloadLine } from "react-icons/ri";
import ProgressBar from 'react-bootstrap/ProgressBar'
export default class FinanceDoc extends Component {
  render() {
    return (
      <Row className='d-flex '>
        <div>
            <p className="fs-4 ms-3">
                Refrence Point 
            </p>

        </div>
        <div className=' p-4  border  rounded-0 '  >
              <Row>
                 <Col>
                 <p className="fs-6"> Index</p>
                  <p className="fs-6"> Risk</p>
                  <p className="fs-6"> Sector</p>
                 </Col>
                 <Col>
                 <p className="fs-6"> 72</p>
              
               <p className="fs-6"> Low</p>

               <ProgressBar variant="danger"   now={68} />

              
                
</Col>
              </Row>
        </div>
      </Row>
    )
  }
}
