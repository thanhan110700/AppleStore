import AsyncStorage from "@react-native-async-storage/async-storage"
const storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
      console.log("err",e)
    }
  }
const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null) {
            return value
        }
        else if(key === 'isLogin'){
            return false
        }
    } catch(e) {
        // error reading value
    }
}
const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
}
const initialState = {
    listCart:[],
    total:0
}
const cartReducer = (state = initialState ,actions) =>{
    
    switch(actions.type){
        case "ADD_CART":
            var newProducts = [...state.listCart]
            var totalAddCart = 0
            console.log("state:",newProducts)
            console.log("payload:",actions.payload)
            var issetProductAdd = newProducts.find((e) => 
                    e.id_product === actions.payload.id_product
                    && e.color === actions.payload.color 
                    && e.memory === actions.payload.memory)
            console.log("isset",issetInpuAmount)
            if(issetProductAdd){
                console.log("amount++")
                issetProductAdd.amount++
            }
            else{
                console.log("product++")
                newProducts.push(actions.payload)
            }
            newProducts.map(d=>{ return totalAddCart += d.price*d.amount})
            
            return {
                ...state,
                total:totalAddCart,
                listCart:newProducts
            }
        case "REMOVE_CART":
            var productsRemove = [...state.listCart]
            var totalRemove = 0
            console.log(actions.payload.data)
            var filterRemove = productsRemove.filter((e) => {
            
                if(e.id_product === actions.payload.data.value.id_product
                && e.color === actions.payload.data.value.color
                && e.memory === actions.payload.data.value.memory){
                    return false
                }
                else{
                    return true
                }
            })
            filterRemove.map((d)=>{ return totalRemove += d.price*d.amount})

            return {
                ...state,
                total:totalRemove,
                listCart:filterRemove
            }
        case "INPUT_AMOUNT":
            var productsInputAmount = [...state.listCart]
            var totalInput = 0
            var issetInpuAmount = productsInputAmount.find(e => e.id_product === actions.payload.data.data.id_product 
                && e.color === actions.payload.data.data.color 
                && e.memory === actions.payload.data.data.memory)
            if(issetInpuAmount){
                issetInpuAmount.amount = actions.payload.data.amount
            }

            productsInputAmount.map(d=>{ return totalInput += d.price*d.amount})
           
            return {
                ...state,
                total: totalInput
            }
        default:
            return {...state}
    }
}
export default cartReducer