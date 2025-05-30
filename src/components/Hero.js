import Heroimg from '../assests/Picsart_25-04-30_01-17-01-121.png';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa6";
export default function Hero(){
    const config={
        role:'a Front-End Developer ',
        insta:'',
        face:'',
        link:'',
    }


    return<section id='hero' className='flex flex-col md:flex-row px-5 bg-second justify-center'>
        <div className='md:w-1/2 flex-flex-col pt-32 '><h1 className=' text-white text-6xl font-hero'>Hi,<br/>I'm <span className='text-blue-400'>HARSHAN T V</span> 
        <p className='text-2xl'>I,m {config.role}</p>
        </h1>
        <div className='sm:flex pb-0 md: flex text-blue-400 pt-10 bottom-0'>
            <a href='https://wa.me/qr/A4L2UNPS3BSQH1' className='pr-5 hover:text-white'><IoLogoWhatsapp size={40} /></a>
            <a href='https://www.linkedin.com/in/harshan-t-v-24b7ab265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='pr-5  hover:text-white'><FaLinkedin size={40}/></a>
            <a href='https://www.instagram.com/har.s.han?igsh=NDRnanVlZjR2dzkw' className='pr-5  hover:text-white'><TiSocialInstagram size={40}/></a>
            <a href='' className=' hover:text-white' ><FaFacebook size={40}/></a>
        </div>
        </div>
       
        <img className='md:w-1/3'src={Heroimg}/>

    </section>
}