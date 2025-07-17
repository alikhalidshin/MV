import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { Row } from 'react-bootstrap';

function getRiskBadge(risk) {
  const map = {
    Low: 'success',
    Med: 'warning',
    High: 'danger',
    rev:"secondary"

  };
  return <Badge bg={map[risk]}>{risk}</Badge>;
}

function ResponsiveExample() {
  const navigate = useNavigate();

  const companies = [
  {
    name: 'Al-Tamayouz Co.',
    score: '4.2',
    risk: 'Low',
    status: 'Approved',
    date: '08 Jul 2025',
    actions: ['View', 'Re-analyze'],
  },
  {
    name: 'Raqeem Logistics',
    score: '2.9',
    risk: 'High',
    status: 'Rejected',
    date: '02 Jul 2025',
    actions: ['View'],
  },
  {
    name: 'Jasmine Retailers',
    score: '3.6',
    risk: 'Med',
    status: 'Review',
    date: '05 Jul 2025',
    actions: ['View', 'Edit'],
  },
  {
    name: 'Barakah Industries',
    score: '4.7',
    risk: 'Low',
    status: 'Approved',
    date: '10 Jul 2025',
    actions: ['View', 'Re-analyze'],
  },
  {
    name: 'Hajar Freight Co.',
    score: '3.1',
    risk: 'rev',
    status: 'Pending',
    date: '12 Jul 2025',
    actions: ['View', 'Edit'],
  },

    {
      name: 'Al-Tamayouz Co.',
      score: '4.2',
      risk: 'Low',
      status: 'Approved',
      date: '08 Jul 2025',
      actions: ['View 🔍', 'Re-analyze 🔁'],
    },
    {
      name: 'Raqeem Logistics',
      score: '2.9',
      risk: 'High',
      status: 'Rejected',
      date: '02 Jul 2025',
      actions: ['View 🔍'],
    },
    {
      name: 'Jasmine Retailers',
      score: '3.6',
      risk: 'Med',
      status: 'Review',
      date: '05 Jul 2025',
      actions: ['View 🔍', 'Edit ✏️'],
    },
  ];

  const handleNavigate = (company) => {
    navigate('/Creddit', { state: { company } });
  };

  return (
    
    <Table responsive className="custom-table">
      <thead className="custom-thead bg-bg">
        <tr>
          <th>#</th>
          <th>Company Name</th>
          <th>Score</th>
          <th>Risk</th>
          <th>Status</th>
          <th>Last Analysis</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody >
        {companies.map((company, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? 'custom-row-secondary' : 'custom-row-accent'}
          >
            <td>{index + 1}</td>
            <td>{company.name}</td>
            <td>{company.score}</td>
            <td>{getRiskBadge(company.risk)}</td>
            <td>
              {company.status === 'Approved'
                ? '✅'
                : company.status === 'Rejected'
                ? '❌'
                : '⚠️'}{' '}
              {company.status}
            </td>
            <td>{company.date}</td>
            <td>
              {company.actions.map((action, i) => (
                <Button
                  key={i}
                  variant={i === 0 ? 'primary' : 'secondary'}
                  size="sm"
                  className="me-2"
                  onClick={() => handleNavigate(company)}
                >
                  {action}
                </Button>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default ResponsiveExample