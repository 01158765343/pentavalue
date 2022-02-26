import React,{useState} from "react";
import { Radio, Button ,DatePicker,Input} from 'antd';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADDitems } from "../action/action";

function AddAds (){
    const dispatch=useDispatch()
    const data=useSelector((state)=>state)
    const [AddItem ,setAddItem ]=useState({
        video:"",
        image:"",
        from_time:"",
        to_time:"",
        id:"",
        type:"image"
    })
    const changeType=(e)=>{
        console.log(e.target.value)
        setAddItem({...AddItem,type:e.target.value})
    }
    const changeTo=(e)=>{
        console.log(e.target.value)
        setAddItem({...AddItem,to_time:e.target.value})
    }
    const changeFrom=(e)=>{
        console.log(e.target.value)
        setAddItem({...AddItem,from_time:e.target.value})
    }
    const addMedia=(e)=>{
        
        
        
        if(AddItem.type === "image" ){
            
            setAddItem({...AddItem ,image:e.target.files[0],video:""})
        }else {
            setAddItem({...AddItem ,image:"",video:e.target.files[0]})
        }
    }
    const submit=()=>{
        let id=Math.random();
        console.log(id)
        setAddItem({...AddItem ,id:id})
        dispatch(ADDitems(AddItem))
        setAddItem({
            video:"",
            image:"",
            from_time:"",
            to_time:"",
            id:"",
            type:"image"
        })
    }
    return(
        <div style={{padding:"100px",background:"#ddd"}}>
             <>
             <div>
                <div>
                    <label htmlFor="video">video</label>
                    <input onChange={changeType} default type="radio"  value="video" name="type"/>
                    <br/>
                    <label htmlFor="image" >image</label>
                    <input onChange={changeType} type="radio"  name="type" value="image"/>
                </div>   
            </div>
                <br />
            <div>
                <input onChange={addMedia} type="file"  />
            </div>
            <div>
                    <div>from time</div>
                <Input.Group compact>
                    <input onChange={changeFrom} type="date" value={AddItem.from_time} style={{ width: '50%' }} />
                </Input.Group>
                    <div>to time</div>
                <Input.Group compact>
                    <input onChange={changeTo} type="date" value={AddItem.to_time} style={{ width: '50%' }} />
                </Input.Group>
                <br />
            </div> 
            <Button onClick={submit}>save</Button>
            </>
        </div>
    ) 
}

export default AddAds