"use client";

import React, {
  createContext,
  type SetStateAction,
  useState,
  useContext,
  useEffect,
} from "react";

type FormContextType = {
  name: string;
  setName: React.Dispatch<SetStateAction<string>>;
  cardNumber: number;
  setCardNumber: React.Dispatch<SetStateAction<number>>;
  setNumber: React.Dispatch<SetStateAction<number>>;
  expMonth: number;
}