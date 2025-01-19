// import React from "react"
import { IoLogoGithub, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

function sidebar() {
  return (
   <div className="w-[60px] h-screen fixed left-0 top-0 border-r-[1px] border-gray-300 flex flex-col justify-around items-center">
        <h2 className= '-rotate-90 tracking-wid'>HOMEPAGE</h2>
        <div className="flex flex-col gap-7 text-[20px]">
            <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
            <IoLogoFacebook className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
            <IoLogoInstagram className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
        </div>
    </div>
  )
}

export default sidebar