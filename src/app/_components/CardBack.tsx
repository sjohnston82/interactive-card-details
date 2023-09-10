import React from "react";
import Image from "next/image";
import CardBackImage from "../../../public/images/bg-card-back.png";

const CardBack = () => {
  return (
    <div className="w-3/4 absolute top-9 right-5">
      <div className="relative">
        <Image src={CardBackImage} alt="Card back" />
        <p className="absolute top-[68px] right-8 text-white text-[10px] tracking-wider">
          000
        </p>
      </div>
    </div>
  );
};

export default CardBack;
