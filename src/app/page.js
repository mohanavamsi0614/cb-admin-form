"use client"

import axios from "axios";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const [certificateId, setCertificateId] = useState("");
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [winningDate, setWinningDate] = useState("");
  const [winningPlace, setWinningPlace] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = () => {
    const formData = {
      Certificate_id:certificateId,
    Name:name,
    reg_no:Number(regNo),
    Winning_Date:winningDate,
    Winning_place:winningPlace,
    Img_url:imageUrl
    };
    if(certificateId && name && regNo && winningDate && winningPlace && imageUrl){
      console.log(formData)
      axios.post("https://cb-kare-server-za6b.onrender.com/cerficate/add-certificate" ,formData).then((res)=>{
        toast(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
          
        console.log(res.data)
      })
    }
    else{
      alert("fill")
    }
};


  return (
    <div className="w-full h-screen bg-gray-500 flex justify-center items-center text-black">
      

      <div className="p-10 bg-white w-96 rounded-xl shadow-2xl flex flex-col justify-center">
        <h1 className="text-black text-2xl font-bold">Certificate Adding Form</h1>
        <div>
          <input
            value={certificateId}
            
            onChange={(e) => setCertificateId(e.target.value)}
            placeholder="Certificate ID"
            className="rounded-lg outline-none ring-none focus:ring-2 focus:border-none focus:ring-orange-400 border border-black w-full p-2 h-10 text-pretty mt-3"
          />
        </div>
        <div>
          <input
            value={name}
            
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="rounded-lg border outline-none ring-none focus:ring-2 focus:border-none focus:ring-orange-400 border-black w-full p-2 h-10 text-pretty mt-3"
          />
        </div>
        <div>
          <input
            value={regNo}
            
            onChange={(e) => setRegNo(e.target.value)}
            placeholder="Reg.No"
            className="rounded-lg w-full border border-black outline-none ring-none focus:ring-2 focus:border-none focus:ring-orange-400 h-10 p-2 text-pretty mt-3"
          />
        </div>
        <div>
          <input
            type="date"
            value={winningDate}
            
            onChange={(e)=>{setWinningDate(e.target.value)}}  
            placeholder="Winning Date"
            className="rounded-lg border border-black outline-none ring-none focus:ring-2 focus:border-none focus:ring-orange-400 w-full p-2 h-10 text-pretty mt-3"
          />
        </div>
        <div>
          <input
            value={winningPlace}
            
            onChange={(e) => setWinningPlace(e.target.value)}
            placeholder="Winning Place"
            className="rounded-lg border border-black outline-none ring-none focus:ring-2 focus:border-none focus:ring-orange-400 p-2 w-full h-10 text-pretty mt-3"
          />
        </div>
        <div>
          <input
            value={imageUrl}
            
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
            className="rounded-lg border border-black outline-none ring-none focus:ring-2 focus:border-none focus:ring-orange-400 p-2 w-full h-10 text-pretty mt-3"
          />
        </div>
        <div className="w-full flex justify-center mt-4">
          <button
            onClick={handleSubmit}
            className="w-3/4 h-14 rounded-lg bg-orange-500 text-white font-mono"
          >
            Submit
          </button>
        </div>
      </div>
    <ToastContainer/>

    </div>
  );
}
