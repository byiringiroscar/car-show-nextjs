'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'


interface CarCardProps {
  car: CarProps
}



const CarCard = ({ car }: CarCardProps) => {
  return (
    <div>{car.model}</div>
  )
}

export default CarCard