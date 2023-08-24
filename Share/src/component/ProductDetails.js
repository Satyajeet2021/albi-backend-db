import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from "../component/Header";
import {GetCartData, GetVariantData} from "../action"
import {addToCart,getCartItems} from "../action"
import {useDispatch,useSelector} from "react-redux";
import ReactImageZoom from "react-image-zoom";
import Variants from "../component/Variants"; 
import $ from 'jquery';

export default function PrductDetails() {  
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();
	const {id} = useParams(); 
	const productData = useSelector(state=>state?.productData?.allProduct)
	const dataDetails = productData.find(dt=>dt._id===id)
  const [variantClickData,setVariantClickData] = useState([])
  const [productImage,setProductImage] = useState()
 
  
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       autoDisplay: false,
  //       includedLanguages: 'en,ms',
  //     },
  //     "google_translate_element"
  //   );
  // };

  
useEffect(()=>{
    // const getAllCart=async()=>{
    //   await dispatch(GetCartData())
    // };
    // getAllCart();
    const itemId = dataDetails?.item_code;
    const data={itemId:itemId}
    console.log("-------data----------------data-------", data);
    const getAllVariants=async()=>{
      await dispatch(GetVariantData(data))
    };
    getAllVariants();

    $(document).ready(function(){
      $(".productthumb div img:first").addClass("firstimg");
    });


    // var addScript = document.createElement("script");
    // addScript.setAttribute(
    //   "src",
    //   "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    // );
    // document.body.appendChild(addScript);
    // window.googleTranslateElementInit = googleTranslateElementInit;

   },[])

	const onQuantityIncrement = () => {
    setQty(qty + 1); 
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1); 
  };

  const addToCartData=(id,productName,totalPrice,productImg)=>{
  	const data = {id,totalPrice,productImg,productName,qty}
    console.log(data)
  	dispatch(addToCart(data))
   //  dispatch(GetCartData())
  }

  const allVariantData = useSelector(state => state?.productData?.variantData);

  // console.log("-------allVariantData---------", allVariantData);

  const getVariantSelectDAta = (itemCode) => {
    console.log("---------------itemCode-", itemCode);
    const dataDetailsvariant = allVariantData.find(dt=>dt.item_code===itemCode);
    console.log("---------------itemCode List--------------", dataDetailsvariant);
    setVariantClickData(dataDetailsvariant)
    // localStorage.setItem(dataDetails);
    // localStorage.getItem("lastname");

   };

  const props = {
  width: 546,
  height: 340,
  zoomPosition: "right",
  zoomWidth: 546,
  img: productImage ? productImage : dataDetails?.images[0]
};

console.log("Images ===== ", productImage)

// const props = {
//   width: 400,
//   height: 250, 
//   zoomWidth: 500,
//   img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
// };
 

	return (
		<div>
		<div className="flex-col">
		<div>
		<Header/>
		</div>
    {/* <div id="google_translate_element"></div> */}
{/* onload variant */}
		<div className="container w-11/12 mx-auto p-5">
			<div className="flex space-x-20">
				<div className="w-4/12 h-96">
          <div className="productthumb"> 
					  {/*<img src={Object.keys(variantClickData).length>0||productImage?.length>0?productImage?.length>0?productImage:variantClickData?.images[0]:dataDetails?.images[0]} className="w-full"/>*/}
            <ReactImageZoom {...props} /> 
          </div>
          <div className="h-96">
            <div className='flex space-x-5 h-24'> 

            {Object.keys(variantClickData).length>0? 
              variantClickData?.images?.map(dt=>(

                <div className='flex object-cover cursor-pointer'>
                  
                  <img src={dt} onClick={(e)=>setProductImage(dt)}/>
                </div>
              ))
              :
              dataDetails?.images?.map(dt=>(

                <div className='flex object-cover cursor-pointer'>
                  
                  <img src={dt} onClick={(e)=>setProductImage(dt)}/>
                </div>
              ))}
            </div>
          </div>
				</div>
				<div className="flex-col w-7/12">
					<div className="flex items-center w-full">
					<p className="border border-gray-500 text-xs p-1">{dataDetails?.brand}</p>
					</div>
					<h1 className="text-4xl py-2">{Object.keys(variantClickData).length>0?variantClickData?.name:dataDetails?.name} </h1>
					<p className="text-md font-semibold py-4">{Object.keys(variantClickData).length>0?variantClickData?.regular_price:dataDetails?.regular_price } €</p>
					<div className="text-md font-semibold py-4 border-b border-dotted border-gray-300">
						<p className="text-md text-gray-400">Gender</p>
						<p className="font-normal">Men</p>
					</div>
          
					{/* <div className="text-md font-semibold border-b border-dotted border-gray-300 flex space-x-4 items-center py-5">
						<p className="text-md text-gray-400">Color</p>
            {dataDetails?.images.map((colorimg, i)=>(
            <p className="font-normal p-2 rounded-full border-1 w-7 h-7 border-dotted border-red-600 product-color-img">
                <img src={colorimg} className={i} />
            </p>
            ))}

            <Variants />
					</div>
					<div className="text-md font-semibold border-b border-gray-300 flex space-x-4 items-center py-5">
						<p className="text-md text-gray-400">Size</p>
						 <select className="w-auto px-2 text-gray-500">
						 	<option>Select Option</option>
						 	<option>S</option>
						 	<option>M</option>
						 	<option>L</option>
						 	<option>XL</option>
						 	<option>XXL</option>
						 </select>
					</div> */}

          <div className="text-md font-semibold border-b border-dotted border-gray-300 flex space-x-4 items-center py-5">
            <p className="text-md text-gray-400">Color</p> 


            {allVariantData.length > 0 ? <>
              {allVariantData?.map(dt=>(
                <div className='flex object-cover cursor-pointer' title={dt?.name} onClick={(e)=>getVariantSelectDAta(dt?.item_code)}> 
                  <img src={dt?.images} alt={dt?.item_code} className="h-10 w-10" onClick={(e)=>setProductImage(dt?.images)} />
                </div>
              ))}
              </> : ''}
           



      </div>
      <div className="text-md font-semibold border-b border-gray-300 flex space-x-4 items-center py-5">
            <p className="text-md text-gray-400">Size</p>
             <select className="w-auto px-2 text-gray-500">
              <option>Select Option</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
             </select>
          </div>



						<div className="text-md font-semibold border-b border-dotted border-gray-300 flex space-x-4 items-center py-5">
						
					<p className="font-normal text-sm">
					<span className="font-bold text-gray-400">CODE</span> :  {Object.keys(variantClickData).length>0?variantClickData?.item_code:dataDetails?.item_code}</p>
					<p className="font-normal text-sm">
					<span className="font-bold text-gray-400">Origin</span>: BD</p>
					<p className="font-normal text-sm">
					<span className="font-bold text-gray-400">Composition</span>: 100% Cotton</p>
					</div>
					<div>

						<div className="text-md font-semibold border-b border-dotted border-gray-300 flex space-x-4 items-center py-5">
						 <p className="flex space-x-1 text-sm items-center pr-5">
						 <svg width="18.5" height="15.031" viewBox="0 0 18.5 15.031">
  <path
    id="Icon_metro-truck"
    data-name="Icon metro-truck"
    d="M21.07,13.878,18.758,9.253H15.289V6.94a1.16,1.16,0,0,0-1.156-1.156H3.727A1.16,1.16,0,0,0,2.571,6.94v9.25l1.156,1.156H5.193a2.312,2.312,0,1,0,4,0h6.4a2.312,2.312,0,1,0,4,0H21.07V13.878Zm-5.781,0V10.409h2.4l1.734,3.469H15.289Z"
    transform="translate(-2.571 -5.784)"
  />
</svg>


<span className="text-gray-400">Delivery time 48h</span>
{" "}
{" "}
<svg width={22} height={22} viewBox="0 0 22 22">
  <g
    id="Icon_feather-info"
    data-name="Icon feather-info"
    transform="translate(-2 -2)"
  >
    <path
      id="Path_604"
      data-name="Path 604"
      d="M23,13A10,10,0,1,1,13,3,10,10,0,0,1,23,13Z"
      fill="none"
      stroke="#fca700"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      id="Path_605"
      data-name="Path 605"
      d="M18,22V18"
      transform="translate(-5 -5)"
      fill="none"
      stroke="#fca700"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      id="Path_606"
      data-name="Path 606"
      d="M18,12h0"
      transform="translate(-5 -3)"
      fill="none"
      stroke="#fca700"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </g>
</svg>

</p> 

 <p className="flex space-x-1 text-sm items-center">
 <svg
  enableBackground="new 0 0 24 24"
  height={512}
  viewBox="0 0 24 24"
  width={512}
  style={{ width: 19, height: 16 }}
>
  <path d="m17.743 14.87 1.781-1.555c.312-.272.345-.746.072-1.058-.272-.312-.746-.344-1.059-.072l-3.281 2.864c-.162.142-.256.348-.256.565s.094.423.257.565l3.281 2.863c.143.124.318.185.493.185.209 0 .417-.087.565-.257.272-.312.24-.786-.072-1.058l-1.758-1.534c2.622.079 4.733 2.268 4.733 4.962v1.909c0 .414.336.75.75.75s.751-.335.751-.749v-1.909c0-3.531-2.796-6.406-6.257-6.471z" />
  <path d="m9.22 0-4.86.02c-.63 0-1.22.35-1.52.9l-2.54 4.6 8.43-.02z" />
  <path d="m19.68 5.48-2.57-4.6c-.31-.55-.89-.9-1.53-.9l-4.86.02.51 5.5z" />
  <path d="m20 10.18c-.3-.12-.63-.18-.97-.18-.66 0-1.3.24-1.81.68l-3.28 2.86c-.6.52-.94 1.28-.94 2.07 0 .8.34 1.55.94 2.08l2.64 2.3-14.97.04c-.01 0-.01 0-.01 0-.86 0-1.57-.71-1.57-1.58l-.04-11.43 9.25-.02h1.5l9.25-.03z" />
</svg>


 <span className="text-gray-400">Returns policy</span>
 <svg width={22} height={22} viewBox="0 0 22 22">
  <g
    id="Icon_feather-info"
    data-name="Icon feather-info"
    transform="translate(-2 -2)"
  >
    <path
      id="Path_604"
      data-name="Path 604"
      d="M23,13A10,10,0,1,1,13,3,10,10,0,0,1,23,13Z"
      fill="none"
      stroke="#fca700"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      id="Path_605"
      data-name="Path 605"
      d="M18,22V18"
      transform="translate(-5 -5)"
      fill="none"
      stroke="#fca700"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      id="Path_606"
      data-name="Path 606"
      d="M18,12h0"
      transform="translate(-5 -3)"
      fill="none"
      stroke="#fca700"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </g>
</svg>

 </p>
					</div>
					</div>
					<div className="flex space-x-4 py-5 items-center">
					<div>
					<button className="px-5 py-1 font-bold bg-gray-200 text-black" onClick={onQuantityDecrement}>-</button>
          			<input value={qty} className="w-20 bg-sky-50 text-center py-1" readOnly />
          			<button className="px-5 py-1 font-bold bg-gray-200 text-black" onClick={onQuantityIncrement}>+</button>

          
          			</div>
          			{/*<p className="p-2">Total Price : {dataDetails?.regular_price*qty}</p>*/}
					<button className="text-white w-80  py-3 flex justify-center items-center " 
          style={{backgroundColor:"#fca700"}} 
          onClick={Object.keys(variantClickData).length>0?
            (e)=>addToCartData(variantClickData._id,variantClickData?.name,variantClickData?.regular_price*qty,variantClickData?.images[0],qty)
            :
            (e)=>addToCartData(dataDetails._id,dataDetails?.name,dataDetails?.regular_price*qty,dataDetails?.images[0],qty)}>


					<svg width="17.79" height="15.714" viewBox="0 0 17.79 15.714" fill="white">
  <g id="Group_874" data-name="Group 874" transform="translate(-1327.21 -32)">
    <circle
      id="Ellipse_1"
      data-name="Ellipse 1"
      cx="1.593"
      cy="1.593"
      r="1.593"
      transform="translate(1332.289 44.527)"
    />
    <g id="Group_873" data-name="Group 873">
      <path
        id="Path_16"
        data-name="Path 16"
        d="M-52.207,67.723a.5.5,0,0,0-.4-.2h0l-13.178.022-.492-2.115a.5.5,0,0,0-.487-.387h-2.632a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2.235l.49,2.107,0,.02,1.679,7.215a.5.5,0,0,0,.487.387h9.855a.5.5,0,0,0,.481-.364l2.039-7.249A.5.5,0,0,0-52.207,67.723Z"
        transform="translate(1397.105 -33.046)"
      />
      <circle
        id="Ellipse_2"
        data-name="Ellipse 2"
        cx="1.593"
        cy="1.593"
        r="1.593"
        transform="translate(1338.922 44.527)"
      />
    </g>
  </g>
</svg>
{" "}
<span className="px-2">Add to Cart</span></button>
<button className="bg-gray-200 p-2 rounded-full text-gray-500"><svg
  xmlns="http://www.w3.org/2000/svg"
  className="icon icon-tabler icon-tabler-heart"
  width={24}
  height={24}
  viewBox="0 0 24 24"
  strokeWidth={2}
  stroke="currentColor"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
</svg>
</button>
					</div>
				</div>
			</div>
		</div>
		
 

    
    </div>
		</div>

    
	)
}