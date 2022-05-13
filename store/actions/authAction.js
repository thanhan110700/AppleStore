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
export {LoginAction,LogoutAction}