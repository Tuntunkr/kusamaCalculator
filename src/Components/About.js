import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

function About() {
  return (
    <>
      <Container>
        <Row>
          <div className="customCard about">
            <h1>About Polkacal</h1>
            <p>
              Polkacal.com aims to help users in the kusama and polkadot
              ecosystem by providing a clean and user-focused interface for all
              their cryptocurrency calculation needs. The site is an
              amalgamation of various different calculation tools that aim to
              solve the polkadot and kusama community. We will be adding in the
              new and innovative features around these currencies. So make sure
              to stay in the loop!
            </p>
          </div>
        </Row>
      </Container>
      <p className="text-center">Designed and Created by Planck labs</p>
    </>
  );
}

export default About;
