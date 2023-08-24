import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer"

export default function Reg(){

	   	 const [fname,setFname] = useState("");
       const [lname,setLname] = useState("");
       const [businessName,setBusinessName] = useState("");
       const [businessNumber,setBusinessNumber] = useState("");
       const [businessType,setBusinessType] = useState("");
       const [email,setEmail] = useState("");
       const [phoneNumber,setPhoneNumber] = useState("");
       const [address,setAddress] = useState("");
       const [city,setCity] = useState("");
       const [password,setPassword] = useState("");
       const [confermPassword,setConfermPassword] = useState("");
       const [businessRegister,setBusinessRegiste] = useState("");

       const setBusinessRegister=async()=>{
       	const data = {fname,lname,businessName,businessNumber,businessType,email,phoneNumber,address,city,password,confermPassword,businessRegister}
       	const res  = await axios.post("https://appapi.albionline.com/api/businessReg",data);
       	alert("Vendor Registration Successfull");
 			}

	return (
		<div>
		<Header/>
		<div className="flex container mx-auto items-center px-5 py-10 w-9/12">
		<div className="flex-col w-full">
			<div className="flex text-left justify-center items-center space-x-2">
			<div className="flex space-x-2 justify-center items-center">
				<h1 className="text-3xl">Create an account</h1>
				<svg
    width="24"
    height="22.016"
    viewBox="0 0 13.99 17.016"
    className="HeadingTitle__icon"
  >
    <path
      id="Path_18"
      data-name="Path 18"
      d="M2.005,79.741a7.1,7.1,0,0,1,13.99,0,12.359,12.359,0,0,1-13.99,0Zm3.329-11.18A3.666,3.666,0,1,1,9,72.227,3.669,3.669,0,0,1,5.334,68.561Z"
      transform="translate(-2.005 -64.895)"
    />
  </svg>
			</div>	
				<Link to="/reg"><p className="flex border text-sm border-gray-300 rounded-full py-1 px-10 space-x-2" style={{backgroundColor:"#fff4dd"}}><span className="font-bold px-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 12l5 5l10 -10"></path>
</svg>
				</span> Register as a business</p></Link>
			</div>

		{/*Form*/}
		<div className="w-full">
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">First Name</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" onChange={(e)=>setFname(e.target.value)}/>
			</div>  
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Last Name</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" onChange={(e)=>setLname(e.target.value)}/>
			</div>  
 
		</div>
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">BUSINESS NAME</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" onChange={(e)=>setBusinessName(e.target.value)}/>
			</div>  
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">BUSINESS NUMBER</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" onChange={(e)=>setBusinessNumber(e.target.value)}/>
			</div>  
  		</div>

		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">BUSINESS TYPE</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" onChange={(e)=>setBusinessType(e.target.value)}/>
			</div>  
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">EMAIL</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" onChange={(e)=>setEmail(e.target.value)}/>
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">PHONE NUMBER</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" onChange={(e)=>setPhoneNumber(e.target.value)}/>
			</div>  
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">ADDRESS</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" onChange={(e)=>setAddress(e.target.value)}/>
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">CITY</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" onChange={(e)=>setCity(e.target.value)}/>
			</div>  
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">PASSWORD</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" onChange={(e)=>setPassword(e.target.value)}/>
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2">
			 
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">CONFIRM PASSWORD</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" onChnage={(e)=>setConfermPassword(e.target.value)}/>
			</div>  
  		</div> 
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12"> 
			 <input type="checkbox" className="text-sm"/> I agree <Link to="#">withTerms&Conditions</Link>
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12"> 
			<button className="px-8 py-3  border border-gray-800 uppercase text-sm font-semibold" onClick={(e)=>setBusinessRegister()}>Register</button>
			</div>  
  		</div>
  		 
		</div>
	{/*Form*/}



		</div>
		</div>
		<Footer/>
			
		</div>
	)
}