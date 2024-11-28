import React from 'react'

function Partners() {
  return (
    <div className='bg-[#07292F]'>
      <div className='container mx-auto py-6 flex flex-col items-center justify-between'>
        <h1 className='text-[#0FF1F6] '>our trusted partners</h1>
        <div className='grid grid-cols-2 md:grid-cols-5 max-w-[768px]'>
            <img src="public/BackHub.png" alt="BackHub" />
            <img src="public/CableLabs.png" alt="CobleLabs" />
            <img src="public/DBS.png" alt="DBS" />
            <img src="public/EasyEuro.png" alt="EasyEuro" />
            <img src="public/AMD.png" alt="AMD" />
        </div>
      </div>
    </div>
  )
}

export default Partners
