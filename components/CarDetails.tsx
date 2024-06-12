import React, { Fragment } from 'react'
import { CarProps } from '@/types';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';


interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;

}

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails