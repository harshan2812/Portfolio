import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
 function Header(){
    const [toggle,setToggle]=useState(false);
    return<header className="flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold text-black" href="#">HARSHAN T V</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href='/'>HOME</a></li>
            <li><a href='#about'>ABOUT</a></li>
            <li><a href='#certificate'>CERTIFICATE</a></li>
            <li><a href='#contact'>CONTACT</a></li>
            <li><a href='#resume'>RESUME</a></li>
        </ul>
        </nav>
        {toggle &&<nav className="block md:hidden ">
            <ul onClick={()=>setToggle(!toggle)} className="flex flex-col text-white mobile-nav  ">
                <li><a href='/'>HOME</a></li>
                <li><a href='#about'>ABOUT</a></li>
                <li><a href='#certificate'>CERTIFICATE</a></li>
                <li><a href='#contact'>CONTACT</a></li>
                <li><a href='#resume'>RESUME</a></li>
            </ul>
            </nav>}
        <button onClick={()=>(setToggle(!toggle))}className='block md:hidden'><Bars3Icon className='text-white h-3'/></button>
           
    </header>
}
export default Header;