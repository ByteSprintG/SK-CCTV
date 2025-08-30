import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <section id='footer'>
      <div className='flex flex-col items-center justify-center p-10 bg-gray-800 text-white'>
        <div>
          <Image src="/logo.png" alt='logo' width={300} height={100}/>
          <span className='text-2xl font-semibold'>"Your Security, Our Priority"</span>
        </div>
        <div className='flex flex-row'>
          <div>
            <p>No.178, Rajawewa, Ampara.</p>
            <p>+94 75 244 6520</p>
            <p>+94 71 207 0094</p>
          </div>
          <div className='flex flex-col'>
            <Link className='p-3' href='/products'>Products</Link>
            <Link className='p-3' href='/about'>About</Link>
            <Link className='p-3' href='/contact'>Contact</Link>
          </div>
          <div className='flex flex-col'>
            <Link className='p-3' href='/privacy'>Privacy Policy</Link>
            <Link className='p-3' href='/terms'>Terms & Conditions</Link>
            <Link className='p-3' href='/sitemap'>Return & Refund Policy</Link>
            <Link className='p-3' href='/sitemap'>Warranty Policy</Link>
          </div>
        </div>
        <div className='flex flex-row gap-4'>
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
          <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} />
          <Image src="/mail.png" alt="Email" width={24} height={24} />
        </div>
        <div>
          <span>@2025 All Right Reserved</span>
        </div>
      </div>
    </section>
  )
}

export default Footer;