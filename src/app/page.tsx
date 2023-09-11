import Image from "next/image";
import MobileBG from "../../public/images/bg-main-mobile.png";
import CardBack from "./_components/CardBack";
import CardFront from "./_components/CardFront";
import CardDetailsForm from "./_components/CardDetailsForm";

export default function Home() {

  

  return (
    <main className="flex flex-col min-h-[100dvh] w-full">
      <div className="relative">
        <Image src={MobileBG} alt="Mobile background image" />
        <div className="">
          <CardBack />
          <CardFront />
        </div>
      </div>
      <CardDetailsForm />
      
    </main>
  );
}
