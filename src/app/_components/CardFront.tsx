import React from 'react'
import Image from 'next/image'
import CardFrontImage from '../../../public/images/bg-card-front.png'

const CardFront = () => {
  return (
    <div className="w-3/4 absolute top-[123px] left-6">
      <div className="">
        <Image src={CardFrontImage} alt="Card front" />
        <div className="flex absolute top-4 left-4 items-center gap-2"><span className="rounded-full bg-white w-7 h-7  "></span><span className="rounded-full border border-light-grayish-violet w-3 h-3"></span></div>
        
      </div>
    </div>
  )
}

export default CardFront