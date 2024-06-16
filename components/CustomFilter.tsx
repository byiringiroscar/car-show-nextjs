'use client'
import React, {useState, Fragment} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { CustomButtonProps, CustomFilterProps } from '@/types'

const CustomFilter = ({title, options}: CustomFilterProps) => {
  return (
    <div>CustomFilter</div>
  )
}

export default CustomFilter