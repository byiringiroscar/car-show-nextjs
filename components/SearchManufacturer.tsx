'use client';
import React, {useState, Fragment} from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufactureProps } from '@/types'
import Image from 'next/image'
import { manufacturers } from '@/constants';

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufactureProps) => {
  const [query, setQuery] = useState('')

  const filteredManufactures = 
  query === "" ? manufacturers: manufacturers.filter
  ((item: string) => (
    item.toLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase().replace(/\s+/g, ""))
  ))
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
                <Combobox.Input
                  className='search-manufacturer__input'
                  placeholder='Volkswagen'
                  displayValue={(manufacturer: string) => manufacturer}
                  onChange={(e) => setQuery(e.target.value)}

                  />

                  <Transition
                    as={Fragment}
                    leave='transition ease-in'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery('')}
                  >
                    <Combobox.Options>
                      <Combobox.Option value='Volkswagen' />
                      <Combobox.Option value='Toyota' />
                      <Combobox.Option value='Honda' />
                      <Combobox.Option value='BMW' />
                      <Combobox.Option value='Mercedes' />
                    </Combobox.Options>

                  </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer