import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../component/Header";
import Footer from "../component/Footer"

export default function Login() {
	return (
		<div>
		<Header/>
		<div className="flex container w-full mx-auto mt-10 justify-center h-screen">
		<div class="flex-col w-8/12 ">
		<div className="flex items-center space-x-2 py-5">
		<h1 className="text-4xl">Log in</h1>
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
		<div className="flex space-x-5">
			<div className="w-6/12 p-5" style={{backgroundColor:"#ebeffd"}}>
				<h1 className="font-semibold py-5">MY ACCOUNT</h1>
				<input type="" className="w-full rounded-full py-2 px-5 mb-5" placeholder="Email"/>
				<input type="" className="w-full rounded-full py-2 px-5 mb-5" placeholder="Password"/>
				<div className="justify-center items-center"><p className="text-sm text-center pb-5">Forgot my password</p></div>
				<div className="justify-center items-center bg-black"><p className="font-semibold  text-sm text-white p-4 text-center uppercase">Log In</p></div>
			</div>
			<div className="w-6/12 p-5" style={{backgroundColor:"#ededed"}}>
				<h1 className="font-semibold py-5">CREATE AN ACCOUNT</h1>
				<div className="pb-24 mt-1 text-sm">
				In order to simplify the checkout process, you need to create an account. Creating an account means handing out your personal information.
				</div>
				<div className="justify-center items-center bg-black "><Link to="/reg"><p className="font-semibold text-sm text-white p-4 text-center uppercase">REGISTER</p></Link></div>
			</div> 
		</div>

	{/*start Authentication*/}
	<div className="justify-center items-center w-full text-center p-5">
		<p>Or login with</p>
		<div className="flex mx-auto p-5 justify-center items-center">
		<div className="w-6/12 space-y-5">
		<button type="button" className="flex border border-gray-300 w-full hover:bg-gray-800 hover:text-white  items-center justify-center p-3">
		<div className="flex space-x-2">
  <svg width="21.942" height="21.809" viewBox="0 0 21.942 21.809">
    <path
      id="Icon_awesome-facebook"
      data-name="Icon awesome-facebook"
      d="M22.5,11.533A10.971,10.971,0,1,0,9.819,22.371V14.7H7.032V11.533H9.819V9.116c0-2.749,1.637-4.268,4.144-4.268a16.884,16.884,0,0,1,2.456.214v2.7H15.035a1.586,1.586,0,0,0-1.788,1.713v2.059H16.29L15.8,14.7H13.247v7.667A10.975,10.975,0,0,0,22.5,11.533Z"
      transform="translate(-0.563 -0.563)"
    />
  </svg>
  <div>Facebook</div></div>
</button>
<button type="button" className="flex border border-gray-300 w-full items-center hover:bg-gray-800 hover:text-white justify-center p-3">
		<div className="flex space-x-2">
  <svg width="21.942" height="21.809" viewBox="0 0 14.133 14.365">
    <path
      id="Icon_awesome-google"
      data-name="Icon awesome-google"
      d="M14.133,7.913a6.67,6.67,0,0,1-6.951,7.014,7.182,7.182,0,0,1,0-14.365A6.907,6.907,0,0,1,12,2.442l-1.955,1.88C7.487,1.854,2.731,3.708,2.731,7.745A4.5,4.5,0,0,0,7.182,12.28a3.884,3.884,0,0,0,4.078-3.1H7.182V6.714H14.02A6.3,6.3,0,0,1,14.133,7.913Z"
      transform="translate(0 -0.563)"
    />
  </svg>{" "}
  <div>Google</div></div>

</button>
</div>
</div>

	</div>
	{/*end Authentication*/}

		</div>
		</div>
			<Footer/>
		</div>
	)
}