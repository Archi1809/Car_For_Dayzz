"use client";
import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types";
import CustomButton from "./CustomButton";

const Car = ({make , model,fuel, mpg ,transmission,drive, noofperson,carRent,img}: CarProps) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="car">
        <div className="car__content">
          <h2 className="car__content-title">
            {make} {model} {fuel} { noofperson}
          </h2>
        </div>

        <p className='car__price'>
          <span className='car__price-dollar'>₹</span>
          {carRent}
          <span className='car__price-day'>/day</span>
        </p>

        <div className='car__image'>
          <Image src={img} alt='car model' fill priority className='object-contain' />
        </div>

        <div className='relative flex w-full mt-2'>
          <div className='car__icon-container'>
            <div className='car__icon'>
              <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
              <p className="car__icon-text">{transmission}</p>
            </div>
            <div className="car__icon">
              <Image src="/tire.svg" width={20} height={20} alt="seat" />
              <p className="car__icon-text">{drive.toUpperCase()}</p>
            </div>
            <div className="car__icon">
              <Image src="/gas.svg" width={20} height={20} alt="seat" />
              <p className="car__icon-text">{mpg} MPG</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Car