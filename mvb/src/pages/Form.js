import React, { useState, useCallback } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { get } from "mongoose";
import Verifier from "./formC/Verifier";
import Discoverable from "./formC/discoverable";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Spinner } from "react-bootstrap";
const StyledWrapper = Styled.div`
  .input {
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

const Love = Styled.div`/* From Uiverse.io by Na3ar-17 */ 
.label.selected::before {
  background-color: #2d3750;
  border-color: #435dd8;
  height: 50px;
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
  background-color: #2d3750;
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

`;

function LoginForm() {
  //cal

  const [active, setactive] = useState(true);
  const navigate = useNavigate();
  const [Disabled, _Disabled] = useState(false);
  const [updatedClients, _updatted] = useState([]);
  const [Role, setRole] = useState(null);
  const [step, setStep] = useState(1);
  const [usersList, setUsersList] = useState([""]);
  const [formData, setFormData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = useState("");
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
  const stepsQuestions = {
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
      {
        name: "revenueExpenses",
        placeholder: "Avg. Monthly Revenue and Expenses",
        fun: setq7,
        var: q7,
      },
    ],
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

  //submit

  const { register, handleSubmit } = useForm();

  const [p, _setP] = useState("select role to Sighn up ");
  const getValueByKey = (key) => {
    const found = updatedClients.find((obj) => key in obj);
    return found ? found[key] : null;
  };
  const updateField = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const add = (value, end) => {
    _updatted((prev) => {
      // Check if an item with the same key exists
      // Add the new value after removing the old one (if any)
      return [...prev, value];
    });

    if (end === "end") {
      _Disabled(false);
    }
  };

  const handleNext = () => {
    const hasUsername = updatedClients.some((client) => client.user);
    const hasEmail = updatedClients.some((client) => client.useremail);
    const hasPassword = updatedClients.some((client) => client.userpass);
    const hasRole = updatedClients.some((client) => client.role);

    if (hasUsername && hasEmail && hasPassword && hasRole) {
      setStep(step + 1);
    } else {
      console.log(hasPassword, hasEmail, hasUsername, hasRole);
      alert("Please fill in all fields before continuing.");
    }
  }; //submit
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setUsersList((prev) => [...prev, ""]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  React.useEffect(() => {
    if (Role === "Discoverable") {
      setactive(true);
    }
  }, [Role]);
  React.useEffect(() => {
    const saved = localStorage.getItem("usersList");
    if (saved) setUsersList(JSON.parse(saved));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("usersList", JSON.stringify(usersList));
  }, [usersList]);
  const submit = () => {
    setLoading(true);
    setError(""); // تصفير الخطأ عند كل محاولة إرسال

    const payload = {
      companyEmail: email,
      username: name,
      password: password,
      info: {
        clientList: [{ name: "Client A" }],
      },
    };

    axios
      .post("https://alfatiha.onrender.com/companies", payload)
      .then((res) => {
        navigate("/dashboard", { state: payload });
      })
      .catch((err) => {
        if (err.response) {
          const status = err.response.status;
          const errorMessage = err.response.data?.error || "حدث خطأ غير متوقع";

          if (status === 409) {
            setError(`⚠️ ${errorMessage}`); // مثل: الشركة موجودة مسبقًا
          } else {
            setError(`❌ خطأ في إنشاء الشركة: ${errorMessage}`);
          }
        } else {
          setError(`🚫 فشل الاتصال بالخادم: ${err.message}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
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

      {step === 1 ? (
        <Container
          fluid
          className="vh-100 overflow-hidden bg-dark text-light p-4"
        >
          {/* crm */}
          <Row
            className="h-100 d-flex flex-column justify-content-center align-items-center px-5 p-4"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.3), #000)",
              opacity: 0.8,
            }}
          >
            <Col
              className="d-flex flex-column justify-content-center align-items-center px-5 bg-dark text-light rounded-4"
              style={{
                minWidth: "33%",
                maxWidth: "70%",
                width: "100%",
                height: "80%",
              }}
            >
              <div className="text-center mb-4">
                <h1 className="mt-4 fs-3 fw-semibold text-white">
                  Welcome back
                </h1>
                <p className="text-secondary mt-2">
                  Enter your credentials to access your account.{" "}
                  <a
                    href="/login"
                    className="text-decoration-underline"
                    style={{ color: "rgb(255 255 255)" }}
                  >
                    Login
                  </a>
                </p>
              </div>

              <Form className="w-100" style={{ maxWidth: "400px" }}>
                <StyledWrapper className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input bg-dark text-light border-secondary mb-4"
                  />

                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input bg-dark text-light border-secondary mb-4"
                  />

                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input bg-dark text-light border-secondary mb-4"
                  />
                </StyledWrapper>

                <Love className="">
                  <Row>
                    
                    {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
                    
                    <Col className="d-flex align-items-center flex-column">
                      <label className="fw-bold fs-5 text-light">
                        Select your role
                      </label>
                      <div>
                        <span>{p}</span>
                      </div>
                    </Col>
                    <Col>
                      <div className="radio-input">
                        <label
                          className={`label ${
                            Role === "Discoverable" ? "selected" : ""
                          }`}
                        >
                          <input
                            type="radio"
                            id="value-1"
                            name="value-radio"
                            defaultValue="value-1"
                            onBlur={() => {
                              setRole("Discoverable");
                              add({ role: "Discoverable" }, "end");
                              _setP(
                                "Enable this role to bee discoverable by other users."
                              );
                            }}
                          />
                          <p className="text">Discoverable</p>
                        </label>
                        <label
                          className={`label ${
                            Role === "Reviewer" ? "selected" : ""
                          }`}
                        >
                          <input
                            type="radio"
                            id="value-2"
                            name="value-radio"
                            defaultValue="value-2"
                            onBlur={() => {
                              setRole("Reviewer");
                              add({ role: "Reviewer" }, "end");
                              _setP(
                                "Enable this role if you want to use our full System for analysing other companies"
                              );
                            }}
                          />
                          <p className="text">Company Reviewer</p>
                        </label>
                        <label
                          className={`label ${
                            Role === "Verifier" ? "selected" : ""
                          }`}
                        >
                          <input
                            type="radio"
                            id="value-3"
                            name="value-radio"
                            defaultValue="value-3"
                            onBlur={() => {
                              setRole("Verifier");
                              add({ role: "Verifier" }, "end");
                              _setP(
                                "Enable this role if you want verify the identity of a specific company."
                              );
                            }}
                          />
                          <p className="text">Verifier</p>
                        </label>
                      </div>
                    </Col>
                  </Row>
                </Love>

                <Button
                  variant="outline-light"
                  disabled={Disabled}
                  className="w-100 py-2"
                  onClick={() => {
                    if (Role === "Discoverable" || Role === "Verifier") {
                      _setP("select role to login ");
                      setStep(step + 1);
                    } else if (Role === "Reviewer") {
                      submit();
                    }
                  }}
                >
                  Next <span className="ms-2">➤</span>
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      ) : null}
      {Role === "Verifier" ? (
        <Verifier
          setStep={setStep}
          step={step}
          add={add}
          ST={"form"}
          Client={updatedClients}
        />
      ) : null}
      {Role === "Discoverable" ? (
        <Discoverable
          setStep={setStep}
          step={step}
          add={add}
          ST={"form"}
          Client={updatedClients}
        />
      ) : null}
    </>
  );
}

export default LoginForm;
