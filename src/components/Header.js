import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { logo, cartImg } from "../assets/index";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Header = () => {
  const { productData } = useSelector((state) => state.shopper);
  const userInfo = useSelector((state) => state.shopper.userInfo);
  const navigate = useNavigate();

  const handleHomePage = ()=>{
	if (userInfo) {
		navigate('/home')
    } else {
      toast.error("Please sign In");
    }
  }

  const handleCartPage = ()=>{
	if (userInfo) {
		navigate('/cart')
    } else {
      toast.error("Please sign In");
    }
  }
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50" style={{backgroundColor:"#DCDCDC",borderStyle:"none",height:"80px", boxShadow:"5px 15px 35px #000" }}>
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between" style={{marginLeft:"40px"}}>
        <Link to="/">
          <div>
			<img src="https://seeklogo.com/images/F/fashion-shop-clothes-hanger-logo-C4A9A1FA8C-seeklogo.com.png" style={{width:"80px", height:"70px"}}/>
           </div>
        </Link>
        <div className="flex items-center gap-8" style={{color:"black"}}>
          <ul className="hidden md:flex items-center gap-8">
           <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration -[1px] cursor-pointer" style={{color:"black", fontSize:"20px"}} onClick={handleHomePage}>
              Home
            </li>
          </ul>
            <div className="relative" onClick={handleCartPage} style={{cursor:"pointer"}}>
              <img className="w-10" src={cartImg} alt="cart" style={{marginLeft:"20px"}} />
              <span className="absolute w-8 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont" style={{color:"blue", marginLeft:"20px"}}>
                {productData.length}
              </span>
            </div>
          <Link to="/">
            <img
              className=" w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
				:"https://tse2.mm.bing.net/th?id=OIP.Crq9sn3Qu3HyHwPJi2zW8QHaHa&pid=Api&P=0&h=180"
              }
              alt=""
			/>
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2" style={{paddingRight:"5px"}}>
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
