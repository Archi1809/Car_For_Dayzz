"use client";

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Header = () => {
  return (
    <header className="w-full relative z-10 bg-black">
        <nav className="head">
            <Link href= "/" className="flex justify-center items-center">
                <h1 className="text-white ">Car For Dayzz</h1>
            </Link>

            <CustomButton 
            title="Sign In"
            containerStyles="border-4 border-solid text-white  rounded-full min-w-[130px]"
            btnType="button"
            />
        </nav>
    </header>
  )
}

export default Header