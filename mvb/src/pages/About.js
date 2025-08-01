import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div className="bg-light text-dark py-5">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col>
            <h2 className="fw-bold mb-3">About Basira</h2>
            <p className="lead">
              Smart credit decisions, powered by deep data understanding and adaptive AI.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h4>Who We Are</h4>
            <p>
              Basira is a pioneering B2B credit intelligence platform built to redefine how businesses assess trust and risk.
              Our system ingests financial, legal, behavioral, and operational data to build a multidimensional profile for each client or vendor.
              The goal isn’t just to generate a score—it’s to enable informed, confident credit decisions grounded in context and transparency.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h4>Our Vision</h4>
            <p>
              Basira aims to be the trusted regional authority on corporate credit analysis,
              offering deep insights through explainable AI, diverse data sources, and sector-specific evaluation criteria.
              We empower organizations to move faster, smarter, and with greater clarity when forming financial partnerships.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h4>What Sets Us Apart</h4>
            <ul>
              <li>Explainable AI that provides transparent and intuitive decision logic</li>
              <li>Dynamic scoring tailored to industry classifications and operational risk</li>
              <li>Real-time financial monitoring and forward-looking indicators</li>
              <li>Customizable credit policies and override logic</li>
              <li>Continuous evaluation with automated reassessment flows</li>
              <li>Seamless integration with ERP, CRM, and banking APIs</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>Who We Serve</h4>
            <p>
              Basira supports enterprises, SMEs, and financial teams that manage trade credit or evaluate B2B relationships.
              Whether you're screening a supplier, underwriting a client, or conducting due diligence—our platform offers reliable insights,
              automated recommendations, and deep transparency throughout the decision lifecycle.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;