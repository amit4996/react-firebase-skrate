const Upcomingsessioncard=({sessiondata})=>{
    return(
        <div className="flex justify-between my-4 py-4">
            <div className="hidden md:flex"><img className=" w-10 h-10 rounded-[50%] mx-3 p-1" src="https://picsum.photos/200/300" alt="User" /></div>
            <div className="flex flex-col items-center justify-center text-sm md:text-md "><p className="font-bold text-sm md:text-lg lg:text-md">{sessiondata.mentor_name}</p><p className="mt-2 md:my-0">Flutter</p><button className="flex md:hidden">{sessiondata.session_type}</button></div>
            <div className="flex flex-col items-center justify-center text-sm md:text-md"><p className="font-bold">{sessiondata.timings}</p><p>{sessiondata.date}</p><img className="w-8 h-8 flex md:hidden" src="/images/right.svg" alt="right" /></div>
            <div className="hidden md:flex items-center justify-center px-4 bg-[#E8C9D1] text-sm md:text-md" ><button>{sessiondata.session_type}</button></div>
            <div className="hidden md:flex justify-center items-center"><img className="w-8 h-8" src="/images/right.svg" alt="right" /></div>
        </div>
    )
}


export default Upcomingsessioncard;