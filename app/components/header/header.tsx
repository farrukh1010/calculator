"use client"
import React,{useEffect, useState} from 'react';
import dayjs from 'dayjs'
const Header: React.FC = () => {
    const [currentime, setCurrenTime]=useState("")
    useEffect(()=>{
        setInterval(()=>{
            setCurrenTime(dayjs().format("dddd , MMMM D YYYY, hh:mm:ss A"))
        })
    },[])
  return (
    <header className="bg-gray-800 text-white p-4 text-center">
      
      <p className="text-xl font-bold">{currentime}</p>
    </header>
  );
};

export default Header;
