import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [loginState, setLoginState] = useState(false);
  const [videoState, setvideostate] = useState(true);

  return (
    <BrowserRouter>
      {videoState ? <SpalshScreen setvideostate={setvideostate} /> : <><Navbar loginState={loginState} setLoginstate={setLoginState} />
        <Routes>
          <Route path="/" element={<Home loginState={loginState} setLoginState={setLoginState} />} />
        </Routes></>}
    </BrowserRouter>
  );
}


const SpalshScreen = ({setvideostate}) => {

  return <div className="h-full w-full">
    <video onEnded={()=>setvideostate(false)} muted className="w-full h-full bg-black" autoPlay>
      <source className="w-full h-full" src='https://www.fix-it.ai/assets/videos/fixit.mp4' type='video/mp4' />
    </video>
  </div>
}

export default App;
