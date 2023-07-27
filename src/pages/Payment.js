
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetCart } from "../redux/shopperSlice";
import { useDispatch } from "react-redux";


export default function Payment(){
	const navigate = useNavigate();
	const [cardNum, setCardNum] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [cvvNum, setCvv] = useState("");
	const dispatch = useDispatch();

	const makePayment = (e) => {
		e.preventDefault();
		const form = e.target.form;

		if (form.checkValidity()) {
			if (cardNum.length !== 16) {
				alert("Card must be of length 16 digits !!!");
			} else if (!expiryDate.match(/^\d{2}\/\d{2}$/)) {
				alert("Please enter the correct expiry date in the format MM/YY !!!");
			} else if (!cvvNum.match(/^\d{3}$/)) {
				alert("Please enter the correct CVV number !!!");
			} else {
				navigate('/finalOrderSummary');
			}
			resetCartt();
		} else {
			form.reportValidity();
		}
	}
	
	const resetCartt = () => {
		return dispatch(resetCart());
	}
		return (
			<div style={{ textAlign: "center", height: "600px" }}>
				<h1 style={{ fontSize: "30px", color: "blue", marginBottom: "40px", marginTop: "50px" }}>Please fill the payment details</h1>
				<form className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md" style={{ height: "400px", textAlign: "left" }}>
					<div className="mb-6">
						<label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700" style={{ marginBottom: "30px" }}>
							Card Number
						</label>
						<input
							type="text"
							id="cardNumber"
							className="mt-1 focus:ring focus:border-blue-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							placeholder="1234 5678 9012 3456"
							style={{ marginBottom: "50px" }}
							value={cardNum}
							onChange={(e) => setCardNum(e.target.value.replace(/\D/g, ''))}
							required
						/>
					</div>
					<div className="grid grid-cols-2 gap-4 mb-6">
						<div>
							<label htmlFor="expiration" className="block text-sm font-medium text-gray-700" style={{ marginBottom: "50px" }}>
								Expiration Date
							</label>
							<input
								type="text"
								id="expiration"
								className="mt-1 focus:ring focus:border-blue-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
								placeholder="MM / YY"
								value={expiryDate}
								onChange={(e) => setExpiryDate(e.target.value)}
								required
							/>
						</div>
						<div>
							<label htmlFor="cvv" className="block text-sm font-medium text-gray-700" style={{ marginBottom: "50px" }}>
								CVV
							</label>
							<input
								type="text"
								id="cvv"
								className="mt-1 focus:ring focus:border-blue-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
								placeholder="123"
								value={cvvNum}
								onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
								required
							/>
						</div>
					</div>
					<div className="text-center">
						<button
							className="w-full px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none focus:border-blue-300"
							onClick={(e) => makePayment(e)}>
							Pay Now
						</button>
					</div>
				</form>
			</div>
		);
	};

