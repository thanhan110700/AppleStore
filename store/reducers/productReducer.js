const initialState = {
    changeStatus: 1
}

const productReducer = (state = initialState ,actions) =>{
    
    switch(actions.type){
        case "CHANGE_STATUS":
            console.log("okekeokeoe")
            var changeStatus = state.changeStatus
            return {...state,changeStatus:changeStatus+1}
        default:
            return {...state}
    }
}
export default productReducer