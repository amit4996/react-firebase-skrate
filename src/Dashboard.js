import Main from './sections/Main';
import Navbar from './sections/Navbar'
import Sidebar from './sections/Sidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Tabmenu from './sections/Tabmenu';
import TabMobile from './sections/TabMobile';

const Dashboard=()=>{
    const [userData,setUserData]=useState();
    const [shuffle,setShuffle]=useState(false);
    const getAPIData=async()=>{
         const response=await axios.get('https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818')
         setUserData(response.data)
    }
    useEffect(()=>{
        getAPIData();
    },[])
    return(
        <>
        <Navbar  setShuffle={setShuffle} />
        <Tabmenu  setShuffle={setShuffle} />
        <div className='flex'>
        <Sidebar   setShuffle={setShuffle} />
        <Main userData={userData} shuffle={shuffle} />
        </div>
        <TabMobile setShuffle={setShuffle} />

        </>
    )
}

export default Dashboard;