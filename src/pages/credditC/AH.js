import React, { useState } from "react";
import { Col, Row, Badge, Button, Table, Modal, Form } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";

function getStatusBadge(status) {
  const map = {
    Approved: "success",
    Rejected: "warning",
    Review: "danger",
  };
  return <Badge bg={map[status]}>{status}</Badge>;
}

function AH() {
  const [scores, setScores] = useState({
    overall: 3.5,
    capacity: 3.0,
    willingness: 3.0,
    stability: 2.5,
    contextualRisk: 3.0,
  });

  const [rules] = useState([
     ]);

  const companies = [
    { name: "Al-Tamayouz Co.", score: "4.2", status: "Approved", date: "08 Jul 2025" },
    { name: "Raqeem Logistics", score: "2.9", status: "Rejected", date: "02 Jul 2025" },
    { name: "Jasmine Retailers", score: "3.6", status: "Review", date: "05 Jul 2025" },
  ];

  return (
    <div className="container mt-4 love p-3 rounded-4 me-4"
    style={{
      width: "95%" ,
    }}
    >
      <Row className="m-4">
        <div className="d-flex justify-content-between mb-4 pb-2 border-bottom ">
          <h3>Analyse History</h3>
          <Button size="sm">View All</Button>
        </div>

        <Table responsive className="table-light">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Score</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index}>
                <td>{company.name}</td>
                <td>{company.score}</td>
                <td>{company.date}</td>
                <td>{getStatusBadge(company.status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>

      {/* ✅ Modal مفتوح دائمًا */}

    </div>
  );
}

export default AH;