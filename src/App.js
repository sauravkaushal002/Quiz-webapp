
// import './App.css';
import Home from './components/Home';
import { MantineProvider } from '@mantine/core';
import Quiz from './components/Quiz';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Notifications } from '@mantine/notifications';

function App() {

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
  },
  {
    question:"MongoDB is a  ___ database", 
    Answers:[
        {answer:"NoSql", isCorrect:true},
         {answer:"sql",isCorrect:false}   ,
         {answer:"Compiler",isCorrect:false}  , 
         {answer:"None of these", isCorrect:false}   
        ,
    
     
      ]  
  }
  ]






  return (
    <div className="App">

  
{/* <Quiz  /> */}
   
   <MantineProvider withNormalizeCSS withGlobalStyles>
   <Notifications position='top-right' />
 

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }/>
          <Route path='/quiz' element={<Quiz  quiz={questionsBank}/>} />
        
     
       
      </Routes>
      </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
