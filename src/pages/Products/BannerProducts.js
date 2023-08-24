import React,{useEffect,useState} from 'react'
import axios from "../../helper/axios";
import { useParams,Link} from 'react-router-dom'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import {addToWishlist} from "../../action"
import Productfilter from '../../component/Productfilter'
import Productlisting from '../../component/Productlisting'
import {useDispatch,useSelector} from "react-redux";
import Productmobilefilter from '../../component/Productmobilefilter';



export default function Products() {
  const displayWidth = window.innerWidth;
  const dispayHeight = window.innerHeight;
  let per_page = 40;
  // let page = 0;

  const {gender,name} = useParams();
  const [filterData,setFilterData] = useState([]);
  const [clicking,setClicking] = useState();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state=>state?.cart?.wishlistItems)
  const [loadingText,setloadingText] = useState();

 const [totalData,setTotalData] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);
 
  const brandCaps = name?.toUpperCase()
  
  console.log(brandCaps)
  
  const addItemToWishlist=async(res)=>{ 
    setClicking(Math.random());
    if(wishlistItems){
    var index = wishlistItems.findIndex(x => x._id==res._id);  
      if(index=== -1){
        wishlistItems.push(res)
      } else {
        wishlistItems.splice(wishlistItems.findIndex(a => a._id === res._id),1)
      }
      dispatch(addToWishlist(wishlistItems))
    } else {
      let array = [];
      array.push(res);
      dispatch(addToWishlist(array))
    }
        
  }

   const updateMyFilter = async(e) => {
    console.log(e)
      const data={
      }
      console.log(data)
      const res = await axios.post("/multifilter",data) 
   }

 const [categoryCheck,setCategoryCheck] = useState([]);
 
 const [brandCheck,setBrandCheck] = useState([]);
 
 const [sizeCheck,setSizeCheck] = useState([]);
 const [gtPrice,setGtPrice] = useState();
 const [ltPrice,setLtPrice] = useState();
 const [sortPrice,setSortPrice] = useState("");

  const setCategoryPush=(e)=>{ 
  setCategoryCheck(oldArray => [...oldArray,e] ); 
  }

 const setBrandPush=(e)=>{ 
  setBrandCheck(oldArray => [...oldArray,e] ); 
 }
 
 const setSizePush=(e)=>{ 
  setSizeCheck(oldArray => [...oldArray,e] ); 
 }

 const setPricePush=(min,max)=>{ 
  // setPriceCheck(oldArray => [...oldArray,e] ); 
  setGtPrice(min)
  setLtPrice(max)
 }

 const setSortPush=(e)=>{  
  setSortPrice(e)
 }
 

 var genderCatId = gender=="male"? 2 : gender=="female"?"1" : gender=="kids"?"3": gender=="unisex"?"4" : "";
 const getData=async(page, per_page)=>{
  setloadingText('Loading products....');
    setLoading(true);
    const data={catAndGender:[genderCatId],
                brands:[brandCaps],
                sizes:sizeCheck,
                gtPrice:gtPrice,
                ltPrice:ltPrice,
                sort:sortPrice,
                id:"",
                catId:["1.1.1"],
                page:page,
                per_page:per_page} 
    const res = await axios.post("/multifilter",data) 
    // setFilterData(res.data.datax);
    // setFilterData(res.data.datax);
    setFilterData([...filterData, ...res.data.datax]);
    setTotalData(res.data.totalCount);
    
    setTotalPages(res.data.totalCount);
    setUserList([...userList, ...res.data.datax]);
    setLoading(false);
    if(res?.data?.datax?.length > 0){
      setloadingText('');
    } else {
      setloadingText('No products available');
    }
  }

// useEffect(()=>{
//   if(brandCaps){

//     console.log(brandCaps)
// setBrandCheck([brandCaps])
// }else{
//   setBrandCheck([])
// }
// },[])

//   useEffect(()=>{ 
//     getData();
//   },[catId])

useEffect(()=>{ 
    getData(page, per_page);
  },[page])


  useEffect(()=>{
    
    getData();
 
  },[brandCheck])
 
 

  return (
    <div>
      <Header/>

      <div className="mt-20 lg:mt-52">
        {displayWidth < 767 ? 
          <Productmobilefilter 
           setCategoryPushData={setCategoryPush} 
           setBrandPushData={setBrandPush}
           setSizePushData={setSizePush}
           setPricePushData={setPricePush}
           setSortPushData={setSortPush}
           filterBtn={getData}
          /> 
          : 
          <Productfilter 
           setCategoryPushData={setCategoryPush} 
           setBrandPushData={setBrandPush}
           setSizePushData={setSizePush}
           setPricePushData={setPricePush}
           setSortPushData={setSortPush}
           filterBtn={getData}

           />}
      </div>


      {/* <Productfilter/>  */}
      <div className="grid grid-cols-4 gap-4 flex flex-wrap mx-auto container product-list">
 
      {filterData?.map(function (dt){
        if(wishlistItems && wishlistItems.length > 0){
         var index = wishlistItems.findIndex(x => x._id==dt._id); 
        } else {
          var index = -1;
        }
      
      return(
       <div className='w-full'>
      <div className=''>
      <div className="ProductItem ProductItem--big  fade-in-down">
            <div className="ProductItem__image">

             {//dt?.variant?.find(o=>o?.size==dt?.size)?.stockQty<=0 || dt?.variant?.find(o=>o?.size==dt?.size)==undefined?       
               dt?.variant?.filter(o=>o?.stockQty)?.length<=0 || dt?.variant?.filter(o=>o?.size)==undefined?  
    <div className=" ">
    <div className="logo-wrapper absolute w-full sm:w-9/12 text-center sm:left-12 flex items-center justify-center   px-5 bottom-10 sm:bottom-20 ">
        <h1 className="py-1.5 text-xs sm:py-2 w-9/12 bg-[#747372] bg-opacity-80 rounded-lg sm:rounded-xl text-center text-white font-normal shadow-lg">Out Of Stock</h1>
    </div>
    </div> :""}


              <span className="ProductItem__image__holder">
                <Link to={`/productdetails/${dt?._id}/${dt?.catId}`}>
                  <img src={dt?.images[0]} alt="Çizme me lidhëse" srcset="" className="Image"/>
                </Link>
              </span>
              {dt?.sale_price <= 0 || dt?.sale_price == ''? "":
              <span className="ProductItem__brand-discounted">  {Math.round(((dt?.regular_price?.toFixed(2) - dt?.sale_price?.toFixed(2)) * 100) / dt?.regular_price?.toFixed(2))}%</span>
                   
      }
              <div className="ProductInfoBox">
                <span className="ProductInfoBox__box ProductInfoBox--limited-availability">Low in stock</span>
              </div>
              <div className="WishListButton">
                <button className={(index===-1 ? '' : 'selected')} onClick={(e)=>addItemToWishlist(dt)}></button>
              </div>

              {/* <svg width="14.782" height="13.551" viewBox="0 0 14.782 13.551">
              <path id="Path_17" data-name="Path 17" d="M-23.765,65.546a4.075,4.075,0,0,0-3.326,1.731,4.075,4.075,0,0,0-3.326-1.731,4.3,4.3,0,0,0-4.065,4.312c0,2.239,1.264,4.543,3.655,6.667A19.656,19.656,0,0,0-27.2,79.069a.247.247,0,0,0,.227,0,19.649,19.649,0,0,0,3.621-2.544C-20.963,74.4-19.7,72.1-19.7,69.858A4.3,4.3,0,0,0-23.765,65.546Z" transform="translate(34.482 -65.546)"></path>
              </svg> */}


            </div>
            {/* <div className="ProductItem__colors">
              <div className="color_wrapper isActive">
                <span className="color colorIsActive">
                  <div style={{backgroundColor: '#000'}}></div>
                </span>
              </div>
            </div> */}
            <div className="ProductItem__content">
              <span className="ProductItem__brand-name prod-collection">{dt?.vendor}</span>
              
              <a href="/en/product/cizme-lekure-41" className='prod-collection'>
                <h4 className="ProductItem__content__title">{dt?.description}</h4>
              </a>
              <div className="ProductPrices sale prod-collection">
                

              {(dt?.sale_price > 0 ? <>
                <h4 className="regular"><del>{dt?.sale_price > 0 ? dt?.regular_price?.toFixed(2) + "Є": "Sold Out"} </del></h4>
                </> : <h4 className="regular">{dt?.regular_price?.toFixed(2) + "Є"}</h4>)}

                {(dt?.sale_price > 0 ? <>
                  <h4 className="regular salening">{dt?.sale_price > 0? dt?.sale_price?.toFixed(2) + "Є": "Sold Out"} </h4>
                </> : '')}
                
                

                {/* <h4 className="sale">{dt?.stockQty>0?"":"Out Of Stock"}</h4> */}
              </div>
            </div>
      </div> 
 
    </div>
      </div>
      )})}
      </div>

      <div className='pagination_wrp px-5'>
        {/*<PaginatedItems itemsPerPage={per_page} dataLength={totalData} item={filterData} methodName={method}/>*/}


         {filterData?.length>0?filterData?.length===totalData?
            <div className="py-2 text-black mb-5 border-b border-[#fca700]">Ju keni shikuar {filterData?.length} prej {totalData} produkteve </div>
            :(totalData != page) && <button className="px-10 w-full sm:w-2/12 py-2 text-xs mb-5 bg-[#fca700] border border-orange-300 rounded-sm text-white" onClick={(e) => setPage(page + 1)}>{loading ? 
            <div
  className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status"
>
  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
    Loading...
  </span>
</div>
 : 'Shfaq më shumë produkte'}</button>:""}
      </div>

      {filterData?.length > 0 ? "":<p className="flex justify-center items-center py-10">{loadingText}</p>}
      <Footer/>
    </div>
  )
}
