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
              Dear Council Members, For over a month, we’ve been working on
              building something that can become a single place for all
              calculation based needs for the Polkadot and Kusama community. The
              website currently features a calculator that can help users get
              realtime fiat values of both Kusama and Polkadot in 8 different
              fiat currencies. 
			  </p>

			  <p>
              This tip is for Polkacal.com, a platform that aims to help users
              in the kusama and polkadot ecosystem by providing a clean and
              user-focused interface for all their cryptocurrency calculation
              needs. 
			  </p>

			  <p>
              The site is an amalgamation of various different calculation tools
              that aim to solve the polkadot and kusama community. We will be
              adding in the new and innovative features around these currencies.
              So make sure to stay in the loop! 
			  </p>

			  <p>
              One of the reasons why we decided to build something like this is
              to make sure users don’t have to jump around for finding simple
              calculator based needs, from getting fiat values to calculating
              staking rewards, there is nothing that we found provided a clean
              hassle free solution for the Polkadot ecosystem. Here are some
              things that we plan on building in the future:
			</p>

			  <p>
              EMA30: Currently users have to figure out the exact location in
              the Polkascan website to find out the EMA30 values, with this
              users can find it right on the homepage. 
			  </p>

			  <p>
              Staking Calculator: We couldn’t find any great resources that are
              simple to use for finding what would be the returns if they stake
              their KSM or DOT. This would give them a clear picture of all
              their staking rewards for a particular amount. 
			  
			  </p>

			  <p>
              We look forward to building this with the community. Do let me
              know any ideas the council or anyone else might have that we could
              incorporate in the platform.
            </p>
            
          </div>
        </Row>
      </Container>
	  <p className="text-center">
	  Designed and Created by Planck labs
	  </p>
    </>
  );
}

export default About;
