import { Button, Col, Container, Row } from "react-bootstrap";
import './Intro.css'

const Intro = () => {
  return (
    <div className="myBG">
      <div className="intro">
        <Container className="text-white d-flex text-center justify-content-center align-align-items-center">
          <Row>
            <Col>
              <div className="title">NONTON GRATIS </div>
              <div className="title">GA PAKE KARCIS</div>
              <div className="introButton mt-4">
                <Button variant="dark">Tampilkan Semua List</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Intro;
