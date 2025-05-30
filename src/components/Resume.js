import ResumeImg from '../assests/resume.jpg';
export default function Resume(){
    return <section id='resume' className=' py-5 flex flex-col md:flex-row bg-primary px-5'>
        <div className='md:w-1/2 flex justify-center'>
            <img className='w-[300px] ' src={ResumeImg}/>
        </div>
        <div className='pt-5 md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center '> 
                <h1 className=' text-4xl text-white  border-b-4 border-[#26264f] mb-5 w-[140px] font-bold'>RESUME </h1>
                <p className='text-blue-950'>You can view my resume <a className='btn' href='#'>download</a></p>
           </div>
        </div>
    </section>
}
