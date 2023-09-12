"use client";

import React from "react";
import Image from "next/image";
import CardBackImage from "../../../public/images/bg-card-back.png";
import { useFormContext } from "../context/FormContext";

const CardBack = () => {
  const { cvc } = useFormContext();

  return (
    <div className="w-[285px] h-[157px] absolute top-8  right-4">
      <div className="relative">
        <Image src={CardBackImage} alt="Card back" />
        <p className="absolute top-[71px] right-10 text-white text-[9px] tracking-widest font-light">
          {cvc ? cvc : "000"}
        </p>
      </div>
    </div>
  );
};

export default CardBack;
