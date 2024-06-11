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

                </Combobox.Button>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer