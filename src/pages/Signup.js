import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const auth = getAuth();
	const navigate = useNavigate();

	const handleSignup = (e) => {
		e.preventDefault();
		setError(null);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				toast.success("Signup successful");
					navigate('/');  
			})
			.catch((error) => {
				alert(error.message);
			});
	};


	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 shadow-md rounded-md w-96">
				<h2 className="text-2xl font-bold mb-6">Sign Up</h2>

				<form onSubmit={handleSignup}>
					{error && <p className="text-red-500 mb-4">{error}</p>}
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
							required
							autoComplete="current-password" // Add this line
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
					>
						Sign Up
					</button>
				</form>
				<p className="text-gray-600 text-sm mt-4">Already have an account? <Link to="/" className="text-blue-500">Log in</Link></p>
			</div>
		</div>
	);
};

export default Signup;
