import { useEffect, useRef, useState } from 'react'
import RestPage from './RestPage'
import axios from 'axios';
import { useJwt } from 'react-jwt';
const Home = ({ loginState, setLoginState }) => {
  const [token, setToken] = useState("");
  const { decodedToken, isExpired } = useJwt(token);

  useEffect(() => {
    const check_login = async (email) => {
      if (email) {
        try {
          const resp = await axios.post(`https://gmail-authentication.vercel.app/login?email=${email}`);
          if (resp) {
            setLoginState(true);
            return;
          }
          setLoginState(false);
        } catch (err) {
          console.log(err)
        }
      }
    }

    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken)
      check_login(decodedToken?.email);
    }
  }, [decodedToken]);


  return (
    <div className={`h-full w-full bg-black px-24 ${loginState ? "overflow-y-scroll" : "overflow-hidden"} scrollbar-thin pb-20`}>
      <div className='grid grid-cols-2 h-full'>
        <div className='flex flex-col text-white align-middle justify-between pt-20'>
          <span className="w-full flex flex-col gap-5 align-middle">
            <span className='self-end px-10 flex flex-col gap-3 font-proxima font-bold'>
              <p id="heroSectionText" className='text-6xl py-14'>Fix your Sales</p>
              <p id="heroSectionText" className='text-5xl font-semibold'>Enabling Human</p>
              <p id="heroSectionText" className='text-5xl font-semibold'>Intelligence with Artificial</p>
              <p id="heroSectionText" className='text-5xl font-semibold'>Intelligence</p>
              <p className="my-12 text-xl transition-all hover:text-[#EDC0C0] text-[#e46e26] cursor-pointer">{"Join the waitlist >"}</p>
            </span>
          </span>
        </div>
        <div className='select-none text-white relative align-middle justify-center'>
          <div className='self-center flex flex-col align-middle justify-center'>
            <span className='self-center flex flex-col justify-center mt-24 -mb-32 w-1/2'>
              <p className='text-center text-xl font-semibold'>Give it a try.</p>
              <p className='text-center text-sm font-normal'>Click the mic to transcribe live in English or select another language.</p>
            </span>
            <img draggable={false} src='/mic.svg' className='cursor-pointer self-center' alt='mic' />
            <div className='bg-gray-950 mx-28 -mt-10 flex flex-col align-top justify-start rounded-xl'>
              <p className='text-xl p-3'>Transcription</p>
              <p className='text-sm p-3 px-5 bg-black'>Click the mic to transcribe live in English or select another language.</p>
            </div>
          </div>
        </div>
      </div>
      {loginState && <RestPage />}
    </div>
  )
}

export default Home
