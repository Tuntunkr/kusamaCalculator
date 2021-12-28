import React from "react";
import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";
import countries from "../utils/Countries.json";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const countriesList = countries.map((item) => ({
	value: item.currency.code,
	label: (
		<>
			<img
				className="img_1"
				width="28px"
				src={`data:image/png;base64,${item.flag}`}
				alt=""
			/>
			<span>
				&nbsp;
				{`${item.currency.code} ${item.currency.name}`}
			</span>
		</>
	),
	meta: {
		symbol: item.currency.symbol,
	},
}));

const coinOptions = [
	{
		value: "Polkadot",
		label: (
			<>
				<img className="img_1" width="30px" src="./dot.png" alt="" />
				&nbsp;
				<span>Polkadot</span>
			</>
		),
		meta: {
			symbol: "DOT",
		},
	},
	{
		value: "Kusama",
		label: (
			<>
				<img className="img_1" width="28px" src="./ksm.png" alt="" />
				&nbsp;
				<span>Kusama</span>
			</>
		),
		meta: {
			symbol: "KSM",
		},
	},
];

function Home() {
	const [coinId, setCoinId] = useState("1");
	const [price, setPrice] = useState("");
	const [selectedCrypto, setSelectedCrypto] = useState(coinOptions[0]);
	const [selectedFiat, setSelectedFiat] = useState(countriesList[0]);
	console.log("selected crypto", selectedCrypto, selectedFiat, countriesList);

	const fetchCurrencyPrice = async (currency, fiat) => {
		try {
			const res = await axios.get(
				`https://secret-ridge-31484.herokuapp.com/?coinId=${currency}&currency=${fiat}`
			);
			const data = res.data[currency];
			console.log("data fetchcurrencyprice", data, res.data);
			setPrice(data[fiat]);
			console.log("called price", data);
		} catch (e) {
			console.log(e, e.message);
		}
	};

	useEffect(() => {
		if (
			selectedCrypto &&
			selectedCrypto.value.length &&
			selectedFiat &&
			selectedFiat.value
		) {
			fetchCurrencyPrice(
				selectedCrypto.value.toLowerCase(),
				selectedFiat.value.toLowerCase()
			);
		}
	}, [selectedCrypto, selectedFiat]);

	return (
		<>
			<div className="calContainer">
				<Container>
					<Row>
						<Col md={6}>
							<div className="imgBlock">
								<img
									src="./money-img.png"
									alt=""
									width="100%"
								/>
							</div>
						</Col>

						<Col md={6}>
							<div className="customCard">
								<div className="inputContainer">
									<div>
										<input
											type="text"
											name="kusama"
											value={coinId}
											onChange={(e) =>
												setCoinId(e.target.value)
											}
											id="kusama"
											placeholder="1.00"
										/>
									</div>

									<div>
										<Select
											defaultValue={coinOptions[0]}
											options={coinOptions}
											onChange={(item) =>
												setSelectedCrypto(item)
											}
										/>
									</div>
								</div>

								{/* <CustomSelect /> */}
								{/* text box */}
								<div className="inputContainer">
									<div>
										<input
											type="text"
											contentEditable={false}
											name="currency"
											value={
												(coinId * price).toFixed(2) || 0
											}
											id="inr"
										/>
									</div>

									<div>
										<Select
											defaultValue={countriesList[0]}
											options={countriesList}
											onChange={(item) => {
												console.log(
													"set selected fiat",
													item
												);
												setSelectedFiat(item);
											}}
										/>
									</div>
								</div>
								<div className="text-center">
									<span className="currencyDisplay">
										{coinId} {selectedCrypto.meta.symbol} =
										&nbsp;
										{
											countriesList.filter(
												(item) =>
													selectedFiat &&
													item.value ===
														selectedFiat.value
											)[0].meta.symbol
										}
										{/* {price} */}
										{(coinId * price).toFixed(2) || 0}
									</span>
									<p>
										<small className="text-muted">
											<br></br>
											<a>
												1 {selectedCrypto.meta.symbol} =
												&nbsp;
												{
													countriesList.filter(
														(item) =>
															selectedFiat.value &&
															item.value ===
																selectedFiat.value
													)[0].meta.symbol
												}
												{price}
											</a>
										</small>
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<p className="text-center">Designed and Created by Planck labs</p>
		</>
	);
}

export default Home;
