import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function getRiskBadge(risk) {
  const map = {
    Low: 'success',
    Med: 'warning',
    High: 'danger',
    rev: 'secondary'
  };
  return <Badge bg={map[risk] || 'secondary'}>{risk}</Badge>;
}//added

function evaluateClientAnswers(client, modelAnswers) {
  const result = {
    status: 'Approved',
    reasons: []
  };

  for (const key in modelAnswers) {
    if (key.endsWith('_action')) continue;

    const modelValue = modelAnswers[key];
    const clientValue = client[key];

    if (clientValue == null) continue;

    const isNumber = !isNaN(Number(modelValue)) && !isNaN(Number(clientValue));
    const passed = isNumber
      ? Number(clientValue) >= Number(modelValue)
      : clientValue === modelValue;

    if (!passed) {
      result.status = 'Rejected';
      result.reasons.push(`${key} → expected ${modelValue}, got ${clientValue}`);
    }
  }

  return result;
}

function ResponsiveExample(prop) {
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [updatedClients, setUpdatedClients] = useState([]);
  const navigate = useNavigate();

  const generalJson = localStorage.getItem('generalRules');
  const modelAnswers = generalJson ? JSON.parse(generalJson) : {};

  const clients_added = Array.isArray(prop.added) ? prop.added : [];
const localDataRaw = localStorage.getItem('companiesData');
const localCompanies = localDataRaw ? JSON.parse(localDataRaw) : [];

const propCompanies = Array.isArray(prop.report?.data) ? prop.report.data : [];

// دمج البيانات وتصفية التكرار على أساس الاسم مثلاً


const companies = propCompanies;
  const type = prop.type;
  const sta = [...companies,...clients_added].filter(x=> {
    
    if (x.status === type) return x;}
   
  );
  useEffect(() => {
    const clientsEvaluated = clients_added.map(client => {
      const evaluation = evaluateClientAnswers(client, modelAnswers);
      return {
        ...client,
        status: evaluation.status,
        risk: evaluation.status === 'Approved' ? 'Low' : 'High',
        remarks: evaluation.reasons
      };
    });
    setUpdatedClients(clientsEvaluated);
  }, [clients_added]);

  const handleNavigate = (company) => {
    navigate('/Creddit', { state: company });
  };

  const handleManualAccept = () => {
    const modified = updatedClients.map(c =>
      c.name === selectedClient.name
        ? { ...c, status: 'Approved', risk: 'Low', remarks: [] }
        : c
    );
    setUpdatedClients(modified);
    setShowModal(false);
  };
//prop
  const renderTable = (data) => (
    <Table responsive className="custom-table">
      <thead className="custom-thead bg-bg">
        <tr>
          <th>#</th>
          <th>Company Name</th>
          <th>Risk</th>
          <th>Status</th>
          <th>Remarks</th>
          <th>Last Analysis</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((company, index) => (
          <tr
            key={index}
            className={
              index % 2 === 0 ? 'custom-row-secondary' : 'custom-row-accent'
            }
          >
            <td>{index + 1}</td>
            <td>{company.name || company["company_name"]?.trim() || 'nothing found'}</td>
            <td>{getRiskBadge(company.risk || company.status)}</td>
            <td>{company.status || 'Review'}</td>
            <td>
              {Array.isArray(company.remarks)
                ? company.remarks.map((r, i) => (
                    <Badge bg="light" text="dark" className="me-1" key={i}>
                      {r}
                    </Badge>
                  ))
                : '—'}
            </td>
            <td>{company.date || 'No Answer'}</td>
            <td>
              <Button
                variant="primary"
                size="sm"
                className="me-2"
                onClick={() => handleNavigate(company)}
              >
                View
              </Button>
              {['Rejected', 'Pending', 'Review'].includes(company.status) && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSelectedClient(company);
                    setShowModal(true);
                  }}
                >
                  Manual
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <>
      {type === 'in Stack' && renderTable(updatedClients)}
      {type === 'All' && renderTable([ ...updatedClients,...companies])}
      {['Approved', 'Rejected', 'Review'].includes(type) && renderTable(sta)}

     <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
  <Modal.Header closeButton>
    <Modal.Title>📝 {selectedClient?.name || 'Client Details'}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="mb-3">
      {selectedClient &&
        Object.entries(selectedClient).map(([key, value], i) => (
          <div key={i} className="d-flex justify-content-between border-bottom py-2">
            <strong className="me-2">{key}</strong>
            <span className="text-end" style={{ maxWidth: "60%" }}>
              {typeof value === 'object' && value !== null
                ? Array.isArray(value)
                  ? value.map((v, idx) => (
                      <Badge bg="light" text="dark" className="me-1" key={idx}>
                        {typeof v === 'object' ? JSON.stringify(v) : v}
                      </Badge>
                    ))
                  : Object.entries(value).map(([k, v], idx) => (
                      <div key={idx}>
                        <strong>{k}:</strong> {String(v)}
                      </div>
                    ))
                : String(value) || '—'}
            </span>
          </div>
        ))}
    </div>
    <div className="d-flex justify-content-end gap-2">
      <Button variant="success" onClick={handleManualAccept}>
        Accept
      </Button>
      <Button variant="danger" onClick={() => setShowModal(false)}>
        Reject
      </Button>
    </div>
  </Modal.Body>
</Modal>
    </>
  );
}

export default ResponsiveExample;