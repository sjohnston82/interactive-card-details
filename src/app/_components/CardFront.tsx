"use client";

import React from "react";
import Image from "next/image";
import CardFrontImage from "../../../public/images/bg-card-front.png";
import { useFormContext } from "../context/FormContext";

const CardFront = () => {
  const { name, cardNumber, expMonth, expYear } = useFormContext();

  return (
    <div className="w-[285px] h-[157px] absolute top-[120px] left-[1rem] lg:top-[187px] lg:w-[447px] lg:h-[245px] lg:-left-[319px] ">
      <div className="">
        <Image src={CardFrontImage} alt="Card front" />
        <div className="flex absolute top-4 left-4 items-center gap-[10px] lg:gap-[16px] lg:top-[28px] lg:left-[32px] ">
          <span className="rounded-full bg-white w-7 h-7 lg:w-[47px] lg:h-[47px] "></span>
          <span className="rounded-full border border-light-grayish-violet w-[14px] h-[14px] lg:w-[21px] lg:h-[21px]"></span>
        </div>
        <div className="absolute text-light-grayish-violet flex justify-center top-20 tracking-[0.125em] lg:tracking-[0.135em] left-5 lg:top-[137px] lg:left-[32px] lg:text-[27.5px] ">
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </div>
        <div className="flex absolute justify-between mx-auto bottom-3 w-[84%] left-5 text-light-grayish-violet lg:bottom-[24px] lg:left-[32px] lg:w-full">
          <p className="text-[10px] lg:text-[14px] uppercase tracking-wider lg:tracking-[0.145em] lg:font-[500] ">
            {name ? name : "Jane Appleseed"}
          </p>
          <p className="text-[10px] lg:text-[14px] tracking-wider lg:tracking-[0.145em] lg:mr-[64px]">
            {expMonth && expMonth.toString().length < 2
              ? "0" + expMonth
              : expMonth.toString().length === 2
              ? expMonth
              : "00"}
            /{expYear ? expYear : "00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
