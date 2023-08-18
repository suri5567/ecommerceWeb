
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addUser, removeUser } from '../redux/shopperSlice';
import { useNavigate } from 'react-router-dom';
import { googleImg } from "../assets/index";
import { useSelector } from "react-redux";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const profileImages = [
	"https://tse3.mm.bing.net/th?id=OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw&pid=Api&P=0&h=180",
	"https://tse1.mm.bing.net/th?id=OIP.ndapGeUyZ0m5iDxNQOLkBgHaHa&pid=Api&P=0&h=180",
	"https://tse2.mm.bing.net/th?id=OIP.bbEC4zuJyYZq2FwlY1w1kAHaHa&pid=Api&P=0&h=180",
	"https://tse4.mm.bing.net/th?id=OIP.Y1Dlue3OF6hx4v6I3uDkvQHaHa&pid=Api&P=0&h=180",
	"https://tse1.mm.bing.net/th?id=OIP.cxw_TB5nOSF4fpiVCuZaOAHaHa&pid=Api&P=0&h=180",
	"https://tse3.mm.bing.net/th?id=OIP.Kf-A4bhyw6NFAggbsk3cdwHaIU&pid=Api&P=0&h=180",
	"https://tse4.mm.bing.net/th?id=OIP.euqcyHvusXHENYgYwF-C5wHaFh&pid=Api&P=0&h=180",
	"https://tse2.mm.bing.net/th?id=OIP._NWvCJxi-_nfSbQF2uTypAHaHa&pid=Api&P=0&h=180"
];

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	const userInfo = useSelector((state) => state.shopper.userInfo);
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const handleGoogleLogin = (e) => {
		e.preventDefault();
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				dispatch(addUser({
					_id: user.uid,
					name: user.displayName,
					email: user.email,
					image: user.photoURL
				}));
				setTimeout(() => {
					navigate("/home");
				}, 1500);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				toast.success("Log Out Successfully");
				dispatch(removeUser());
			})
			.catch((error) => {
				console.log(error);
			});
	};



	useEffect(() => {
		const checkAuthState = () => {
			if (userInfo) {
				setIsLoggedIn(false);
				navigate('/home');
			} else {
				navigate('/');
			}
		};

		
		const hasEffectRun = sessionStorage.getItem('hasEffectRun');

		if (!hasEffectRun) {
		
			sessionStorage.setItem('hasEffectRun', 'true');

			
			if (isLoggedIn) {
				checkAuthState();
			} else {
				navigate('/');
			}
		}
	}, [isLoggedIn]);


	const handleManualLogin = (e) => {
		e.preventDefault();
		const user = auth.currentUser;
		if (user) {

			dispatch(addUser({
				_id: user.uid,
				name: user.displayName,
				email: user.email,
				image: user.photoURL || getRandomProfileImage()
			}));
			toast.success("Already Logged In");
		} else {

			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					if (user) {
						dispatch(addUser({
							_id: user.uid,
							name: user.displayName,
							email: user.email,
							image: user.photoURL || getRandomProfileImage()
						}));
						toast.success("Logged In Successfully");
						setTimeout(() => {
							navigate("/home");
						}, 1500);
					}
				})
				.catch((error) => {
					toast.error("Login failed. Please check your credentials.");
				});
		}
	};

	const getRandomProfileImage = () => {
		return profileImages[Math.floor(Math.random() * profileImages.length)];
	};

	return (
		<>
			<div className='w-full flex flex-col items-center justify-center gap-10 py-10'>
				<div>
					<h1 style={{ fontFamily: "sans-serif", fontSize: "30px", color: "blue" }}>Login</h1>
				</div>
				<div >
					<form onSubmit={handleManualLogin} className='w-full flex flex-col items-left justify-center gap-4' style={{ fontSize: "20px" }}>
						Email:<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='text-base w-70 h-12 border-[1px] border-gray-400 rounded-md px-4'
						/>
						Password:<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='text-base w-70 h-12 border-[1px] border-gray-400 rounded-md px-4'
						/>
						<button
							type="submit"
							className='bg-blue-500 text-white text-base py-3 px-14 tracking-wide rounded-md hover:bg-blue-600 duration-300'
						>
							Log In
						</button>
						<h1 style={{ color: "green", fontSize: "20px" }}>New User ? create account</h1>
						<button
							className='bg-blue-500 text-white text-base py-3 px-14 tracking-wide rounded-md hover:bg-blue-600 duration-300'
							onClick={() => navigate("/signup")}>  Sign Up
						</button>
					</form>
				</div>
			</div>

			<div style={{ textAlign: "center", marginTop: "-35px" }}>
				<h1 style={{ fontFamily: "sans-serif", fontSize: "30px", color: "blue" }}>OR</h1>
			</div>

			<div className='w-full flex flex-col items-center justify-center gap-10 py-20' style={{ marginTop: "-80px" }}>
				<div className='w-full flex flex-col items-center justify-center gap-5 md:flex-row md:justify-center'>
					<div
						onClick={handleGoogleLogin}
						className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-1
        hover:border-blue-600 cursor-pointer duration-300'
					>
						<img className='w-8' src={googleImg} alt="googlelogo" />
						<span className='text-sm text-gray-900' >Sign in with Google</span>
					</div>
					<button
						onClick={handleSignOut}
						className='bg-black text-white text-base py-3 px-4 tracking-wide rounded-md hover:bg-gray-800 duration-300'
					>
						Sign Out
					</button>
				</div>

				<ToastContainer
					position="top-left"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='dark'
				/>
			</div>
		</>
	);
};

export default Login;