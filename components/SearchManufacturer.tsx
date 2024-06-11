import React from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufactureProps } from '@/types'
import Image from 'next/image'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufactureProps) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                  <Image
                    src='/car-logo.svg'
                    width={20}
                    height={20}
                    alt='search icon'
                    className='ml-4'
                  />
                </Combobox.Button>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer