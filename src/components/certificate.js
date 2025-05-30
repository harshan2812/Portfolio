import webimg from '../assests/IMG_20250430_001055.jpg';
import webimg1 from '../assests/IMG_20250430_001118.jpg';
import webimg2 from '../assests/IMG_20250430_001139.jpg';
import webimg3 from '../assests/IMG_20250430_001207.jpg';
import webimg4 from '../assests/IMG_20250430_001231.jpg';
import webimg5 from '../assests/IMG_20250430_001252.jpg';
import webimg6 from '../assests/IMG_20250430_001310.jpg';
import webimg7 from '../assests/IMG_20250430_001329.jpg';
import webimg8 from '../assests/IMG_20250430_001352.jpg';
import webimg9 from '../assests/IMG_20250430_001421.jpg';
import webimg10 from '../assests/IMG_20250430_001441.jpg';
import webimg11 from '../assests/IMG_20250430_001456.jpg';


export default function certificate(){
   return <section id='certificate' className="flex flex-col py-20 px-5 bg-second justify-center text-blue-400 ">
      <div className="">
        <div className="flex justify-center"><h1 className="text-4xl text-white  border-b-4 border-[#008cff] mb-5 w-[235px] font-bold">CERTIFICATES</h1>
        </div>
      </div>
      <div className="flex flex-col  gap-5 ">
         <div className="flex flex-col gap-2 md:flex-row gap-2">
            <div className="relative">
               <img className="w-[800px] h-[200px]" src={webimg}/>
               <div className='absolute left-0 right-0 bottom-0 top-0 bg-second opacity-0 duration-500 hover:opacity-70'>
                  <p className='text-white text-center py-10'>Java Programming</p>
               </div>
            </div>
            <div className="relative"> 
               <img className="w-[800px] h-[200px]"src={webimg1}/>
               <div className='project'>
                  <p className='text-white text-center py-10'>Digital Garage</p>
               </div>
            </div>
            <div className="relative"><img className="w-[800px] h-[200px]" src={webimg2}/>
            <div className='project'>
                  <p className='text-white text-center py-10'>Meta Front-End Developer</p>
               </div>
            </div>
            <div className="relative"><img className="w-[800px] h-[200px]" src={webimg3}/>
            <div className='project'>
                  <p className='text-white text-center py-10'>Principle of UI/UX Design</p>
               </div>
            </div>
            <div className="relative"><img className="w-[800px] h-[200px]" src={webimg4}/>
            <div className='project'>
                  <p className='text-white text-center py-10'>HTML and CSS in depth</p>
               </div>
            </div>
            <div className="relative"><img className="w-[800px] h-[200px]" src={webimg5}/>
            <div className='project'>
                  <p className='text-white text-center py-10'>Programming with JavaScript</p>
               </div>
            </div>
         </div>
         <div className="flex flex-col gap-2 md:flex-row gap-2">
            <div className="relative"><img className="w-[800px] h-[200px]" src={webimg6}/>
            <div className='project'>
                  <p className='text-white text-center py-10'>Introduction to Front-End Development</p>
               </div>
            </div>
            <div className="relative"><img className="w-[800px] h-[200px]" src={webimg7}/>
            <div className='project'>
                  <p className='text-white text-center py-10'>HTML,CSS and JavaScript for Web Developers</p>
               </div>
            </div>
            <div className="relative"><img className="w-[800px] h-[200px]" src={webimg8}/>
            <div className='project'>
                  <p className='text-white text-center py-10'>React Basics</p>
               </div>
            </div>
            <div className="relative"><img className="w-[800px] h-[200px]" src={webimg9}/>
            <div className='project'>
                  <p className='text-white text-center py-10'>Front-End Developer Capstone</p>
               </div>
            </div>
            <div className="relative"><img className="w-[800px] h-[200px]" src={webimg10}/>
            <div className='project'>
                  <p className='text-white text-center py-10'>Coding Interview Preparation</p>
               </div>
            </div>
            <div className="relative"><img className="w-[800px] h-[200px]" src={webimg11}/>
            <div className='project'>
                  <p className='text-white text-center py-10'>Advanced React</p>
               </div>
            </div>
         </div>
        
      </div>
   </section> 
}