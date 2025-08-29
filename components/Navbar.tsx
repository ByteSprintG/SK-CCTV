import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='justify-center shadow-sm'>
          <div className='bg-blue-400 w-full justify-center text-center text-white p-1 text-sm'>
            banner
          </div>
      <nav className='px-80 flex items-center justify-between'>
        <Link className='p-3' href='/'>
          <Image src="/logo.png" alt='logo' width={144} height={30}/>
        </Link>

        <div>
          <Link className='p-3' href='/products'>Products</Link>
          <Link className='p-3' href='/about'>About</Link>
          <Link className='p-3' href='/contact'>Contact</Link>  
        </div>

        <div>
          <Link className='p-3' href='/cart'>Cart</Link>
          <Link className='p-3' href='/login'>Login</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
