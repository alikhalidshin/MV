import React, { useState } from 'react';
import { Col, Nav } from "react-bootstrap";

export default function Sidebar(props) {
  const [activeKey, setActiveKey] = useState(`${props.active}`);
  const items = [ 'Dashboard', 'Client'];

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <Col xxl={2} xl={2} lg={2} md={2} className='p-4 me-0'>
      <div className="d-flex flex-column flex-shrink-0 p-4 bg-light love rounded-4" style={{
        height:"90vh"
      }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <span className="fs-2">Sidebar</span>
        </a>
        <hr />
        <Nav className="flex-column mb-auto">
          {items.map((label) => (
            <Nav.Item key={label}>
              <Nav.Link
                href={`/${label}`}
                active={activeKey === label}
                onClick={() => handleSelect(label)}
                className='m-3'
              >
                {label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </Col>
  );
}