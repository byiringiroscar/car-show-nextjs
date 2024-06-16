'use client'
import React, {useState, Fragment} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { CustomButtonProps, CustomFilterProps } from '@/types'

const CustomFilter = ({title, options}: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => setSelected(e)}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className='custom-filter__btn'>
              <span className='block truncate'>{selected.title}</span>
              <Image
                src='/chevron-up-down.svg'
                alt='chevron up down'
                width={20}
                height={20}
                className='ml-4 object-contain'
              />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map((option) => (
                <Listbox.Option key={option.title} value={option}>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? 'text-white bg-blue-600' : 'text-gray-900'
                      } cursor-pointer select-none relative py-2 pl-10 pr-4`}
                    >
                      <span className='block truncate'>{option.title}</span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter