import React, { useEffect, useState,useMemo } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import Header from "../component/Header";
import Footer from "../component/Footer";
import { GetCartData, GetVariantData } from "../action"
import { addToCart, getCartItems, GetAllCategory, GenderData,addToWishlist } from "../action"
import { useDispatch, useSelector } from "react-redux";
import ReactImageZoom from "react-image-zoom";
import Variants from "../component/Variants";
import $ from 'jquery';
import axios from "../helper/axios";
import blankImg from "./blank.jpg"

import MobileView from "../component/MobileView"; 
// import Accordion from './Accordion';
import ReactImageMagnify from 'react-image-magnify';

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { withStyles } from "@material-ui/core/styles";
import axiosIntance from '../helper/axios';
import RelatedProduct from './RelatedProduct';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PrductDetails() {

  const { id,catId } = useParams();
  const RelatePrd = useMemo( () => <RelatedProduct catId={catId}/>, [] );
  const notify = (msg) => toast.error(msg);
  const displayWidth = window.innerWidth;
  const dispayHeight = window.innerHeight;

  const [qty, setQty] = useState(1);
  const [singleProductData, setSingleProductData] = useState([]);
  //console.log(singleProductData)
  const dispatch = useDispatch();
  const productData = useSelector(state => state?.productData?.allProduct)
  const genderData = useSelector(state => state?.category?.gender)
  //console.log(productData)
  const dataDetails = productData.find(dt => dt._id === id)
  // console.log(productData)
  // console.log(dataDetails)
  const [variantClickData, setVariantClickData] = useState([])
  const [productImage, setProductImage] = useState();
  const cartData = useSelector(state => state.cart?.cartItems);
  const location = useLocation();
  const [productList, setProductList] = useState([]);
  const [selectedSize, setSelectedSize] = useState();
  const [clicking,setClicking] = useState();
  const [maxnumber,setmaxnumber] = useState(1);

  const wishlistItems = useSelector(state=>state?.cart?.wishlistItems);

  const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);
 //console.log(variantClickData)

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

   const addItemToWishlist=async(res)=>{ 
    //console.log(res)
    setClicking(Math.random());
    if(res?._id?.length){
    if(wishlistItems){
    var index = wishlistItems.findIndex(x => x._id==res?.variantData[0]?._id);  
      if(index=== -1){
        wishlistItems.push(res?.variantData[0])
      } else {
        wishlistItems.splice(wishlistItems.findIndex(a => a._id === res?.variantData[0]?._id),1)
      }
      dispatch(addToWishlist(wishlistItems))
    } else {
      let array = [];
      array.push(res?.variantData[0]);
      dispatch(addToWishlist(array))
    }

    }else{ 
    if(wishlistItems){
    var index = wishlistItems.findIndex(x => x._id==res._id._id);  
      if(index=== -1){
        wishlistItems.push(res._id)
      } else {
        wishlistItems.splice(wishlistItems.findIndex(a => a._id === res._id._id),1)
      }
      dispatch(addToWishlist(wishlistItems))
    } else {
      let array = [];
      array.push(res._id);
      dispatch(addToWishlist(array))
    }
  }
        
  }
 
 if(wishlistItems && wishlistItems.length > 0){
    var index = wishlistItems.findIndex(x => x._id==id); 
  } else {
    var index = -1;
 }

const fetchProductData=async()=>{
 const dataId = { _id: id }
    const res = await axios.post("/getproductbyid",dataId); 
    setSingleProductData(res?.data)
    console.log("=-=-=-=-=-======================>",res?.data)
    const itemIdd = res.data[0].item_code; 
    //setSelectedSize(res.data[0]._id.size); 
    //console.log("Details ============ ", res)
    const data = { itemId:itemIdd  }
    await dispatch(GetVariantData(data))
}


// const ax= singleProductData[0]?.variantData?.find(o=>o.size==singleProductData[0]?._id?.size)
const ax= singleProductData[0]?.variantData?.filter(o=>o.stockQty)

console.log("ALALLALALAALALALAL",ax)


useEffect(() => { 
    fetchProductData(); 
    const itemId = dataDetails?.item_code;
    $(document).ready(function () {
      $(".productthumb div img:first").addClass("firstimg");
    });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    localStorage.setItem("prevUrl", window.location.href);
    
},[])

 
  const onQuantityIncrement = () => {
    if(qty < maxnumber){
      setQty(qty + 1);
    }
    
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
  };

  const selectedSizes = (e) => { 
      setSelectedSize(e.target.value);    
  }

  const addToCartData = (productInfo) => {  
    
     if(singleProductData[0]?.variantData.length > 0 && !selectedSize){
       notify('Ju lutem zgjidhni madhësinë');
       return false;
     } 
     
    
    if (cartData.length > 0) { 
      //var foundIndex = cartData.findIndex(element => element?._id === productInfo?._id);

      var foundIndex = cartData.findIndex(o => o._id === productInfo?._id && o.size == selectedSize);

      //console.log("obj === ", obj)

      // console.log("foundIndex ==== ", cartData[foundIndex]['size'] == productInfo?.size)
      // console.log("Info === ", cartData[foundIndex], selectedSize);

      // if(cartData[foundIndex]?.size == selectedSize){
      //   console.log("Milaaaaaaaaa Size", cartData[foundIndex], selectedSize);
      //   foundIndex = foundIndex;
      // } else {
      //   console.log("Nhi Milaaaaaaaaa Size", cartData[foundIndex].size , selectedSize);
      //   foundIndex = -1;
      // }

    } else {  
      productInfo.quantity = qty;
      var foundIndex = -1;
    }
 
    if (foundIndex < 0) {
      // productInfo.quantity = 1;
      //productInfo.size = selectedSize;
      console.log("productInfo === ", productInfo)
      productInfo.quantity = qty;
      //cartData.push(productInfo);
      var testRowIndex = cartData.push(productInfo) - 1;
    } else {
      cartData[foundIndex].quantity = parseInt(cartData[foundIndex].quantity) + parseInt(qty);
    }


   
    // Updating size in cart
    // if(cartData.length > 0){
    //   if(cartData.length === 1){
    //     cartData[0].size = selectedSize;
    //   } else {
    //     //cartData[foundIndex].size = selectedSize;
    //   }
    // }

    console.log("testRowIndex ==== ", testRowIndex)
    //cartData[testRowIndex].size = selectedSize;

    if(cartData.length >0){ 


    //   {
    //     "_id": "63c7ee9dd0915c993d18c525",
    //     "email": "admin@gmail.com",
    //     "name": "T Bluzë pambuku",
    //     "item_code": "37050480-01",
    //     "description": "T Bluzë pambuku",
    //     "dimensions": null,
    //     "vendor": "MANGO",
    //     "composition": "70% Pambuk,  30% Liri",
    //     "collectionn": "FW22",
    //     "images": [
    //         "https://appapi.albionline.com/vendorImages/6TvHwe1z3-37050480-01_1.jpg",
    //         "https://appapi.albionline.com/vendorImages/UD80tKK5RW-37050480-01_3.jpg",
    //         "https://appapi.albionline.com/vendorImages/LH0xC5klMg-37050480-01_4.jpg",
    //         "https://appapi.albionline.com/vendorImages/H6YBWqLp5H-37050480-01_2.jpg"
    //     ],
    //     "catId": "1.1.1",
    //     "vendorId": "054",
    //     "brand": "MNG",
    //     "changeFlag": "0",
    //     "color": "01",
    //     "countryOfOrigin": "",
    //     "itemCategory": "MNG",
    //     "itemNo": "",
    //     "itemSubCategory": "",
    //     "published": "1",
    //     "regular_price": 15.99,
    //     "sale_price": 7.99,
    //     "season": "FW22",
    //     "size": "",
    //     "startDate": "2023-02-28T00:00:00",
    //     "stockQty": "2",
    //     "quantity": 1
    // }



      var obj = {
        "_id": productInfo._id,
        "email": productInfo.email,
        "name": productInfo.name,
        "item_code": productInfo.item_code,
        "description": productInfo.description,
        "dimensions": productInfo.dimensions,
        "vendor": productInfo.vendor,
        "composition": productInfo.composition,
        "collectionn": productInfo.collectionn,
        "images": productInfo.images,
        "catId": productInfo.catId,
        "vendorId": productInfo.vendorId,
        "brand": productInfo.brand,
        "changeFlag": productInfo.changeFlag,
        "color": productInfo.color,
        "countryOfOrigin": "",
        "itemCategory": productInfo.itemCategory,
        "itemNo": "",
        "itemSubCategory": "",
        "published": "1",
        "regular_price": productInfo.regular_price,
        "sale_price": productInfo.sale_price,
        "season": productInfo.season,
        "size": selectedSize,
        "startDate": productInfo.startDate,
        "stockQty": productInfo.stockQty,
        "quantity": productInfo.quantity
    }
      cartData[testRowIndex] = obj;
    }

    console.log("cartData after updating ==== ", cartData)
 
    dispatch(addToCart(cartData, selectedSize))
    //  dispatch(GetCartData()) 
    // alert('Product is added');

    setIsAlertVisible(true);

        setTimeout(() => {
            setIsAlertVisible(false);
        }, 2000);
    
  }

  const allVariantData = useSelector(state => state?.productData?.variantData);
  var singleProduct = allVariantData[0];




  const getVariantSelectDAta = (itemCode) => {
    const dataDetailsvariant = allVariantData.find(dt => dt.item_code === itemCode); 
    setVariantClickData(dataDetailsvariant)
    // localStorage.setItem(dataDetails);
    // localStorage.getItem("lastname");
  };

 
  const props = {
    width: 453,
    // height: 340,
    height: 680,
    zoomPosition: "right",
    zoomWidth: 546,
    // img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
    img: productImage ? typeof productImage == "string" ? productImage : productImage[0] :singleProductData.length>0?singleProductData[0]?._id?.images[0]:blankImg
    // img: productImage ? typeof productImage == "string" ? productImage : productImage[0] :singleProductData?.variantData?.length > 0?singleProductData[0]?._id?.images[0]: singleProductData[0]?.images[0]
  
  };

  const accordionData = [
    // {
    //   title: 'SUSTAINABILITY REPORT',
    //   content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    //   laborum cupiditate possimus labore, hic temporibus velit dicta earum
    //   suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    //   voluptatem.`
    // },
    {
      title: 'Detajet',
      content:
        <div className="text-md font-semibold border-b border-dotted border-gray-300 flex space-x-4 items-center py-5 prod-details">

          <p className="font-normal text-sm">
            <span className="font-bold text-gray-400">Kodi</span> :  {Object.keys(variantClickData).length > 0 ? variantClickData?.item_code : singleProductData[0]?._id?.item_code}</p>
          <p className="font-normal text-sm">
            <span className="font-bold text-gray-400">Origjina</span>: BD</p>
         
            {singleProductData[0]?._id.dimensions?.length>0? <p className="font-normal text-sm"><span className="font-bold text-gray-400">Përmbajtja</span>: {singleProductData[0]?._id.dimensions}</p>:""}
        </div>
    }, 
    {
      title: 'Transporti & Kthimet',
      content:
      <div className='shipping'>


     
      <p className="flex space-x-1 text-sm items-center">
          <svg width="18.5" height="15.031" viewBox="0 0 18.5 15.031">
            <path
              id="Icon_metro-truck"
              data-name="Icon metro-truck"
              d="M21.07,13.878,18.758,9.253H15.289V6.94a1.16,1.16,0,0,0-1.156-1.156H3.727A1.16,1.16,0,0,0,2.571,6.94v9.25l1.156,1.156H5.193a2.312,2.312,0,1,0,4,0h6.4a2.312,2.312,0,1,0,4,0H21.07V13.878Zm-5.781,0V10.409h2.4l1.734,3.469H15.289Z"
              transform="translate(-2.571 -5.784)"
            />
          </svg>


          <span className="text-gray-400">Koha e dërgesës 48h</span>
            <Tippy  interactive={true} interactiveBorder={20} delay={100} content={<span>
Ju do të pranoni dërgesën brenda 48 orë pas konfirmimit të porosisë. Nëse shuma e porosisë është mbi vlerën prej 50€ ju do të përfitoni transport falas. Për më shumë, lexoni
<Link to={"/delivery"} className="text-white pl-2" style={{textDecoration: 'underline white'}}>kushtet e transportit</Link>

</span>}>
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
  </Tippy>
          

        </p>

          {" "}
          {" "}
         <p className="flex space-x-1 text-sm items-center pl-5">
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


                          <span className="text-gray-400">Politikat e kthimit</span>
                        <Tippy  interactive={true} interactiveBorder={20} delay={100} content={<span>Ju keni të drejtë të ktheni porosinë tuaj brenda afatit prej 14 ditësh nga data e pranimit. Rimbursimi i mjeteve bëhet në llogarinë tuaj bankare. Për më shumë, lexoni ‘Politikat e kthimit’</span>}>
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
  </Tippy>

   </p>
</div>
        

        

    }
  ];

  const imageProps = {
    smallImage: {
      alt: 'Phasellus laoreet',
      isFluidWidth: true,
      height: 340,
      width: 546,
      src: productImage ? typeof productImage == "string" ? productImage : productImage[0] : dataDetails?.images[0],
      className: 'test1'
    },
    largeImage: {
      src: productImage ? typeof productImage == "string" ? productImage : productImage[0] : dataDetails?.images[0],
      width: 1200,
      height: 1800,
      className: 'test2'
      // width: 800,
      // height: 1200
    },
    enlargedImageContainerStyle: { background: '#fff', zIndex: 9, width: '600px !importnat' }
    // enlargedImagePortalId: "myPortal"
  };

 const pricedata = singleProductData[0]?._id?.sale_price > 0 ? singleProductData[0]?._id?.sale_price : singleProductData[0]?._id?.regular_price;
  
       

useEffect(()=>{

  const maxValue = singleProductData[0]?.variantData?.filter(dt => dt.size===selectedSize)
 
 
 if(maxValue){
  //console.log(maxValue[0]?.stockQty)
  setmaxnumber(maxValue[0]?.stockQty)
}


},[selectedSize])

localStorage.setItem("mylocalid", id);

 return (
    <div>
      <div className="flex-col">
        <div>
          <Header />
        </div>

        <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />


        <div className="container w-11/12 mx-auto p-3 mob-pt sm:mt-48 produt-detail">
          <div className="flex space-x-20 product-container mob-flex">
            <div className="w-5/12 flex mob-wid desktop-view">
              <div className="product-thumnail-images">
                <div className='flex space-x-5 h-24 wid-70'>

                  {Object.keys(variantClickData).length > 0 ?
                    variantClickData?.images?.map(dt => (

                      <div className='flex object-cover cursor-pointer'>

                        <img src={dt} onClick={(e) => setProductImage(dt)} />
                      </div>
                    ))
                    :
                     singleProductData[0]?._id?.images.map((dt,i)=> (

                      <div className='flex object-cover cursor-pointer' key={i}>

                        <img src={dt} onClick={(e) => setProductImage(dt)} />
                      </div>
                    ))}
                </div>
              </div>
              <div className="productthumb">
                {/*<img src={Object.keys(variantClickData).length>0||productImage?.length>0?productImage?.length>0?productImage:variantClickData?.images[0]:dataDetails?.images[0]} className="w-full"/>*/}
                <ReactImageZoom {...props} />
                {/* <ReactImageMagnify {...imageProps} /> */}
              </div>


            </div>

            {/* ----mobile view --- */}
            <>
              <div className='w-5/12 flex mob-wid mobile-view'>
                {displayWidth < 767 ? <MobileView imag={singleProductData[0]?._id?.images} imag2={dataDetails?.images} /> : null}
              </div>
            </>
            {/* <div className='w-5/12 flex mob-wid mobile-view'>
              <MobileView imag={variantClickData?.images} imag2={dataDetails?.images} />
            </div> */}
            
            {/* ----End mobile view --- */}
           
            <div className="flex-col w-7/12 mob-wid descc-mobile">
            <h1 className="text-4xl py-2 single-prod-title">{Object.keys(variantClickData).length > 0 ? variantClickData?.description : singleProductData[0]?._id.description} </h1>
              
              <p className="text-md font-bold py-2 f-16 single-prod-price">
              {Object.keys(variantClickData).length > 0 ? variantClickData?.regular_price : 
              <>{(singleProductData[0]?._id?.sale_price > 0 ? <><del>{singleProductData[0]?._id?.regular_price} €</del> <span className='regular salening'>{singleProductData[0]?._id?.sale_price} €</span></> : 
              <>
              {singleProductData[0]?._id?.regular_price} €</>)}</>} 
              
              </p>

              <div className="text-md font-semibold py-4 border-b border-dotted border-gray-300 single-prod-gender single-prod-price">
                <p className="">
                 {genderData == "life"? "":<span className="text-md text-gray-400">Gjinia :  </span>}
                  <span className="font-normal">
                    { genderData == 'female'? "Femër"
                      :  genderData == "male"? "Mashkull" 
                      :  genderData == "life"? "": 
                      "Fëmijë"
                    }
                    {/* {genderData} */}
                  </span>
                </p>
                {/* <p className="font-normal">{genderData}</p> */}
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
              {allVariantData?.length > 1 ?
                <div className="text-md font-semibold border-b border-dotted border-gray-300 flex space-x-4 items-center py-5">
                  <p className="text-md text-gray-400">Color</p>

                  {/* {console.log("allVariantData ==== ", allVariantData)} */}
                  {allVariantData?.length > 0 ? <>
                    {allVariantData?.map(dt => (
                      <div className='flex object-cover cursor-pointer' title={dt?.name} onClick={(e) => getVariantSelectDAta(dt?.item_code)}>
                        {/* <img src={dt?.images[0]} alt={dt?.item_code} className="h-10 w-10" onClick={(e)=>setProductImage(dt?.images)} /> */}
                        <img src={dt?.images[0]} alt={dt?.item_code} className="h-10 w-10" onClick={(e) => setProductImage(dt?.images)} />
                      </div>
                    ))}
                  </> : ''}

                </div>
                : ''}
 
              <div className="text-md font-semibold border-b border-gray-300 flex space-x-4 items-center py-5">
                <p className="text-md text-gray-400">Madhësia</p>
                <select defaultValue="" className="w-auto px-2 text-gray-500 size-prod" name="sizes" onChange={selectedSizes}>
                <option></option>
                {singleProductData[0]?.variantData?.map(dt => {  
                  var txt = "";
                  var disabled = false;
                  if(dt.stockQty===0){
                    txt = "Out of Stock";
                    disabled = true;
                  }else if(dt.stockQty==undefined){
                      txt = "Out of Stock";
                    disabled = true;
                  }
                  return(
                    <option disabled={disabled} value={dt.size}>{dt.size} {txt}</option>
                  )
                })}
                </select>
              </div>
             



              {/* <div className="text-md font-semibold border-b border-dotted border-gray-300 flex space-x-4 items-center py-5">
						
					<p className="font-normal text-sm">
					<span className="font-bold text-gray-400">CODE</span> :  {Object.keys(variantClickData).length>0?variantClickData?.item_code:dataDetails?.item_code}</p>
					<p className="font-normal text-sm">
					<span className="font-bold text-gray-400">Origin</span>: BD</p>
					<p className="font-normal text-sm">
					<span className="font-bold text-gray-400">Composition</span>: 100% Cotton</p>
					</div> */}
              <div>

                {/* <div className="text-md font-semibold border-b border-dotted border-gray-300 flex space-x-4 items-center py-5">
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
                </div> */}
              </div>
              <div className="flex space-x-4 py-5 items-center">
                <div className='qty-sec'>
                  <button className="px-5 py-1 font-bold bg-gray-200 text-black prod-qty" onClick={(e)=>onQuantityDecrement()}>-</button>
                  <input value={qty} className="w-20 bg-sky-50 text-center py-1 mob-inp" readOnly />
                  <button className="px-5 py-1 font-bold bg-gray-200 text-black prod-qty" onClick={(e)=>onQuantityIncrement()}>+</button>
                </div>

                 

                {/*<p className="p-2">Total Price : {dataDetails?.regular_price*qty}</p>*/}

                {/*{ax?.stockQty}*/}
                
                {pricedata && ax?.length > 0 ?
                <button className="text-white w-80  py-3 flex justify-center items-center "
                  style={{ backgroundColor: "#fca700" }}
                  onClick={Object.keys(variantClickData).length > 0 ?
                    (e) => addToCartData(variantClickData)
                    :
                    (e) => addToCartData(singleProductData[0]._id)}>


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
                  {/* <span className="px-2">Add to Cart</span> */}
                  {isAlertVisible ? 
                      <span className="px-2">Produkti u shtua</span>
                      :
                      <span className="px-2">Shto në shport</span>
                  
                  }
                </button>
                :
                <button className="text-white w-80  py-3 flex justify-center items-center bg-gray-400 " disabled
                  >
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
                  <span className="px-2">Out of stock</span>
                </button>
                }
                


                <button onClick={(e)=>addItemToWishlist(Object.keys(variantClickData).length > 0 ? variantClickData : singleProductData[0])}><svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-heart"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill={(index===-1 ? 'none' : 'fill')}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                </button>
              </div>

              {/* start code for product details accrodian */}
              <div className='accordian-product-details'>
                <div className="accordion">
                  {/* {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))} */}
                  {/* <Accordion /> */}
                  <div className='product-accord'>
                    {accordionData.map(({ title, content }) => (
                      <Accordion>

                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                        >
                          <Typography
                            style={{
                              fontWeight: 10,
                            }}
                          >
                            <h3>{title}</h3>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{content}</Typography>
                        </AccordionDetails>

                      </Accordion>
                    ))}
                  </div>
                </div>
              </div>
              {/* End code for product details accrodian */}
            </div>
          </div>
          <br />
          <>
          
           
          </>
        </div>
        
 {RelatePrd}  


        <Footer />
      </div>
    </div>


  )
}