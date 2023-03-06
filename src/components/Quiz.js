import React, { useState } from 'react'

import { notifications } from '@mantine/notifications';
const Quiz = () => {

  

const questionsBank =[{
  question:"What is the of capital of india",
  Answers:[
    {answer:"Chandigarh", isCorrect:false} ,


       {answer:"Punjab",isCorrect:false},
   
       {answer:"Delhi" , isCorrect:true},
       {answer:"HP",isCorrect:false} ,
       
    ,

 
  ]
},
{
    question:"What is 12*4", 
    Answers:[
        {answer:48, isCorrect:true},
         {answer:64,isCorrect:false}   ,
         {answer:90,isCorrect:false}  , 
         {answer:80, isCorrect:false}   
        ,
    
     
      ]  
},
{
  question:"Which Technology is not included in MERN Stack", 
  Answers:[
    {answer:"React",isCorrect:false}   ,
    {answer:"Ruby", isCorrect:true},
       {answer:"MongoDb",isCorrect:false}  , 
       {answer:"Express", isCorrect:false}   
      ,
  
   
    ]  
},
{
  question:"React is a javascript's ___", 
  Answers:[
      {answer:"Library", isCorrect:true},
       {answer:"Framework",isCorrect:false}   ,
       {answer:"Compiler",isCorrect:false}  , 
       {answer:"None of these", isCorrect:false}   
      ,
  
   
    ]  
}
]

const [currentQ ,setCurrentQ]= useState(0);
const [score ,setScore]=useState(0)
const [showScore, setShowScore] =useState(false)
console.log(questionsBank)

const Submit =(isCorrect)=>{
  if(isCorrect){
    setScore(score+1)
  }


  const nextQ= currentQ+1 ;
  if (nextQ<questionsBank.length){
     setCurrentQ(currentQ+1)
  }
  else{
    setShowScore(true)
  }
}

const playagain=()=>{
setShowScore(false)
setCurrentQ(0)
setScore(0)
notifications.show({
      
  title: 'Good luck',
  message: 'Quiz has been Started!',
})
}
  return (
    <>
    <div className=''>
  
    <div className='grid justify-center'>
  
    {showScore?(
      <div className='   bg-[#e8e7dd] mt-72 rounded-2xl py-10 px-10 '>
      <div className='text-2xl font-bold '>You have scored {score} out of {questionsBank.length}
      
      
      </div>
      <button onClick={playagain}className=' bg-red-400 py-2 ml-24 mt-4 px-2 rounded-md'>Play again </button>
      </div>
    ):(
      <>
      <div className=''>
                <h1 className=' mt-8 text-center text-2xl  font-bold  text-green-800'>Choose the correct option </h1>
        
              
              </div>
      <div className='bg-[#e8e7dd] mt-36 py-4 px-4 sm:rounded-2xl shadow-2xl '>

        <div className='   '>
    <span className='font-semibold  text-2xl'> Question :{currentQ+1}/{questionsBank.length}</span>
        </div>
        <div className='text-blue-500 font-bold text-2xl'> 
{questionsBank[currentQ].question}
        </div>
        
        <div>
     
          {questionsBank[currentQ].Answers?.map((answer)=>{
           
            return(
              < >
    
              <div className='text-white'>
                {/* <div>{answer?.answer?.length}</div> */}
                 <button className='bg-[#123234] px-2 rounded-lg my-1' onClick={()=>Submit(answer.isCorrect)}>{answer.answer}</button>
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
