import React from 'react';
import { Col, Row, Badge } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Graph() {
  return (
    <Row className="border-0 m-4 rounded-4 p-4 love">
      <Col className="border-end d-flex flex-column justify-content-center align-items-center">
        <p className="fs-3">Credit summary</p>
        <div className="p-4" >
          <CircularProgressbar
            value={69}
            text={`${69}%`}
            styles={{
              path: {
                stroke: `rgba(176, 150, 150, ${69 / 100})`,
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
              },
              trail: {
                stroke: '#d6d6d6',
                strokeLinecap: 'butt',
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
              },
              text: {
                fill: '#f88',
                fontSize: '16px',
              },
              background: {
                fill: '#000000FF',
              },
            }}
          />
        </div>
        <p className="fs-5 mb-0">⭐ Final Score: 3.2 / 5.0</p>
      </Col>

      <Col className="border-start px-4">
        <p className="fs-4 mb-1">
          ⚠️ Risk Level: <Badge bg="warning" text="dark">MEDIUM</Badge>
        </p>
        <p className="fs-4 mb-1">
          🔍 Decision: ⚠️ Review (by Policy)
        </p>
        <p className="fs-4 mb-1">
          🔄 Manual Override: ✅ Applied
        </p>
        <p className="fs-4 mb-1">
          👤 By: Nour Al-Mutairi (Credit Mgr)
        </p>
        <p className="fs-4 mb-1">
          📅 Date: 08 Jul 2025
        </p>
        <p className="fs-4 mb-1">
          📎 Reason: Strategic Client, history with parent company
        </p>
        <p className="fs-4 mb-1">
          ✅ Final Decision: <Badge bg="success">APPROVED</Badge>
        </p>
      </Col>
    </Row>
  );
}

export default Graph;