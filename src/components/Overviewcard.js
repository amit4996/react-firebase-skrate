const Overviewcard=({title,stats})=>{
    return(
        <div className="flex justify-between items-center p-3 md:p-5 my-2 md:m-3  bg-[#F6F7FF] w-full lg:w-1/2">
             <h1 className="text-md md:text-lg lg:text-lg  font-bold ">{title}</h1>
             <h1 className="text-xl md:text-3xl lg:text-4xl text-blue-500 p-3">{stats}</h1>
        </div>
    )
}


export default Overviewcard;