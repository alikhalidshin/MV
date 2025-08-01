import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
class ContactForm extends Component {
  render() {
    return (
      <section className="get-in-touch">
        <Container>
          <Form className="contact-form">
            <Row>
              <Col lg={6} className="form-field">
                <Form.Control
                  id="name"
                  type="text"
                  required
                  className="input-text js-input"
                />
                <label className="label" htmlFor="name">
                  Client name
                </label>
              </Col>
              <Col lg={6} className="form-field">
                <Form.Control
                  id="email"
                  type="email"
                  required
                  className="input-text js-input"
                />
                <label className="label" htmlFor="email">
                  City and distance{" "}
                </label>
              </Col>
              <Col lg={6} className="form-field">
                <Form.Control
                  id="company"
                  type="text"
                  required
                  className="input-text js-input"
                />
                <label className="label" htmlFor="company">
                  sector
                </label>
              </Col>
              <Col lg={6} className="form-field">
                <Form.Control
                  id="phone"
                  type="text"
                  required
                  className="input-text js-input"
                />
                <label className="label" htmlFor="phone">
                  crm erp integration
                </label>
              </Col>
              <Col lg={12} className="form-field">
                <Form.Control
                  id="message"
                  type="text"
                  required
                  className="input-text js-input"
                />
                <label className="label" htmlFor="message">
                  bank account
                </label>
              </Col>
              <Col lg={12} className="form-field text-center">
                <Button type="submit" className="submit-btn">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
    );
  }
}

export default ContactForm;
