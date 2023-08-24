import React,{useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import Home from "./component/Home"
import Login from './component/Login';
import Reg from './component/Reg';
import BusinessReg from './component/BusinessReg';
// import Cart from './component/Cart';
import ProductDetails from "./component/ProductDetails"; 
import Products from './pages/Products/Products';
import Landing from './component/Landing';
import Cart from './pages/Cart/Cartpage';
import Checkout from './pages/Checkout/Checkout';
import OrderSuccess from './pages/Cart/OrderSuccess';
import "./App.css";
import Wishlist from './component/Wishlist';


export default function App() {
  const navigate=useNavigate();
  const genderData = useSelector(state=>state?.category?.gender)
      useEffect(()=>{
      if(genderData?.length>0){
        // navigate("/home");
        // navigate("/home");
        }
      },[])
  return (
    <div> 
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/reg" element={<Reg/>}></Route>
        <Route path="/business" element={<BusinessReg/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/:id/:catId" element={<Products/>}></Route>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/order-success" element={<OrderSuccess/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        
      </Routes>
    </div>
  )
}