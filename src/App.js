import React, { useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import { getData } from './API';
import { useDispatch } from 'react-redux';
import { fetchData } from "./action/action"
import {
  Routes,
  Route
} from "react-router-dom";
import Ads from './component/ads.js';
import Item from './component/item.jsx';
// import PhoneLogin from './component/loginPhone/PhoneLogin';


function App() {
  const dispatch=useDispatch()
  const a= useSelector((state)=> state)
  const [data , setData]=useState()
  const [loding , setLoding]=useState(true)
    useEffect(async ()=>{
        getData()
        .then( x => {
            console.log(x.data)
            dispatch(fetchData(x.data))
            setData(x.data)
        }).catch(err=>{
            console.log(err)
        })
        console.log(a)
        setLoding(false)
    },[])
    if(loding) return <div>loding...</div>

  return (
    <div className="App">
        <Routes>
            <Route  path="/" element={<Ads />} />
            
            
        </Routes> 
        
    </div>
  );
}

export default App;
