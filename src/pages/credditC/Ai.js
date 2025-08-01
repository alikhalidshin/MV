import React, { useState } from 'react';
import { Modal, Card, Row, Col, Button } from 'react-bootstrap';
const aiInsights = [
  {
    title: "AI Recommendation",
    text: "Suggests manual review due to borderline score and missing audited data."
  },
  {
    title: "AI Explanation",
    text: "High contextual risk, low stability. ERP usage provides a redeeming signal."
  },
  
];

function AIOverviewModal(props) {
  const [show, setShow] = useState(true); // Set to true for demo, you can control visibility externally

  const handleClose = () => setShow(false);

  return (
    <Modal show={props.show} onHide={props.onHide} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>AI Assessment Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
  <div className="d-flex gap-3 flex-wrap">
    {aiInsights.map((item, index) => (
      <div className="flex-fill" key={index} style={{ minWidth: '300px' }}>
        <Card className="h-100">
          <Card.Body className="d-flex flex-column">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="flex-grow-1">{item.text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AIOverviewModal;
