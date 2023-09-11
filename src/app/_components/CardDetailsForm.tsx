"use client";

import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormContext } from "../context/FormContext";

const CardFormSchema = z.object({
  name: z.string().min(2, { message: "Can't be blank" }).max(60),
  cardNumber: z
    .number({ description: "Wrong format, numbers only" })
    .min(16, { message: "Must contain 16 numbers" })
    .max(16, { message: "Must contain 16 numbers" }),
  expMonth: z
    .number({ description: "Numbers only" })
    .min(2, { message: "Must contain 2 numbers" })
    .max(2, { message: "Must contain 2 numbers" }),
  expYear: z
    .number({ description: "Numbers only" })
    .min(2, { message: "Must contain 2 numbers" })
    .max(2, { message: "Must contain 2 numbers" }),
  cvc: z
    .number({ description: "Numbers only" })
    .min(3, { message: "Must contain 3 numbers" })
    .max(3, { message: "Must contain 3 numbers" }),
});

type CardInputProps = {
  name: string;
  cardNumber: number;
  expMonth: number;
  expYear: number;
  cvc: number;
};

const CardDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CardInputProps>({
    resolver: zodResolver(CardFormSchema),
  });

  const { name, setName, cardNumber, setCardNumber } = useFormContext();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;

    const numericInput: string = input.replace(/\D/g, ""); // replace any non numbers

    let formattedInput: string = numericInput
      .replace(/(\d{4})/g, "$1 ") // add space every 4 digits
      .trim()
      .substring(0, 19); // ensure only 16 numbers added

    setCardNumber(formattedInput);
  };

  return (
    <form className="px-6 pt-20 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="uppercase text-very-dark-violet text-[12px] font-[500] tracking-widest"
        >
          Cardholder Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="e.g. Jane Appleseed"
          className="border rounded-lg p-2 border-light-grayish-violet bg-transparent focus:border-very-dark-violet focus:border focus:outline-none cursor-pointer"
        />
        {errors.name?.message && (
          <p className="text-red-error text-[8px]">{errors.name?.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="cardNumber"
          className="uppercase text-very-dark-violet text-[12px] font-[500] tracking-widest"
        >
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          id="cardNumber"
          value={cardNumber ? cardNumber : ""}
          onChange={handleCardNumberChange}
          placeholder="e.g. 1234 5678 9123 0000"
          className="border rounded-lg p-2 border-light-grayish-violet bg-transparent focus:border-very-dark-violet focus:border focus:outline-none cursor-pointer"
        />
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col gap-2 w-1/2">
          <label
            htmlFor="expMonth"
            className="uppercase text-very-dark-violet text-[12px] font-[500] tracking-widest"
          >
            Exp. Date (MM/YY)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              className="border w-[40%] rounded-lg p-2 border-light-grayish-violet bg-transparent focus:border-very-dark-violet focus:border focus:outline-none cursor-pointer"
            />
            <input
              type="text"
              className="border w-[40%] rounded-lg p-2 border-light-grayish-violet bg-transparent focus:border-very-dark-violet focus:border focus:outline-none cursor-pointer"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <label
            htmlFor="cvc"
            className="uppercase text-very-dark-violet text-[12px] font-[500] tracking-widest"
          >
            CVC
          </label>
          <input
            type="text"
            className="border flex-1 rounded-lg p-2 border-light-grayish-violet bg-transparent focus:border-very-dark-violet focus:border focus:outline-none cursor-pointer"
          />
        </div>
      </div>
    </form>
  );
};

export default CardDetailsForm;
