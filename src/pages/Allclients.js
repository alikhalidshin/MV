import Verfier from "./formC/discoverable";
import React, { useState, useEffect } from "react";
import Table from "./clientsC/Table";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FFF from "./clientsC/FFF";
import Sidebar from "./MainC/Sidebar";
import Sub from "./Clients";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import Spinner from "react-bootstrap/Spinner";
import Drag from "./formC/drag";

const Love = Styled.div`/* From Uiverse.io by Na3ar-17 */ 
.label.selected::before {
  background-color: #2d3750;
  border-color: #435dd8;
  height: 50px;
}
    .input {

    min-width: 100%;
    background-color: #FFFFFFFF;
    padding: 10px;
    border-radius: 10px;
    outline: none;
    color: white;
  }

  .input:focus {
    animation: rotateShadow 2s infinite linear;
  }

  @keyframes rotateShadow {
    0% { box-shadow: -1px -1px 8px 1px #00D4FF, 2px 2px 8px 1px #00D4FF; }
    25% { box-shadow: -1px 1px 8px 3px #00D4FF, 2px -2px 8px 1px #00D4FF; }
    50% { box-shadow: 1px 1px 5px 4px #00D4FF, -2px -2px 8px 1px #00D4FF; }
    75% { box-shadow: 1px -1px 8px 1px #00D4FF, -2px 2px 8px 1px #00D4FF; }
    100% { box-shadow: -1px -1px 5px 1px #00D4FF, 2px 2px 8px 1px #00D4FF; }
  }

.radio-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.radio-input * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.radio-input label {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0px 20px;
  width: 220px;
  cursor: pointer;
  height: 50px;
  position: relative;
}

.radio-input label::before {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);             
  width: 220px;
  height: 45px;
  z-index: -1;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border-radius: 10px;
  border: 2px solid transparent;
}
.radio-input label:hover::before {
  transition: all 0.2s ease;
  background-color: #2a2e3c;
}

.radio-input .label:has(input:checked)::before {
  background-color: #502D32FF;
  border-color: #435dd8;
  height: 50px;
}
.radio-input .label .text {
  color: #fff;
}

.radio-input .label input[type="radio"] {
  background-color: #202030;
  appearance: none;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.radio-input .label input[type="radio"]:checked {
  background-color: #435dd8;
  -webkit-animation: puls 0.7s forwards;
  animation: pulse 0.7s forwards;
}

.radio-input .label input[type="radio"]:before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: #fff;
  transform: scale(0);
}

.radio-input .label input[type="radio"]:checked::before {
  transform: scale(1);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

`;//table

function Allclients() {
  const [formDataa, setFormDataa] = useState({});

  const add = (data, source) => {
    setFormDataa((prev) => ({ ...prev, ...data }));
  };

  
  const erpSystems = ["Zoho", "Odoo", "SAP", "Salesforce"];
  const crmSystems = ["Sales force", "HubSpot", "Zoho", "pipedrive"];
  
const [hasERP, sethasERP] = useState("");
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
const [loading, setLoading] = useState("");

   const stepsQuestions = {
    3: [
      {
        name: "isicSector",
        placeholder: "Sector (ISIC Classification)",
        fun: setq4,
        var: q4,
      },
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
      },
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
  { label: "constracts with the last 5 suppliers and clients", fun: setq12, var: q12 },
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
  const [Disabled, _Disabled] = useState(false);
  const [updateClients, _updatted] = useState([]);
  //     const add = (value, end) => {
  //     _updatted(prev => [...prev, value]);
  //     if (end === "end") {
  // var x=2
  //     }
  //   };
  // بيانات الجدول والعملاء
  const [updatedClients, setUpdatedClients] = useState([]);
  const [Tables, setTables] = useState([]);
  const [report, setReport] = useState([]);
  const [table, setTable] = useState("");
  const [sta, setsta] = useState("");

  // مودال إضافة عميل جديد
  const [show, setShow] = useState(false);
  const [leen, setleenShow] = useState(false);
  const [wathq, setwathiqShow] = useState(false);
  const [step, setStep] = useState(2);
  const [formData, setFormData] = useState({});

  // مودال السياسات (FFF)
  const [showPolicy, setShowPolicy] = useState(false);

  // بيانات السياسات (متوافقة مع FFF.js)
  const [scores, setScores] = useState({
    overall: 3.5,
    capacity: 3.0,
    willingness: 3.0,
    stability: 2.5,
    contextualRisk: 3.0,
  });
  const [rules, setRules] = useState([
    {
      name: "simah score",
      action: "Reject",
      status: "Active",
      threshold: "5",
      condition: "Greater Than",
    },
  ]);
  const [showScoresModal, setShowScoresModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);

  // جلب التقارير من السيرفر
   useEffect(() => {
    setLoading(true); // بدأ الجلب
    axios
      .get("https://alfatiha.onrender.com/report")
      .then((response) => {
        setReport(response.data);
      })
      .catch((error) => {
        alert("❌ حصل خطأ في جلب التقارير");
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // انتهى الجلب
      });
  }, []);


  console.log(rules);
  // بيانات الفلاتر
  const mine = [
    { name: "report policy", label: ["cros-client"] },
    { name: "table", label: ["select table", "All", "in Stack"] },
    { name: "override type", label: ["industry", ""] },
    {
      name: "status",
      label: ["Select status", "Approved", "Rejected", "Review"],
    },
  ];

  // دوال مودال العميل الجديد
  const handleClose = () => {
    setShow(false);
    setStep(2);
    setFormData({});
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  //Table
const handleSubmit = () => {
  const x = [
      ...nosection1,
      ...stepsQuestions[2],
      ...stepsQuestions[3],
      ...[stepsQuestions[4]],
      ...[{"hasERP": hasERP}],
    ...financialQuestionsMapped,

  ];

  console.log("all fields:", x);

  try {
    const combinedObject = Object.assign(
      {},
      ...x.map((el) => ({ [el.label || el.name]: el.var }))
    );

    // ضيفه للـ State
    setTables((prev) => [...prev, combinedObject]);

    // ضيفه للـ Local Storage
    const existing = JSON.parse(localStorage.getItem("companiesData")) || [];
    const updated = [...existing, combinedObject];
    localStorage.setItem("companiesData", JSON.stringify(updated));

    console.log("Saved to Local Storage ✅");
  } catch (error) {
    console.error("Axios error:", error);
  }
};
  // دوال FFF (السياسات)
  const handleScoreChange = (key, value) => {
    setScores((prev) => ({ ...prev, [key]: parseFloat(value) }));
  };
  function evaluateClientAnswers(client, modelAnswers) {
    const result = {
      status: "Approved",
      reasons: [],
    };

    for (const key in modelAnswers) {
      if (key.endsWith("_action")) continue; // نتخطى action keys

      const modelValue = modelAnswers[key];
      const clientValue = client[key];

      if (clientValue == null) continue;

      // رقم؟ جرب نحوله ثم نقارن
      const isNumber =
        !isNaN(Number(modelValue)) && !isNaN(Number(clientValue));
      const passed = isNumber
        ? Number(clientValue) >= Number(modelValue)
        : clientValue === modelValue;

      if (!passed) {
        result.status = "Rejected";
        result.reasons.push(`${key} did not meet criteria`);
      }
    }

    return result;
  }
  const debugTest = evaluateClientAnswers(
    {
      businessAge: "7",
      revenueExpenses: "100",
      openBanking: "no",
      hasERP: "yes",
    },
    {
      businessAge: "9",
      businessAge_action: "Approved",
      revenueExpenses: "500",
      revenueExpenses_action: "Approved",
      openBanking: "yes",
      openBanking_action: "Approved",
      hasERP: "no",
      hasERP_action: "Approved",
    }
  );

  console.log("🧪 Evaluation Test:", debugTest);
  const handleAddRule = () => {
    setRules((prev) => [
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

  const handleSave = () => {
    const output = {
      scores,
      rules,
    };
    console.log("Saved Config:", JSON.stringify(output, null, 2));
    alert("✅ Configuration Saved");
  };

  const handleRestore = () => {
    setScores({
      overall: 3.5,
      capacity: 3.0,
      willingness: 3.0,
      stability: 2.5,
      contextualRisk: 3.0,
    });
    setRules([]);
    alert("↩️ Restored to default values");
  };

  return (
    <div className="row">
           {loading && (
               <div
                 style={{
                   position: "fixed",
                   top: 0,
                   left: 0,
                   right: 0,
                   bottom: 0,
                   backgroundColor: "rgba(0, 0, 0, 0.7)",
                   zIndex: 9999,
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                 }}
               >
                 <Spinner animation="border" variant={"light"} />
               </div>
             )}
      <Sidebar active={"Client"} />
      <Col>
        <div className="p-4 d-flex align-items-center mb-4 justify-content-between">
          <h1 className="mb-4">Client Hub</h1>
          <DropdownButton
            id="dropdown-basic-button"
            title="Oprations"
            className="h-100"
          >
            <Dropdown.Item onClick={() => setShow(true)}>
              Add New analysis
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setleenShow(true)}>LWS</Dropdown.Item>
            <Dropdown.Item onClick={() => setShowPolicy(true)}>
              Config Report Policy
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="container fluid love rounded-4 p-4">
          <div className="d-flex align-items-center mb-4 justify-content-between">
            {mine.map((item, index) => (
              <div key={index} className="d-flex flex-column">
                <label>{item.name}</label>
                <Form.Select
                  size="lg"
                  onChange={(e) => {
                    setTable(e.target.value);

                  }}
                >
                  {item.label.map((label, i) => (
                    <option key={i} value={label}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
              </div>
            ))}
            <Button
              variant="outline-secondary"
              onClick={() => {
                setTable("");
              }}
            >
              Reset
            </Button>
          </div>
          <Table type={table} sta={sta} report={report} added={Tables} />
        </div>

        {/* Modal: Add New Client */}
       

        <Modal
          size="xl"
          contentClassName="p-4 bg-light"
          show={show}
          onHide={handleClose}
        >
          {step === 2 && (
            <>
              <div className="mb-3 d-flex justify-content-between p-4">
                <h1 className="text-dark">Verifier <span>Form</span> </h1>
                <div>
                  <Button
                    onClick={() => setStep(step + 1)}
                    variant="info"
                  >
                    Next <GrNext />
                  </Button>
                </div>
              </div>

              <Love className="d-flex flex-column text-dark rounded-4 ps-4 pe-4">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(); // أو أي دالة معالجة للـ Submit تحب تضيفها
                  }}
                >
                  <Row className="  mb-3">
                      <Col className="me-2">
                        <Row>
                          {stepsQuestions[2].map((e) => {
                            return (
                              <Form.Control
                                onChange={(el) => e.fun(el.target.value)}
                                className="input mb-2"
                                name={`${e.name}`}
                                placeholder={e.name}
                              />
                            );
                          })}
                        </Row>
                      </Col>
                      <Col className=" ms-2">
                        <Row>
                          {stepsQuestions[3].map((e) => {
                            return (
                              <Form.Control
                                onChange={(el) => e.fun(el.target.value)}
                                className="input mb-2"
                                name={`${e.name}`}
                                placeholder={e.name}
                              />
                            );
                          })}
                        </Row>
                        
                      </Col>
                    </Row>

                    

                     <Row>
                                          <Form.Control
                                            onChange={(el) =>
                                              stepsQuestions[4].fun(el.target.value)
                                            }
                                            className="input mb-2"
                                            name={`${stepsQuestions[4].name}`}
                                            placeholder={stepsQuestions[4].name}
                                          />
                                        </Row>
                  <Row className="mb-3 p-4 ">
                    
                    <Col>
                      <Form.Select
                        onChange={(e) => {
                          add({ ERP: e.target.value //input

                          }, "no");
                          sethasERP(e.target.value);
                        }}
                        className="text-dark border-1"
                      >
                        <option value="" className="text-dark">Do You Use ERP/CRM System?</option>
                        <option value="yes" className="text-dark">Yes</option>
                        <option value="no" className="text-dark">No</option>
                      </Form.Select>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="d-flex flex-column border-end align-items-center">
                      <label className="text-dark fs-4 mb-4">
                        Finan Statements for last three years
                      </label>
                      <Drag isLight={true} />
                    </Col>
                    <Col className="d-flex flex-column align-items-center">
                      <label className="text-dark fs-4 mb-4">
                        Audit report
                      </label>
                      <Drag isLight={true} />
                    </Col>
                  </Row>
                </Form>
              </Love>
            </>
          )}

          {step === 3 && (
            <Row className="h-100 d-flex flex-column flex-grow-1 align-items-center px-5 p-4">
              {hasERP === "yes" ? (
                <Col className="d-flex flex-column px-5 text-dark rounded-4">
                  <div className="mb-3 d-flex justify-content-between">
                    <h1 className="text-dark">Verifier Form</h1>
                    <div>
                      <Button
                        onClick={() => setShow(false)}
                        variant="outline-danger"
                        className="me-2"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={
                          () => handleSubmit()
                          //back
                        }
                        variant="outline-info"
                      >
                        submit <GrNext />
                      </Button>
                    </div>
                  </div>

                  <h1 className="text-dark">ERP Details</h1>
                  <Love>
                    <Form
                      onSubmit={(e) => {
                        handleSubmit(); // ضع دالة المعالجة هنا
                      }}
                    >
                      <Row className="mb-3">
                        <Col>
                          <Form.Select
                            className="input  text-dark"
                            onChange={(e) =>
                              add({ ERP_SYS: e.target.value }, "no")
                            }
                          >
                            <option value="">Choose ERP System</option>
                            {erpSystems.map((name) => (
                              <option value={name} key={name}>
                                {name}
                              </option>
                            ))}
                          </Form.Select>
                        </Col>
                        <Col>
                          <Form.Select
                            className="input text-dark"
                            onChange={(e) =>
                              add({ CRM_system: e.target.value }, "no")
                            }
                          >
                            <option value="">Choose CRM System</option>
                            {crmSystems.map((name) => (
                              <option value={name} key={name}>
                                {name}
                              </option>
                            ))}
                          </Form.Select>
                        </Col>
                      </Row>

                      <Row className="mb-3">
                        <Col>
                          <Form.Control
                            name="ERPAPI"
                            placeholder="ERP API Key"
                            onChange={(e) =>

                              add({ ERPAPI: e.target.value }, "no")
                            }
                            className="input"
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            name="APIKEY"
                            placeholder="CRM API Key"
                            onChange={(e) =>
                              add({ APIKEY: e.target.value }, "no")
                            }
                            className="input"
                          />
                        </Col>
                      </Row>

                      <Row className="mb-3 p-3">
                        <Button variant="outline-info">Test Connection</Button>
                      </Row>
                    </Form>
                  </Love>
                </Col>
              ) : (
                <Col className="d-flex flex-column px-5  text-dark rounded-4">
                  <div className="mb-3 d-flex justify-content-between">
                    <h1 className="text-dark">No ERP info</h1>
                    <div>
                      <Button
                        onClick={() => setStep(step - 1)}
                        variant="outline-danger"
                        className="me-2"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => handleSubmit()}
                        variant="outline-info"
                      >
                        submit <GrNext />
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
        </Modal>

        {/* Modal: FFF (السياسات) */}
        <Modal size="xl" show={showPolicy} contentClassName="bg-light p-4" onHide={() => setShowPolicy(false)}>
          <Modal.Header closeButton />
          <FFF
            scores={scores}
            setScores={setScores}
            rules={rules}
            setRules={setRules}
            handleScoreChange={handleScoreChange}
            handleAddRule={handleAddRule}
            handleSave={handleSave}
            handleRestore={handleRestore}
            showScoresModal={showScoresModal}
            setShowScoresModal={setShowScoresModal}
            showRulesModal={showRulesModal}
            setShowRulesModal={setShowRulesModal}
            report={report}
            setFormData={setFormData}
          />
        </Modal>
        <Modal
          size="xl"
          show={leen}
          onHide={() => setleenShow(false)}
          onHHide={() => setleenShow(false)}
        >
          {
            //client
          }
          <Sub></Sub>
        </Modal>
      </Col>
    </div>
  );
}

export default Allclients;
