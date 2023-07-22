// CongratulationsAndShippingSummary.js
import React from 'react';
import { useSelector } from "react-redux";
import logogif from '../assets/delivery.gif'

const FinalOrderSummary = () => {
	const shippingDetails = useSelector((state) => state.form.formData);
	const productData = useSelector((state) => state.shopper.productData);
	return (
		<>
			<div style={{
				display: "flex", height: "500px", flexDirection: "column", alignItems: "center", justifyContent
					: "center"
			}}>
				<img src={logogif} width="700px" height="200px"/>
				<h1 className="text-2xl font-semibold mb-4" style={{ fontFamily: "cursive", fontSize: "25px", color:"orange"}}>Payment is successfully done !!</h1>
				<h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "cursive", fontSize: "20px", color:"green" }}>Congratulations on Order Booking!</h3>
				<p className="mb-6">
					Thank you for booking your order with us. We will process and ship your
					items as soon as possible.
				</p>
			</div>
		</>
	);
};

export default FinalOrderSummary;
