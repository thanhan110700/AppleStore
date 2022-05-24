const LoginAction = (data) =>{
    return {
        type:"LOG_IN",
        payload:data
    }
}
const LogoutAction = () =>{
    return {
        type:"LOG_OUT"
    }
}
const ChangeInfoAction = () =>{
    return {
        type:"CHANGE_INFO"
    }
}
export {LoginAction,LogoutAction,ChangeInfoAction}