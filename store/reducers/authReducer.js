import AsyncStorage from "@react-native-async-storage/async-storage"
var isLogin = false
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
        await AsyncStorage.removeItem("token");
        return true;
    }
    catch(exception) {
        return false;
    }
}
const initialState = {
    isLogin:getData("token"),
    changeInfo:0
}



const authReducer = (state = initialState ,actions) =>{
    
    switch(actions.type){
        case "LOG_IN":
            try {
                storeData("token",actions.payload.token)
                storeData("uid",actions.payload.id)
                storeData("isLogin",true)
            
            } catch (error) {
                console.log("error",error)
            }

            return {...state,isLogin:true}
        case "LOG_OUT":
            try {

                removeData("token")
                removeData("uid")
                removeData("isLogin")

                
            } catch (error) {
                console.log("error",error)
            }
            console.log("log 2")
            return {...state,isLogin:false}
        case "CHANGE_INFO":
            let numchange = state.changeInfo
            numchange = numchange+1
            return {...state,changeInfo:numchange}
        default:
            return {...state}
    }
}
export default authReducer