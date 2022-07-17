import Newjobscard from "../components/Newjobscard";
import Overviewcard from "../components/Overviewcard";
import Upcomingsessioncard from "../components/Upcomingsessioncard";

const Main=({userData,shuffle})=>{
    return(
        <div  className="flex flex-col lg:flex-row justify-evenly w-full">
             <div className="">
                 <div className="flex flex-col border border-grey-300 rounded-lg w-full p-5 md:p-0">
                 <h1 className="text-lg mx-5 my-3">Overview</h1>
                    <div className="flex flex-col md:flex-row justify-between"><Overviewcard title="Profile Views" stats={userData&&userData.dashboard_stats.profile_views} /><Overviewcard title="Mentorship Sessions" stats={userData&&userData.dashboard_stats.mentorship_sessions}/></div>
                    <div className="flex flex-col md:flex-row justify-between"><Overviewcard title="Jobs Applied" stats={userData&&userData.dashboard_stats.jobs_applied}/><Overviewcard title="Skills Verified" stats={userData&&userData.dashboard_stats.skills_verified}/></div>
                 </div>
                 <div className="border border-grey-300 my-5 rounded-lg w-full px-5 md:px-2">
                 <h1 className="text-lg mx-5 my-3">Upcoming Sessions</h1>
                 <div className="px-5">
                    {shuffle?userData&&userData.upcoming_sessions.slice().reverse().map((sessiondata,index)=>{
                        return (<><Upcomingsessioncard key={index} sessiondata={sessiondata} /></>)
                    }):userData&&userData.upcoming_sessions.map((sessiondata,index)=>{
                        return (<><Upcomingsessioncard key={index} sessiondata={sessiondata} /></>)
                    })}
                    </div>
                 </div>
             </div>

             <div className="flex flex-col  p-5 border border-grey-300 rounded-lg w-full md:w-full lg:w-2/5">
                <h1 className="text-lg mx-5 text-left my-3">New Jobs</h1>
                 <div className="flex w-full flex-col items-center ">
                 {shuffle?userData&&userData.job_postings.slice().reverse().map((jobdata,index)=>{
                        return (<Newjobscard key={index} jobdata={jobdata} />)
                    }):userData&&userData.job_postings.map((jobdata,index)=>{
                        return (<Newjobscard key={index} jobdata={jobdata} />)
                    })}
                 </div>
             </div>
        </div>
    )
}

export default Main;