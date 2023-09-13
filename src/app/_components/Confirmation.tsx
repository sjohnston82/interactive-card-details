"use client";

import React from "react";
import Image from "next/image";
import ConfirmationIcon from "../../../public/images/icon-complete.svg";
import { useFormContext } from "../context/FormContext";

const Confirmation = () => {
  const {
    setConfirmed,
    setCvc,
    setName,
    setCardNumber,
    setExpMonth,
    setExpYear,
  } = useFormContext();
  const handleContinue = () => {
    setName("");
    setCardNumber("");
    setExpMonth(0o0);
    setExpYear(0o0);
    setCvc(0o00);
    setConfirmed(false);
  };

  return (
    <div className="flex flex-col justify-content px-6 lg:w-[380px] lg:px-0 lg:ml-[350px]  lg:mt-[305px]">
      <div className="flex justify-center pt-[84px] flex-col lg:pt-0 items-center text-[29px] text-very-dark-violet tracking-[0.12em]">
        <Image src={ConfirmationIcon} alt="Check into cash!" />
        <h1 className="uppercase mt-8 lg:text-[28px]">Thank you!</h1>
        <h2 className="mt-4 lg:mt-[11px] text-dark-grayish-violet  text-lg tracking-wide lg:tracking-[0.01em]  text-center">
          We&apos;ve added your card details
        </h2>
      </div>
      <button
        onClick={handleContinue}
        className="bg-very-dark-violet lg:mt-[45px] text-light-grayish-violet py-3 lg:py-[13px] rounded-lg mt-1"
      >
        Continue
      </button>
    </div>
  );
};

export default Confirmation;
