import axios from "axios";

export const getData =()=>{
    
    return axios
    .get("/api/")
    .then(x=>{
        return x
    })
    .catch(err=>{
        console.log(err)
        return false
    })
   
}


