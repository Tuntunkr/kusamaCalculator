import React from "react";
import Nav from "react-bootstrap/Nav";
import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";
import { useInterval } from "../utils/Hooks";
import countries from "../utils/Countries.json";
import { HiSwitchHorizontal } from "react-icons/hi";


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
	// Function to switch between two currency
	function flip() {
		var temp = from;
		setFrom(to);
		setTo(temp);
	}

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
							<label htmlFor="inr">{currency}</label>
							<input
								className="bg-gray-700 text-gray-50 border border-gray-50 outline-none"
								type="text"
								name="currency"
								value={tCoun}
								onChange={(e) => setTCoun(e.target.value)}
								id="inr"
							/>
						</div>

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
