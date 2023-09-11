import Image from 'next/image'
import MobileBG from '../../public/images/bg-main-mobile.png'
import CardBack from './_components/CardBack'
import CardFront from './_components/CardFront'


export default function Home() {
  return (
    <main className="flex min-h-[100dvh] w-full">
    <div className="relative">
      <Image src={MobileBG} alt="Mobile background image"/>
      <div className="">
        <CardBack />
        <CardFront />
      </div>
    </div>
    </main>
  )
}
