import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
    animation: rotateShadow 1s infinite linear;
  }

  @keyframes rotateShadow {
    0% { box-shadow: -2px -2px 8px 1px #aa00ff, 2px 2px 8px 1px #3700ff; }
    25% { box-shadow: -2px 2px 8px 1px #aa00ff, 2px -2px 8px 1px #3700ff; }
    50% { box-shadow: 2px 2px 8px 1px #aa00ff, -2px -2px 8px 1px #3700ff; }
    75% { box-shadow: 2px -2px 8px 1px #aa00ff, -2px 2px 8px 1px #3700ff; }
    100% { box-shadow: -2px -2px 8px 1px #aa00ff, 2px 2px 8px 1px #3700ff; }
  }
`;

function LoginPage() {
  const navigate = useNavigate();
  const [companyEmail, setCompanyEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!companyEmail || !password) {
      setErrorMessage("⚠️ الرجاء إدخال البريد الإلكتروني وكلمة السر");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("https://alfatiha.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ companyEmail, password }),
      });

      const result = await response.json();

      if (!response.ok) {
  if (response.status === 404) {
    setErrorMessage("🚫 Company not found. Please check the email.");
  } else if (response.status === 401) {
    setErrorMessage("🔐 Incorrect password.");
  } else {
    setErrorMessage("❌ An unexpected error occurred. Please try again later.");
  }
  setIsLoading(false);
  return;
}

navigate("/dashboard", { state: result.company });
} catch (error) {
  console.error("Failed to connect to the server:", error);
  setErrorMessage("❌ Unable to connect to the server.");
} finally {
  setIsLoading(false);
}

  };

  return (
    <Container fluid className="vh-100 overflow-hidden bg-dark text-light p-4">
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
            height: "70%",
          }}
        >
          <div className="text-center mb-4">
            <h1 className="mt-4 fs-3 fw-semibold text-white">Welcome back</h1>
            <p className="text-secondary mt-2">
Enter Login Data            </p>
          </div>

          <Form className="w-100" style={{ maxWidth: "400px" }}>
            <StyledWrapper className="mb-4">
              <Form.Control
                type="email"
                placeholder="Company Email"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
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

            <Button
              variant="outline-light"
              className="w-100 py-2"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <span
                  className="spinner-border spinner-border-sm text-light"
                  role="status"
                />
              ) : (
                <>
                  Login <span className="ms-2">➤</span>
                </>
              )}
            </Button>

            {errorMessage && (
              <p className="text-danger mt-3 text-center">{errorMessage}</p>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;