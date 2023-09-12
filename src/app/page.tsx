"use client";

import Image from "next/image";
import MobileBG from "../../public/images/bg-main-mobile.png";
import CardBack from "./_components/CardBack";
import CardFront from "./_components/CardFront";
import CardDetailsForm from "./_components/CardDetailsForm";
import { useFormContext } from "./context/FormContext";
import Confirmation from "./_components/Confirmation";

export default function Home() {
  const { confirmed } = useFormContext();

  return (
    <main className="flex flex-col  h-[704px] w-[375px] bg-white">
      <div className="relative">
        <Image src={MobileBG} alt="Mobile background image" />
        <div className="">
          <CardBack />
          <CardFront />
        </div>
      </div>
      {confirmed ? <Confirmation /> : <CardDetailsForm />}
    </main>
  );
}
