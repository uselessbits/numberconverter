'use client'
import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (

    <div className='flex space-x-5 p-5'>
        
        <li> <Link href="/">Home </Link></li>
        <li> <Link href="/converter">Base Converter </Link></li>
        <li> <Link href="/calculator">Base Calculator </Link></li>
    </div>
  )
}
