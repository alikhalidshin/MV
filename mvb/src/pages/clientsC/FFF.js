import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table, InputGroup } from 'react-bootstrap';

const CreditPolicyConfigurator = () => {
  const [scores, setScores] = useState({
    overall: 3.5,
    capacity: 3.0,
    willingness: 3.0,
    stability: 2.5,
    contextualRisk: 3.0
  });

  const [selectedCompany, setSelectedCompany] = useState('');
  const [customRequest, setCustomRequest] = useState('');
  const [rules, setRules] = useState([
    { name: 'More than 2 Legal Cases', action: 'Reject', status: 'Active' },
    { name: 'Operating in High-Risk Sector', action: 'Manual Review', status: 'Active' },
    { name: 'SIMAH Score < 600', action: 'Reject', status: 'Active' },
    { name: 'Revenue < 50,000 SAR', action: 'Reject', status: 'Draft' },
    { name: 'No ERP or Audited Data', action: 'Manual Review', status: 'Active' }
  ]);

  const handleScoreChange = (key, value) => {
    setScores(prev => ({ ...prev, [key]: parseFloat(value) }));
  };

  const handleAddRule = () => {
    setRules([...rules, { name: '', action: 'Manual Review', status: 'Draft' }]);
  };

  const handleSave = () => {
    const output = {
      scores,
      selectedCompany,
      customRequest,
      rules
    };
    console.log("Saved Config:", JSON.stringify(output, null, 2));
    alert("Configuration Saved ✅");
  };

  const handleRestore = () => {
    setScores({
      overall: 3.5,
      capacity: 3.0,
      willingness: 3.0,
      stability: 2.5,
      contextualRisk: 3.0
    });
    setRules([
      { name: 'More than 2 Legal Cases', action: 'Reject', status: 'Active' },
      { name: 'Operating in High-Risk Sector', action: 'Manual Review', status: 'Active' },
      { name: 'SIMAH Score < 600', action: 'Reject', status: 'Active' },
      { name: 'Revenue < 50,000 SAR', action: 'Reject', status: 'Draft' },
      { name: 'No ERP or Audited Data', action: 'Manual Review', status: 'Active' }
    ]);
    setSelectedCompany('');
    setCustomRequest('');
  };

  return (
    <Container fluid className="p-4">
      <Row>
        {/* 🧮 Left Column */}
        <Col md={6}>
          <h5>📊 Minimum Acceptable Scores</h5>
          {Object.entries(scores).map(([key, value]) => (
            <InputGroup className="mb-3" key={key}>
              <InputGroup.Text>{key.replace(/([A-Z])/g, ' $1')}</InputGroup.Text>
              <Form.Control
                type="number"
                step="0.1"
                value={value}
                onChange={(e) => handleScoreChange(key, e.target.value)}
              />
            </InputGroup>
          ))}

          <h5 className="mt-4">⚖️ Risk-Based Auto Decisions</h5>
          <ul>
            <li>If Final Score ≥ 4.5 → ✅ Auto-Approve</li>
            <li>If 3.0 ≤ Score &lt; 4.5 → ⚠️ Manual Review</li>
            <li>If Score &lt; 3.0 → ❌ Auto-Reject</li>
          </ul>

          <h5 className="mt-4">📋 Custom Rules</h5>
          <Table bordered>
            <thead>
              <tr>
                <th>Rule</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rules.map((rule, index) => (
                <tr key={index}>
                  <td><Form.Control value={rule.name} onChange={(e) => {
                    const updated = [...rules];
                    updated[index].name = e.target.value;
                    setRules(updated);
                  }} /></td>
                  <td>
                    <Form.Select value={rule.action} onChange={(e) => {
                      const updated = [...rules];
                      updated[index].action = e.target.value;
                      setRules(updated);
                    }}>
                      <option>Reject</option>
                      <option>Manual Review</option>
                      <option>Approve</option>
                    </Form.Select>
                  </td>
                  <td>
                    <Form.Select value={rule.status} onChange={(e) => {
                      const updated = [...rules];
                      updated[index].status = e.target.value;
                      setRules(updated);
                    }}>
                      <option>Active</option>
                      <option>Draft</option>
                    </Form.Select>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="outline-primary" onClick={handleAddRule}>+ Add New Rule</Button>
        </Col>

        {/* 🏢 Right Column */}
        <Col md={6}>
          <h5>🏢 Select Company</h5>
          <Form.Select className="mb-3" value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
            <option value="">-- Choose Company --</option>
            <option value="Alpha Corp">Alpha Corp</option>
            <option value="Sanam Ltd">Sanam Ltd</option>
            <option value="Riyadh Solutions">Riyadh Solutions</option>
            <option value="Tadawul Tech">Tadawul Tech</option>
          </Form.Select>

          <Form.Group>
            <Form.Label>📝 Custom Request</Form.Label>
            <Form.Control as="textarea" rows={6} value={customRequest} onChange={(e) => setCustomRequest(e.target.value)} />
          </Form.Group>

          <div className="mt-4">
            <Button variant="success" className="me-2" onClick={handleSave}>💾 Save Changes</Button>
            <Button variant="outline-danger" onClick={handleRestore}>↩️ Restore Defaults</Button>
          </div>

          <div className="mt-4 p-3 border rounded bg-light">
            <strong>🧠 Decision Hint:</strong><br />
            {scores.overall >= 4.5
              ? "✅ Auto-Approved based on score and rules"
              : scores.overall >= 3.0
              ? "⚠️ Manual Review required"
              : "❌ Auto-Rejected"}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreditPolicyConfigurator;