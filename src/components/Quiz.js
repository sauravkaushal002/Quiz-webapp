import React, { useState , useEffect} from 'react'
import Timer from './Timer';
import { notifications } from '@mantine/notifications';
const Quiz = ({quiz}) => {

  



const [currentQ ,setCurrentQ]= useState(0);
const [score ,setScore]=useState(0)
const [showScore, setShowScore] =useState(false)


const[sec,setSec]=useState(0);
const[mint,setMint]=useState(0);
// const[milli,setMilli]=useState(0);
// const[hours,setHours]=useState(0);
const[time, setTime]=useState(true);

console.log(quiz.length,"dfsfd")



useEffect(()=>{
  let x;
  if(time){
   x= setTimeout(()=>{
      setSec(sec+1);
      if(sec===60){
        setMint(mint+1);
        setSec(0);
      }
      else if(sec===9){
        //   setMint(mint+1)
        //   setSec(0);
  setShowScore(true)
  setTime(false)
  notifications.show({
    autoClose:2000,
    title:'Play again!',
    message:'Game has been ended ',
    })

      }else if(mint===1){
        //   setHours(hours+1);
        
          setMint(0);
        }
      },1000);
    }
    else{
        clearTimeout(x);
      }
  }
)

const Submit =(isCorrect)=>{
  if(isCorrect){
    setScore(score+1)
  }


const nextQ= currentQ+1 ;
  if(nextQ<quiz.length){
     setCurrentQ(currentQ+1)
  }
  
  else{
    setShowScore(true)
    // alert("sdffsfdsfsdfs")
    notifications.show({
    autoClose:2000,
    title:'Play again!',
    message:'Game has been ended ',
    })
    

  }
  // else{setShowScore(true)&&}
  

  

}
const playagain=()=>{
setShowScore(false)
setCurrentQ(0)
setScore(0)

setMint(0)
setSec(0)
setTime(true)
notifications.show({
   autoClose:2000,   
  title: 'Good luck',
  message: 'Quiz has been Started!',
})
 

}
  return (
    <>
    {/* <Timer showScore={showScore} setShowScore={setShowScore}/> */}

    <div className="flex justify-center mt-8 ">
      <div className='gird justify-center'>
      <p className='text-[#000000] font-semibold lg:text-2xl'>You have only 10 seconds to complete the quiz</p>
          <h1 className=' lg:ml-48 ml-32'>{mint}:{sec}</h1>
      </div>
     
          </div>
          <div className="text-center my-4 ">
          {/* <button className="btn btn-danger mx-2" onClick={()=>{setTime(true)}}>start</button> */}
          {/* <button className="btn btn-danger mx-2" onClick={()=>{setTime(false)}}>stop</button> */}
          {/* <button className="btn btn-danger mx-2" onClick={handleReset}>reset</button> */}
          </div>
    <div className=''>
  
    <div className='grid justify-center'>
  
    {showScore?( 

      
      <div className='   bg-[#e8e7dd] mt-40 rounded-2xl py-10 px-10 '>
      <div className='text-2xl font-bold '>You have scored {score} out of {quiz.length}

      
      </div>
   
      <button onClick={playagain}className=' bg-red-400 py-2 ml-24 mt-4 px-2 rounded-md'>Play again </button>
     
      </div>
      
    )
    :(
      <>
      <div className=''>
                <h1 className=' mt-4 text-center text-2xl  font-bold  text-green-800'>Choose the correct option </h1>
        
              
              </div>
      <div className='bg-[#e8e7dd] mt-24 py-4 px-4 sm:rounded-2xl shadow-2xl '>

        <div className=''>
    <span className='font-semibold  text-2xl'>Question:{currentQ+1}/{quiz.length}</span>
    </div>
    <div className='text-blue-500 font-bold text-2xl'> 
      {quiz[currentQ].question}{console.log(quiz[currentQ],"sdsfd")}
        </div>
        
        <div>
     
          {quiz[currentQ].Answers?.map((answer)=>{
           
            return(
              <>
    
              <div className='text-white' >
                {/* <div>{answer?.answer?.length}</div> */}
                 <button className='bg-[#123234] p-2 rounded-lg my-1' onClick={()=>Submit(answer.isCorrect)}>{answer.answer}</button>
            </div>
             
             
              </>
              )
            
          })}

          
          </div>
        </div>
        </>
    )}
  
    </div>
    </div>
    </>
  )

}
export default Quiz
