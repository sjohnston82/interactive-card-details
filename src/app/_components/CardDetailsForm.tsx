"use client";

import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormContext } from "../context/FormContext";
import { cn } from "../utils/cn";

const currentYear = Number(new Date().getFullYear().toString().substring(2));

const CardFormSchema = z.object({
  name: z.string().min(2, { message: "Can't be blank" }).max(60),
  cardNumber: z.string().refine(
    (value) => {
      const numericValue = value.replace(/\s/g, "");
      return numericValue.length === 16;
    },
    {
      message: "Card number must contain 16 numbers",
    }
  ),
  expMonth: z.coerce
    .number({ description: "Numbers only" })
    .min(2, { message: "Invalid month" })
    // .max(2, { message: "Must contain 2 numbers" })
    .gt(0, { message: "Invalid month" })
    .lt(13, { message: "Invalid month" }),
  expYear: z.coerce
    .number({ description: "Numbers only" })
    .min(2, { message: "Invalid year" })
    // .max(2, { message: "Must contain 2 numbers" })
    .gte(currentYear, { message: "Invalid year" }),

  cvc: z.coerce
    .number({ description: "Numbers only" })
    .min(3, { message: "Can't be blank" }),
  // .max(3, { message: "Must contain 3 numbers" }),
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

  const {
    name,
    setName,
    cardNumber,
    setCardNumber,
    expMonth,
    setExpMonth,
    expYear,
    setExpYear,
    confirmed,
    setConfirmed,
    cvc,
    setCvc,
  } = useFormContext();

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

  const handleExpMonth = (e: ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;

    const numericInput: string = input.replace(/\D/g, "");
    const formattedInput: string = numericInput.trim().substring(0, 2);

    setExpMonth(Number(formattedInput));
  };

  const handleExpYear = (e: ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;

    const numericInput: string = input.replace(/\D/g, "");
    const formattedInput: string = numericInput.trim().substring(0, 2);

    setExpYear(Number(formattedInput));
  };

  const handleCvc = (e: ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;

    const numericInput: string = input.replace(/\D/g, "");
    const formattedInput: string = numericInput.trim().substring(0, 3);

    setCvc(Number(formattedInput));
  };

  const onSubmit = (data: CardInputProps) => {
    setConfirmed(true);
  };

  return (
    <form
      className="px-6 pt-[88px] flex flex-col gap-[18px] lg:gap-[25px] lg:w-[380px] lg:px-0 lg:ml-[350px]  lg:mt-[274px] lg:pt-0 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 lg:gap-[7px] relative">
        <label
          htmlFor="name"
          className="uppercase lg:font-[700] lg:text-[12px] text-very-dark-violet text-[0.75rem] font-[500] tracking-[0.125em] lg:tracking-[0.145em]"
        >
          Cardholder Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          value={name}
          onChange={handleNameChange}
          placeholder="e.g. Jane Appleseed"
          className={cn(
            "border placeholder:text-gray-300 rounded-lg px-4 py-2 border-light-grayish-violet bg-transparent focus:border-very-dark-violet hover:border-very-dark-violet focus:border focus:outline-none cursor-pointer",
            {
              "border-red-error": errors.name,
            }
          )}
        />
        {errors.name?.message && (
          <p className="absolute text-red-error text-[8px] lg:text-[12px] lg:-bottom-5 -bottom-3 font-semibold">
            {errors.name?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 relative lg:gap-[7px]">
        <label
          htmlFor="cardNumber"
          className="uppercase lg:tracking-[0.145em] lg:text-[12px] text-very-dark-violet text-[0.8rem] font-[500] tracking-[0.125em] lg:font-[700]"
        >
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          {...register("cardNumber")}
          value={cardNumber ? cardNumber : ""}
          onChange={handleCardNumberChange}
          placeholder="e.g. 1234 5678 9123 0000"
          className={cn(
            "border hover:border-very-dark-violet placeholder:text-gray-300 rounded-lg px-4 py-2 border-light-grayish-violet bg-transparent focus:border-very-dark-violet focus:border focus:outline-none cursor-pointer",
            {
              "border-red-error": errors.cardNumber,
            }
          )}
        />
        {errors.cardNumber?.message && (
          <p className="text-red-error lg:text-[12px] lg:-bottom-5 text-[8px] absolute -bottom-3 font-semibold">
            {errors.cardNumber?.message}
          </p>
        )}
      </div>

      <div className="flex gap-3 lg:gap-[18px]">
        <div className="flex flex-col gap-2 w-[50%] lg:gap-[7px]">
          <label
            htmlFor="expMonth"
            className="uppercase lg:font-[700] lg:tracking-[0.145em] lg:text-[12px]  text-very-dark-violet text-[0.79rem] font-[500] tracking-[0.125em]"
          >
            Exp. Date (MM/YY)
          </label>
          <div className="flex gap-3  ">
            <div className="flex flex-col relative lg:flex-1 ">
              <input
                type="text"
                placeholder="MM"
                id="expMonth"
                value={expMonth ? expMonth : ""}
                {...register("expMonth")}
                onChange={handleExpMonth}
                className={cn(
                  "border hover:border-very-dark-violet placeholder:text-gray-300 w-full rounded-lg lg:px-[14px] px-4 py-2 border-light-grayish-violet bg-transparent focus:border-very-dark-violet focus:border focus:outline-none cursor-pointer",
                  {
                    "border-red-error": errors.expMonth,
                  }
                )}
              />
              {errors.expMonth?.message && (
                <p className="absolute lg:text-[12px] lg:-bottom-5  -bottom-3 text-red-error leading-tight text-[8px] font-semibold">
                  {errors.expMonth?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col relative lg:flex-1 ">
              <input
                type="text"
                id="expYear"
                {...register("expYear")}
                placeholder="YY"
                value={expYear ? expYear : ""}
                onChange={handleExpYear}
                className={cn(
                  "border hover:border-very-dark-violet placeholder:text-gray-300 w-full rounded-lg lg:px-[14px] px-4 py-2 border-light-grayish-violet bg-transparent focus:border-very-dark-violet focus:border focus:outline-none cursor-pointer",
                  {
                    "border-red-error": errors.expMonth,
                  }
                )}
              />
              {errors.expYear?.message && (
                <p className="text-red-error text-[8px] lg:text-[12px] lg:-bottom-5 leading-tight absolute -bottom-3 font-semibold">
                  {errors.expYear?.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-1/2 lg:w-[56%]  flex  flex-col gap-2 lg:gap-[7px]">
          <label
            htmlFor="cvc"
            className="uppercase lg:font-[700] lg:tracking-[0.145em] text-very-dark-violet text-[0.79rem] lg:text-[12px] font-[500] tracking-[0.125em]"
          >
            CVC
          </label>
          <div className="flex flex-col relative">
            <input
              type="text"
              id="cvc"
              value={cvc ? cvc : ""}
              {...register("cvc")}
              onChange={handleCvc}
              placeholder="e.g. 123"
              className={cn(
                "border hover:border-very-dark-violet placeholder:text-gray-300 w-full rounded-lg px-4 lg:px-[14px] py-2 border-light-grayish-violet bg-transparent focus:border-very-dark-violet focus:border focus:outline-none cursor-pointer",
                {
                  "border-red-error": errors.expMonth,
                }
              )}
            />
            {errors.cvc?.message && (
              <p className="absolute -bottom-3 text-red-error text-[8px] lg:text-[12px] lg:-bottom-5 font-semibold">
                {errors.cvc?.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-very-dark-violet lg:mt-[15px] text-light-grayish-violet py-3 lg:py-[13px] rounded-lg mt-1"
      >
        Confirm
      </button>
    </form>
  );
};

export default CardDetailsForm;
