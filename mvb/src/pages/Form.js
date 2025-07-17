import {
  Row,
  Button,
  Col,
  Container,
  Nav,
  InputGroup,
  Form,
  Offcanvas,
  ProgressBar,
  ListGroup,
} from "react-bootstrap";
import React, { Component, createRef, createContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "react-bootstrap/Card";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillDashboard } from "react-icons/ai";
import { MdTask } from "react-icons/md";
import { BsActivity } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { GiPunch } from "react-icons/gi";
import { CiGrid31 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";
export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        "idea",
        "something",
        "something",
        "some",
        "التجربة",
        "التقييم",
        "الإطلاق",
      ],
      currentStep: 2, // غيّر الرقم حسب المرحلة الحالية (يبدأ من 0)
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    const { show } = this.state;
    const { sum } = 2;
    return (
      <div
        style={{
          height: "97vh",
          backgroundColor: "#ffffff",
          width: "100%",
          overflow: "auto",
        }}
        className="d-flex  flex-column p-4"
      >
        <Row className="myRow">
          <Col
            xxl={11}
            xl={11}
            lg={10}
            md={10}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <h1>Snam</h1>
          </Col>
          <Col></Col>
        </Row>
        <Row className="flex-grow-1">
          <Col
            className="d-flex   flex-column  "
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <ListGroup variant="flush">
              <ListGroup.Item className="border-0 m-3 ">
                {" "}
                <AiFillDashboard size={25} color="#4cbcfc" /> Dashboard
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-3 ">
                {" "}
                <MdTask size={25} color="#4cbcfc" /> My CV
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-3 ">
                {" "}
                <BsActivity size={25} color="#4cbcfc" /> Active{" "}
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-3 ">
                {" "}
                <FaCalendarAlt size={25} color="#4cbcfc" /> Calender
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-3 ">
                {" "}
                <FaFileInvoice size={25} color="#4cbcfc" /> Taxes
              </ListGroup.Item>
              <ListGroup.Item className="border-0 m-3 ">
                {" "}
                <GiPunch size={25} color="#4cbcfc" /> Power of women
              </ListGroup.Item>
            </ListGroup>
            <div className="flex-grow-1 rounded-3 border border-primary "></div>
          </Col>
          <Col
            style={{
              backgroundColor: "#f4f4fc",
            }}
            className=""
            xxl={10}
            xl={10}
            lg={9}
            md={9}
          >
            <Row>
              <Col className="">
                <div className="position-relative m-4">
                  {/* Progress line */}
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Progress"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ height: "1px" }}
                  >
                    <ProgressBar now={50} />
                  </div>
                  {/* Step buttons */}
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    className="position-absolute top-0 start-0 translate-middle rounded-pill"
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    s1
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    className="position-absolute top-0 start-50 translate-middle rounded-pill"
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    S2
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="position-absolute top-0 start-100 translate-middle rounded-pill"
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    S3
                  </Button>
                </div>
              </Col>
            </Row>
            <Row
              className="rounded-3 p-4 m-2"
              style={{
                backgroundColor: "#ffffff",
              }}
            >
              <Row
                className=" "
                style={{
                  borderBottom: "3px solid #4cbcfc",
                }}
              >
                <Col xxl={4} xl={4} lg={4} md={4} className="rounded-3">
                  <Card className="border-0">
                    <Card.Body>
                      <Card.Title>
                        {" "}
                        <CiGrid31 size={50} color="#4cbcfc" /> main form{" "}
                      </Card.Title>
                      <Card.Text>
                        <InputGroup>
                          <InputGroup.Text
                            tyle={{
                              border: "none",
                              backgroundColor: "balck",
                            }}
                          >
                            +966
                          </InputGroup.Text>
                          <Form.Control
                            style={{
                              border: "1px solid #4cbcfc",
                              borderRadius: "5px",
                            }}
                          />
                        </InputGroup>
                      </Card.Text>
                      <InputGroup>
                        <InputGroup.Text>something</InputGroup.Text>
                        <Form.Control />
                      </InputGroup>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xxl={4} xl={4} lg={4} md={4} className="rounded-3">
                  {" "}
                  <Card className="border-0">
                    <Card.Body>
                      <Card.Title>
                        {" "}
                        <BsCurrencyBitcoin size={60} color="#4cbcfc" /> hello
                        world{" "}
                      </Card.Title>
                      <Card.Text>
                        <InputGroup>
                          <InputGroup.Text>us</InputGroup.Text>
                          <Form.Control aria-label="With sssssss" />
                        </InputGroup>
                      </Card.Text>
                      <InputGroup>
                        <InputGroup.Text>baby</InputGroup.Text>
                        <Form.Control />
                      </InputGroup>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="border-0">
                    <Card.Body>
                      <Card.Title>
                        {" "}
                        <FaLocationDot /> some thin{" "}
                      </Card.Title>
                      <Card.Text className="d-flex">
                        <div
                          style={{
                            backgroundColor: "#f3f3fb",
                            height: "50vh",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center", // يوسّط أفقياً
                            alignItems: "center",
                          }}
                        >
                          <CiCloudOn size={200} color="#4cbcfc" />
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
