import React, { useState } from 'react'
import { Edit, Eraser, Hash, Scissors, Sparkles } from 'lucide-react'

const RemoveObject = () => {
  const [input, setInput] = useState('');
  const [Object, setObject] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrao gap-4 text-slate-700'>
      {/* left col */}

      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg'>

        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Object Removal</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload image</p>
        <input onChange={(e) => setInput(e.target.files[0])} type="file" accept='image/*' className='w-full mt-2 p-2 px-3 border border-gray-300 rounded-md outline-none text-sm text-gray-600' required />

        <p className='mt-6 text-sm font-medium'>Describe object name to remove</p>
        <textarea onChange={(e) => setObject(e.target.value)} value={Object} rows={4} className='w-full mt-2 p-2 px-3 border border-gray-300 rounded-md outline-none text-sm' placeholder='e.g., car in background , tree from the image' required />

        <p className='text-xs text-gray-500 font-light mt-1'>Be specific about what you want to remove</p>

        <button className='w-full flex items-center justify-center gap-2 mt-6  text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-sm cursor-pointer'>
          <Scissors className='w-5' />
          Remove Object
        </button>
      </form>

      {/* right col */}

      <div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg flex flex-col min-h-96 '>
        <div className='flex items-center gap-3'>
          <Scissors className='w-5 h-5 text-[#4A7AFF]' />
          <h1 className='Text-xl font-semibold'>Processed Image</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm text-gray-400 items-center gap-5 flex flex-col'>
            <Scissors className='w-9 h-9' />
            <p>Upload an image and describe what to remove</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default RemoveObject
