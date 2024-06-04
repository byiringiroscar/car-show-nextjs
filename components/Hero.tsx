'use client';
import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, book, or rent a car -- quickly and easily!
        </h1>
        <p className='hero__subtitle'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea inventore placeat, numquam quis ad nostrum.
        </p>
        <CustomButton
         title="Explore Cars"
         containerStyles="bg-primary-blue text-white rounded-full mt-10"
         handleClick={handleScroll}
          />
      </div>
      <div className='hero__image-container'>
        <div className=''></div>
      </div>
    </div>
  )
}

export default Hero