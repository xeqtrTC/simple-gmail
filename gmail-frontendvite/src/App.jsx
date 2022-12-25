import { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import EmailSend from './components/Emails/EmailSend';
import Header from './components/Header/Header';
import Homescreen from './components/Homescreen/Homescreen';
import LeftSide from './components/LeftSide/LeftSide';
import Login from './components/Login/Login';
import Mail from './components/Mail/Mail';
import Register from './components/Register/Register';


function App() {
  const [toggle, setToggle] = useState(false);

  const setEmailOpen = () => {
    setToggle(!toggle);
  }
  let isToggleButton = null;
  if(toggle) {
    isToggleButton = (
      <EmailSend setEmailOpen={setEmailOpen} />
    )
  }
  const combinedButtons = (
    <>
    {isToggleButton}
    </>
  )
  return (
      <div className='bg-[#F6F8FC] h-screen  '>
        <Header />
        <div className='flex h-full bg-[#F6F8FC] w-full'>
        <LeftSide setEmailOpen={setEmailOpen}/>

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Homescreen />} />
              <Route path='/mail/:id' element={<Mail  />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />

            </Routes>
          </BrowserRouter>
         </div>
        {combinedButtons}
      </div>
  );
}

export default App;
