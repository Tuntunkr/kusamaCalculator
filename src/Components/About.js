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
							Polkacal aims to help users in the kusama and
							polkadot ecosystem by providing a clean and
							user-focused interface for all their cryptocurrency
							calculation needs. The site is an amalgamation of
							various different calculation tools that aim to
							solve the polkadot and kusama community. We will be
							adding in the new and innovative features around
							these currencies. So make sure to stay in the loop!
						</p>
						{/* <div>
							<h6>
								The current incarnation of the site includes two
								calculators:
							</h6>
							<p>1. Kusama Price Conversion Calculator</p>
							<p>2. Cardano Kusama Staking Calculator</p>
						</div>

						<div>
							<h5>1) Price Conversion Calculator</h5>
							<p>
								Displays the latest price of Kusama supporting
								convertions from Kusama into Fiat or other
								Crytpocurrencies such as Bitcoin and Ethereum.
								The price calculator pulls the price data from
								the public CoinGecko.com API every 4 seconds
								keeping you up to date.
							</p>

							<h5>2) Cardano Kusama Staking Calculator</h5>
							<p>
								The Cardano project has yet to announce the
								offical specification and formulas which will be
								used to calculate Kusama staking rewards. The
								calculator we currently present is therefore a
								demonstrative/educational calculator only, which
								fills in the currently unknown with sensible
								default parameter values aiming to provide a
								decent attempt at what kusama rewards one could
								possibly expect. Once Cardano release the final
								details regarding how staking works, we will
								update the staking calculator to reflect the
								final formula, providing greater accuracy. The
								calculator, features, and formula used was
								heavily inpired by the work from Emergo employee
								and
							</p>

							<h5>How the site works:</h5>
							<p>
								None of the data you enter on any of the
								calculators ever leaves your computer as all
								calculations are performed on the client side
								(inside your browser). The persistant state of
								what you have entered is stored using the
								browsers 'localStorage' which is only available
								to your machine and not to us.
							</p>
						</div> */}
					</div>
				</Row>
			</Container>
		</>
  );
}

export default About;
