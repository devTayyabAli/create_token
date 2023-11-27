
import './App.css';
import Moon_main from './Components/Moon_main/Moon_main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Moon_footer from './Components/Moon_footer/Moon_footer';
import Token_page from './Components/Token_page/Token_page';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';


function App() {
  const [address, setAddress] = useState('');

  return (
    <div className="App">

      <ToastContainer />

      <Routes>
        <Route exact path="/" element={<Moon_main />} />
        <Route exact path="/token" element={<Token_page address={address} setAddress={setAddress}  />} />
      </Routes>




    </div>
  );
}

export default App;
