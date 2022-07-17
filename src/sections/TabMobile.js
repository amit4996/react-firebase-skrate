const TabMobile=({setShuffle})=>{
   
    return(
        <>
        <div className="flex justify-evenly md:hidden lg:hidden ">

           <div className="flex flex-col items-center my-3 cursor-pointer border-t-4 border-[#4F65F6]">
           <img className="w-4 h-4 mx-2" src="/images/home.svg" alt="Home" />
           <h3>Home</h3>
           </div>

           <div className="flex flex-col items-center my-3 cursor-pointer border-t-4 border-[#fff]" onClick={()=>{setShuffle(true)}}>
           <img className="w-4 h-4 mx-2" src="/images/shuffle.svg" alt="Home" />
           <h3 >Shuffle</h3>
           </div>
           
        </div>
        </>
    )
}

export default TabMobile;