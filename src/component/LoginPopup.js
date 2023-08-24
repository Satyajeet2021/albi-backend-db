import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import {LoginPopupBtn} from "../action";
export default function LoginPopup() {
	 const dispatch = useDispatch();
	 const closePupup=()=>{
     dispatch(LoginPopupBtn())
  };
	
	return (
		<div className="login-banner w-full bg-[#f0ad4e] flex items-center justify-center text-black border border-[#f0ad4e] py-1"><span className="text-black font-semibold px-2">Njoftim </span> Jeni kyçur me sukses <button className="px-2 bg-black text-white py-0.5 rounded-md ml-2 text-xs" onClick={(e)=>closePupup()}>mbyll</button></div>
		  
    
	)
}