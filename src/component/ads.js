import React from "react";
import Item from "./item";
import { useSelector } from "react-redux";
import AddAds from "./addADS";

 const Ads = (props)=>{

    const data=useSelector((state)=> state)
    return (
        <div>
            <br/>
            <br/>
            <AddAds />
            <Item  />
        </div>
    )
}

export default Ads