import React, { useEffect, useState, useRef } from 'react'
import axios from "../../helper/axios";
import { useParams, Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import { addToWishlist } from "../../action"
import Productfilter from '../../component/Productfilter'
import Productlisting from '../../component/Productlisting'
import { useDispatch, useSelector } from "react-redux";
import Productmobilefilter from '../../component/Productmobilefilter';
import ReactPaginate from 'react-paginate';
import "./Products.css";
import { Button } from 'bootstrap';
import moment from "moment"

let per_page = 40;
// let page = 0;


// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

function PaginatedItems({ itemsPerPage, dataLength, methodName }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataLength / itemsPerPage);
  // const pageCount = dataLength;
  const handlePageClick = (event) => {
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    // setItemOffset(newOffset);
    methodName(event.selected);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item previous"
        previousLinkClassName="page-link"
        nextClassName="page-item next"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination hCsSxg"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}



export default function Products() {
  const displayWidth = window.innerWidth;
  const dispayHeight = window.innerHeight;

  const { id, catId } = useParams();
  const [filterData, setFilterData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [clicking, setClicking] = useState();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state?.cart?.wishlistItems)
  const [loadingText, setloadingText] = useState();
  const [loadingLastProductId, setLastProductId] = useState(null);

  const ax= filterData?.variantData?.find(o=>o.size==filterData.size)

  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);  

   // const [page, setPage] = useState(0);

  var myPageVar = localStorage.getItem("myPage");

  const setMyPageLocalStorage = (pageNumber) => {
    localStorage.removeItem("prevUrl");
    localStorage.removeItem("currUrl");
    localStorage.setItem("mylocalid", loadingLastProductId)
    console.log("my LOCAL ID SET===============////========", loadingLastProductId)
    setPage(pageNumber)
    localStorage.setItem("myPage", +pageNumber++);


  }
  const abc = localStorage.getItem("mylocalid");
  const ServicesRef = useRef(null);
  const prevUrl = localStorage.getItem("prevUrl") != null ? localStorage.getItem("prevUrl") : null;
  const currUrl = localStorage.getItem("currUrl") != null ? localStorage.getItem("currUrl") : "";

  // const gotoServices = () =>
  
  if(currUrl == prevUrl){
    if (abc?.length > 0) {
      window.scrollTo({
        top: ServicesRef?.current?.offsetTop, 
      }); 
    }
  }
  
 

  useEffect(() => {
    // gotoServices();
  }, [])

  // const scrollDown = (ref) => {
  //   window.scrollTo({
  //     top: ref.current.offsetTop,
  //     behavior: 'smooth',
  //   });
  // };

  const addItemToWishlist = async (res) => {
    setClicking(Math.random());
    if (wishlistItems) {
      var index = wishlistItems.findIndex(x => x._id == res._id);
      if (index === -1) {
        wishlistItems.push(res)
      } else {
        wishlistItems.splice(wishlistItems.findIndex(a => a._id === res._id), 1)
      }
      dispatch(addToWishlist(wishlistItems))
    } else {
      let array = [];
      array.push(res);
      dispatch(addToWishlist(array))
    }

  }

  const updateMyFilter = async (e) => {
    console.log(e)
    const data = {
    }

    const res = await axios.post("/multifilter", data)
  }

  const [categoryCheck, setCategoryCheck] = useState([]);

  const [brandCheck, setBrandCheck] = useState([]);

  const [sizeCheck, setSizeCheck] = useState([]);
  const [gtPrice, setGtPrice] = useState();
  const [ltPrice, setLtPrice] = useState();
  const [sortPrice, setSortPrice] = useState("");

  const setCategoryPush = (e) => {
    setCategoryCheck(oldArray => [...oldArray, e]);
  }

  const setBrandPush = (e) => {

    const index = brandCheck.indexOf(e);
    if (index > -1) { // only splice array when item is found
      brandCheck.splice(index, 1); // 2nd parameter means remove one item only
    } else {
      setBrandCheck(oldArray => [...oldArray, e]);
    }
  }

  const setSizePush = (e) => {
    const index = sizeCheck.indexOf(e);
    if (index > -1) { // only splice array when item is found
      sizeCheck.splice(index, 1); // 2nd parameter means remove one item only
    } else {
      setSizeCheck(oldArray => [...oldArray, e]);
    }
  }

  const setPricePush = (min, max) => {
    // setPriceCheck(oldArray => [...oldArray,e] ); 
    setGtPrice(min)
    setLtPrice(max)
  }

  const setSortPush = (e) => {
    setSortPrice(e)
  }




  const getData = async (page, per_page) => {
    setloadingText('Loading products....');
    // var aa = 1>0? (1+1)*40 : 40
    var aa = +localStorage.getItem("myPage") > 0 ? (+localStorage.getItem("myPage") + +"1") * per_page : per_page;
    localStorage.setItem("myCalculation", aa);
    var myCalculation = localStorage.getItem("myCalculation");


    setLoading(true);  
    const data = {
      catAndGender: categoryCheck,
      brands: brandCheck,
      sizes: sizeCheck,
      gtPrice: gtPrice,
      ltPrice: ltPrice,
      sort: sortPrice,
      id: id,
      catId: [catId],
      page: page,
      per_page: aa
    }
    // const res = await axios.post("/multifilter",data) 
    const res = await axios.post("/scroll", data)
    // setFilterData(res.data.datax);
    setLoading(false);
    setFilterData([...filterData, ...res.data.datax]);
    // setFilterData(res.data.datax);
    setTotalData(res.data.totalCount);

    setTotalPages(res.data.totalCount);
    setUserList([...userList, ...res.data.datax]);

    const newProductList = [...res.data.datax]
    const lastProductId = newProductList[newProductList.length - 1];
    setLastProductId(lastProductId._id)


    if (res?.data?.datax?.length > 0) {
      setloadingText('');
      // localStorage.setItem("myPage", 0);
      // localStorage.setItem("myCalculation",0);
    } else {
      setloadingText('No products available');
    }
  }






  const getLoadData = async (ctId) => {
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: "smooth"
    });
    setloadingText('Loading products....');
    // var aa = 1>0? (1+1)*40 : 40
    var aa = +localStorage.getItem("myPage") > 0 ? (+localStorage.getItem("myPage") + +"1") * per_page : per_page;
    localStorage.setItem("myCalculation", aa);
    var myCalculation = localStorage.getItem("myCalculation");


    setLoading(true);
    const data = {
      catAndGender: categoryCheck,
      brands: brandCheck,
      sizes: sizeCheck,
      gtPrice: gtPrice,
      ltPrice: ltPrice,
      sort: sortPrice,
      id: id,
      catId: [ctId],
      page: "0",
      per_page: aa
    }
    // const res = await axios.post("/multifilter",data) 
    const res = await axios.post("/scroll", data)
    // setFilterData(res.data.datax);
    setLoading(false);
    // setFilterData([...filterData, ...res.data.datax]);
    setFilterData(res.data.datax);
    setTotalData(res.data.totalCount);


    setTotalPages(res.data.totalCount);
    setUserList([...userList, ...res.data.datax]);

    const newProductList = [...res.data.datax]
    const lastProductId = newProductList[newProductList.length - 1];
    setLastProductId(lastProductId._id)


    if (res?.data?.datax?.length > 0) {
      setloadingText('');
      // localStorage.setItem("myPage", 0);
      // localStorage.setItem("myCalculation",0);
    } else {
      setloadingText('No products available');
    }
  }


  useEffect(() => {
    // getData(page, per_page);
    getLoadData(catId);

  }, [catId])

  useEffect(() => {
    getData(page, per_page);
    // getLoadData(page, per_page,catId);

  }, [page])


  const method = (page) => {
    getData(page, per_page);
  }

  console.log("SET LAST PRODUCT ID ===========>///////////", loadingLastProductId)
  // alert(`https://${window.location.host}/productdetails`)


  console.log("Ayaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

  return (
    <div>
      <Header />

      <div className="sm:mt-48">
        {displayWidth < 767 ?
          <Productmobilefilter
            setCategoryPushData={setCategoryPush}
            setBrandPushData={setBrandPush}
            setSizePushData={setSizePush}
            setPricePushData={setPricePush}
            setSortPushData={setSortPush}
            filterBtn={getData.bind(this, page, per_page)}
          />
          :
          <Productfilter
            setCategoryPushData={setCategoryPush}
            setBrandPushData={setBrandPush}
            setSizePushData={setSizePush}
            setPricePushData={setPricePush}
            setSortPushData={setSortPush}
            filterBtn={getData.bind(this, page, per_page)}

          />}
      </div>
      <div className="w-full flex items-center justify-center">
        {loading ? <div
          className="flex justify-center items-center inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div> : filterData?.length > 0 ? "" : "Për momentin nuk ka produkte "}
      </div>


      {/* <Productfilter/>  */}
      <div className="grid grid-cols-4 gap-4 flex flex-wrap mx-auto container product-list">


        {filterData?.map(function (dt) {
          if (wishlistItems && wishlistItems.length > 0) {
            var index = wishlistItems.findIndex(x => x._id == dt._id);
          } else {
            var index = -1;
          }

          // {dt?._id == "63c7ee9dd0915c993d18c570" ? ServicesRef : ""}
          // const itemProps = selectedObjectId == id ? { ref: selectedRef } : {};

           
          const localscrollid = localStorage.getItem("mylocalid");
          const itemProps = dt?._id == localscrollid ? { ref: ServicesRef } : {};

          return (
            <div className='w-full ServicesRef' {...itemProps}>
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
                      <Link to={`/productdetails/${dt?._id}/${dt?.catId}`} onClick={() => localStorage.setItem("currUrl", `https://${window.location.host}/productdetails/${dt?._id}/${dt?.catId}`)}>
                        <img src={dt?.images[0]} alt="Çizme me lidhëse" srcset="" className="Image" />
                      </Link>
                    </span>
                    {dt?.sale_price <= 0 || dt?.sale_price == '' ? "" :
                      <span className="ProductItem__brand-discounted">
                        {Math.round(((dt?.regular_price?.toFixed(2) - dt?.sale_price?.toFixed(2)) * 100) / dt?.regular_price?.toFixed(2))}%</span>
                    }
                    <div className="ProductInfoBox">
                      <span className="ProductInfoBox__box ProductInfoBox--limited-availability">Low in stock</span>
                    </div>
                    <div className="WishListButton">
                      <button className={(index === -1 ? '' : 'selected')} onClick={(e) => addItemToWishlist(dt)}></button>
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

                    <Link to={`/productdetails/${dt?._id}/${dt?.catId}`} className='prod-collection'>
                      <h4 className="ProductItem__content__title">{dt.description}</h4>
                    </Link>
                    {/* <a href="/en/product/cizme-lekure-41" className='prod-collection'>
                <h4 className="ProductItem__content__title">{dt.description}</h4>
              </a> */}
                    <div className="ProductPrices sale prod-collection">


                      {(dt?.sale_price > 0 ? <>
                        <h4 className="regular"><del>{dt?.sale_price > 0 ? dt?.regular_price?.toFixed(2) + "Є" : "Sold Out"} </del></h4>
                      </> : (dt?.regular_price > 0 ? <h4 className="regular">{dt?.regular_price?.toFixed(2) + "Є"}</h4> : ''))}

                      {(dt?.sale_price > 0 ? <>
                        <h4 className="regular salening">{dt?.sale_price > 0 ? dt?.sale_price?.toFixed(2) + "Є" : "Sold Out"} </h4>
                      </> : '')}

                      {/* <h4 className="sale">{dt?.stockQty>0?"":"Out Of Stock"}</h4> */}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )
        })}


      </div>
      {/* <div onClick={gotoServices}>Scroll to Services</div> */}
      <div className='pagination_wrp px-5'>
        {/*<PaginatedItems itemsPerPage={per_page} dataLength={totalData} item={filterData} methodName={method}/>*/}

        {/* {filterData?.length>0?filterData?.length==totalData?
            <div className="py-2 text-black mb-5 border-b border-[#fca700]">Ju keni shikuar {filterData?.length} prej {totalData} produkteve </div>
            :(totalData != page) && <button className="px-2 w-full sm:w-2/12 py-2 text-xs mb-5 bg-[#fca700] border border-orange-300 rounded-sm text-white" onClick={(e) => setMyPageLocalStorage(+myPageVar + 1)}>{loading ? 
            <div
  className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status"
>
  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
    Loading...
  </span>
</div>
 : 'Shfaq më shumë produkte'}</button>:""} */}

        {filterData?.length > 0 ? filterData?.length === totalData ?
          <div className="py-2 text-black mb-5 border-b border-[#fca700]">Ju keni shikuar {filterData?.length} prej {totalData} produkteve </div>
          : (totalData != page) && <button className="px-2 w-full sm:w-2/12 py-2 text-xs mb-5 bg-[#fca700] border border-orange-300 rounded-sm text-white" onClick={(e) => setPage(page + 1)}>{loading ?
            <div
              className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            : 'Shfaq më shumë produkte'}</button> : ""}
      </div>



      {/* <div className='pagination_wrp'>
     <PaginatedItems itemsPerPage={per_page} dataLength={totalData} item={filterData} methodName={method}/>
     </div> */}


      {/*{filterData?.length > 0 ? "":<p className="flex justify-center items-center py-10">{loadingText}</p>}*/}
      <Footer />
    </div>
  )
}
