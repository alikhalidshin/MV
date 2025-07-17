import React, { Component } from 'react'
import {Col , Stack} from "react-bootstrap"
class News extends Component {
  render() {
    return (
      <Col
        className=" shadow p-3 m-4 bg-body-tertiary rounded  "
        style={{ backgroundColor: "white" }}>
            <h1>
                Finance Knews 
            </h1>
            <Stack>
                <div className="border-bottom ">
                <div
                  className="d-flex "
                  style={{
                    alignItems: " flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>Title of the news</h4> <span className='fw-light fs-6'>2h ago</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis dolorem cum recusandae pariatur nam natus sunt totam cumque tempore!</p>
                </div>
            </Stack>
            
        </Col>
    )
  }
}
export default News
