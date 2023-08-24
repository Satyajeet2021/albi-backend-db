import React,{useEffect,useState} from 'react';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import './Cartpage.css';
import Order from '../../assets/order.jpg';
import axios from "../../helper/axios"
import {makeCartEmpty} from "../../action";
import {useDispatch,useSelector} from "react-redux";

const OrderSuccess = () => {
  const dispatch = useDispatch()
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const transId = params.get('transId');
 
  useEffect(()=>{
    paymentStatusChange();
  },[])

  const paymentStatusChange=async()=>{ 
    const data = {transId:transId,status:"failed"};
    dispatch(makeCartEmpty(data)); 
     await axios.post("https://appapi.albionline.com/api/updatepaymentstatus/",data); 
  }



  return (
    <>
    <Header/>
	<div className="order-success-page">
        <div className="card-success">
          <div style={{borderRadius: '200px', height: '200px', width: '200px', background: '#ff0000', margin: '0 auto'}}>
            <i className="checkmark">X</i>
          </div>
          <h2 className="success-h2">Failed</h2> 
          <p>Payment is not successfull<br /> Please try again</p>
          {/* <div className="order">
            <div className="order-box">
              <p className="order-id">Order id:<span> 01010101 </span></p>
              <div className="order-image">
                <img src="./rachit-tank-2cFZ_FB08UM-unsplash.jpg" alt="order" />
              </div>
              <div className="order-details">
                <p>Product Name:<span> Watch</span></p>
                <p>Quantity:<span> 2</span></p>
                <p>Price:<span> $80</span></p>
                <p>Total:<span> $160</span></p>
              </div>
            </div>
          </div> */}
        </div>
      </div>


      {/* <div className='container w-11/12 mx-auto p-3 mob-pt'>
        <di className="flex space-x-20 product-container mob-flex">
          
        </di>
      </div> */}


    {/* <div className="flex container w-full mx-auto mt-10 justify-center h-screen">
		<div class="flex-col w-12/12 ">  
		<div className="flex space-x-12"> 
			<div className="w-12/12 p-5" style={{backgroundColor:"#ededed"}}> 
				<div className="pb-24 mt-1 text-sm">
                 <img src={Order}/>
				</div>
				<div className="justify-center items-center bg-black "></div>
			</div> 
		</div> 
		</div>
		</div> */}
        <Footer/>
    </>
  )
}

export default OrderSuccess;