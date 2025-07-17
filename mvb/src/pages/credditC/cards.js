import React from "react";
import { Col, Row, Card } from "react-bootstrap";

function Cards() {
  const ali = [
    { name: "Capacity", num: "88", dis: "some thi ghsba" },
    { name: "Willingness", num: "88", dis: "some thi ghsba" },
    { name: "Context", num: "88", dis: "some thi ghsba" },
    { name: "Stability", num: "88", dis: "some thi ghsba" },
  ];

  return (
    <Row className="mt-1 rounded-4 p-4 m-4 mb-2 mycard justify-content-center">
      {ali.map((item, i) => (
        <Col key={i} md={3} className="d-flex">
          <Card className="w-100 mt-1 border-0 shadow-sm rounded">
            <div className="p-3 text-center">
              <h5 className="mb-1">{item.name}</h5>
              <p className="mb-1">{item.num}</p>
              <p className="mb-1 text-me"> 88%</p>
              <p className="text-muted small mb-0">{item.dis}</p>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;