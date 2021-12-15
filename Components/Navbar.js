import React from "react";
import Nav from "react-bootstrap/Nav";
import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";
import { useInterval } from "../utils/Hooks";
import countries from "../utils/Countries.json";

const coinOptions = [
	{ value: "polkadot", label: "Polkadot" },
	{ value: "kusama", label: "Kusama" },
];

function Navbar() {
	const [currency, setCurrency] = useState("");
	const [coinId, setCoinId] = useState("");
	const [countryData, setCountryData] = useState([{ name: "", flag: "" }]);
	const [price, setPrice] = useState("");
	const [prices, setPrices] = useState("");
	const [tCoun, setTCoun] = useState(0);
	const [refresh, setRefresh] = useState("");
	const [country, setCountry] = useState("");

	useEffect(() => {
		setTCoun(price * coinId);
	}, [coinId]);

	// const getCountries = async () => {
	// 	const res = await axios.get(
	// 		"https://countriesnow.space/api/v0.1/countries/flag/images"
	// 	);

	// 	const data = res.data.data;
	// 	setCountryData(data);
	// };

	const kusamaPrice = async () => {
		const res = await axios.get(
			`http://localhost:5000/?coinId=kusama&currency=usd`
		);
		const data = res.data.kusama.usd;
		console.log(data);
		setPrice(data);
		console.log("called price", data);
	};

	useEffect(() => {
		// getCountries();
		// getCurrency();
		kusamaPrice();
	}, []);

	useInterval(() => {
		kusamaPrice();
	}, 20000);

	return (
		<>
			<div className="container">
				<nav className="flex items">
					<div className="left">
						<a href="/">
							<span>Kusama</span> calculator
						</a>
					</div>
					<Nav className="customNav">
						<Nav.Link href="/Price">Price</Nav.Link>
						<Nav.Link href="/EMA30">EMA30</Nav.Link>
						<Nav.Link href="/Stakes">Stakes</Nav.Link>
						<Nav.Link href="/About">About</Nav.Link>
					</Nav>
				</nav>
				<div className="main">
					<div className="main-left">
						<img src="./img.jpeg" alt="" />
						<br></br>
						<a>1 Kusama = ${price}</a>
					</div>

					<div className="main-right">
						<Select options={coinOptions} />

						<Select
							options={countries.map((item) => ({
								value: item.currency.code,
								label: `${item.currency.code} - ${item.currency.name}`,
							}))}
						/>
						<div className="four">
							<button className="convert">Convert</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
