

export const fetchData=(x)=>{
    return {
        type:"DATA",
        data:x
    }    
}

export const editDate=(x,y)=>{
    return {
        type:"Edit",
        x,
        y
    }    
}

export const ADDitems=(x)=>{
    return {
        type:"ADDITEM",
        x
    }    
}

export const deleteItemes=(x)=>{
    return {
        type:"delete",
        x
    }    
}