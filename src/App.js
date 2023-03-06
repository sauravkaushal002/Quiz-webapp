
// import './App.css';
import Home from './components/Home';
import { MantineProvider } from '@mantine/core';
import Quiz from './components/Quiz';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Notifications } from '@mantine/notifications';
function App() {
  return (
    <div className="App">
   
   <MantineProvider withNormalizeCSS withGlobalStyles>
   <Notifications position='top-right' />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }/>
          <Route path='/quiz' element={<Quiz/>} />
        
     
       
      </Routes>
      </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
