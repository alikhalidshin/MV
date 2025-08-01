import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Col, Row, Card, Badge, Navbar, Container, Nav, Button } from "react-bootstrap";
import Graph from "./credditC/Graph.js";
import Table from "./credditC/AH.js";
import Cards from "./credditC/cards.js";
import { useLocation } from "react-router-dom";
import Ai from "./credditC/Ai.js";
import Sidebar from "./MainC/Sidebar.js";

const Creddit = ({nav}) => {
  const location = useLocation();
const station = location.state || {};
function getRandomScore(min = 60, max = 90) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fallbackCompany = {
  name: "ebtkar Ltd.",
  status: "Pending",
  assessedBy: "AI System",
  scores: {
    willingness: getRandomScore(),
    capacity: getRandomScore(),
    context: getRandomScore(),
    stability: getRandomScore(),
  },
  financialIndicators: {
    averageMonthlyRevenue: Math.floor(Math.random() * 150000) + 50000,
    averageExpenses: Math.floor(Math.random() * 100000) + 30000,
    bankBalance: Math.floor(Math.random() * 80000),
    onTimeInvoices: getRandomScore(),
  },
  sector: "Technology",
};



const company = {
  status: station.status ?? fallbackCompany.status,
  assessedBy: station.assessedBy ?? fallbackCompany.assessedBy,
  sector: station.sector ?? fallbackCompany.sector,
  scores: {
    willingness: station.scores?.willingness ?? fallbackCompany.scores.willingness,
    capacity: station.scores?.capacity ?? fallbackCompany.scores.capacity,
    context: station.scores?.context ?? fallbackCompany.scores.context,
    stability: station.scores?.stability ?? fallbackCompany.scores.stability,
  },
  financialIndicators: {
    averageMonthlyRevenue: station.financialIndicators?.averageMonthlyRevenue ?? fallbackCompany.financialIndicators.averageMonthlyRevenue,
    averageExpenses: station.financialIndicators?.averageExpenses ?? fallbackCompany.financialIndicators.averageExpenses,
    bankBalance: station.financialIndicators?.bankBalance ?? fallbackCompany.financialIndicators.bankBalance,
    onTimeInvoices: station.financialIndicators?.onTimeInvoices ?? fallbackCompany.financialIndicators.onTimeInvoices,
  },
};
  
  console.log(station)
  const [shown, setShown] = React.useState(false);
  return (
    <div className="row pe-4 ps-4" style={{ width: "98%" }}>
      {/* Header */}
      <Row className="p-4">
        <Navbar className="bg-body-tertiary love rounded-4 ps-2 pe-2">
          <Container fluid>
            <Navbar.Brand href="#home" className="d-flex justify-content-between">
              <label className="fw-bold fs-3">{company.name|| company["company_name"]}</label>
            </Navbar.Brand>

          

            <Nav.Item>
              <Button variant={"outline-primary"} onClick={() => setShown(true)}>
                AI Recommendation
              </Button>
            </Nav.Item>
          </Container>
        </Navbar>
      </Row>

      {/* Sidebar + Main */}
      {
        company.archives !==1 && (
                <Sidebar active={"Client"} />

        ) 
      }
      <Col>
        {/* Evaluation Cards */}
        <Row className="p-0">
          <Cards
            wiil={company.scores?.willingness}
            capacity={company.scores?.capacity}
            context={company.scores?.context}
            stability={company.scores?.stability}
          />
        </Row>

        {/* Graph + Key Indicators */}
        <Row className="p-0">
          <Col>
          {console.log(company)}
<Graph
  AssesedBy={company.assessedBy} 
  capacity={company.scores?.capacity}
  wiil={company.scores?.willingness}
  context={company.scores?.context}
  stability={company.scores?.stability}
/>
          </Col>

          <Col xxl={4} xl={4} lg={4} md={4} sm={4} xsm={4}>
            <Row>
              <Row className="mt-4 border-0 shadow-sm rounded-4 p-4 love">
                <Col xs={12}>
                  <p className="fs-3 pb-3">Key Indicators</p>
                </Col>

                <Row xs={1} md={2} className="g-4">
                  {[
                    {
                      label: "Avg monthly",
                      value: `${company.financialIndicators?.averageMonthlyRevenue}$`,
                    },
                    {
                      label: "AVG. Expenses",
                      value: `${company.financialIndicators?.averageExpenses}$`,
                    },
                    {
                      label: "Bank Balance",
                      value: `${company.financialIndicators?.bankBalance}$`,
                    },
                  ].map((item, i) => (
                    <Col key={i}>
                      <Card className="h-100">
                        <Card.Body className="d-flex flex-column justify-content-between">
                          <Card.Title className="fs-5 fw-bold">{item.label}</Card.Title>
                          <Card.Text className="fs-4">{item.value}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}

                  {/* On-time invoices */}
                  <Col xs={12}>
                    <Card className="h-100">
                      <Card.Body>
                        <Card.Title className="fs-5 fw-bold">On-time invoices</Card.Title>
                        <ProgressBar
                          variant="info"
                          now={company.financialIndicators?.onTimeInvoices}
                          label={`${company.financialIndicators?.onTimeInvoices}%`}
                        />
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Sector */}
                  <Col xs={12}>
                    <Card className="h-100">
                      <Card.Body>
                        <Card.Title className="fs-5 fw-bold">Sector</Card.Title>
                        <Card.Text className="fs-4">{company.sector}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Row>
            </Row>
          </Col>
        </Row>

        {/* AI Recommendation Modal */}
        <Ai show={shown} onHide={() => setShown(false)} />
      </Col>
    </div>
  );
};

export default Creddit;