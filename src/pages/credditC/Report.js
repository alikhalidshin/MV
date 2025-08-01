import React from 'react'
import PropTypes from 'prop-types'
import  { useState } from "react";
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

function Report({show}) {
  const [scores, setScores] = useState({
    overall: 3.5,
    capacity: 3.0,
    willingness: 3.0,
    stability: 2.5,
    contextualRisk: 3.0,
  });

  const [rules] = useState([
    { rule: "More than 2 Legal Cases", action: "Reject", status: "Active" },
    { rule: "Operating in High-Risk Sector", action: "Manual Review", status: "Active" },
    { rule: "SIMAH Score < 600", action: "Reject", status: "Active" },
    { rule: "Revenue < 50,000 SAR", action: "Reject", status: "Draft" },
    { rule: "No ERP or Audited Data", action: "Manual Review", status: "Active" },
  ]);

  const companies = [
    { name: "Al-Tamayouz Co.", score: "4.2", status: "Approved", date: "08 Jul 2025" },
    { name: "Raqeem Logistics", score: "2.9", status: "Rejected", date: "02 Jul 2025" },
    { name: "Jasmine Retailers", score: "3.6", status: "Review", date: "05 Jul 2025" },
  ];

    
  return (
          <Modal show={true} backdrop="static" keyboard={false} size="lg">
        <Modal.Header>
          <Modal.Title>📐 Credit Policy Configuration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Overall Score Threshold</Form.Label>
              <Form.Control
  defaultValue="ali"
               type="number"
                value={scores.overall}
                onChange={(e) => setScores({ ...scores, overall: parseFloat(e.target.value) })}
              />
            </Form.Group>

            <h5>⚖️ Risk-Based Auto Decisions</h5>
            <ul>
              <li>If Final Score ≥ 4.5 → ✅ Auto-Approve</li>
              <li>Score between 3.0–4.49 → ⚠️ Manual Review</li>
              <li>Score &lt; 3.0 → ❌ Auto-Reject</li>
            </ul>

            <h5>📋 Custom Rules</h5>
            <Table bordered>
              <thead>
                <tr>
                  <th>Rule</th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rules.map((r, i) => (
                  <tr key={i}>
                    <td>{r.rule}</td>
                    <td>{r.action}</td>
                    <td>{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">📤 Save Changes</Button>
          <Button variant="secondary" disabled>🔒 Always Open</Button>
        </Modal.Footer>
      </Modal>
  )
}

report.propTypes = {


}

export default Report

