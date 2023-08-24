import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { GetAllCategory } from "../action"
import logonew from '../assets/images/logonew.png';
import { GenderData } from '../action';
import $ from 'jquery';
import axios from "../helper/axios";

import YAMAMAY_SVG from "../assets/images/yamamay-2.svg" 
import HugoLogo from "../assets/logo/hugo-01.png" 
import WomenSecretLogo from "../assets/brandLogo/Women_Secret-01.png" 
import TimberlandLogo from "../assets/brandLogo/Timberland-01.png" 
import GEXOLogo from "../assets/brandLogo/GEXO-01.png" 
import SpringfieldLogo from "../assets/brandLogo/Springfield-01.png" 
import MANGOLogo from "../assets/brandLogo/MANGO-01.png" 
import HUGOLogo from "../assets/brandLogo/HUGO-01.png" 
import ReplayLogo from "../assets/brandLogo/Replay-01.png" 
import GuessLogo from "../assets/brandLogo/Guess-01.png" 
import CarpisaLogo from "../assets/brandLogo/Carpisa-01.png" 
import OliverLogo from "../assets/brandLogo/Oliver-01.png"  
import XYZLogo from "../assets/brandLogo/XYZ-01.png" 
import OrsayLogo from "../assets/brandLogo/Orsay-01.png" 
import YamamayLogo from "../assets/brandLogo/Yamamay-01.png" 
import Tom_TailorLogo from "../assets/brandLogo/Tom_Tailor-01.png" 
import CelioLogo from "../assets/brandLogo/Celio-01.png" 
import OkaidiLogo from "../assets/brandLogo/Okaidi-01.png" 
import OzdilekLogo from "../assets/brandLogo/Ozdilek-01.png" 
import BOSSLogo from "../assets/brandLogo/BOSS-01.png"  

import { useParams} from 'react-router-dom';
// import brandslogo from '../assets/logo';


export default function NavBar() {
    const [isNotificationOpen, setIsNotificationopen] = useState(false);
    const notificationBar = async() => {
        isNotificationOpen === true ? setIsNotificationopen(false) : setIsNotificationopen(true);

        if(isNotificationOpen===true){
            console.log("SearchBox Active")
        }else{
            console.log("SearchBox False")
        }
        
    }

    const {id,catId,name} = useParams();
    const [toggle, setToggle] = useState(true);
    const categoryValue = useSelector(state => state?.category);
    const genderData = useSelector(state => state.category?.gender);
    const dispatch = useDispatch();
    const [vendroBrand,setVendroBrand] = useState([]);

  const wishlistItems = useSelector(state=>state.cart?.wishlistItems);
  const location = useLocation();
  const cartData = useSelector(state=>state.cart?.cartItems);
  const allProduct = useSelector(state=>state.productData?.allProduct)
  const productId = useSelector(state=>state.productData?.cart)
  const [hoverImg,setHoverImg] = useState("")

  const selectedCatId = catId;

  const auth = useSelector(state=>state?.productData?.users);

const femaleBrandData = [{img:WomenSecretLogo,brand:"WOMEN SECRET",status:""},
                         {img:TimberlandLogo,brand:"TIMBERLAND",status:""},
                         {img:GEXOLogo,brand:"GEOX",status:""},
                         {img:SpringfieldLogo,brand:"SPRINGFIELD",status:""},
                         {img:MANGOLogo,brand:"MANGO",status:""},
                         {img:HUGOLogo,brand:"HUGO",status:""},
                         {img:ReplayLogo,brand:"REPLAY",status:""},
                         {img:GuessLogo,brand:"GUESS",status:"Coming soon"},
                         {img:CarpisaLogo,brand:"CARPISA",status:"Coming soon"},
                         {img:OliverLogo,brand:"OLIVER WEBER",status:"Coming soon"},
                         // {img:"https://appapi.albionline.com/vbicon/active/XYZ.jpg",brand:"CHAUSSEA",status:"Coming soon"},
                         {img:XYZLogo,brand:"XYZ",status:"Coming soon"},
                         {img:OrsayLogo,brand:"ORSAY",status:"Coming soon"},
                         {img:YamamayLogo,brand:"YAMAMAY",status:"Coming soon"},
                         {img:Tom_TailorLogo,brand:"TOM TAILOR",status:"Coming soon"}]

const maleBrandData = [{img:TimberlandLogo,brand:"TIMBERLAND",status:""},
                         {img:GEXOLogo,brand:"GEOX",status:""},
                         {img:SpringfieldLogo,brand:"SPRINGFIELD",status:""},
                         {img:HUGOLogo,brand:"HUGO",status:""},
                         {img:ReplayLogo,brand:"REPLAY",status:""},
                         {img:WomenSecretLogo,brand:"WOMEN SECRET",status:""},
                         {img:GuessLogo,brand:"GUESS",status:"Coming soon"},
                         {img:CarpisaLogo,brand:"CARPISA",status:"Coming soon"}, 
                         {img:BOSSLogo,brand:"BOSS",status:"Coming soon"}, 
                         {img:XYZLogo,brand:"XYZ",status:"Coming soon"},
                         {img:YamamayLogo,brand:"YAMAMAY",status:"Coming soon"},
                         {img:Tom_TailorLogo,brand:"TOM TAILOR",status:"Coming soon"},
                         // {img:"https://appapi.albionline.com/vbicon/active/XYZ.jpg",brand:"CHAUSSEA",status:"Coming soon"},
                         {img:CelioLogo,brand:"CELIO",status:"Coming soon"}]

const kidsBrandData = [{img:MANGOLogo,brand:"MANGO",status:""},
                         {img:TimberlandLogo,brand:"TIMBERLAND",status:""},
                         {img:GEXOLogo,brand:"GEOX",status:""},
                         {img:OkaidiLogo,brand:"OKAIDI",status:""},
                         // {img:XYZLogo,brand:"CHAUSSEA",status:"Coming soon"},
                         {img:GuessLogo,brand:"GUESS",status:"Coming soon"}]

const lifeBrandData = [{img:OzdilekLogo,brand:"OZDILEK",status:""},
                       {img:WomenSecretLogo,brand:"WOMEN SECRET",status:""}]


  const allCart=[];
  productId?.forEach(crtdt=>{ 
      const cartData = allProduct?.find(dt=>dt?._id===crtdt?.productId) 
      allCart.push(cartData)

  })

  if(cartData.length > 0){
    var totalCartProduct = cartData.map(item => item.quantity).reduce((prev, next) => prev + next);
  }
    // const data = {genderBased:categoryValue?.gender}
    //   useEffect(() => {
    //     dispatch(GetAllCategory(data));
    //   }, []);

    //  const renderCategories=(categoryData)=>{ 
    //  var categoriesList=[]; 
    //  for(var cate of categoryData){
    //    categoriesList?.push({
    //              label:cate?.name,
    //              value:cate?._id,
    //              parentId:cate?.parentId,
    //              children:cate?.children?.length>0 && renderCategories(cate?.children)
    //            });
    //   }
    //  return categoriesList;
    // }

    document.querySelectorAll('h3.back-button').forEach(backBtn => {
        backBtn.addEventListener('click', event => {
            event.stopPropagation();
            // event.preventDefault();
            event.target.parentElement.classList.add("close-menu");
        });
    });

    document.querySelectorAll('a.main-menu-mobile').forEach(mainBtn => {
        
        mainBtn.addEventListener('click', event => {
            // alert("Test");
            event.stopPropagation();
            // event.preventDefault();
            let x = document.getElementsByClassName("close-menu");
            if(x.length > 0) { x[0].classList.remove("close-menu"); }
            // event.target.parentElement.classList.add("close-menu");
    });


        
    });
    const chooseGender = async (gender) => {
         window.scrollTo({
          top: 0,
          left: 0,
          // behavior: "smooth"
        });
        
        await dispatch(GenderData(gender))
        const data = { genderBased: gender }
        await dispatch(GetAllCategory(data));
    }

    const renderCategories = (categories) => {

        let myCategories = [];
        var i = 0
        for (let category of categories) {
            // console.log(category)
            myCategories.push(
                
                <li className="ruby-menu-mega item" key={category.name}>
                    {
                        category.parentId ? <a
                            href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
                            {category.name}
                        </a> :
                              category?.children?.length>0 ?
                              <a className=''>
                                <span className="NavCat px-1">{category.name}</span>
                              </a>
                              :
                              <div><Link to={`/${category.slug}/${category.unqId}`}><span className="px-1">{category.name}</span></Link></div>
              
                    }
                    {i + 1 && category.children.length > 0 ? (
                        <div className='ruby-grid ruby-grid-lined'>
                            <div className="ruby-row  container mx-auto">
                                <div className='internal-nav'>
                                  <div className='ruby-col-5 right-b'>
                                    <div className='nav-shop shop-by-product'>
                                        <h3><span>Blej sipas produktit</span></h3>
                                        <div className=''>
                                        <ul>
                                          {/* <li><a href='#'>Product 1</a></li>
                                          <li><a href='#'>Product 2</a></li>
                                          <li><a href='#'>Product 3</a></li>
                                          <li><a href='#'>Product 4</a></li>
                                          <li><a href='#'>Product 5</a></li>
                                          <li><a href='#'>Product 6</a></li> */}
                                          {renderCategories(category.children)}
                                        </ul>
                                        </div>
                                        {/* <div className='ruby-col-6'>
                                        <ul>                          
                                          <li><a href='#'>Product 7</a></li>
                                          <li><a href='#'>Product 8</a></li>
                                          <li><a href='#'>Product 9</a></li>
                                          <li><a href='#'>Product 10</a></li>
                                          <li><a href='#'>Product 11</a></li>
                                          <li><a href='#'>Product 12</a></li>
                                        </ul>
                                        </div> */}
                                        
                                    </div>
                                   
                                  </div>
                                  <div className='ruby-col-4 right-b'>
                                <div className='nav-shop shop-by-brand'>
                                  <h3><span>Blej sipas brendit</span></h3>
                                   <ul>
                                   {genderData=="female"?
                                   femaleBrandData?.map(dt=>(
                                    <li>
                                        <a href={`/brands/${genderData}/${dt?.brand.toLowerCase()}`}>
                                          <div className='xyz'> 
                                                
                                                <p onMouseEnter={() => {setHoverImg(dt?.img)}}>{dt?.brand}</p>
                                            <span>{dt?.status}</span>
                                            </div> 
                                          
                                        </a>
                                    </li>
                                    ))
                                   :""}
                                   {genderData=="male"?
                                   maleBrandData?.map(dt=>(
                                    <li>
                                        <a href={`/brands/${genderData}/${dt?.brand.toLowerCase()}`}>
                                          <div className='xyz'>  
                                                
                                                <p onMouseEnter={() => {setHoverImg(dt?.img)}}>{dt?.brand}</p>
                                            <span>{dt?.status}</span>
                                            </div> 
                                          
                                        </a>
                                    </li>
                                    ))
                                   :""}
                                   {genderData=="kids"?
                                   kidsBrandData?.map(dt=>(
                                    <li>
                                        <a href={`/brands/${genderData}/${dt?.brand.toLowerCase()}`}>
                                          <div className='xyz'>  

                                                <p onMouseEnter={() => {setHoverImg(dt?.img)}}>{dt?.brand}</p>
                                            <span>{dt?.status}</span>
                                            </div> 
                                          
                                        </a>
                                    </li>
                                    ))
                                   :""}
                                   {genderData=="life"?
                                   lifeBrandData?.map(dt=>(
                                    <li>
                                        <a href={`/brands/${genderData}/${dt?.brand.toLowerCase()}`}>
                                          <div className='xyz'> 

                                                <p onMouseEnter={() => {setHoverImg(dt?.img)}}>{dt?.brand}</p>
                                            <span>{dt?.status}</span>
                                            </div> 
                                          
                                        </a>
                                    </li>
                                    ))
                                   :""}
                                   {/*
                                    vendroBrand?.map((vndrBrnd)=>(
                                      <li>
                                        <a href={`/brands/${genderData}/${vndrBrnd?.fname.toLowerCase()}`}>
                                          <div className='xyz'> 
                                            
                                                <img src={vndrBrnd?.images}/>
                                                <span>{vndrBrnd?.fname}</span>
                                            </div> 
                                          
                                        </a>
                                      </li>
                                      
                                       ))*/}
                                      

                                    </ul>
                                </div>
                                  </div>
                                  <div className="ruby-col-4 right-b">
                                     <div className='nav-shop all-shop'>
                                        <div className='all-image'>
                                            <a href='#'>
                                            {genderData=="female"?<img src={hoverImg?.length>0?hoverImg:WomenSecretLogo} alt="asd" />
                                            :genderData=="male"?<img src={hoverImg?.length>0?hoverImg:TimberlandLogo} alt="asd" />
                                            :genderData=="kids"?<img src={hoverImg?.length>0?hoverImg:MANGOLogo} alt="asd" />
                                            :genderData=="life"?<img src={hoverImg?.length>0?hoverImg:OzdilekLogo} alt="asd" />:""}
                                            <span>All</span>
                                            </a>
                                        </div>
                                     </div>
                                  </div>
                                </div>                               
                            </div>
                        </div>
                        
                        // <div className="ruby-grid ruby-grid-lined">
                        //     <div className="ruby-row  container mx-auto">
                        //         <div className='ruby-col-10'>
                        //             <ul className="ColumnMenuLevel__list w-full bg-white">{renderCategories(category.children)}</ul>
                        //         </div>
                        //         <div className="ruby-col-2">
                        //             <div className="ColumnMenuLevel__btn_all ml-auto mr-0 mb-auto">
                        //                 <a href="#" aria-current="page" className="active">
                        //                     <div className="ColumnMenuLevel__btn_all__image">
                        //                         <img src="https://albionline.com/static/media/image-3.3b9cbf9f.png" alt="asd" className="Image" />
                        //                     </div>
                        //                     <div className="ColumnMenuLevel__btn_all__text">
                        //                         <span>All</span>
                        //                     </div>
                        //                 </a>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div> 
                        
                        ) : null}
                </li> 
            );
        }
        return myCategories;
    }

   // console.log("category", categoryValue);

    const getVendorBrand=async()=>{
  const res = await axios.get("/getVendor")
  setVendroBrand(res.data)
  console.log(res.data)
 }

 useEffect(()=>{
  getVendorBrand();
 },[])

 
 
 const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchBox, setSearchBox] = useState("");
  const getRealTimeSearch=async(txt)=>{
    setSearchBox(txt)
    var data ={brands:[txt]}
    console.log(data)
    if(txt?.length>3){
    setLoading(true)
    // var res = await axios.post("/search",data)
    var res = await axios.post("/scrollbox",data)
    console.log("-=========------------------================>",res.data?.length) 
   setSearchResults(res.data)
    setLoading(false)
    

   
 }else{
    setSearchResults([])
 } 
 }
 // useEffect(() => {
 //    if(searchTerm!=""){
 //    getRealTimeSearch(searchTerm);
 //    }else{
 //    setSearchResults([]);
 //    }
 //  }, [searchTerm]);


    

    return (

        <div className="ruby-menu-demo-header   mx-auto w-full">
            <div className="ruby-wrapper lg:container">
                <div>
                    <button onClick={() => setToggle(!toggle)} className="c-hamburger c-hamburger--htx visible-xs">
                        <span></span>
                    </button>
                    <div className="LanguageSwitcher LanguageSwitcher--light hidden">
                        <button>English
                            <span className="LanguageSwitcher__icon" style={{ marginLeft: "8px" }}>
                                <svg width="14.395" height="14.395" viewBox="0 0 14.395 14.395">
                                    <path id="Icon_material-language" data-name="Icon material-language" d="M10.19,3a7.2,7.2,0,1,0,7.2,7.2A7.194,7.194,0,0,0,10.19,3Zm4.988,4.318H13.055a11.263,11.263,0,0,0-.993-2.562A5.779,5.779,0,0,1,15.178,7.318ZM10.2,4.468a10.139,10.139,0,0,1,1.375,2.85H8.823A10.139,10.139,0,0,1,10.2,4.468ZM4.627,11.637a5.63,5.63,0,0,1,0-2.879H7.059a11.887,11.887,0,0,0-.1,1.439,11.887,11.887,0,0,0,.1,1.439Zm.59,1.439H7.34a11.263,11.263,0,0,0,.993,2.562A5.748,5.748,0,0,1,5.217,13.076ZM7.34,7.318H5.217A5.748,5.748,0,0,1,8.333,4.756,11.263,11.263,0,0,0,7.34,7.318ZM10.2,15.926a10.139,10.139,0,0,1-1.375-2.85h2.749A10.139,10.139,0,0,1,10.2,15.926Zm1.684-4.29H8.513A10.589,10.589,0,0,1,8.4,10.2a10.5,10.5,0,0,1,.115-1.439h3.368A10.5,10.5,0,0,1,12,10.2,10.589,10.589,0,0,1,11.882,11.637Zm.18,4a11.263,11.263,0,0,0,.993-2.562h2.123A5.779,5.779,0,0,1,12.061,15.639Zm1.274-4a11.887,11.887,0,0,0,.1-1.439,11.887,11.887,0,0,0-.1-1.439h2.433a5.63,5.63,0,0,1,0,2.879Z" transform="translate(-3 -3)"></path>
                                </svg>
                            </span>
                        </button>
                    </div>                    
                </div>
                <div className={!toggle ? "MobileNavigationContent MobileNavigationContent--open block lg:hidden mobile-display mobile-new-navigation" : "MobileNavigationContent MobileNavigationContent--open block lg:hidden"} style={{width:"100%"}}>
                    <div className="MobileNavigationContent__wrapper">
                        <div className="mobile-nav-tab">
                            <button className="close" onClick={() => setToggle(!toggle)}></button>
                            <div className="mobile-menu">
                                <ul className='headerlinks'>
                                    <li className={`cursor-pointer ${genderData === "female" ? "bg-gray-200" : ""}`} onClick={(e) => chooseGender("female")}>FEMËR</li>
                                    <li className={`cursor-pointer ${genderData === "male" ? "bg-gray-200" : ""}`} onClick={(e) => chooseGender("male")}>MASHKULL</li>
                                    <li className={`cursor-pointer ${genderData === "kids" ? "bg-gray-200" : ""}`} onClick={(e) => chooseGender("kids")}>FËMIJË</li>
                                    {/* <li className={`cursor-pointer ${genderData === "unisex" ? "bg-gray-200" : ""}`} onClick={(e) => chooseGender("unisex")}>UNISEX</li> */}
                                    <li className={`cursor-pointer ${genderData === "life" ? "bg-gray-200" : ""}`} onClick={(e) => chooseGender("life")}>SHTËPI</li>
                                </ul>
                            </div>

                            <div className="tab-section-1">
                                <div className="tab-menu">
                                    {/* <h3>{`${genderData}'s Homepage`}</h3> */}
                                    <>
                                        {
                                            categoryValue && categoryValue.categories && categoryValue.categories.categoryList &&
                                            categoryValue.categories.categoryList.map(categoryList => {
                                                return (
                                                    <ul>
                                                        <li name="main-menu"><a href="javascript:void(0)" className='main-menu-mobile'>{categoryList.name} <i class="arrow right"></i>
                                                            <ul className="tab-sub-menu">
                                                                <h3 className="back-button"><i class="arrow left"></i> Back</h3>
                                                                <>
                                                                    {categoryList.children.map(subcategoryItems => {
                                                                        let path = '/'+subcategoryItems.slug+'/'+subcategoryItems.unqId;
                                                                        return <a
                                                                            // to={{
                                                                            //     pathname: `/${subcategoryItems.slug}/${subcategoryItems.unqId}`,                                                                                
                                                                            // }}
                                                                            href={path} className={subcategoryItems.unqId == selectedCatId ? "selected-sub-menu" : ""}
                                                                            >
                                                                            {subcategoryItems?.children?.length > 0 ? "" :
                                                                                <>
                                                                                    {/* <img src={subcategoryItems?.categoryIcon} className="h-5 w-5" /> */}
                                                                                    <span className="px-1" onClick={() => setToggle(!toggle)}>{subcategoryItems.name}</span>
                                                                                </>}
                                                                        </a>
                                                                    })}
                                                                </>
                                                            </ul>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                )
                                            })
                                        }
                                        
                                    </>
                                    <>
                                    {
                                    
                                                    <ul>
                                                        <li name="main-menu"><a href="javascript:void(0)" className='main-menu-mobile'>Brendet<i class="arrow right"></i>
                                                            <ul className="tab-sub-menu">
                                                                <h3 className="back-button"><i class="arrow left"></i> Back</h3>
                                                                <>
                                                                    {/* {vendroBrand?.map((vndrBrnd)=>(
                                                                        <a
                                                                            // to={{
                                                                            //     pathname: `/${subcategoryItems.slug}/${subcategoryItems.unqId}`,                                                                                
                                                                            // }}
                                                                            // href="" className={subcategoryItems.unqId == selectedCatId ? "selected-sub-menu" : ""}
                                                                            href={`/brands/${genderData}/${vndrBrnd?.fname.toLowerCase()}`} className=""
                                                                            >
                                                                           
                                                                                    <span className="px-1" onClick={() => setToggle(!toggle)}>{vndrBrnd?.fname}</span>
                                                                            
                                                                        </a>
                                                                    ))} */}

{genderData=="female"?
                                                                        femaleBrandData?.map(dt=>(
                                                                            <li>
                                                                                
                                                                                <div className='xyz'> 
                                                                                    <a href={`/brands/${genderData}/${dt?.brand.toLowerCase()}`}>
                                                                                        <p onMouseEnter={() => {setHoverImg(dt?.img)}}>{dt?.brand}</p>
                                                                                    </a>
                                                                                    <span>{dt?.status}</span>
                                                                                    </div> 
                                                                                
                                                                                
                                                                            </li>
                                                                            ))
                                                                        :""}
                                                                        {genderData=="male"?
                                                                        maleBrandData?.map(dt=>(
                                                                            <li>
                                                                                
                                                                                <div className='xyz'>  
                                                                                <a href={`/brands/${genderData}/${dt?.brand.toLowerCase()}`}>
                                                                                        <p onMouseEnter={() => {setHoverImg(dt?.img)}}>{dt?.brand}</p>
                                                                                </a>
                                                                                    <span>{dt?.status}</span>
                                                                                    </div> 
                                                                                
                                                                            </li>
                                                                            ))
                                                                        :""}
                                                                        {genderData=="kids"?
                                                                        kidsBrandData?.map(dt=>(
                                                                            <li>
                                                                                
                                                                                <div className='xyz'>  
                                                                                <a href={`/brands/${genderData}/${dt?.brand.toLowerCase()}`}>
                                                                                        <p onMouseEnter={() => {setHoverImg(dt?.img)}}>{dt?.brand}</p>
                                                                                </a>
                                                                                    <span>{dt?.status}</span>
                                                                                    </div> 
                                                                                
                                                                            </li>
                                                                            ))
                                                                        :""}
                                                                        {genderData=="life"?
                                                                        lifeBrandData?.map(dt=>(
                                                                            <li>
                                                                                
                                                                                <div className='xyz'> 
                                                                                    <a href={`/brands/${genderData}/${dt?.brand.toLowerCase()}`}>
                                                                                        <p onMouseEnter={() => {setHoverImg(dt?.img)}}>{dt?.brand}</p>
                                                                                    </a>
                                                                                    <span>{dt?.status}</span>
                                                                                    </div> 
                                                                                
                                                                            </li>
                                                                            ))
                                                                        :""}
                                                                </>
                                                            </ul>
                                                        </a>
                                                        </li>
                                                    </ul>
                                               
                                    }
                                    </>
                                    {/* <ul>
            <li name="main-menu"><a href="javascript:void(0)">Clothing <i class="arrow right"></i>
                <ul className="tab-sub-menu">
                    <h3 className="back-button"><i class="arrow left"></i> Back</h3>
                    <li><a href="javascript:void(0)">All 20% off</a></li>
                    <li><a href="javascript:void(0)">20% off clothing</a></li>
                    <li><a href="javascript:void(0)">20% off dresses</a></li>
                    <li><a href="javascript:void(0)">20% off tops</a></li>
                </ul>
                </a>
            </li>
            <li name="main-menu"><a href="javascript:void(0)">Sports <i class="arrow right"></i>
                <ul className="tab-sub-menu">
                    <h3 className="back-button"><i class="arrow left"></i> Back</h3>
                    <li><a href="javascript:void(0)">All 20% off</a></li>
                    <li><a href="javascript:void(0)">20% off clothing</a></li>
                    <li><a href="javascript:void(0)">20% off dresses</a></li>
                    <li><a href="javascript:void(0)">20% off tops</a></li>
                </ul>
            </a></li>
            <li name="main-menu"><a href="javascript:void(0)">Gifts <i class="arrow right"></i>
                <ul className="tab-sub-menu">
                    <h3 className="back-button"><i class="arrow left"></i> Back</h3>
                    <li><a href="javascript:void(0)">Classic</a></li>
                    <li><a href="javascript:void(0)">Glamour</a></li>
                    <li><a href="javascript:void(0)">Modern femininity</a></li>
                    <li><a href="javascript:void(0)">Streetwear</a></li>
                </ul>
            </a></li>
            <li name="main-menu"><a href="javascript:void(0)">New In <i class="arrow right"></i>
                <ul className="tab-sub-menu">
                    <h3 className="back-button"><i class="arrow left"></i> Back</h3>
                    <li><a href="javascript:void(0)">New in today</a></li>
                    <li><a href="javascript:void(0)">New: classic</a></li>
                    <li><a href="javascript:void(0)">New: expressionist</a></li>
                    <li><a href="javascript:void(0)">New: glamour</a></li>
                </ul>
            </a></li>
        </ul> */}
                                </div>
                            </div>

                        </div>
                       
                     
                        
                    </div>
                </div>

                <ul className="MobileHeaderTop__shop-nav block lg:hidden">
                    <Link className='imglink' to="/">
                        <img src={logonew} className="logo" alt="" srcSet="" />
                    </Link>
                    <div className="MobileHeaderSearch">
                        <button className="MobileHeaderSearch__icon">
                            <img src="https://albionline.com/static/media/search-black.110c1cc7.svg" alt="" className="Image" />
                        </button>
                    </div>

                     <li className="MobileHeaderTop__shop-nav__list" style={{marginTop:"8px"}}>
                       <button className="-ml-8" onClick={notificationBar}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-search"
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
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                        </svg>
                        </button> 
                    </li>

                    <li className="MobileHeaderTop__shop-nav__profile" style={{marginTop:"5px"}}> 
                        {auth?.token && auth?.user?<Link to="/profile" className="hidden md:block">
                             <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-search"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={1.6}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                        </Link>:
                        <Link to="/login" className="hidden md:block">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-search"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={1.6}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                        </Link>
                        }
                    </li>


                    <li className="MobileHeaderTop__shop-nav__list" style={{marginTop:"5px"}}>
                        {/* <a href="/wishlist">
                            <svg id="Layer_1" x="0px" y="0px" viewBox="0 0 24.5 22.5" >
                                <g id="Path_17">
                                    <path d="M12.2,22.5c-0.1,0-0.3,0-0.4-0.1c-2.1-1.2-4.1-2.5-5.9-4.1c-3.9-3.5-6-7.3-6-11C0,3.5,3,0.2,6.9,0c2.1,0,4,0.9,5.3,2.4 C13.6,0.9,15.5,0,17.5,0l0,0c3.9,0.2,6.9,3.4,6.9,7.4c0,3.7-2.1,7.5-6,11c-1.8,1.6-3.8,3-5.8,4.1C12.5,22.5,12.4,22.5,12.2,22.5z  M7,1C3.6,1.2,1,4,1,7.4c0,3.4,1.9,6.9,5.6,10.2c1.7,1.5,3.6,2.8,5.6,3.9c2-1.1,3.9-2.4,5.6-3.9c3.7-3.3,5.6-6.8,5.6-10.2 c0-3.4-2.6-6.2-6-6.4c-1.9,0-3.8,1-4.9,2.5l-0.4,0.6l-0.4-0.6C10.7,2,8.9,1,7,1z"></path></g></svg>
                        </a> */}
                        <a href="/wishlist">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-heart"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={1.6}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                        {wishlistItems && wishlistItems.length > 0 ? <><span class=" text-white w-1 h-1 flex justify-center items-center bg-red-500 rounded-full mobile-wishlist">{wishlistItems.length}</span></> : ''} 
                        </a> 
                    </li>
                    
                    <li className="MobileHeaderTop__shop-nav__cart" style={{marginTop:"5px"}}>
                        <a className="" href="/cart">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-shopping-cart"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={1.6}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                              <path d="M17 17h-11v-14h-2" />
                              <path d="M6 5l14 1l-1 7h-13" />
                            </svg>

                            {cartData.length > 0?<span className="header-active text-white w-1 h-1 flex justify-center items-center bg-red-500 rounded-full mobile-cart">{totalCartProduct}</span>:""}
                        </a>
                    </li>
                </ul>

                <div className='Mobileheadermenu'>

                </div>
                <div className='nav-search-bar'>
                <ul className="ruby-menu">

                    {categoryValue?.categories?.categoryList?.length > 0 ? renderCategories(categoryValue?.categories?.categoryList) : null}
                    

                </ul>

                <div className='serach-inout'>
                        <form method="get" action={`/search/${searchBox}`}>
                        <input type="text"
                         className="p-2 w-2/12 border border-gray-100 text-gray-800 bg-gray-100 px-5 searchright"
                         placeholder="Kërko" 
                         onChange={(e)=>getRealTimeSearch(e.target.value)}
                         />
                         </form>

                         {/*{searchResults.length > 0? <ul className='search-result px-5 p-2'>
                            {loading?"Loading...":searchResults.length>0?searchResults?.map(item => (
                                <li>
                                    <a href={`/productdetails/${item._id}/${item?.catId}`}>
                                        <img src={item.images[0]} className="image-search"/>{item.name}
                                    </a>
                                </li>
                            )):"Not Found"}
                         </ul>:
                         ""}*/}
                          <div className="">
                        {searchResults?.length>0?<p className="py-2 bg-white px-2">Rezultatet</p>:""}
                        {searchResults?.length>0?searchBox===(searchResults[0]?.vendor).toLowerCase()?
                            <div className="search-result px-5 p-2 bg-white rounded-br-lg rounded-bl-lg h-60 overflow-y-scroll ">
                            <div className="flex justify-between py-2 rounded-md">
                            <p>{searchResults[0]?.vendor}</p>
                            <p>{searchResults?.length}</p>
                            </div>
                            <div className="flex-col rounded-md bg-white">
                            {searchResults?.map(item=>(
                            <div className="flex-col">
                                <a href={`/productdetails/${item._id}/${item?.catId}`} className="flex space-x-4 py-2">
                                    <img src={item.images[0]} className="image-search" height="50px" width="50px"/>
                                    <div className="flex-row">
                                    <p>{item.name}</p>
                                    <p>€{item.regular_price}</p>
                                    </div>
                                </a>
                            </div>
                            ))}
                            </div>
                            </div>
                            :searchResults?.length>1?
                            <div className="search-result px-5 p-2 bg-white rounded-br-lg rounded-bl-lg h-60 overflow-y-scroll">
                            <p>{searchBox===(searchResults[0]?.vendor).toLowerCase()}</p>
                            {searchResults?.map(item=>(
                            <div className="">
                                <a href={`/productdetails/${item._id}/${item?.catId}`} className="flex space-x-4 py-2">
                                    <img src={item.images[0]} className="image-search" height="50px" width="50px"/>
                                    <div className="flex-row">
                                    <p>{item.name}</p>
                                    <p>€{item.regular_price}</p>
                                    </div>
                                </a>
                            </div>
                            ))}</div>:<div className="flex space-x-4 overflow-y-scroll rounded-br-lg rounded-bl-lg bg-white">
                                <a href={`/productdetails/${searchResults[0]._id}/${searchResults[0]?.catId}`} className="flex w-full space-x-4">
                                <img src={searchResults[0]?.images[0]} height="50px" width="50px"/>
                                <div className="flex-row">
                                <p>{searchResults[0]?.name}</p>
                                <p>€{searchResults[0]?.regular_price}</p>
                                </div></a>
                                 </div>:""}
                      

                           {/* {searchResults.searchKey==searchResults?.vendor?
                                <div>{searchResults?.data?.vendor}{searchResults?.data?.length}</div>:
                                <ul className='search-result px-5 p-2'>
                            {loading?"Loading...":searchResults.length>0?searchResults?.map(item => (
                                <li>
                                    <a href={`/productdetails/${item._id}/${item?.catId}`}>
                                        <img src={item.images[0]} className="image-search" height="50px" width="50px"/>{item.name}
                                    </a>
                                </li>
                            )):"Not Found"}
                         </ul>
                         }*/}
                            
                            </div>

                         
                </div>
                </div>
                 {/* {loading?"Loading...":searchResults.length>0?searchResults?.map(item => (
                    <li>
                    <a href={`/productdetails/${item._id}`}>{item.name}</a></li>
                )):"Not Found"} */}

       {/*NOTIFICATIONS*/}
       <div className="">
                 <div className={`sidebar w-full  text-left py-2 ${isNotificationOpen == true ? 'active' : ''}`}>
                   <div className="flex justify-end text-left border-b border-gray-100 ">
                    
                    <button className="txt pt-2 text-lg px-3" onClick={notificationBar}>
                        <svg
  xmlns="http://www.w3.org/2000/svg"
  className="icon icon-tabler icon-tabler-x"
  width={32}
  height={32}
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="#2c3e50"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
</svg>

                    </button>
                    {/*<p className="text-gray-400 text-xs pt-1 pb-2">See Old Notifications</p>*/}
                    </div>
                    <div className="text-gray-500 h-screen text-sm  pb-12 py-6">
                    <div className="h-10 w-full  flex justify-center items-center space-x-2">
                    <form method="get" action={`/search/${searchBox}`} className="mobsearchform">
                    <input 
                        type="text" 
                        placeholder="Kërko për produkte dhe brende" 
                        className="flex h-8   border-2 border-gray-800 px-2 rounded-full  w-10/12 mobsearch"
                        onChange={(e)=>getRealTimeSearch(e.target.value)}
                        />
                    
                        <button className="bg-[#fca700] p-2 rounded-full">
                            <svg
  xmlns="http://www.w3.org/2000/svg"
  className="icon icon-tabler icon-tabler-search"
  width={18}
  height={18}
  viewBox="0 0 24 24"
  strokeWidth={2}
  stroke="currentColor"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M21 21l-6 -6" />
                            </svg>

                        </button>
                        </form>
                    </div>
                    <div className="w-full px-5 mt-5 flex justify-between">
                     {/*   {searchResults.length > 0? <ul className='search-result px-5 p-2'>
                            {loading?"Loading...":searchResults.length>0?searchResults?.map(item => (
                                <li>
                                    <a href={`/productdetails/${item._id}/${item?.catId}`}>
                                        {item.name}
                                    </a>
                                </li>
                            )):"Not Found"}
                         </ul>:
                         ""}*/}
                        <div className="flex-row justify-between w-full items-center">
                        {searchResults?.length>0?<p className="py-2">Rezultatet</p>:""}
                        {searchResults?.length>0?searchBox===(searchResults[0]?.vendor).toLowerCase()?
                            <div className="flex-col">
                            <div className="flex justify-between py-2">
                            <p>{searchResults[0]?.vendor}</p>
                            <p>{searchResults?.length}</p>
                            </div>
                            <div className="flex-col">
                            {searchResults?.map(item=>(
                            <div className="flex-col">
                                <a href={`/productdetails/${item._id}/${item?.catId}`} className="flex space-x-4 py-2">
                                    <img src={item.images[0]} className="image-search" height="50px" width="50px"/>
                                    <div className="flex-row">
                                    <p>{item.name}</p>
                                    <p>€{item.regular_price}</p>
                                    </div>
                                </a>
                            </div>
                            ))}
                            </div>
                            </div>
                            :searchResults?.length>1?
                            <div className="overflow-y-scroll">
                            <p>{searchBox===(searchResults[0]?.vendor).toLowerCase()}</p>
                            {searchResults?.map(item=>(
                            <div className="flex overflow-y-scroll">
                                <a href={`/productdetails/${item._id}/${item?.catId}`} className="flex space-x-4 py-2">
                                    <img src={item.images[0]} className="image-search" height="50px" width="50px"/>
                                    <div className="flex-row">
                                    <p>{item.name}</p>
                                    <p>€{item.regular_price}</p>
                                    </div>
                                </a>
                            </div>
                            ))}</div>:<div className="flex space-x-4 overflow-y-scroll">
                                <a href={`/productdetails/${searchResults[0]._id}/${searchResults[0]?.catId}`} className="flex w-full space-x-4">
                                <img src={searchResults[0]?.images[0]} height="50px" width="50px"/>
                                <div className="flex-row">
                                <p>{searchResults[0]?.name}</p>
                                <p>€{searchResults[0]?.regular_price}</p>
                                </div></a>
                                 </div>:""}
                      

                           {/* {searchResults.searchKey==searchResults?.vendor?
                                <div>{searchResults?.data?.vendor}{searchResults?.data?.length}</div>:
                                <ul className='search-result px-5 p-2'>
                            {loading?"Loading...":searchResults.length>0?searchResults?.map(item => (
                                <li>
                                    <a href={`/productdetails/${item._id}/${item?.catId}`}>
                                        <img src={item.images[0]} className="image-search" height="50px" width="50px"/>{item.name}
                                    </a>
                                </li>
                            )):"Not Found"}
                         </ul>
                         }*/}
                            
                            </div>
                    </div>
                    </div>

                     
                          
                    </div>
                    <div className={`sidebar-overlay ${isNotificationOpen == true ? 'active' : ''}`} onClick={notificationBar}></div>
           </div>

            </div>
            
        </div>
    )
}