import React from 'react'

export default function MobileFooter() {
	return (
		<div>
			<div className="grid grid-cols-2 gap-4 p-5 bg-gray-200">
				<div>
					<h6 className="uppercase font-semibold text-sm mb-4 flex justify-cente">  Terms & Conditions</h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 text-left">Privacy</h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 text-left">Contact Us</h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 text-left">FAQ</h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 text-left">Products</h6>
				</div>
				 <div className="flex-col">
        			<h6 className="uppercase font-semibold text-sm mb-4 flex ">Delivery</h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 flex ">Return</h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 flex ">Our partners</h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 flex ">How to shop</h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 flex ">Products</h6>
         		 </div>
         		 <div className="flex-col text-gray-400">
        			<h6 className="uppercase font-semibold text-sm mb-4 flex">Zona e Re Industriale, Veternik <br/>10000 Prishtinë, Kosovë</h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 flex"></h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 flex"></h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 flex"></h6>
        			<h6 className="uppercase font-semibold text-sm mb-4 flex">048 300 800 <br/>info@albionline.com</h6> 
         		 </div>
         		 
      <div className="flex-col justify-center items-center mt-10">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
       Subscribe to our newsletter
        </h6> 
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        <input type="text" className="w-full border border-gray-300 bg-white rounded-full px-5 py-2" placeholder="Email"/>
        </h6> 
        
         
      </div>

			</div>
		</div>
	)
}