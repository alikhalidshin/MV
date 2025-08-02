import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Svg from "./MainC/Svg";
import { Slide } from "react-awesome-reveal";

import { Nav, Dropdown } from "react-bootstrap";
import { HiMiniBars3 } from "react-icons/hi2";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoSettingsSharp } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "../App.css"; // تأكد من استيراد ملف CSS الخاص بك
const StyledWrapper = styled.div`
  . cards {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    border-radius: 24px;
    line-height: 1.6;
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 36px;
    border-radius: 24px;
    background: transparent;
    color: #000000;
    z-index: 1;
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .cards::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(237, 135, 135);
    border-radius: inherit;
    height: 100%;
    width: 100%;
    opacity: 0;
    transform: skew(-24deg);
    clip-path: circle(0% at 50% 50%);
    transition: all 0.64s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .content .heading {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.3;
    z-index: 1;
  }
  .content .para {
    z-index: 1;
    opacity: 0.8;
    font-size: 18px;
  }
  .content .para-sm {
    font-size: 16px;
  }
  .cards:hover::before {
    opacity: 1;
    transform: skew(0deg);
    clip-path: circle(140.9% at 0 0);
  }
  .cards:hover .content {
    color: #ffffff;
  }
  .btn {
    width: 130px;
    height: 40px;
    font-size: 1.1em;
    cursor: pointer;
    background-color: #171717;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: all 0.4s;
  }

  .btn:hover {
    border-radius: 5px;
    transform: translateY(-10px);
    box-shadow: 0 7px 0 -2px #f85959, 0 15px 0 -4px #39a2db,
      0 16px 10px -3px #39a2db;
  }

  .btn:active {
    transition: all 0.2s;
    transform: translateY(-5px);
    box-shadow: 0 2px 0 -2px #f85959, 0 8px 0 -4px #39a2db,
      0 12px 10px -3px #39a2db;
  }
`;
function Home() {
  return (
    <div className=" d-flex flex-column">
      <Nav
        className=" d-flex  justify-content-between   "
        style={{
          background: "linear-gradient(to right, #f0f0f0, #e0e0e0)",
        }}
      >
        <div>
          <h1>Basera</h1>
        </div>
        <div>
          <a href="/About" className="btn btn-primary me-1">
            About
          </a>
          <a href="/f" className="btn btn-secondary me-2">
            getstarted
          </a>
          <a href="/loin" className="btn btn-secondary me-2">
            login
          </a>
        </div>
      </Nav>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center text-center"
        style={{
          height: "100vh",
          background: "linear-gradient(to right, #f0f0f0, #e0e0e0)",
        }}
      >
        <Row
          className="align-items-stretch justify-content-center g-5"
          style={{ width: "90%", height: "80vh" }}
        >
          {/* الصورة */}
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center order-2 align-items-center"
            style={{ height: "100%" }}
          >
            <div style={{ height: "100%", width: "100%" }}>
              <Svg />
            </div>
          </Col>

          {/* النص + الزر */}
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column order-1 justify-content-center align-items-center "
            style={{ height: "100%" }}
          >
            <div>
              <h1 className="fw-bold mb-3">
                Basera ,Smart credit insight engine
              </h1>
              <p className="lead">
                A comprehensive platform that equips you with all the tools and
                resources you need to deeply understand your customers, uncover
                behavioral patterns, analyze their needs, and make informed
                decisions that drive personalized experiences and long-term
                loyalty."{" "}
              </p>
              <StyledWrapper>
                <a href="/f">
                  <button className="btn">GET START</button>
                </a>
              </StyledWrapper>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center text-center"
        style={{
          background: "linear-gradient(to right, #f0f0f0, #FFFDFDFF)",
        }}
      >
       
       <Row className="d-flex align-items-center justify-content-center mt-5 w-100">
  <Col xs={4} className="d-none d-md-block">
    <hr style={{ borderTop: "2px solid #999" }} />
  </Col>

  <Col xs={12} md="auto" className="text-center">
    <h1 className="fw-bold">Features</h1>
  </Col>

  <Col xs={4} className="d-none d-md-block">
    <hr style={{ borderTop: "2px solid #999" }} />
  </Col>
</Row></Container>
      <Container
        fluid
        className=""
        style={{
          height: "100vh",
          background: "linear-gradient(to right, #f0f0f0, #FFFDFDFF)",
        }}
      >
        <Row className="d-flex w-100  justify-content-between">
          <Slide
            direction="right"
            className="col d-flex justify-content-center"
            delay={300}
            duration={1000}
          >
            <StyledWrapper>
              <div className="    cards">
                <div className="content">
                  <p className="heading">Explainable AI</p>
                 
                  <p className="para para-sm">
                    Basira uses cutting-edge techniques like SHAP and LIME to
                    explain every credit decision transparently. Know exactly
                    why a client is accepted, rejected, or needs review—no black
                    boxes.
                  </p>
                <p className="para para-sm">Jan 1, 2024</p>

                </div>
              </div>
            </StyledWrapper>
          </Slide>
          <Slide
            direction="up"
            className="col d-flex justify-content-center"
            delay={300}
            duration={1000}
          >
            <StyledWrapper>
              <div className=" cards">
                <div className="content">
                  <p className="heading">
                    {" "}
                    Stay Ahead with Automated Reassessment
                  </p>
                  <p className="para">
                    Basira continuously monitors your clients and sends instant
                    alerts whenever their creditworthiness changes—based on
                    banking, legal, or internal data shifts.
                  </p>
                  <p className="para para-sm">Jan 1, 2024</p>
                </div>
              </div>
            </StyledWrapper>
          </Slide>
          <Slide
            className="col  d-flex justify-content-center"
            direction="left"
            delay={300}
            duration={1000}
          >
            <StyledWrapper>
              <div className="    cards">
                <div className="content">
                  <p className="heading"> Smart Sector-Based Scoring</p>
                  <p className="para">
                    Using ISIC classification, Basira evaluates companies
                    based on their sector-specific risks. Whether it's
                    construction, tech, or education—we adapt the scoring to fit
                    the market.
                  </p>
                  <p className="para para-sm">Jan 1, 2024</p>
                </div>
              </div>
            </StyledWrapper>
          </Slide>
        </Row>
        <Row className="d-flex justify-content-center mt-5">
  <Slide direction="up" delay={300} duration={1000} className="col-10">
    <div>
      <h2 className="fw-bold mb-3 text-center">Baseera Platform</h2>
      <p className="lead text-center">
        Baseera is a smart credit insight platform for Saudi companies. It integrates with ERP/CRM systems and official data sources such as SIMAH and the Ministry of Justice, using ISIC-based scoring and machine learning to provide tailored credit risk analysis by sector.
      </p>
    </div>
  </Slide>
</Row>

      </Container>
    </div>
  );
}

export default Home;
