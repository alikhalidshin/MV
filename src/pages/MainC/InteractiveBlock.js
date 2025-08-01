import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function CinematicCards() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [exitingIndex, setExitingIndex] = useState(null);

  const cards = [
    { title: "بطاقة الأولى", content: "محتوى البطاقة رقم 1." },
    { title: "بطاقة الثانية", content: "محتوى البطاقة رقم 2." },
    { title: "بطاقة الثالثة", content: "محتوى البطاقة رقم 3." },
    { title: "بطاقة الرابعة", content: "محتوى البطاقة رقم 4." },
    { title: "بطاقة الخامسة", content: "محتوى البطاقة رقم 5." }
  ];

  const handleShow = (index) => {
    if (activeIndex !== index) {
      setExitingIndex(activeIndex);
      setActiveIndex(index);
      setTimeout(() => setExitingIndex(null), 400); // زمن الخروج
    }
  };

  const cardStyle = {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "15px",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "1.5rem",
    margin: "2rem 0",
    position: "relative",
    overflow: "hidden"
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} md={8} className="mx-auto text-center">

          {/* الأزرار */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
            {cards.map((c, i) => (
              <Button key={i} variant="outline-light" onClick={() => handleShow(i)}>
                👈 {c.title}
              </Button>
            ))}
          </div>

          {/* البطاقة الفعالة */}
          {activeIndex !== null && (
            <Card style={cardStyle} className="fade-in-card">
              <Card.Body>
                <Card.Title>{cards[activeIndex].title}</Card.Title>
                <Card.Text>{cards[activeIndex].content}</Card.Text>
              </Card.Body>
            </Card>
          )}

          {/* البطاقة الخارجة */}
          {exitingIndex !== null && (
            <Card style={cardStyle} className="fade-out-card">
              <Card.Body>
                <Card.Title>{cards[exitingIndex].title}</Card.Title>
                <Card.Text>{cards[exitingIndex].content}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      {/* الانميشن */}
      <style>{`
        .fade-in-card {
          animation: fadeInUp 0.4s ease forwards;
          z-index: 2;
        }
        .fade-out-card {
          animation: fadeOutDown 0.4s ease forwards;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeOutDown {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(20px); }
        }
      `}</style>
    </Container>
  );
}

export default CinematicCards;