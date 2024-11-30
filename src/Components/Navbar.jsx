import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
  return (
    <div className='bg-[#002228] '>
      <div className='container mx-auto  py-2 md:py-4 lg:py-6 px-4   flex items-center justify-between '>
         <div>
          <a href="">
            <img src="LogoTop.png" alt="MIZIA" />
          </a>
         </div>

         <div className='hidden md:block'>
          <ul className='flex items-center gap-2 md:gap-5 text-white'>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Solutions</a></li>
          </ul>
         </div>

    
           <div className='hidden md:flex gap-1 md:gap-3'>
            <button className=' md:py-2.5 px-2 md:px-4 rounded-full bg-[#0FF1F6] hover:bg-[#5ad0d9] text-[#002228] font-semibold'>Book a Demo</button>
            <button className=' md:py-2.5 px-2 md:px-4 rounded-full text-white hover:text-red-500 border-2 font-semibold'>Contact Us</button>
           </div>
           <button className='block md:hidden '>
              <MenuIcon className='text-white'></MenuIcon>
           </button>
      </div>
    
    </div>
  )
}

export default Navbar
