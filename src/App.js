import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, Col, Container, Row } from "react-bootstrap";

class Notify {
  static notifyTL() {
    toast.info("🦄 Wow so easy!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  static notifyTC() {
    toast.error("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  static notifyTR() {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  static notifyBL() {
    toast.warn("🦄 Wow so easy!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  static notifyBC() {
    toast.dark("🦄 Wow so easy!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  static notifyBR() {
    toast("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export default function App() {
  return (
    <div>
      <Container style={{margin: "auto", paddingTop: "200px"}}>
        <Row>
          <Col>
            <Button
              variant="primary"
              size="lg"
              style={{ margin: "10px" }}
              onClick={Notify.notifyTL}
            >
              Top Left
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              size="lg"
              style={{ margin: "10px" }}
              onClick={Notify.notifyTC}
            >
              Top Center
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              size="lg"
              style={{ margin: "10px" }}
              onClick={Notify.notifyTR}
            >
              Top Right
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary"
              size="lg"
              style={{ margin: "10px" }}
              onClick={Notify.notifyBL}
            >
              Bottom Left
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              size="lg"
              style={{ margin: "10px" }}
              onClick={Notify.notifyBC}
            >
              Bottom Center
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              size="lg"
              style={{ margin: "10px" }}
              onClick={Notify.notifyBR}
            >
              Bottm Right
            </Button>
          </Col>
        </Row>

        <ToastContainer />
      </Container>
    </div>
  );
}
