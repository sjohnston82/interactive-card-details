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
    <div className="flex flex-col justify-content px-6">
      <div className="flex justify-center pt-[84px] flex-col items-center text-[29px] text-very-dark-violet tracking-[0.12em]">
        <Image src={ConfirmationIcon} alt="Check into cash!" />
        <h1 className="uppercase mt-8">Thank you!</h1>
        <h2 className="mt-4 text-dark-grayish-violet text-lg tracking-wide text-center">
          We&apos;ve added your card details
        </h2>
        <button
          onClick={handleContinue}
          className="bg-very-dark-violet w-full text-norm text-light-grayish-violet py-3 rounded-lg mt-12 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
