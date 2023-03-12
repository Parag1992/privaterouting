import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



const PrivateRoute = (props) =>{
    let Component=props.comp;
    
    const usrDtls= useSelector((state)=>{return state});
    let isLogin;

     isLogin=usrDtls.userdetails.token?true:false;

    return(
        isLogin?<Component />:<Navigate to={"/login"}/>
    )
}
export default PrivateRoute;