import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Table,
  InputGroup,
  Modal,
  Tabs,
  Tab,
  Alert,
} from "react-bootstrap";

const defaultRules = [
  {
    name: "More than 2 Legal Cases",
    action: "Reject",
    status: "Active",
    threshold: "",
    condition: "Greater Than",
  },
  {
    name: "Operating in High-Risk Sector",
    action: "Manual Review",
    status: "Active",
    threshold: "",
    condition: "Greater Than",
  },
  {
    name: "SIMAH Score < 600",
    action: "Reject",
    status: "Active",
    threshold: "600",
    condition: "Less Than",
  },
  {
    name: "Revenue < 50,000 SAR",
    action: "Reject",
    status: "Draft",
    threshold: "50000",
    condition: "Less Than",
  },
  {
    name: "No ERP or Audited Data",
    action: "Manual Review",
    status: "Active",
    threshold: "",
    condition: "Greater Than",
  },
];

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
  title = "Custom Rules",
}) {
  // تعريف الحقول
  const formFields = [
    { name: "businessAge", label: "Business Age (Years)", type: "number" },
    {
      name: "revenueExpenses",
      label: "Avg. Monthly Revenue and Expenses",
      type: "text",
    },
    {
      name: "openBanking",
      label: "Is Open Banking Available?",
      type: "select",
      options: ["yes", "no"],
    },
    {
      name: "hasERP",
      label: "Do You Use ERP/CRM System?",
      type: "select",
      options: ["yes", "no"],
    },
    // ERP Path
    {
      name: "erpSystem",
      label: "Choose ERP System",
      type: "select",
      options: ["Zoho", "Odoo", "SAP", "Salesforce"],
      showIf: (fd) => fd.hasERP === "yes",
    },
    // Manual Path
    {
      name: "manualRevenue",
      label: "Monthly Revenue",
      type: "text",
      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "invoiceVolume",
      label: "Invoice Volume",
      type: "text",
      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "paymentRate",
      label: "Payment Timeliness (%)",
      type: "text",
      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "delays",
      label: "Delays or Defaults",
      type: "text",
      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "loans",
      label: "Current Liabilities / Loans",
      type: "text",
      showIf: (fd) => fd.hasERP === "no",
    },
    {
      name: "bankBalance",
      label: "Bank Cash Balance (Optional)",
      type: "text",
      showIf: (fd) => fd.hasERP === "no",
    },
  ];

  // دالة التغيير العامة
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // تحديد الحقول التي تظهر
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
                <Form.Select>
                  <option value="">Approved</option>
                  <option value="">Rejected</option>
                </Form.Select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex gap-2 justify-content-end">
        <Button variant="success" onClick={handleSave}>
          💾 Save
        </Button>
        <Button variant="outline-danger" onClick={handleRestore}>
          ↩️ Restore
        </Button>
      </div>
    </div>
  );
}

const CreditPolicyConfigurator = ({ report }) => {
  // عام
  const companies = report.data;

  const [generalRules, setGeneralRules] = useState([...defaultRules]);
  const [form, setform] = useState();
  // لكل شركة
  const [companyRules, setCompanyRules] = useState([...defaultRules]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [companyTouched, setCompanyTouched] = useState(false);

  // باقي الحالات
  const [scores, setScores] = useState({ ...defaultScores });
  const [customRequest, setCustomRequest] = useState("");
  const [overrideShow, setOverrideShow] = useState(false);
  const [overrideData, setOverrideData] = useState({
    overriddenBy: "",
    reason: "",
    date: "",
  });

  const [showScoresModal, setShowScoresModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);

  // دوال عامة
  const handleScoreChange = (key, value) => {
    setScores((prev) => ({ ...prev, [key]: parseFloat(value) }));
  };

  // دوال القوانين العامة
  const handleAddGeneralRule = () => {
    setGeneralRules((prev) => [
      ...prev,
      {
        name: "",
        action: "Manual Review",
        status: "Draft",
        threshold: "",
        condition: "",
      },
    ]);
  };
  const handleSaveGeneral = () => {
    alert("✅ General Rules Saved");
  };
  const handleRestoreGeneral = () => {
    setGeneralRules([...defaultRules]);
    alert("↩️ General Rules Restored");
  };

  // دوال القوانين الخاصة بالشركة
  const handleAddCompanyRule = () => {
    setCompanyRules((prev) => [
      ...prev,
      {
        name: "",
        action: "Manual Review",
        status: "Draft",
        threshold: "",
        condition: "",
      },
    ]);
  };
  const handleSaveCompany = () => {
    console.log(JSON.stringify(selectedCompany, null, 2));
    alert(`✅ Rules for ${selectedCompany} Saved`);
  };
  const handleRestoreCompany = () => {
    setCompanyRules([...defaultRules]);
    alert("↩️ Company Rules Restored");
  };

  // دوال أخرى
  const handleRestoreScores = () => {
    setScores({ ...defaultScores });
    alert("↩️ Scores Restored");
  };

  const showOverrideButton = scores.overall < 3.0;

  return (
    <Tabs defaultActiveKey="general" className="mb-4">
      {/* التاب الأول: القوانين العامة */}
      <Tab eventKey="general" title="General Rules">
        <div className="mb-3 d-flex gap-3">
          <Button
            variant="outline-primary"
            onClick={() => setShowScoresModal(true)}
          >
            📊 View Score Thresholds
          </Button>
        </div>
        <div className="mb-4">
          <RulesSection
            formData={generalRules}
            setFormData={setGeneralRules}
            handleSave={handleSaveGeneral}
            handleRestore={handleRestoreGeneral}
          />
        </div>
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
      </Tab>

      {/* التاب الثاني: قوانين شركة محددة */}
      <Tab eventKey="company" title="Company Rules">
        <Form.Group className="mb-3">
          <Form.Label>🏢 Select Company</Form.Label>
          <Form.Select
            value={selectedCompany}
            onChange={(e) => {
              setSelectedCompany(e.target.value);
              setCompanyTouched(true);
            }}
          >
            {companies.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        {!selectedCompany && companyTouched && (
          <Alert variant="warning">
            Please select a company to configure its rules.
          </Alert>
        )}
        {selectedCompany && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>📝 Custom Request</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
              />
            </Form.Group>
            <RulesSection //save
              rules={companyRules}
              setRules={setCompanyRules}
              handleAddRule={handleAddCompanyRule}
              handleSave={handleSaveCompany}
              handleRestore={handleRestoreCompany}
              title={`Rules for ${selectedCompany}`}
            />
          </>
        )}
      </Tab>
    </Tabs>
  );
};

export default CreditPolicyConfigurator;
