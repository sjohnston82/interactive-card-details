"use client";

import React from "react";
import Image from "next/image";
import CardFrontImage from "../../../public/images/bg-card-front.png";
import { useFormContext } from "../context/FormContext";

const CardFront = () => {
  const { name, cardNumber, expMonth, expYear } = useFormContext();

  return (
    <div className="w-[285px] h-[157px] absolute top-[120px] left-[1rem] ">
      <div className="">
        <Image src={CardFrontImage} alt="Card front" />
        <div className="flex absolute top-4 left-4 items-center gap-[10px]">
          <span className="rounded-full bg-white w-7 h-7  "></span>
          <span className="rounded-full border border-light-grayish-violet w-[14px] h-[14px]"></span>
        </div>
        <div className="absolute text-light-grayish-violet flex justify-center top-20 tracking-[0.125em] left-5">
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </div>
        <div className="flex absolute justify-between mx-auto bottom-3 w-[84%] left-5 text-light-grayish-violet">
          <p className="text-[10px] uppercase tracking-wider">
            {name ? name : "Jane Appleseed"}
          </p>
          <p className="text-[10px] tracking-wider">
            {expMonth ? expMonth : "00"}/{expYear ? expYear : "00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
