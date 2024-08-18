import React from 'react'
import {motion} from "framer-motion"

const UI1 = () => {
  return (
    <main className="flex h-full w-full bg-black justify-center overflow-y-scroll scrollbar-thin">
      <div className="flex max-w-[70%] flex-col py-10">
        <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 1, ease: "easeOut" }} className="text-[#00FF80] font-sans font-light">REIMAGINE WORK</motion.h2>
        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 1, ease: "easeOut" }} className="text-white text-3xl font-bold">Reflect performance from daily work.</motion.h1>


        <div className="w-full h-[500px] flex justify-evenly p-10">
          <div className="w-[60%] h-full gap-8 flex px-10 bg-[#1c1c1c] overflow-hidden bg-opacity-50 rounded-2xl shadow-sm shadow-gray-700 border border-gray-900">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }} draggable={false}
              className="h-[90%] border-t-0 w-1/2 object-top rounded-b-xl mt-0 border border-gray-700" src="/img001.avif" alt="img001" />
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }} draggable={false}
              className="h-[90%] border-b-0 w-1/2 object-bottom rounded-t-xl mt-14 border border-gray-700" src="/img002.avif" alt="img002" />
          </div>
          <div className="w-[40%] h-full overflow-hidden px-5 flex flex-col justify-between">
            <div className="h-[200px] overflow-hidden w-full bg-[#1c1c1c] bg-opacity-50 rounded-2xl flex justify-center">
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }} draggable={false}
                className="h-[90%] border-t-0 object-fill rounded-b-xl mt-0 border border-gray-700" src="/img003.avif" alt="img003" />
            </div>
            <div className="h-[200px] bg-[#1c1c1c] bg-opacity-50 rounded-2xl overflow-hidden">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }} className="h-full relative p-10 overflow-hidden flex justify-center">
                <span className="absolute top-[3.25rem] right-5 h-24 rounded-xl border border-gray-700 w-40 bg-[#1c1c1c]" />
                <img draggable={false} className="h-full z-10 object-fill rounded-xl border border-gray-700" src="/img004.avif" alt="img004" />
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 1, ease: "easeOut" }} className="w-full pb-40">
          <div className="w-full grid grid-cols-3">
            <div className="flex flex-col p-5 gap-2">
              <svg style={{ width: "24px", height: "24px" }} stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="var(--token-336d66e5-21fe-4e1c-899b-32d5eeddfdaa, rgb(0, 255, 128))"><path d="M21 13.5v3M13.5 21h3M16.5 9H9.6a.6.6 0 00-.6.6v6.9M10.5 21h-.9a.6.6 0 01-.6-.6v-.9M21 19.5v.9a.6.6 0 01-.6.6h-.9M19.5 9h.9a.6.6 0 01.6.6v.9M3 10.5v-3M7.5 3h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 15h6.9a.6.6 0 00.6-.6V7.5M4.5 15h-.9a.6.6 0 01-.6-.6v-.9M3 4.5v-.9a.6.6 0 01.6-.6h.9M13.5 3h.9a.6.6 0 01.6.6v.9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <h1 className="text-xl text-white font-semibold">Work truly cross-functionally</h1>
              <p className="text-lg text-[#999999]">With independent but intertwined people and work hierarchies.</p>
            </div>
            <div className="flex flex-col p-5 gap-2">
              <svg style={{ width: "24px", height: "24px" }} stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="var(--token-336d66e5-21fe-4e1c-899b-32d5eeddfdaa, rgb(0, 255, 128))"><path d="M12 18v-6m0 0V3.41a.6.6 0 01.836-.552l8.444 3.62a.6.6 0 01.022 1.093L12 12zM12 22c3.866 0 7-1.567 7-3.5S15.866 15 12 15s-7 1.567-7 3.5S8.134 22 12 22z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <h1 className="text-xl text-white font-semibold">Align your team with your goals</h1>
              <p className="text-lg text-[#999999]">By setting your main goal for your team members to see daily.</p>
            </div>
            <div className="flex flex-col p-5 gap-2">
              <svg style={{ width: "24px", height: "24px" }} stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="var(--token-336d66e5-21fe-4e1c-899b-32d5eeddfdaa, rgb(0, 255, 128))"><path d="M7 12h10M7 8h6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 20.29V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H7.961a2 2 0 00-1.561.75l-2.331 2.914A.6.6 0 013 20.29z" stroke="currentColor"></path></svg>
              <h1 className="text-xl text-white font-semibold">Share feedback and rating</h1>
              <p className="text-lg text-[#999999]">Instantaneously on each activity completed by an assignee.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  )
}

export default UI1
