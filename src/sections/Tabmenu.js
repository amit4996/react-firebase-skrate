const Tabmenu=({setShuffle})=>{
   
    return(
        <div className="w-full  justify-evenly hidden md:flex lg:hidden">
           <h3 className="text-xl my-3 border-b-2 border-[#4F65F6]">Home</h3>
           <h3 className="text-xl my-3" onClick={()=>{setShuffle(true)}}>Shuffle</h3>           
        </div>
    )
}

export default Tabmenu;