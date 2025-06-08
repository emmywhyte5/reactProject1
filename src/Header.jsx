import React from 'react'

function Header() {
  return (
    <>  
      <div className='h-[80px] bg-amber-300 flex cursor-pointer'>
       <section className='h-[80px] w-[30%] bg-green-500 flex justify-center items-center'><h1 className='text-5xl text-amber-50 font-bold'>LOGO</h1></section>
       <section  className='h-[80px] w-[60%] bg-black text-amber-50 items-center justify-center flex'>
           <ol className='flex gap-20 text-3xl font-normal'>
             <li>HOME</li>
             <li>BOOK SLOT</li>
             <li>COMFIRMATION</li>
           </ol>
       </section>
       <section  className='h-[80px] w-[10%] bg-green-500'></section>
      </div>
   
    </>
  )
}

export default Header