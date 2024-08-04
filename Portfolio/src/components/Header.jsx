import React from 'react'

const Header = () => {
    return (
        <header className='flex w-full place-content-between h-[80px] px-8 py-4 border items-center border-neutral-900'>
            <div className='text-xl'>
                logo
            </div>
            <div>
                <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
