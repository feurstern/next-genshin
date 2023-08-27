import React from 'react'
import { styles } from '../style'

const Hero = () => {
  return (
    <section className='relative'>
        <div className='container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28'>
            {/* The content of the section */}
            <div className='flex flex-1 flex-col items-center lg:items-start'>
                <h2 className='text-2xl text-sky md:text-4 lg:text-5xl text-center lg:text-left mb-6'>
                   The Heroes among the Scavenger
                </h2>
                <p className='text-gray text-lg text-center lg:text-left mb-6 dark:text-white'>
                    Why does life always give you a shit? Now you can understand how bad it is. What's the purpose of live when it just gives you a shit
                </p>
                <div className='flex justify-center flex-wrap gap-6'>
                    <button type='button' className='btn btn-white'>Get it on Chrome</button>
                    <button type='button' className='btn btn-purple'>Get it on Firefox</button>
                </div>
            </div> 
        </div>

    </section>
  )
}

export default Hero