import AboutImg from '../assests/about.png';
export default function About(){
    const config={
        line1:'I am a passionate Mechanical Engineer with a strong foundation in core engineering principles on designing and a keen interest in IT and technology-driven solutions. My goal is to bridge the gap between mechanical systems and digital innovations by leveraging skills from both domains.. My passion lies in continuous learning, embracing emerging technologies, and contributing to cross-disciplinary projects.'
        
    }

    return <section className=' py-5 flex flex-col md:flex-row bg-primary px-5 'id='about'>
        <div className='md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='pt-5 md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center '> 
                <h1 className=' text-4xl text-white  border-b-4 border-[#26264f] mb-5 w-[170px] font-bold'>About Me </h1>
                <p className='text-blue-950'>{config.line1}</p>
           </div>
        </div>
    </section>
}


