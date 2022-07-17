const Sidebar=({setShuffle})=>{
   
    return(
        <>
        <div style={{width:"17vw",height:"90vh"}} className="hidden lg:flex lg:flex-col">

           <div className="flex justify-center items-center my-3 cursor-pointer border-l-4 border-[#4F65F6]">
           <img className="w-4 h-4 mx-2" src="/images/home.svg" alt="Home" />
           <h3>Home</h3>
           </div>

           <div className="flex justify-center items-center my-3 cursor-pointer" onClick={()=>{setShuffle(true)}}>
           <img className="w-4 h-4 mx-2" src="/images/shuffle.svg" alt="Home" />
           <h3>Shuffle</h3>
           </div>
           
        </div>
        </>
    )
}

export default Sidebar;