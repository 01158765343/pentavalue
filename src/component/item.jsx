import React, { useEffect ,useState} from "react"
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr'
import "./item.css"
import { editDate,  deleteItemes} from "../action/action";
import { useDispatch }from "react-redux"
import { useSelector } from "react-redux";
import { Col, Image, Row ,DatePicker,Input} from 'antd';

function Item (props){
    const dispatch=useDispatch()
    const data=useSelector((state)=> state)
    const [myData ,setMyData]=useState()
    const [radio,setRadio]=useState("image")
    const [AddItem ,setAddItem ]=useState({
        video:"",
        image:"",
        from_time:"",
        to_time:"",
        id:""
    })

    const choseRadio =(e)=>{
        console.log(e.target.value)
        setRadio(e.target.value)
    }
    const addmedia=(e)=>{
        if(radio === "image" && e.target.files[0] ){
            setAddItem({...AddItem ,image:e.target.files[0] ,video:""})
        }else if (radio === "video" && e.target.files[0] ){
            setAddItem({...AddItem ,video:e.target.files[0] ,image:""})
        } else {
            setAddItem({...AddItem })
        }
    }

    const datefrom=(e)=>{
        setAddItem({...AddItem,from_time:e.target.value})

    }
    const dateto=(e)=>{
        setAddItem({...AddItem,to_time:e.target.value})
    }
    useEffect(()=>{
        setMyData(data)
    },[data])
    const onEdit =(e)=>{
        let value=e.edit
        let items={...e}
        items.edit=!value
        setAddItem(items)
        dispatch(editDate(e ,items))
    }
    const saveUp=(x)=>{
        dispatch(editDate(x,AddItem))
    }
    const deleteItem=(x)=>{
        dispatch(deleteItemes(x))
    }
    return (
        <div>
            {myData?.map(x=> {return (
                <Row className="bodyItem" key={x.id} style={{margin:"30px"}}>
                    <Col flex={1}>
                    <div className="allitem" key={x.id}>
                    <Row>
                        <Col span={24} flex={1}>
                            {x.image !== "" &&
                                <div className="media hi">
                                <Image
                                width={200}
                                src={x.image}
                                />
                                </div>
                            }
                            {x.video !== "" &&
                                <div className="media hi">
                                    <center>
                                        <video controls>
                                            <source src={x.video} type="video/webm" />
                                        </video>
                                    </center>
                                </div>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col flex={1}>
                            <div className=" ">{x.to_time}</div>
                            <div className=" ">{x.from_time}</div>
                        </Col>
                    </Row>
                             
                    <Row>
                        <Col>
                            <div><button className="btn idet" onClick={()=>onEdit(x)}><i>edit<GrUpdate /></i></button></div>    
                            <div><button className="btn del" onClick={()=>deleteItem(x)}><i>delete <AiFillDelete /> </i></button></div>
                        </Col>
                    </Row>
                </div> 
                {x.edit && <Col flex={1}>
                    <div>
                        <label htmlFor="video">video</label>
                        <input onChange={choseRadio} type="radio"  value="video" name="type"/>
                        <br/>
                        <label htmlFor="image" >image</label>
                        <input onChange={choseRadio} type="radio"  name="type" value="image"/>
                    </div>
                <Col >
                    <div style={{padding:"60px"}}>
                        <input onChange={addmedia} type="file" />
                    </div>
                </Col>
                    <div>
                        from time
                        <Input.Group compact>
                            <input type="date" value={AddItem.from_time} onChange={datefrom} style={{ width: '50%' }} />
                        </Input.Group>
                    </div>
                    <div>
                        to time
                        <Input.Group compact>
                            <input type="date" value={AddItem.to_time} onChange={dateto} style={{ width: '50%' }} />
                        </Input.Group>
                    </div>
                    <div>
                        <button onClick={()=>{saveUp(x)}}>save</button>
                    </div>
                </Col>
                }    
            </Col>
        </Row>
        )})}
    </div>
    )
}

export default Item