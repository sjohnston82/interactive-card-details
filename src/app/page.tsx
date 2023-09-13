"use client";

import Image from "next/image";
import MobileBG from "../../public/images/bg-main-mobile.png";
import CardBack from "./_components/CardBack";
import CardFront from "./_components/CardFront";
import CardDetailsForm from "./_components/CardDetailsForm";
import { useFormContext } from "./context/FormContext";
import Confirmation from "./_components/Confirmation";
import DesktopBG from "../../public/images/bg-main-desktop.png";

export default function Home() {
  const { confirmed } = useFormContext();

  return (
    <main className="flex flex-col lg:flex-row lg:w-[1440px]  h-[900px] w-[375px] bg-white">
        <Image
          src={DesktopBG}
          alt="Desktop background image"
          className="hidden lg:flex"
        />
      <div className="relative ">
        <Image
          src={MobileBG}
          alt="Mobile background image"
          className="lg:hidden"
        />
        <div className="">
          <CardBack />
          <CardFront />
        </div>
      </div>
      {confirmed ? <Confirmation /> : <CardDetailsForm />}
    </main>
  );
}
