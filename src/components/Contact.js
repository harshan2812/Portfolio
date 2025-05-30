
export default function Contact(){
    const config={
        email:"harshanthinakaran@gmail.com",
        phone:"9092281204"
    }
    return <section id='contact' className=' py-5 flex flex-col bg-second px-5 py-32'>
        <div className='flex flex-col items-center  text-white'>
            
                <h1 className=' text-4xl text-white  border-b-4 border-[#5050db] mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='pb-5'>If you want to discuss more in detail,please contact me</p>
                <p className='py-2'><span className='font-bolt'>Email:</span>{config.email}</p>
                <p className='py-2'><span className='font-bolt'>Phone:</span>{config.phone}</p>
        </div>
    </section>
}