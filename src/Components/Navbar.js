import React from "react";
import Nav from "react-bootstrap/Nav";
import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";
import { useInterval } from "../utils/Hooks";
import countries from "../utils/Countries.json";
import { HiSwitchHorizontal } from "react-icons/hi";
import CurrencyConverter from "./CurrencyConverter";

const coinOptions = [
	{ value: "polkadot", label: "Polkadot" },
	{ value: "kusama", label: "Kusama" },
];

function Navbar() {
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
						<a>
							1 {selectedCrypto} ={" "}
							{
								countries.filter(
									(item) =>
										item.currency.code ===
										selectedFiat.toUpperCase()
								)[0].currency.symbol
							}
							{price}
						</a>
					</div>

					<div className="main-right">
						<h1>Choose Your Currency </h1>
						<Select
							options={coinOptions}
							onChange={(item) => setSelectedCrypto(item.value)}
						/>
						{/* <CustomSelect /> */}
						{/* text box */}
						<div className="flex flex-col space-y-2 ">
							<label htmlFor="kusama"></label>
							<input
								className="bg-gray-700 text-gray-50 py-1 px-2 border border-gray-50 outline-none"
								type="text"
								name="kusama"
								value={coinId}
								onChange={(e) => setCoinId(e.target.value)}
								id="kusama"
							/>
						</div>
						<div className="flex flex-col space-y-2 ">
							<label htmlFor="inr">{selectedFiat}</label>
							<input
								className="bg-gray-700 text-gray-50 border border-gray-50 outline-none"
								type="text"
								contentEditable={false}
								name="currency"
								value={coinId * price || 0}
								id="inr"
							/>
						</div>
						{/* <CurrencyConverter/> */}
						<div className="switch">
							<HiSwitchHorizontal
								size="30px"
								onClick={() => {
									flip();
								}}
							/>
						</div>
						<Select
							options={countries.map((item) => ({
								value: item.currency.code,
								label: `${item.currency.code} - ${item.currency.name}`,
							}))}
							onChange={(option) => setSelectedFiat(option.value)}
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
