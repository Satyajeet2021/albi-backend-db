import React, {useEffect} from 'react'
import Carousel from 'better-react-carousel'
import Product1 from "../assets/product.jpg"
export default function CarouselPage() {
	return (
		<div className="container mx-auto py-6">
		   <Carousel cols={4} rows={1} gap={20} loop>
      <Carousel.Item> 
 			 <div className="w-full max-w-lg  text-center rounded-lg shadow-2xl overflow-hidden relative">
  			 <div className="relative">
  			 <img src={Product1}/>
  			 <div className="absolute bottom-0 right-0 p-2 bg-white rounded-full hover:bg-black hover:text-white">
  			 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   			 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   			 <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
			 </svg>
  			 </div>
  			 </div>
  			 <div className="p-2">
  			 <div className="text-left px-2 bg-yellow-800 w-8 h-8 rounded-full border-dotted border-2 border-black "></div>
  			 </div>
  			 <div className="text-left px-2">Shirt</div>
  			 <div className="text-left font-semibold px-2">139.0 €</div>
     		 </div> 
      </Carousel.Item>
      <Carousel.Item> 
 			 <div className="w-full max-w-lg  text-center rounded-lg shadow-2xl overflow-hidden relative">
  			 <div className="relative">
  			 <img src={Product1}/>
  			 <div className="absolute bottom-0 right-0 p-2 bg-white rounded-full hover:bg-black hover:text-white">
  			 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   			 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   			 <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
			 </svg>
  			 </div>
  			 </div>
  			 <div className="p-2">
  			 <div className="text-left px-2 bg-yellow-800 w-8 h-8 rounded-full border-dotted border-2 border-black "></div>
  			 </div>
  			 <div className="text-left px-2">Shirt</div>
  			 <div className="text-left font-semibold px-2">139.0 €</div>
     		 </div> 
      </Carousel.Item>
      <Carousel.Item> 
 			 <div className="w-full max-w-lg  text-center rounded-lg shadow-2xl overflow-hidden relative">
  			 <div className="relative">
  			 <img src={Product1}/>
  			 <div className="absolute bottom-0 right-0 p-2 bg-white rounded-full hover:bg-black hover:text-white">
  			 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   			 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   			 <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
			 </svg>
  			 </div>
  			 </div>
  			 <div className="p-2">
  			 <div className="text-left px-2 bg-yellow-800 w-8 h-8 rounded-full border-dotted border-2 border-black "></div>
  			 </div>
  			 <div className="text-left px-2">Shirt</div>
  			 <div className="text-left font-semibold px-2">139.0 €</div>
     		 </div> 
      </Carousel.Item>
      <Carousel.Item> 
 			 <div className="w-full max-w-lg  text-center rounded-lg shadow-2xl overflow-hidden relative">
  			 <div className="relative">
  			 <img src={Product1}/>
  			 <div className="absolute bottom-0 right-0 p-2 bg-white rounded-full hover:bg-black hover:text-white">
  			 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   			 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   			 <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
			 </svg>
  			 </div>
  			 </div>
  			 <div className="p-2">
  			 <div className="text-left px-2 bg-yellow-800 w-8 h-8 rounded-full border-dotted border-2 border-black "></div>
  			 </div>
  			 <div className="text-left px-2">Shirt</div>
  			 <div className="text-left font-semibold px-2">139.0 €</div>
     		 </div> 
      </Carousel.Item>
      <Carousel.Item> 
 			 <div className="w-full max-w-lg  text-center rounded-lg shadow-2xl overflow-hidden relative">
  			 <div className="relative">
  			 <img src={Product1}/>
  			 <div className="absolute bottom-0 right-0 p-2 bg-white rounded-full hover:bg-black hover:text-white">
  			 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   			 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   			 <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
			 </svg>
  			 </div>
  			 </div>
  			 <div className="p-2">
  			 <div className="text-left px-2 bg-yellow-800 w-8 h-8 rounded-full border-dotted border-2 border-black "></div>
  			 </div>
  			 <div className="text-left px-2">Shirt</div>
  			 <div className="text-left font-semibold px-2">139.0 €</div>
     		 </div> 
      </Carousel.Item>   
        
    </Carousel>
			
		</div>
	)
}