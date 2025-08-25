import React, { useState } from 'react'
import { Edit, Sparkles } from 'lucide-react'


const WriteArticle = () => {

  const articleLength = [
    { length: 800, text: 'Short (500-800 words)' },
    { length: 1200, text: 'Medium (800-1200 words)' },
    { length: 1600, text: 'Long (1200+ words)' },

  ]

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [input, setInput] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }


  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrao gap-4 text-slate-700'>
      {/* left col */}

      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg'>

        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Article Configuration</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Article Topic</p>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input} className='w-full mt-2 p-2 px-3 border border-gray-300 rounded-md outline-none text-sm' placeholder='The Future of Artificial Intelligence is ...' required />
        <p className='mt-4 text-sm font-medium'>Article Length</p>

        <div className='mt-3 flex flex-wrap gap-3 sm:max-w-9/11'>
          {articleLength.map((item, index) => (
            <span onClick={() => setSelectedLength(item)} className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedLength.text === item.text ? 'bg-blue-50 text-blue-700' : 'text-gray-500 border-gray-300'}`} key={index}>{item.text}</span>
          ))}
        </div>

        <br />

        <button className='w-full flex items-center justify-center gap-2 mt-6  text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-sm cursor-pointer'>
          <Edit className='w-5' />
          Generate Article
        </button>
      </form>

      {/* right col */}

      <div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg flex flex-col min-h-96 max-h-[600px]'>
        <div className='flex items-center gap-3'>
          <Edit className='w-5 h-5 text-[#4A7AFF]' />
          <h1 className='Text-xl font-semibold'>Generated Article</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm text-gray-400 items-center gap-5 flex flex-col'>
            <Edit className='w-9 h-9' />
            <p>Enter a topic and click "Generate Article" to get started</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default WriteArticle
