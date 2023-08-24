import React from 'react';  
import Home from './Home';
import Intropage from '../pages/Intropage/Intropage';
import {useDispatch,useSelector} from "react-redux";


export default function Landing() { 
    const genderData = useSelector(state=>state.category?.gender); 
    localStorage.setItem("myPage",0);
  return (
    <>
    {(genderData ? <Home/> : <Intropage/>)}
    </>
  )
}
