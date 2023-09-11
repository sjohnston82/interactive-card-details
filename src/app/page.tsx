import Image from "next/image";
import MobileBG from "../../public/images/bg-main-mobile.png";
import CardBack from "./_components/CardBack";
import CardFront from "./_components/CardFront";
import CardDetailsForm from "./_components/CardDetailsForm";

export default function Home() {
  return (
    <main className="flex flex-col  h-[704px] w-[375px] bg-white">
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
