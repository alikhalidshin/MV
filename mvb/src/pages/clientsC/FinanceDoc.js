import React, { Component } from 'react'
import { Row ,Col} from 'react-bootstrap'
import { RiDownloadLine } from "react-icons/ri";

export default class FinanceDoc extends Component {
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
      <Row className='d-flex '>
        <div>
            <p className="fs-4 ms-3">
                Finance Documents
            </p>

        </div>
        <div className='d-flex d-flex justify-content-center border  rounded-4 '  >
               <p className="fs-2 text-body-secondary">
                  < RiDownloadLine/>  Drop Files Here Click To Upload
               </p>
        </div>
      </Row>
    )
  }
}
