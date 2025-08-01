import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Container, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Styled from "styled-components";
import { GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

import Drag from "./drag";
import { useState } from "react";
import Criddit from "../Creddit";
const StyledWrapper = Styled.div`
  @keyframes typing {
    from { width: 0; }
  }

  @keyframes blink-caret {
    50% { border-color: transparent; }
  }
.center-global {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999; /* عشان يكون فوق أي عناصر ثانية */
}

  .animation {
    font: bold 200% Consolas, Monaco, monospace;
    border-right: .1em solid black;
    width: 10ch;
    color: #FFFFFFFF;

    margin: 2em;
    white-space: nowrap;
    overflow: hidden;
animation: typing 3s steps(10, end) infinite, blink-caret .7s step-end infinite alternate;  }
`;
const Love = Styled.div`.input {
    min-width: 100%;
    background-color: #1a1a1a;
    padding: 10px;
    border-radius: 10px;
    outline: none;
    color: white;
  }



  .input:focus {
    animation: rotateShadow 2s infinite linear;
  }

  @keyframes rotateShadow {
    0% { box-shadow: -2px -2px 8px 1px #aa00ff, 2px 2px 8px 1px #3700ff; }
    25% { box-shadow: -2px 2px 8px 1px #aa00ff, 2px -2px 8px 1px #3700ff; }
    50% { box-shadow: 2px 2px 8px 1px #aa00ff, -2px -2px 8px 1px #3700ff; }
    75% { box-shadow: 2px -2px 8px 1px #aa00ff, -2px 2px 8px 1px #3700ff; }
    100% { box-shadow: -2px -2px 8px 1px #aa00ff, 2px 2px 8px 1px #3700ff; }
  }

`;

function Verifier({ step, setStep, add, ST, show, onHide, Client }) {
  const navigate = useNavigate();
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");
  const [q3, setq3] = useState("");
  const [q4, setq4] = useState("");
  const [q5, setq5] = useState("");
  const [q6, setq6] = useState("");
  const [q7, setq7] = useState("");
  const [q8, setq8] = useState("");
  const [q9, setq9] = useState("");
  const [q10, setq10] = useState("");
  const [q11, setq11] = useState("");
  const [q12, setq12] = useState("");
  const [q13, setq13] = useState("");
  const [q14, setq14] = useState("");
  const [q15, setq15] = useState("");
  const [q16, setq16] = useState("");
  const [q17, setq17] = useState("");
  const [q18, setq18] = useState("");
  const [q19, setq19] = useState("");
  const [q20, setq20] = useState("");
     const [data, set] = useState("");
  

  const stepsQuestions = {
    3: [
      {
        name: "isicSector",
        placeholder: "Sector (ISIC Classification)",
        fun: setq4,
        var: q4,
      },//table
      {
        name: "employees",
        placeholder: "Number of Employees",
        type: "number",
        fun: setq5,
        var: q5,
      },
      {
        name: "businessAge",
        placeholder: "Business Age (Years)",
        type: "number",
        fun: setq6,
        var: q6,
      },
    ],
    2: [
      {
        name: "company_name",
        placeholder: "Company Name",
        fun: setq1,
        var: q1,
      },
      {
        name: "crNumber",
        placeholder: "Unified Number (CR)",
        fun: setq2,
        var: q2,
      },//Client
      { name: "Region", placeholder: "City / Region", fun: setq3, var: q3 },
    ],
    4: {
      name: "revenue Expenses",
      placeholder: "Avg. Monthly Revenue and Expenses",
      fun: setq7,
      var: q7,
    },
  };

  const nosection1 = [
    { label: "liquidity ratios", fun: setq8, var: q8 },
    { label: "dept ratios", fun: setq9, var: q9 },
    { label: "profit ability", fun: setq10, var: q10 },
    { label: "operating cash flows", fun: setq11, var: q11 },
    {
      label: "constracts with the last 5 suppliers and clients",
      fun: setq12,
      var: q12,
    },
    { label: "Adminstrave ownership", fun: setq13, var: q13 },
    { label: "business sector", fun: setq14, var: q14 },
  ];

  const financialQuestionsMapped = [
    { label: "Monthly Revenue", fun: setq15, var: q15 },
    { label: "Invoice Volume", fun: setq16, var: q16 },
    { label: "Payment Timeliness (%)", fun: setq17, var: q17 },
    { label: "Delays or Defaults", fun: setq18, var: q18 },
    { label: "Current Liabilities / Loans", fun: setq19, var: q19 },
    { label: "Bank Cash Balance (Optional)", fun: setq20, var: q20 },
  ];

  const [hasERP, sethasERP] = useState("");
  const [loading, setLoading] = useState(true);
 const handleSubmit =  () => {
      
    const x=[
  ...nosection1,
  ...stepsQuestions[2],
  ...stepsQuestions[3],
  ...[stepsQuestions[4]],
  ...financialQuestionsMapped,
]

console.log(x)
    try{
     const combinedObject = Object.assign({}, ...x.map((el) => ({ [el.label || el.name]: el.var })))
      set( combinedObject )
      console.log("data",data)
      //prev
       
      } catch (error) {
      console.error("Axios error:", error);
    }
  };


  return (
    <>
      {/* client */}
      <div fluid className="vh-100 overflow-hidden bg-dark text-light p-4">
        <Button
          onClick={() => {
            setStep(step - 1);
          }}
          variant={"outline-info"}
        >
          Next <GrNext />
        </Button>
        {step === 4 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.3), #000)",
              opacity: 0.8,
            }}
          >
            <Col className="d-flex flex-column justify-content-center align-items-center px-5 bg-dark h-100 text-light rounded-4">
              {/* <StyledWrapper ><div className="animation  ">Loading ... </div></StyledWrapper> */}
              <Button
                onClick={() => navigate("/Creddit", { state: Client })}
                variant="outline-info"
                className="mb-3"
                style={{ width: "100%" }}
              >
                {" "}
                show the user profile
              </Button>
            </Col>
          </div>
        )}
        {step === 2 && (
          <>
            <Row
              className="h-100 d-flex flex-column flex-grow-1 align-items-center px-5 p-4"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.3), #000)",
                opacity: 0.8,
              }}
            >
              <Col
                className="d-flex flex-column px-5 bg-dark text-light rounded-4"
                style={{
                  minWidth: "33%",
                  maxWidth: "70%",
                  width: "100%",
                  height: "80%",
                }}
              >
                <div className="mt-2 mb-4 d-flex justify-content-between ">
                  <div>
                    {" "}
                    <h1>
                      <span className="text-light">Verifier</span> Form
                    </h1>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Button
                      onClick={() => {
                        setStep(step + 1);
                      }}
                      variant={"outline-info"}
                    >
                      Next <GrNext />
                    </Button>
                  </div>
                </div>
                <Love>
                  <Form>
                    <Row className="  mb-3">
                      <Col className="me-2">
                        <Row>
                          {stepsQuestions[2].map((e) => {
                            return(
                            <Form.Control
                              onChange={(el) => e.fun(el.target.value)}
                              className="input mb-2"
                              name={`${e.name}`}
                              placeholder={e.name}
                            />);
                          })}
                        </Row>
                      </Col>
                      <Col className=" ms-2">
                        <Row>
                          {stepsQuestions[3].map((e) => {
                            return(
                            <Form.Control
                              onChange={(el) => e.fun(el.target.value)}
                              className="input mb-2"
                              name={`${e.name}`}
                              placeholder={e.name}
                            />);
                          })}
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                       <Form.Control
                              onChange={(el) => stepsQuestions[4].fun(el.target.value)}
                              className="input mb-2"
                              name={`${stepsQuestions[4].name}`}
                              placeholder={stepsQuestions[4].name}
                            />
                    </Row>

                    <Row>
                      <Col>
                        <Form.Select
                          onChange={(e) => {
                            add({ ERP: e.target.value }, "no");
                            sethasERP(e.target.value);
                          }}
                          name="hasERP input system"
                          className="input bg-dark text-light border-1 "
                        >
                          <option value="" className="text-light">
                            Do You Use ERP/CRM System?
                          </option>
                          <option value="yes" className="text-light">
                            yes
                          </option>
                          <option value="no" className="text-light">
                            no
                          </option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Row className="mt-3 mb-3">
                      <Col className="d-flex flex-column border-end align-items-center">
                        <label htmlFor="" className="text-light fs-4 mb-4">
                          {" "}
                          Finan Statements for last three years{" "}
                        </label>
                        <Drag />
                      </Col>
                      <Col className="d-flex flex-column align-items-center">
                        <label htmlFor="" className="text-light fs-4 mb-4">
                          {" "}
                          Audit report{" "}
                        </label>
                        <Drag />
                      </Col>
                    </Row>
                  </Form>
                </Love>
              </Col>
            </Row>
          </>
        )}
        {step == 3 && (
          <Row
            className="h-100 d-flex flex-column flex-grow-1 align-items-center px-5 p-4"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.3), #000)",
              opacity: 0.8,
            }}
          >
            {hasERP === "yes" && (
              <Col
                className="d-flex flex-column px-5 bg-dark text-light rounded-4"
                style={{
                  minWidth: "33%",
                  maxWidth: "70%",
                  width: "100%",
                  height: "50%",
                }}
              >
                <div className="mt-2 mb-4 d-flex justify-content-between ">
                  <div>
                    {" "}
                    <h1>
                      <span className="text-light">Verifier</span> Form
                    </h1>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Button
                      onClick={() => {
                        setStep(step + 1);
                      }}
                      variant={"outline-info"}
                    >
                      submit <GrNext />
                    </Button>
                    <Button
                      onClick={() => {
                        setStep(step - 1);
                      }}
                      variant={"outline-danger"}
                    >
                      back
                    </Button>
                  </div>
                </div>

                <Love>
                  <Row className="mb-3">
                    <Col>
                      <Form.Select
                        className="input bg-dark text-light border-1 "
                        name="erpSystem"
                        onChange={(e) => add({ ERP_SYS: e.target.value }, "no")}
                      >
                        <option value="">Choose ERP System</option>
                        <option value="Zoho">Zoho</option>
                        <option value="Odoo">Odoo</option>
                        <option value="SAP">SAP</option>
                        <option value="Salesforce">Salesforce</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        className="input bg-dark text-light border-1 "
                        name="erpSystem"
                        onChange={(e) =>
                          add({ CRM_system: e.target.value }, "no")
                        }
                      >
                        <option value="">Choose CRM System</option>
                        <option value="Zoho">Sales force</option>
                        <option value="Odoo">HubSpot</option>
                        <option value="SAP">Zoho </option>
                        <option value="Salesforce">pipedrive</option>
                      </Form.Select>
                    </Col>{" "}
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        name="ERP apiKey"
                        placeholder="ERP API Key"
                        onChange={(e) => add({ ERPAPI: e.target.value }, "no")}
                        className="input"
                      />
                    </Col>
                    <Col>

                      <Form.Control
                        name="CRM apiKey"
                        placeholder="CRM API Key"
                        onChange={(e) => add({ APIKEY: e.target.value }, "no")}
                        className="input"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3 p-3">
                    <Button variant={"outline-info"}>test connection</Button>
                  </Row>
                </Love>
              </Col>
            )}
            {hasERP === "no" && (
              <Col
                className="d-flex flex-column px-5 bg-dark text-light rounded-4"
                style={{
                  minWidth: "33%",
                  maxWidth: "70%",
                  width: "100%",
                  height: "50%",
                }}
              >
                <div className="mt-2 mb-4 d-flex justify-content-between ">
                  <div>
                    {" "}
                    <h1>
                      <span className="text-light">Verifier</span> Form
                    </h1>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Button
                      onClick={() => {
                        setStep(step + 1);
                        handleSubmit()
                      }}
                      variant={"outline-info"}
                    >
                      Submit <GrNext />
                    </Button>
                    <Button
                      onClick={() => {
                        setStep(step - 1);
                      }}
                      variant={"outline-danger"}
                    >
                      back
                    </Button>
                  </div>
                </div>

                <Love>
                 <Row>
                                       <Col>
                                         {nosection1.map((field, idx) => (
                                           <Row className="mb-4 mt-2" key={idx}>
                                             <Form.Control
                                               name={field.label}
                                               placeholder={field.label}
                                               onChange={(e) =>
                                                 field.fun(e.target.value)
                                               }
                                               className="input"
                                             />
                                           </Row>
                                         ))}
                                       </Col>
                                       <Col>
                                             {financialQuestionsMapped.map((field, index) => (
                                                  <Form.Control
                                                    key={index}
                                                    className="input mb-4 mt-2"
                                                    name={field.label}
                                                    placeholder={field.label}
                                                    onChange={(e) => field.fun(e.target.value)}
                                                  />
                                                ))}
                 
                                       </Col>
                                     </Row>
                </Love>
              </Col>
            )}
          </Row>
        )}
      </div>
    </>
  );
}

export default Verifier;
