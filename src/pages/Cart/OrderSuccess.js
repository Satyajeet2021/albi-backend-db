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
  const [orderDetails,setOrderDetails] = useState([]);
  const [orderProductList,setOrderProductList] = useState([]);


  useEffect(()=>{
    paymentStatusChange();
    getOrderDetails();
  },[])

  const paymentStatusChange=async()=>{ 
    const data = {transId:transId,status:"paid"};
     dispatch(makeCartEmpty(data)); 
     await axios.post("https://appapi.albionline.com/api/updatepaymentstatus/",data); 
  }

  const getOrderDetails=async()=>{ 
    const data = {transId:transId}; 
    const res = await axios.post("https://appapi.albionline.com/api/orderDetails",data);
    setOrderDetails(res.data[0]); 
    setOrderProductList(res.data[0].productList);
  }
 
  
  console.log("orderDetails ==== ", orderDetails); 
  console.log("orderProductList === ", orderProductList)

  var total = 0;
  return (
    <>
    <Header/>
	<div className="order-success-page">
        <div className="card-success desktop-order">
          
          <div className='flex-col w-7/12 mob-wid succ-right'>
              <table>
                <tr className='tr-header'>
                  <th>Produkti</th>
                  <th>Çmimi</th>
                  <th>Sasia</th>
                  {/* <th>TVSH</th> */}
                  <th>TOTAL:</th>
                </tr>
              {(orderProductList.length > 0 ? <>
                {orderProductList.map(function (dt){

                  var amt = (dt.sale_price ? dt.sale_price : dt.regular_price)
                  var amount = parseFloat(amt) * parseFloat(dt.quantity);
                  total = total+amount;
                return(
                  <tr>
                  <td>{dt.name}</td>
                  <td>{(dt.sale_price ? dt.sale_price : dt.regular_price)}€</td>
                  <td>{dt.quantity}</td>
                  {/* <td>18%</td> */}
                  <td>{amount}€</td>
                </tr>
                )
              })}
              </> : '')}
              

               

                {/* <tr>
                  <td>Bluzë me dizajn</td>
                  <td>32.79€</td>
                  <td>2</td>
                  <td>18%</td>
                  <td>79.98€</td>
                </tr> */}
                <tr>
                  <td bgcolor="#fff" colspan="3">&nbsp;</td>
                  <td></td>
                </tr>
                {/* <tr>
                  <td bgcolor="#fff" colspan="3">&nbsp;</td>
                    <td>Zbritje:</td>
                    <td>-10%</td>
                </tr> */}
                  {/* <tr>
                    <td bgcolor="#fff" colspan="3">&nbsp;</td>
                    <td>Posta:</td>
                    <td>00.00€</td>
                  </tr> */}
                  <tr className='last-tr'>
                    <td bgcolor="#fff" colspan="3">&nbsp;</td>
                    <td>Subtotal:</td>
                    <td>{(orderProductList.length > 0 ? orderProductList[0].totalPrice : '')}€</td>
                  </tr>
              </table>
              <p>Fatura me numër të porosisë #{orderDetails.orderId} do të dërgohet në email tuaj</p>
          </div>
          <div className='w-5/12 mob-wid succ-left'>
                <div className='success'>
                  <div style={{borderRadius: '200px', height: '100px', width: '100px', background: '#F8FAF5', margin: '0 auto'}}>
                    <i className="checkmark">✓</i>
                  </div>
                  {/* <h2 className="success-h2">Success</h2>  */}
                  <h4>Faleminderit për besimin tuaj!</h4>
                  <h3>Porosia juaj është verifikuar</h3>
                  <p>Numri i porosisë: #{orderDetails.orderId}</p>
                  <p>Ju do të pranoni të gjitha detajet e porosisë përmes email</p>
                  {/* <p>We received your purchase request;<br /> we'll be in touch shortly!</p> */}
                  <button className='btn1succ'><a href="/">KTHEHU NË BALLINË</a></button><br/>
                  {/* <button className='btn2succ'>VËREJTJE / SUGJERIME</button> */}
                </div>
          </div>
        </div>

        {/* ---------- mobile order -------------------- */}
        <div className="card-success mobile-order">
         
          <div className='w-5/12 mob-wid succ-left'>
                <div className='success'>
                  <div style={{borderRadius: '200px', height: '100px', width: '100px', background: '#F8FAF5', margin: '0 auto'}}>
                    <i className="checkmark">✓</i>
                  </div>
                  {/* <h2 className="success-h2">Success</h2>  */}
                  <h4>Faleminderit për besimin tuaj!</h4>
                  <h3>Porosia juaj është verifikuar</h3>
                  <p>Numri i porosisë: #{orderDetails.orderId}</p>
                  <p>Ju do të pranoni të gjitha detajet e porosisë përmes email</p>
                  {/* <p>We received your purchase request;<br /> we'll be in touch shortly!</p> */}
                  <button className='btn1succ'><a href="/">KTHEHU NË BALLINË</a></button><br/>
                  {/* <button className='btn2succ'>VËREJTJE / SUGJERIME</button> */}
                  {/* <p className='shiko'><a href="/">Shiko listen e produktev</a></p> */}
                </div>
          </div>
        </div>
      </div>




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