import React from 'react'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function Train() {




  return (



    
    <div className='bg-[#002228] py-6'>
        <div>
            df
            {/* maping akhono kora hoyni */}
        </div>
        {/* Email st */}
        <div className='px-6'>
        <div className='bg-[#07292F] hover:bg-[#083138] shadow-md hover:shadow-xl transition duration-100 rounded-[25px] md:rounded-lg container mx-auto'>
           <div className='flex flex-col items-center py-6 md:py-[70px] lg:py-[100px] '>
              <div>
                 <h1 className='text-[28px] md:text-[40px] leading-[48px] font-medium text-white'>Train your aiDR on your...</h1>
                <h2 className=' italic text-[28px] md:text-[40px] leading-[48px] text-[#0FF1F6]'>prefered email st|</h2>
                <p className='text-[18px]  text-white md:text-[24px] opacity-40 py-5'>You’re in control. Train your aiDR on <br /> elements of your Marketing strategy.</p>
              </div>
              <div >
                <div className='flex md:flex-row flex-col items-start gap-5 text-[#14BCB2] text-[18px] md:text-[20px] '>
                 <div className='space-y-2'>
                    <h1 className='hover:text-[#20f8e9]'> <CheckCircleOutlineRoundedIcon/>  Quick to ramp</h1>
                    <h1 className='hover:text-[#20f8e9]'> <CheckCircleOutlineRoundedIcon/> Quick to scale up </h1>
                 </div>
                 <div className='space-y-2' >
                    <h1 className='hover:text-[#20f8e9]'> <CheckCircleOutlineRoundedIcon/> Easy to optimize </h1>
                    <h1 className='hover:text-[#20f8e9]'> <CheckCircleOutlineRoundedIcon/> Works with all your existing tools </h1>
                 </div>
                </div>
              </div>
           </div>
        </div>
        </div>
        {/* carousel */}
        <div className='py-5'>
            {/* Carousel banano ache solve korte hove */}
        </div>
        {/* Allocation section */}
        <div className='px-6'>
            <div  className='bg-[#07292F] hover:bg-[#083138] shadow-md hover:shadow-xl transition duration-100 rounded-[25px] md:rounded-lg container mx-auto pb-6' >
                <div className='px-[50px] pt-5'>
                    <div className='py-2'>
                        <h1 className=' text-[32px] text-white max-w-[520px] font-medium'>Allocate effort where your reps make an inpact.</h1>
                        <h1 className='italic text-[#0FF1F6] text-[32px] '>Let us handle the rest.</h1>
                        <p className='max-w-[582px] pt-4 text-[20px] text-white  opacity-40'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
                    </div>
                    <div className='flex md:flex-row flex-col gap-[32px] max-w-[597px] pt-5 md:pt-[45px] lg:pt-[70px]'>
                        <div>
                            <p className='text-[40px] text-[#0FF1F6] font-semibold'>32%</p>
                            <p className='text-[20px] text-[#E9EEF1]'>Improvement in Open Rates</p>
                        </div>
                        <div>
                            <p  className='text-[40px] text-[#0FF1F6] font-semibold' >75%</p>
                            <p  className='text-[20px] text-[#E9EEF1]' >Improvement in Ramp Time</p>
                        </div>
                        <div>
                            <p  className='text-[40px] text-[#0FF1F6] font-semibold' >35%</p>
                            <p  className='text-[20px] text-[#E9EEF1]' >Improvement in Meetings Booked</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*  Get Started section */}
        <div>
            <div className='py-10 md:py-[96px] px-3 text-center'>
                <h4 className='text-[16px] md:text-[20px] text-[#0FF1F6] pb-6'>GET STARTED</h4>
                <h1 className='text-[36px] text-white leading-[44px] flex md:flex-row flex-col items-center justify-center'><span className='italic'>Embrace</span> <span className='font-semibold'>the new era of</span> <span className='italic'>outbound.</span></h1>
               <div className='pt-6'>
                    <p className='text-[18px] md:text-[20px] text-white opacity-40'>Wizia lets you train, activate, and optimize aiDRs. </p>
                    <p className='text-[18px] md:text-[20px] text-white opacity-40'>Take your outbound to new levels of performance and efficiency.</p>
               </div>
                <div className='pt-5'>
                    <button className='w-[327px] md:w-[216px] py-2.5 px-2 md:px-4 rounded-full bg-[#0FF1F6]   hover:bg-[#5ad0d9] text-[#002228] font-semibold'  >
                      Sign Up for the Beta  
                     <ArrowOutwardIcon></ArrowOutwardIcon>
                   </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Train
