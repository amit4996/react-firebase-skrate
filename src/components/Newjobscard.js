const Newjobscard=({jobdata})=>{
    return(
        <div className="flex justify-between p-5 my-4 w-full">
            <div className="hidden md:flex"><img className="w-14 h-14 rounded-[50%]" src="https://picsum.photos/200/300" alt="User" /></div>
            <div  className=" text-sm md:text-md"><p className="font-bold text-sm md:text-lg lg:text-md">{jobdata.organization_name}</p><p>{jobdata.role}</p><p>{jobdata.location}</p></div>
            <div className=" text-sm md:text-md md:flex md:justify-between"><p>{jobdata.date_posted}</p><img className="w-8 h-8 mx-5" src="/images/right.svg" alt="right" /></div>
        </div>
    )
}


export default Newjobscard;