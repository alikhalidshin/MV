import React from "react";
import { Col, Row, Card, ProgressBar } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";

function Cards({ wiil, capacity, context, stability }) {
  const ali = [
    {
      name: "Capacity",
      num: capacity,
      dis: "Represents the client's financial or operational ability to meet obligations.",
    },
    {
      name: "Willingness",
      num: wiil,
      dis: "Reflects the client's intent and commitment to comply with expected standards.",
    },
    {
      name: "Context",
      num: context,
      dis: "Evaluates environmental, market, or situational background influencing performance.",
    },
    {
      name: "Stability",
      num: stability,
      dis: "Assesses consistency in behavior, history, and external factors over time.",
    },
  ];

  return (
    <Row className="mt-1 rounded-4 p-4 m-4 mb-2 mycard justify-content-center">
      {ali.map((item, i) => (
        <Col key={i} md={3} className="d-flex">
          <Zoom delay={i * 100}>
            <Card className="h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fs-5 fw-bold">{item.name}</Card.Title>
                <Card.Text className="mb-0 d-flex align-items-center justify-content-between fw-bold">
                  <span className="fs-5 mb-0">{item.num}%</span>
                </Card.Text>
                <ProgressBar variant={"danger"} now={item.num} label={`${item.num}%`} className="mb-3" />
                <span className="fw-bold text-secondary">{item.dis}</span>
              </Card.Body>
            </Card>
          </Zoom>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;