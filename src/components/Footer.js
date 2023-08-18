import React from "react";
import './Footer.css'
import { logoDark, payments, gitHub1 } from "../assets/index.js";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaYoutube,
	FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {

	return (
		<div className="py-10 px-4 md:px-0 font-titleFont" style={{ backgroundColor: "#333333", color: "white", boxShadow: "0px 25px 55px #000" }}>
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-8" style={{ color: "white" }}>
				<div className="flex flex-col gap-7 md:col-span-2">
					<h2 className="text-2xl font-semibold text-white mb-2 mt-6 md:mt-0" style={{ color: "white" }}>
						Fashion Shop
					</h2>
					<p className="text-white text-sm tracking-wide" style={{ color: "white" }}>@Reactby.com</p>
					<img className="w-16 md:w-20" src={payments} alt="paymentLogo" />

					<div className="flex gap-5 text-3xl text-gray-400 mt-4">
						<FaYoutube className="effect hover:text-red-500 hover:cursor-pointer" />
						<FaFacebookF className="effect hover:text-red-500 hover:cursor-pointer" />
						<FaTwitter className="effect hover:text-red-500 hover:cursor-pointer" />
						<FaInstagram className="effect hover:text-red-500 hover:cursor-pointer" />
					</div>
				</div>
				<div className="mt-8 md:mt-0">
					<h2 className="text-2xl font-semibold text-white mb-2" style={{ color: "white" }} >locate us</h2>
					<div className="text-base flex flex-col gap-2">
						<p>B-149, VSPN, India</p>
						<p>Mobile: 1022093827</p>
						<p>Phone: 3332244</p>
						<p>email: fashionshop@gmail.com</p>
					</div>
				</div>
				<div className="mt-8 md:mt-0">
					<h2 className="text-2xl font-semibold text-white mb-2" style={{ color: "white" }}>Profile</h2>
					<div className="text-base flex flex-col gap-2">
						<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
							<span className="text-lg">
								<BsPersonFill />
							</span>
							my account
						</p>
						<p className="flex items-center gap-3 hover:text-red duration-300 cursor-pointer">
							<span className="text-lg">
								<BsPaypal />
							</span>
							checkout
						</p>
						<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
							<span className="text-lg">
								<FaHome />
							</span>
							order tracking
						</p>
						<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
							<span className="text-lg">
								<MdLocationOn />
							</span>
							help & support
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;