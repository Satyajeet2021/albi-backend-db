import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../component/Header";
import Footer from "../component/Footer"

export default function Reg() {
	return (
		<div>
		<Header/>
		<div className="flex container mx-auto items-center px-5 py-10 w-9/12">
		<div className="flex-col">
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
				<Link to="/business"><p className="flex border text-sm border-gray-300 rounded-full py-1 px-10 space-x-2"><span className="font-bold px-2">+</span> Register as a business</p></Link>
			</div>

		{/*Form*/}
		<div>
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">First Name</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
			</div>  
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Last Name</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
			</div>  
 
		</div>
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Email</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
			</div>  
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Phone Number</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
			</div>  
  		</div>

		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Email</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
			</div>  
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Phone Number</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Address</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
			</div>  
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">City</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Password</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
			</div>  
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Conferm Password</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Date of Birth</div>
			<div className="flex space-x-5">
			<input type="text" className="bg-gray-200 rounded-full w-4/12 p-2"/>
			<input type="text" className="bg-gray-200 rounded-full w-4/12 p-2"/>
			<input type="text" className="bg-gray-200 rounded-full w-4/12 p-2"/>
			</div>  
			</div>  
			<div className="flex-col w-6/12">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Gender</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12"> 
			 <input type="checkbox" className="text-sm"/> I agree <Link to="#">withTerms&Conditions</Link>
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2">
			<div className="flex-col w-6/12"> 
			<button className="px-8 py-3  border border-gray-800 uppercase text-sm font-semibold">Register</button>
			</div>  
  		</div>
  		 
		</div>



		</div>
		</div>
		<Footer/>
			
		</div>
	)
}