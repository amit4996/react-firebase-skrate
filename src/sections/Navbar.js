import { UserAuth } from "../context/AuthContext"
const Navbar=({setShuffle})=>{
    const {user,logOut}=UserAuth();
    const handleSignOut=async()=>{
            try{
                await logOut()
            }
            catch(err)
            {
                console.log(err)
            }
    }
    return(
        <>
          <div className="flex justify-between items-center " style={{height:'10vh'}}>
               <div><img className="w-16 h-16" src="/images/logo.svg" alt="Logo" /></div>
               <div className="flex items-center">
                <button className="bg-[#4F65F6] text-white rounded mx-5 px-4 py-2 hidden lg:block" onClick={handleSignOut}>Sign Out</button>
                        <div className="flex items-center mx-5 cursor-pointer" onClick={()=>{setShuffle(false)}}>
                            <img className="w-10 h-10 rounded-[50%] mx-5" src={user&&user.photoURL} alt="User"  />
                             <h3 className="hidden md:flex lg:flex">{user&&user.displayName}</h3>
                        </div>
               </div>
          </div>
        </>
    )
}

export default Navbar