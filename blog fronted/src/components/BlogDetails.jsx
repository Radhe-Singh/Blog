import React, { useEffect, useState } from "react";

const BlogDetails = () => {
  const [dat, setDat] = useState([]);
  const data = async () => {
    const response = await fetch(`http://localhost:8000/api/post/`);
    const dat = await response.json();
    setDat(dat);
    console.log(dat);
  };
  useEffect(
    ()=>{data()},[]
  )

  return (
  
      <div className='flex flex-wrap  w-full mt-5'>
        
        {dat.map((data,index)=>(
            
            <div  key={index} className='ml-4  mt-4 h-[400px] w-[420px] flex  overflow-hidden'  alt="">
              <div className="block bg-orange-300 rounded-3xl">
              <img src={data.featured_image} className="rounded-3xl m-2 h-[200px] w-[95%]" alt=""  />
              <h1 className="m-2 p-2 text-2xl font-bold rounded-xl text-center bg-slate-400 text-white">{data.title}</h1>
              <p className="mt-2 p-2 text-xl rounded-xl text-wrap text-center text-blue-950">{data.content}</p>
              </div>
              
            </div>
        ))}  
       
      </div>
    
  );
};

export default BlogDetails;
