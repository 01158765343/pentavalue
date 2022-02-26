

export const auth = (state ={token:""},action)=>{

    switch (action.type ){
        case "addToken" :
            state = {...state}
            state.token = action.token;
        default :
            return state
    }
}