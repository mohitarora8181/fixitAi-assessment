import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { MdClose } from 'react-icons/md'
import { toast } from 'react-toast'

const Navbar = ({ loginState, setLoginstate }) => {

    const [loginDialog, setOpendialog] = useState();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    const [error, seterror] = useState("");

    const handleLogin = async () => {
        const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

        if (!emailRegex.test(email)) {
            seterror("Please write email properly");
            return;
        }

        setEmail("");
        seterror(false);
        setLoading(true);

        try {
            await axios.post(`https://gmail-authentication.vercel.app/login?email=${email}`).then(({ data }) => {
                if (data) {
                    setLoginstate(true);
                    setLoading(false);
                    seterror("");
                    setOpendialog(false);
                    toast.success("Successfully Login");
                    localStorage.setItem("token",data.detail.token)
                }
            });
        } catch (resp) {
            console.log(resp)
            try {
                await axios.post("https://gmail-authentication.vercel.app/generate_token", {
                    email
                }).then(async ({ data }) => {
                    await axios.post(`https://gmail-authentication.vercel.app/sendMail?token=${data.token}`).then(resp => {
                         toast.success("Verification link sent to respective Gmail")
                         setLoading(false); 
                         setOpendialog(false);
                        });
                })
            }
            catch (err) {
                seterror(err.response.data.message)
                setLoading(false)
            }
        }
    }

    return (
        <div className="w-full bg-black text-white h-16 flex justify-between items-center px-28 py-2 font-thin">
            <div className="text-2xl flex justify-between align-middle items-center gap-3 cursor-pointer" onClick={() => window.location.href = "/"}>
                <div>
                    <img src="/logo.svg" className='self-center' alt="logo" width={25} height={25} />
                </div>
                <h4 className='text-3xl self-center'>fiXit</h4>
            </div>
            <nav className="flex justify-between items-center gap-7 text-sm font-semibold">
                <a href="/about">About Us</a>
                {loginState ?
                    <a href="/about">Call Auditing</a>
                    : <button onClick={() => { seterror(false); setLoading(false); setEmail(""); setOpendialog(true); }} href="/login" className='hover:bg-white hover:text-black text-white transition-all rounded-md py-1 p-3'>
                        Login
                    </button>}
            </nav>
            {loginDialog && <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 1 }}
                transition={{ duration: 0.5 }}
                className='absolute -ml-40 w-[110%] h-[200%] pt-96 z-50 bg-gray-600 bg-opacity-80 flex justify-center'
            >
                <div className='w-1/3 h-[300px] select-none self-center bg-white flex flex-col gap-8 justify-center align-middle rounded-xl'>
                    <div className='flex justify-between h-35'>
                        <p className='text-red-500 m-5 font-bold text-sm'>{error.length > 0 ? error : ""}</p>
                        <MdClose size={30} onClick={() => setOpendialog(false)} color='black' className='m-5 cursor-pointer' />
                    </div>
                    {loading ? <img width={50} alt='loadingGif' height={50} className='self-center' src='https://i.gifer.com/ZZ5H.gif' /> : <><h1 className='text-black self-center text-3xl font-bold'>Login</h1>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-1/2 self-center p-2 px-7 text-black outline-black border rounded-md border-gray-300' placeholder='Write your email address here ' /></>}
                    <div className='flex justify-end'>
                        <button onClick={() => handleLogin()} disabled={email.length <= 0} className='text-white text-sm bg-black py-2 px-4 m-5 rounded-full disabled:bg-gray-700 disabled:opacity-80 enabled:hover:scale-105 hover:outline enabled:hover:outline-cyan-600'>Next ( Verify mail )</button>
                    </div>
                </div>
            </motion.div>}
        </div>
    )
}

export default Navbar
