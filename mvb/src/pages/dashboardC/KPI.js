import React, { Component } from "react";
import { Row, Col, Stack, Badge, Card } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
export default class KPI extends Component {
  render() {
    return (
      <div style={{ background: "#f9fbfc" }}>
        <div>
          <Row>
            <Col
              className="m-4 shadow p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center justify-content-center "
              style={{ backgroundColor: "white" }}
            >
              <h4 className="mb-3">Average Credit Score</h4>
              <h1>75</h1>
            </Col>
            <Col
              className="m-4 shadow p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center justify-content-center "
              style={{ backgroundColor: "white" }}
            >
              <h4 className="mb-3">Average Credit Score</h4>
              <h1>75</h1>
            </Col>
            <Col
              className="m-4 shadow p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center justify-content-center "
              style={{ backgroundColor: "white" }}
            >
              <h4 className="mb-3">Average Credit Score</h4>
              <h1>75</h1>
            </Col>
            <Col
              className="m-4 shadow p-3 mb-5 bg-body-tertiary rounded"
              style={{ backgroundColor: "white" }}
            >
              <h2>complete analyse</h2>
              <div className="mb-4">
                <div
                  className="d-flex "
                  style={{
                    alignItems: " flex-end",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>client 3</h4> <Badge bg="success">high</Badge>
                </div>

                <div className="mt-2">
                  <ProgressBar>
                    <ProgressBar variant="success" now={70} key={1} />
                    <ProgressBar variant="warning" now={15} key={2} />
                    <ProgressBar variant="danger" now={15} key={3} />
                  </ProgressBar>
                </div>
              </div>
              <div className="mb-4">
                <div
                  className="d-flex "
                  style={{
                    alignItems: " flex-end",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>client 2</h4> <Badge bg="danger">Hard</Badge>
                </div>

                <div className="mt-2">
                  <ProgressBar>
                    <ProgressBar variant="success" now={5} key={1} />
                    <ProgressBar variant="warning" now={5} key={2} />
                    <ProgressBar variant="danger" now={90} key={3} />
                  </ProgressBar>
                </div>
              </div>
              <div className="mb-4">
                <div
                  className="d-flex "
                  style={{
                    alignItems: " flex-end",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>Client 1</h4> <Badge bg="warning">med</Badge>
                </div>

                <div className="mt-2">
                  <ProgressBar>
                    <ProgressBar variant="success" now={10} key={1} />
                    <ProgressBar variant="warning" now={70} key={2} />
                    <ProgressBar variant="danger" now={20} key={3} />
                  </ProgressBar>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
