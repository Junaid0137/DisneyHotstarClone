import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import SearchInput from './SearchInput'
import GenerDropDown from './GenerDropDown'

function Header() {
    return (
        <header className='fixed w-full flex justify-between p-5 z-50 top-0 items-center bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
            <Link href="/">
                <Image
                    src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/v1656431456/web-images/logo-d-plus.svg"
                    alt='Disney Logo'
                    width={100}
                    height={80}
                    className='cursor-pointer invert dark:invert-0'
                />
            </Link>
            <div className='flex space-x-2'>
                <GenerDropDown />
                <SearchInput />
                <ModeToggle />
            </div>
        </header>
    )
}

export default Header
