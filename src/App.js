import React, { useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import { getData } from './API';
import { useDispatch } from 'react-redux';
import { fetchData } from "./action/action"
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Ads from './component/ads.js';
import Item from './component/item.jsx';
import PhoneLogin from './component/loginPhone/PhoneLogin';


function App() {
  const dispatch=useDispatch()
  const token= useSelector((state)=> state.auth)
  const token1= useSelector((state)=> state)
  const [open , setOpen]=useState(false)
  const [loding , setLoding]=useState(true)
  const navegat=useNavigate()
    useEffect(async ()=>{
        getData()
        .then( x => {
            console.log(x.data)
            dispatch(fetchData(x.data))
            
        }).catch(err=>{
            console.log(err)
        })
        // console.log(a)
        setLoding(false)
        console.log(token)
        
        console.log(token1)
    },[])
    useEffect(()=>{
      if(!token.token ){
        setOpen(true)
        navegat("/login")
      }else {
        setOpen(false)
      }
      console.log(token)
    },[])
    if(loding) return <div>loding...</div>

  return (
    <div className="App">
      {
        <Routes>
            <Route  path="*" element={<Ads />} />
            <Route  path="/login" element={<PhoneLogin />} />
        </Routes>
      }
         
         
    </div>
  );
}

export default App;
