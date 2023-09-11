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
  cardNumber: string;
  setCardNumber: React.Dispatch<SetStateAction<string>>;

  expMonth: number;
  setExpMonth: React.Dispatch<SetStateAction<number>>;
  expYear: number;
  setExpYear: React.Dispatch<SetStateAction<number>>;
  cvc: number;
  setCvc: React.Dispatch<SetStateAction<number>>;
  confirmed: boolean;
  setConfirmed: React.Dispatch<SetStateAction<boolean>>;
};

type FormContextProviderProps = {
  children: React.ReactNode;
};

export const FormContext = createContext<FormContextType>(
  null as unknown as FormContextType
);

const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState(0o0);
  const [expYear, setExpYear] = useState(0o0);
  const [cvc, setCvc] = useState(0o00);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        cardNumber,
        setCardNumber,
        expMonth,
        setExpMonth,
        expYear,
        setExpYear,
        cvc,
        setCvc,
        confirmed,
        setConfirmed,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
}

export default FormContextProvider;
