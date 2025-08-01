import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Table,
  InputGroup,
  Modal,
} from "react-bootstrap";

const defaultRules = [];

const defaultScores = {
  overall: 3.5,
  capacity: 3.0,
  willingness: 3.0,
  stability: 2.5,
  contextualRisk: 3.0,
};

function RulesSection({
  formData = {},
  setFormData,
  handleSave,
  handleRestore,
  title = "General Rules",
}) {
  const formFields = [
    { name: "age", label: "Business Age (Years)", type: "number" },
    {
      name: "revenueExpenses",
      label: "Avg. Monthly Revenue and Expenses",
      type: "text",
    },
   ,
    {
      name: "hasERP",
      label: "Do You Use ERP/CRM System?",
      type: "select",
      options: ["yes", "no"],
    },
    {
      name: "erpSystem",
      label: "Choose ERP System",
      type: "select",
      options: ["Zoho", "Odoo", "SAP", "Salesforce"],
      showIf: (fd) => fd.hasERP === "yes",
    },
    {
      name: "crmSystem",
      label: "Choose ERP System",
      type: "select",
      options: ["Zoho", "Odoo", "SAP", "Salesforce"],
      showIf: (fd) => fd.hasERP === "yes",
    },
    {
      name: "liquidity ratios",
      label: "liquidity ratios",
      type: "number",      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "profit ability"
,
      label: "profit ability"
,
      type: "number",      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "operating cash flows"
,
      label: "operating cash flows"
,
      type: "number",      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "constracts with the last 5 suppliers and clients"

,
      label: "constracts with the last 5 suppliers and clients"

,
      type: "number",      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "Adminstrave ownership"


,
      label: "Adminstrave ownership"


,
      type: "number",      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "business sector"


,
      label: "business sector"


,
      type: "number",
      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "dept ratios",
      label: "dept ratios",
         type: "number",
      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "manualRevenue",
      label: "Monthly Revenue",
            type: "number",
      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "invoiceVolume",
      label: "Invoice Volume",
          type: "number",
      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "paymentRate",
      label: "Payment Timeliness (%)",
      type: "number",      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "delays",
      label: "Delays or Defaults",
      type: "number",      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "loans",
      label: "Current Liabilities / Loans",
      type: "number",      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "bankBalance",
      label: "Bank Cash Balance (Optional)",
      type: "number",      showIf: (fd) => fd.hasERP === "no",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const visibleFields = formFields.filter(
    (item) =>
      item.always ||
      !item.showIf ||
      (typeof item.showIf === "function" && item.showIf(formData))
  );

  return (
    <div className="mb-4">
      <h5 className="mb-3">{title}</h5>
      <Table bordered responsive className="m-4">
        <thead>
          <tr>
            <th>Field</th>
            <th>Input</th>
            <th>Value</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {visibleFields.map((item) => (
            <tr key={item.name}>
              <td>{item.label}</td>
              <td>
                {item.type === "select" ? (
                  <Form.Select
                    name={item.name}
                    value={formData[item.name] || ""}
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    {item.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </Form.Select>
                ) : item.type === "file" ? (
                  <Form.Control
                    type="file"
                    name={item.name}
                    onChange={handleChange}
                  />
                ) : (
                  <Form.Control
                    type={item.type}
                    name={item.name}
                    value={formData[item.name] || ""}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td>
                {item.type === "file"
                  ? formData[item.name]?.name || "No file selected"
                  : formData[item.name] || ""}
              </td>
              <td>
                <Form.Select
                  name={item.name + "_action"}
                  value={formData[item.name + "_action"] || ""}
                  onChange={handleChange}
                >
                  <option value="">Select Action...</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </Form.Select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex gap-2 justify-content-end">
        <Button
          variant="success"
          onClick={() => {
            console.log("d", JSON.stringify(formData, null, 2));
            if (handleSave) handleSave();
          }}
        >
          💾 Save
        </Button>
        <Button variant="outline-danger" onClick={handleRestore}>
          ↩️ Restore
        </Button>
      </div>
    </div>
  );
}

const CreditPolicyConfigurator = ({ setFormData }) => {
  const [generalRules, setGeneralRules] = useState({});
  const [scores, setScores] = useState({ ...defaultScores });
  const [showScoresModal, setShowScoresModal] = useState(false);

  const handleSaveGeneral = () => {
    localStorage.setItem("generalRules", JSON.stringify(generalRules));
    console.log(
      "تم الحفظ في localStorage:",
      JSON.stringify(generalRules, null, 2)
    );
    console.log(JSON.stringify(generalRules, null, 2));
  };
  const handleRestoreGeneral = () => {
    setGeneralRules({ ...defaultRules });
    alert("↩️ General Rules Restored");
  };
  const handleScoreChange = (key, value) => {
    setScores((prev) => ({ ...prev, [key]: parseFloat(value) }));
  };
  const handleRestoreScores = () => {
    setScores({ ...defaultScores });
    alert("↩️ Scores Restored");
  };

  return (
    <>
      <div className="mb-3 d-flex gap-3">
        <Button
          variant="outline-primary"
          onClick={() => setShowScoresModal(true)}
        >
          📊 View Score Thresholds
        </Button>
      </div>
      <RulesSection
        formData={generalRules}
        setFormData={setGeneralRules} //console
        handleSave={handleSaveGeneral}
        handleRestore={handleRestoreGeneral}
        title="General Rules"
        setFormdata={setFormData} // Pass setFormData to RulesSection
      />
      <Modal
        show={showScoresModal}
        onHide={() => setShowScoresModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>📊 Minimum Acceptable Scores</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {Object.entries(scores).map(([key, value]) => (
              <Col md={6} key={key} className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    {key.replace(/([A-Z])/g, " $1")}
                  </InputGroup.Text>
                  <Form.Control
                    type="number"
                    step="0.1"
                    value={value}
                    onChange={(e) => handleScoreChange(key, e.target.value)}
                  />
                </InputGroup>
              </Col>
            ))}
          </Row>
          <h6 className="mt-3">⚖️ Risk-Based Auto Decisions</h6>
          <ul>
            <li>✅ Final Score ≥ 4.5 → Auto-Approve</li>
            <li>⚠️ 3.0 ≤ Score &lt; 4.5 → Manual Review</li>
            <li>❌ Score &lt; 3.0 → Auto-Reject</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => alert("✅ Scores Saved")}>
            💾 Save
          </Button>
          <Button variant="outline-danger" onClick={handleRestoreScores}>
            ↩️ Restore
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreditPolicyConfigurator;
