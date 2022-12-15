import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className='w-full h-96 bg-slate-600 justify-center flex'>
        <div className='flex w-4/6 gap-5 items-center'>
          <img className='h-36 w-36 rounded-xl' src='https://i.ytimg.com/vi/qApOLaLYZb0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD1iPrTVpYtoaeGAXaTmo0taRwCcA' />
          <div>
            <h1 className='text-white font-bold text-2xl'>Hello There</h1>
            <p className='text-slate-300'>Fedrick Libeskind</p>
            <p>Some Button</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center -mt-10'>
        <div className='w-4/6 bg-white rounded-xl shadow-md p-5'>
          <div className='flex'>
            <img className='rounded-xl w-12 h-12' src='https://yt3.ggpht.com/h3DCQI_qMbW4VkYWOnsBMbVOd4CnnSoXApTt14Ql4o2Mf5Ol5aqqwn43sjT_DQFUiq76_g-UDw=s48-c-k-c0x00ffffff-no-nd-rj'></img>
            <div className='pl-4'>
              <h2 className='text-red-600 pb-0'>Play</h2>
              <p className='text-slate-900 -mt-1'>Ep. 101: Donad Long</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-4/6 pb-5 mb-8'>
          <h2 className='uppercase my-8 text-slate-600 font-semibold'>Past Episodes</h2>
          <div className='border-b-2 pb-7'>
            <p className='text-slate-400 text-xs'>November 7 2018</p>
            <h3 className='font-semibold text-slate-800 py-1'>Ep 100: Alan Rogers</h3>
            <div className='flex gap-3'>
              <p className='text-xs text-slate-500 mt-[0.3rem]'>Meta1</p>
              <p className='text-xs text-slate-500 mt-[0.3rem]'>Meta2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
