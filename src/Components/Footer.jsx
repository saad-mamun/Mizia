import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-[#07292F]'>
         <div className='container py-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-3'>
            <a href="#">
               <img src="public/LogoBottom.png" alt="MIZIA" />
            </a>
            <h1 className='text-base opacity-40 text-[#96ACAF] leading-[29px]'>Copyright © 2023 Wizia. All rights reserved.</h1>
         </div>
      </div>
    </div>
  )
}

export default Footer
