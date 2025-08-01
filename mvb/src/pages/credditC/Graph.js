import React from 'react';
import { Col, Row, Badge } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Zoom } from 'react-awesome-reveal';
import 'react-circular-progressbar/dist/styles.css';

function Graph({ wiil, capacity, context, stability, AssesedBy }) {
  const scores = [wiil, capacity, context, stability];
  const validScores = scores.filter((v) => typeof v === 'number');
  const avg = validScores.length ? Math.round(validScores.reduce((a, b) => a + b, 0) / validScores.length) : 0;
  const score5 = ((avg / 100) * 5).toFixed(1);

  const riskLevel = avg >= 80 ? 'LOW' : avg >= 50 ? 'MEDIUM' : 'HIGH';
  const riskColor = riskLevel === 'LOW' ? 'success' : riskLevel === 'MEDIUM' ? 'warning' : 'danger';
  const assessor = AssesedBy?.[0]?.name || 'Unknown';

  return (
    <Row className="border-0 m-4 rounded-4 p-4 love">
      <Col className="border-end d-flex flex-column justify-content-center align-items-center">
        <Zoom>
          <p className="fs-3">Credit Summary</p>
          <div className="p-4" style={{ width: "140px", height: "140px" }}>
            <CircularProgressbar
              value={avg}
              text={`${avg}%`}
              styles={{
                path: { stroke: `rgba(0, 123, 255, ${avg / 100})`, strokeLinecap: 'round' },
                trail: { stroke: '#eee' },
                text: { fill: '#333', fontSize: '16px', fontWeight: 'bold' },
              }}
            />
          </div>
          <p className="fs-5 mb-0">Final Score: {score5} / 5.0</p>
        </Zoom>
      </Col>

      <Col className="border-start px-4 d-flex flex-column justify-content-center">
        <Zoom delay={300}>
          <p className="fs-4 mb-2">
            Risk Level: <Badge bg={riskColor} text="white">{riskLevel}</Badge>
          </p>
          <p className="fs-4 mb-2">
            Assessed by: <Badge bg="dark" text="white">{ "Mohammed"}</Badge>
          </p>
        </Zoom>
      </Col>
    </Row>
  );
}

export default Graph;