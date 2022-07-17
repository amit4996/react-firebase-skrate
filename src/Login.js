import { UserAuth } from "./context/AuthContext";
import { useNavigate  } from "react-router-dom";
import { useEffect } from "react";
const Login=()=>{
    const {user,googleSignIn}=UserAuth();
    const navigate=useNavigate();
    const handleGoogleSignIn=async()=>{
          try{
               await googleSignIn();
          }
          catch(err)
          {
           console.log(err);
          }
    }
    useEffect(()=>{
          if(user!=null)
          {
            navigate('/dashboard')
          }
    },[user])
      return(
        <div>
            <img className="w-1/3 hidden md:flex lg:flex" src="/images/login.svg" alt="login.svg" style={{position:'absolute',bottom:'0px',right:'0px'}}/>
            <img className="w-1/3" src="/images/loginwave.svg"  alt="loginwave.svg" style={{position:'absolute',top:'0px',right:'0px'}}/>
            <img className="w-20 h-20" src="/images/logo.svg" alt="logo" style={{position:'absolute',top:'0px',left:'0px'}}/>
            <div className="flex flex-col justify-center items-start w-2/5 md:w-full md:items-center lg:items-center px-5" style={{height:'100vh'}}>
                <p className="text-xl">Welcome back to </p>
                <p className="text-xl">Skate!!!</p>
                <button className="text-white bg-[#4F65F6] px-3 py-2 my-3" onClick={handleGoogleSignIn}>Sign In With Google</button>
            </div>
        </div>
    )
}

export default Login;
