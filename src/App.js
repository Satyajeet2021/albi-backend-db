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
import Search from './pages/Products/Search';
import BannerProducts from './pages/Products/BannerProducts';
import Landing from './component/Landing';
import Cart from './pages/Cart/Cartpage';
import Checkout from './pages/Checkout/Checkout';
import OrderSuccess from './pages/Cart/OrderSuccess';
import OrderFailed from './pages/Cart/OrderFailed';
import "./App.css";
import Wishlist from './component/Wishlist';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Delivery from './pages/Delivery';
import Returns from './pages/Returns';
import Partner from './pages/Partner';
import Profile from './component/Profile';
import SearchData from './component/SearchData';
import Yeah from "./Yeah"


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
        <Route path="/productdetails/:id/:catId" element={<ProductDetails/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/:id/:catId" element={<Products/>}></Route>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/order-success" element={<OrderSuccess/>}></Route>
        <Route path="/order-failed" element={<OrderFailed/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/contact-us" element={<Contact/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
        <Route path="/terms-conditions" element={<Terms/>}></Route>
        <Route path="/delivery" element={<Delivery/>}></Route>
        <Route path="/returns" element={<Returns/>}></Route>
        <Route path="/our-partners" element={<Partner/>}></Route> 
        <Route path="/brands/:gender/:name" element={<BannerProducts/>}></Route> 
        <Route path="/profile" element={<Profile/>}></Route> 
        <Route path="/search/:vendorName" element={<Search/>}></Route> 
      </Routes>
    </div>
  )
}