import React, { useState } from 'react'
import { Edit, Eraser, FileText, Hash, Sparkles } from 'lucide-react'

const ReviewResume = () => {
  const [input, setInput] = useState('');
   
     const onSubmitHandler = async (e) => {
       e.preventDefault();
     }
   
     return (
       <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrao gap-4 text-slate-700'>
         {/* left col */}
   
         <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg'>
   
           <div className='flex items-center gap-3'>
             <Sparkles className='w-6 text-[#00DA83]' />
             <h1 className='text-xl font-semibold'>Resume Review</h1>
           </div>
   
           <p className='mt-6 text-sm font-medium'>Upload Resume</p>
           <input onChange={(e) => setInput(e.target.files[0])} type="file"   accept='application/pdf' className='w-full mt-2 p-2 px-3 border border-gray-300 rounded-md outline-none text-sm text-gray-600' required />
          
           <p className='text-xs text-gray-500 font-light mt-1'>Supports PDF Resume only.</p>
   
           <button className='w-full flex items-center justify-center gap-2 mt-6  text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-sm cursor-pointer'>
             <FileText className='w-5' />
              Review Resume
           </button>
         </form>
   
         {/* right col */}
   
         <div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg flex flex-col min-h-96 max-h-[600px]'> 
           <div className='flex items-center gap-3'>
             <FileText className='w-5 h-5 text-[#00DA83]' />
             <h1 className='Text-xl font-semibold'>Analysis Results</h1>
           </div>
   
           <div className='flex-1 flex justify-center items-center'>
             <div className='text-sm text-gray-400 items-center gap-5 flex flex-col'>
               <FileText className='w-9 h-9' />
               <p>Upload a resume and click "Review Resume" to get started</p>
             </div>
           </div>
   
         </div>
   
       </div>
     )
}

export default ReviewResume
