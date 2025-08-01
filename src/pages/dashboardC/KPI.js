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
              <h4 className="mb-3">Active client</h4>
              <h1>120</h1>
            </Col>
            <Col
              className="m-4 shadow p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center justify-content-center "
              style={{ backgroundColor: "white" }}
            >
              <h4 className="mb-3">Accepted rate</h4>
              <h1>85%</h1>
            </Col>
            <Col
              className="m-4 shadow p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center justify-content-center "
              style={{ backgroundColor: "white" }}
            >
              <h4 className="mb-3">Completed Analyses</h4>
              <h1>310</h1>
            </Col>
            <Col

              className="m-4 shadow p-3 mb-5 bg-body-tertiary rounded"
              style={{ backgroundColor: "white" }}
            >
              <h2>last Analyses</h2>
              <div className="mb-4">
                <div
                  className="d-flex "
                  style={{
                    alignItems: " flex-end",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>Barakah Industries</h4> <Badge bg="success">Low</Badge>
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
                  <h4>Hajar Freight Co</h4> <Badge bg="danger">High</Badge>
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
                  <h4>Al-Tamayouz Co.</h4> <Badge bg="warning">med</Badge>
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
