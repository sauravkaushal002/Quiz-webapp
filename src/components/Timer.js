import react, { useEffect, useState } from "react"
// import { useContext } from "react";


const  Timer=({showScore ,setshowScore})=>{
    const[milli,setMilli]=useState(0);
  const[sec,setSec]=useState(0);
  const[mint,setMint]=useState(0);
  const[hours,setHours]=useState(0);
  const[time, setTime]=useState(true);
 
  useEffect(()=>{
      let x;
      if(time){
       x= setTimeout(()=>{
          setMilli(milli+1);
          if(milli===60){
            setSec(sec+1);
            setMilli(0);
          }
          else if(sec===10){
            //   setMint(mint+1)
            //   setSec(0);
            setshowScore(true)

          }else if(mint===1){
            //   setHours(hours+1);
            
              setMint(0);
            }
          },10);
        }
        else{
            clearTimeout(x);
          }
      }
  )
  const handleReset=()=>{
      setMilli(0);
      setSec(0);
      setMint(0);
      setHours(0);
  }
//   const showScore =useContext(data)
    return( 
        <>
          <div className=" ">
          <h1>{hours}:{mint}:{sec}:{milli}</h1>
          </div>
          <div className="text-center my-4 ">
          {/* <button className="btn btn-danger mx-2" onClick={()=>{setTime(true)}}>start</button> */}
          {/* <button className="btn btn-danger mx-2" onClick={()=>{setTime(false)}}>stop</button> */}
          <button className="btn btn-danger mx-2" onClick={handleReset}>reset</button>
          </div>
      {/* <h6 className="text-center">{text}</h6> */}
    </>
  );
}
export default Timer;