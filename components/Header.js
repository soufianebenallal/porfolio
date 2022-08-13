/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import Link from 'next/link';
import DarkModeSwitcher from './DarkModeSwitcher';
import Logo from './Logo';
// import SocialMedia from './SocialMedia';
import { FADE_ANIM } from '../motions/home';
import { motion } from "framer-motion";
import { useRouter } from 'next/router'
export default function Header() {
  const [count, setcount] = useState(76)
  const router = useRouter()
  
  console.log(router);
  return (
    <motion.header {...FADE_ANIM} className="py-4 absolute top-0 left-0 w-full z-10">
      <nav className="container flex justify-between items-center py-4">
        <Link href="/">
          <a className="max-w-max">
            <Logo className="h-6 dark:text-white text-gray-900" />
          </a>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
        {/* http://localhost:3333/offers?offer-code=TEST2&email=soufiyan70@leventures.com&firstname=soufiyan&lastname=benallal */}
          <a 
          className='text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200'
          onClick={() => setcount(count + 1)}
            href={`http://localhost:3333/offers?offer-code=TEST33&email=soufiyan${count}@leventurestest.com&firstname=soufiyan&lastname=benallal`}
            target="_blank"
          >Mirror</a>
          <a
            href="mailto:benallalsoufiane1@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk"
            className="fill-current dark:text-gray-100 text-gray-900"
          >
            Let&apos;s talk
          </a>
          <span className="dark:text-gray-700 text-gray-400">-</span>
          {
            router.pathname === '/' ?  <Link href="/blogs">
            <a className="fill-current dark:text-gray-100 text-gray-900">
              Blogs
            </a>
          </Link>
          : <Link href="/">
            <a className="fill-current dark:text-gray-100 text-gray-900">
            Home
            </a>
          </Link>
          }
          
          <span className="dark:text-gray-700 text-gray-400">-</span>
          <DarkModeSwitcher />
        </div>
      </nav>
    </motion.header>
  );
}
