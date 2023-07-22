import React from "react";
import { Link } from "react-router-dom";
import { logo, cartImg } from "../assets/index";
import { useSelector } from "react-redux";

const Header = () => {
  const { productData } = useSelector((state) => state.shopper);
  const userInfo = useSelector((state) => state.shopper.userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50" style={{backgroundColor:"#FFA500",borderStyle:"none"}}>
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <p>
              <span className="text-5xl text-black font-semibold w-1"><span style={{color:"red"}}>s</span><span style={{color:"#00008B"}}>h</span><span style={{color:"white"}}>o</span><span style={{color:"#2F4F4F"}}>pp</span><span style={{color:"#FF1493"}}>er</span><span style={{color:"##800000"}}>s</span>
			  </span>
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-8" style={{color:"black"}}>
          <ul className="hidden md:flex items-center gap-8">
           <Link to="/">
           <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration -[1px] cursor-pointer" style={{color:"black", fontSize:"20px"}}>
              Home
            </li>
           </Link>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-10" src={cartImg} alt="cart" style={{marginLeft:"20px"}} />
              <span className="absolute w-8 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont" style={{color:"blue", marginLeft:"20px"}}>
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              }
              alt=""
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
