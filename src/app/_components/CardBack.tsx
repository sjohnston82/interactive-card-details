"use client";

import React from "react";
import Image from "next/image";
import CardBackImage from "../../../public/images/bg-card-back.png";
import { useFormContext } from "../context/FormContext";

const CardBack = () => {
  const { cvc } = useFormContext();

  return (
    <div className="w-[285px] h-[157px] absolute top-8  right-4 lg:top-[469px] lg:w-[447px] lg:h-[245px] lg:-left-[225px]">
      <div className="relative">
        <Image src={CardBackImage} alt="Card back" />
        <p className="absolute top-[71px] lg:top-[110px] lg:right-[57px] lg:text-[14px] lg:tracking-[0.145em] right-10 text-white text-[9px] tracking-widest font-light">
          {cvc ? cvc : "000"}
        </p>
      </div>
    </div>
  );
};

export default CardBack;
