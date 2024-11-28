import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function Hero() {
  return (
    <div className='bg-[url(public/Homepage.png)] w-full lg:h-[800px] bg-center bg-cover'>
      <div  className='container mx-auto px-2 md:px-4 py-6 md:py-[55px] lg:py-[90px] flex flex-col md:flex-row items-center justify-between '>
        <div className='flex flex-col items-stretch'>
            <h3 className=' text-base md:text-[20px] lg:text-[24px] text-[#0FF1F6]'>AI SDRs (aiDRs)</h3>
            <h1 className='text-[30px] md:text-[43px] lg:text-[64px] font-bold text-white'>More <span className='font-medium italic'>leads</span>,<br /> less <span className='italic font-medium'>people</span>.</h1>
            <p className='py-2 text-base md:text-[20px] opacity-50 text-white max-w-[450px]'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <div className='pt-4'>
               <button className=' md:py-2.5 px-2 md:px-4 rounded-full bg-[#0FF1F6]   hover:bg-[#5ad0d9] text-[#002228] font-semibold'  >
                Sign Up for the Beta  
                <ArrowOutwardIcon></ArrowOutwardIcon>
                </button>
            </div>
        </div>
        <div className='text-[#002228]'>
            d
        </div>
      </div>
    </div>
  )
}

export default Hero
