import React from "react";
import Nav from "react-bootstrap/Nav";
import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";
import { useInterval } from "../utils/Hooks";
import countries from "../utils/Countries.json";
import { Container } from "react-bootstrap";
// import { HiSwitchHorizontal } from "react-icons/hi";
// import CurrencyConverter from "./CurrencyConverter";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const coinOptions = [
  {
    value: "polkadot",
    label: (
      <>
        <span>Polkadot</span>
        {/* <img src={} /> */}
      </>
    ),
  },
  { value: "kusama", label: "Kusama" },
];

function Header() {
  const [currency, setCurrency] = useState("");
  const [coinId, setCoinId] = useState("");

  const [price, setPrice] = useState("");

  const [tCoun, setTCoun] = useState(0);

  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [selectedCrypto, setSelectedCrypto] = useState("polkadot");
  const [selectedFiat, setSelectedFiat] = useState("usd");
  console.log("selected crypto", selectedCrypto, selectedFiat);

  // const getCountries = async () => {
  // 	const res = await axios.get(
  // 		"https://countriesnow.space/api/v0.1/countries/flag/images"
  // 	);

  // 	const data = res.data.data;
  // 	setCountryData(data);
  // };
  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  const fetchCurrencyPrice = async (currency, fiat) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/?coinId=${currency}&currency=${fiat.toLowerCase()}`
      );
      const data = res.data[currency];
      console.log(data);
      setPrice(data[fiat.toLowerCase()]);
      console.log("called price", data);
    } catch (e) {
      console.log(e, e.message);
    }
  };

  useEffect(() => {
    // getCountries();
    // getCurrency();
    if (
      selectedCrypto &&
      selectedCrypto.length &&
      selectedFiat &&
      selectedFiat.length
    ) {
      fetchCurrencyPrice(selectedCrypto, selectedFiat);
    }
  }, [selectedCrypto, selectedFiat]);

  // useInterval(() => {
  // 	fetchCurrencyPrice();
  // }, 20000);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            Kusama <span>calculator</span>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="customNav">
            <Nav className="">
              {/* <Nav className="customNav"> */}
              <Nav.Link href="/Price">Price</Nav.Link>
              <Nav.Link href="/EMA30">EMA30</Nav.Link>
              <Nav.Link href="/Stakes">Stakes</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              {/* </Nav> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="calContainer">
        <Container>
          {/* <nav className="flex items">
          <div className="left">
            <a href="/">
              <span>Logo</span>
            </a>
          </div> */}
          {/* <Nav className="customNav">
            <Nav.Link href="/Price">Price</Nav.Link>
            <Nav.Link href="/EMA30">EMA30</Nav.Link>
            <Nav.Link href="/Stakes">Stakes</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav> */}
          {/* </nav> */}
          <Row>
            <Col md={6}>
              <div className="imgBlock">
                <img src="./money-img.png" alt="" width="100%" />
              </div>
            </Col>

            <Col md={6}>
              {/* <h1>Choose Your Currency </h1> */}
              <div className="customCard">
                <div className="inputContainer">
                  <div>
                    {/* <label htmlFor="kusama"></label> */}
                    <input
                      type="text"
                      name="kusama"
                      value={coinId}
                      onChange={(e) => setCoinId(e.target.value)}
                      id="kusama"
                      placeholder="1.00"
                    />
                  </div>

                  <div>
                    <Select
                      // defaultValue={{ label: "Dot", value: 0 }}
                      options={coinOptions}
                      onChange={(item) => setSelectedCrypto(item.value)}
                    />
                  </div>
                </div>

                {/* <CustomSelect /> */}
                {/* text box */}
                <div className="inputContainer">
                  <div>
                    {/* <label htmlFor="inr">{selectedFiat}</label> */}
                    <input
                      type="text"
                      contentEditable={false}
                      name="currency"
                      value={coinId * price || 0}
                      id="inr"
                    />
                  </div>
                  {/* <CurrencyConverter/> */}
                  {/* <div className="switch">
                <HiSwitchHorizontal
								size="30px"
								onClick={() => {
									flip();
								}}
							/>
              </div> */}

                  <div>
                    <Select
                      options={countries.map((item) => ({
                        value: item.currency.code,
                        label: `${item.currency.code} - ${item.currency.name}`,
                      }))}
                      onChange={(option) => setSelectedFiat(option.value)}
                      // defaultValue={{ label: "Dollar", value: 0 }}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <a className="currencyDisplay">
                    {coinId} {selectedCrypto} ={" "}
                    {
                      countries.filter(
                        (item) =>
                          item.currency.code === selectedFiat.toUpperCase()
                      )[0].currency.symbol
                    }
                    {/* {price} */}
                    {coinId * price || 0}
                  </a>
                  {/* <button className="convert">Convert</button> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Header;
