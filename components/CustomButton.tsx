// import React from 'react'
"use client";
 
import Image from "next/image";
import { CustomButtonProps } from "@/types";
const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles }: CustomButtonProps) => {
  return (
    <button
        disabled={false}   
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className='flex-1 text-white text-[14px] leading-[17px] font-bold'>{title}</span>
    </button>
  )
}

export default CustomButton