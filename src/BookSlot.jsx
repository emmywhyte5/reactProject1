import React,  { useState }  from 'react'


function BookSlot() {
   let [mover, setMover] = useState(true);

  function pv() {
    if (mover) {
      setMover(false);
      setMover2(true);
    } else {
      setMover(true);
    }
  }
  return (
    <> 
      <div className='h-[300vh]  bg-amber-300 '>
           <div className='h-[70px] bg-black flex'>
              <section className='h-[70px] w-[20%] bg-white flex items-center justify-center'>
                 <h1 className='text-3xl font-bold flex text-black items-center justify-center'>TravelStart</h1>
              </section>
              <section className='h-[70px] w-[70%] bg-white text-black   items-center  flex'>
                 <ol className='flex gap-10 text-2xl font-normal cursor-pointer '>
                    <li>Flights</li>
                    <li>Hotels</li>
                    <li>Buses</li>
                    <li>Cars</li>
                 </ol>
              </section>
              <section className='h-[70px] w-[10%] bg-green-400'></section>
           </div>
           <div className='h-[400px] bg-black bg-[url(airline.png)]'>
      

           </div>
            <div className='h-[200px] bg-amber-700 flex'>
              <section className='h-[200px] w-[30%] bg-amber-700 '>
                
              </section>
              <section className='h-[200px] w-[30%] bg-orange-400'></section>
              <section className='h-[200px] w-[30%] bg-amber-700'></section>


            </div>
            <div className='h-[500px] bg-white flex items-center justify-center'>
               <div className='h-[500px] w-[92%] bg-white'>
                 <section className='h-[50px] bg-black rounded-t-md'>
                   <ol className='flex gap-36 text-amber-50'>
                    <li>Flight Route</li>
                     <li>Airlines</li>
                      <li>Trip Type</li>
                      <li>Travel Dates</li>
                      <li>Searched</li>
                      <li>Price Form </li>
                   </ol>
                 </section>
                 <section className='h-[50px]  bg-black rounded-t-md'>
                   <div className=' h-[50px] bg-gray-700 flex gap-10 text-amber-50 '>
                    <section className='h-[50px] w-[20%] flex  text-amber-50'>Lagos to Guangzhou</section>
                     <section className='h-[50px] w-[20%]  flex  text-amber-50'>Qatar aIRWAYS</section>
                      <section className='h-[50px] w-[15%] flex  text-amber-50'>Return</section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'>25 jun-4 jul</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>20 hours ago</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>NGN 1249694 </section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'> <button className='h-[30px] w-[80px] bg-blue-300'>Book Now</button> </section>
                   </div>
                 </section>
                  <section className='h-[50px]  bg-black rounded-t-md'>
                   <div className=' h-[50px] w-[80%] bg-red-600 flex gap-10 text-amber-50 absolute '>
                    <section className='h-[50px] w-[20%] flex  text-amber-50'>Lagos to Guangzhou</section>
                     <section className='h-[50px] w-[20%]  flex  text-amber-50'>Qatar aIRWAYS</section>
                      <section className='h-[50px] w-[15%] flex  text-amber-50'>Return</section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'>25 jun-4 jul</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>20 hours ago</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>NGN 1249694 </section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'> <button onClick={pv} className= "h-[30px] w-[80px] bg-blue-300 ">Book Now</button> </section>
       <div
          className={` ${ mover ? " h-[0]" : " h-[200px] "
        } duration-500 w-[900px] bg-gray-400 overflow-hidden relative mt-16 right-96`}
        >

        </div>
                   </div>
                 </section>
                  <section className='h-[50px]  bg-black rounded-t-md'>
                   <div className=' h-[50px] bg-gray-700 flex gap-10 text-amber-50 '>
                    <section className='h-[50px] w-[20%] flex  text-amber-50'>Lagos to Guangzhou</section>
                     <section className='h-[50px] w-[20%]  flex  text-amber-50'>Qatar aIRWAYS</section>
                      <section className='h-[50px] w-[15%] flex  text-amber-50'>Return</section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'>25 jun-4 jul</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>20 hours ago</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>NGN 1249694 </section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'> <button className='h-[30px] w-[80px] bg-blue-300'>Book Now</button> </section>
                   </div>
                 </section>
                  <section className='h-[50px]  bg-black rounded-t-md'>
                   <div className=' h-[50px] bg-red-600 flex gap-10 text-amber-50 '>
                    <section className='h-[50px] w-[20%] flex  text-amber-50'>Lagos to Guangzhou</section>
                     <section className='h-[50px] w-[20%]  flex  text-amber-50'>Qatar aIRWAYS</section>
                      <section className='h-[50px] w-[15%] flex  text-amber-50'>Return</section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'>25 jun-4 jul</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>20 hours ago</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>NGN 1249694 </section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'> <button className='h-[30px] w-[80px] bg-blue-300'>Book Now</button> </section>
                   </div>
                 </section>
                 <section className='h-[50px]  bg-black rounded-t-md'>
                   <div className=' h-[50px] bg-gray-700 flex gap-10 text-amber-50 '>
                    <section className='h-[50px] w-[20%] flex  text-amber-50'>Lagos to Guangzhou</section>
                     <section className='h-[50px] w-[20%]  flex  text-amber-50'>Qatar aIRWAYS</section>
                      <section className='h-[50px] w-[15%] flex  text-amber-50'>Return</section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'>25 jun-4 jul</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>20 hours ago</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>NGN 1249694 </section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'> <button className='h-[30px] w-[80px] bg-blue-300'>Book Now</button> </section>
                   </div>
                 </section>
                 <section className='h-[50px]  bg-black rounded-t-md'>
                   <div className=' h-[50px] bg-red-600 flex gap-10 text-amber-50 '>
                    <section className='h-[50px] w-[20%] flex  text-amber-50'>Lagos to Guangzhou</section>
                     <section className='h-[50px] w-[20%]  flex  text-amber-50'>Qatar aIRWAYS</section>
                      <section className='h-[50px] w-[15%] flex  text-amber-50'>Return</section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'>25 jun-4 jul</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>20 hours ago</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>NGN 1249694 </section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'> <button className='h-[30px] w-[80px] bg-blue-300'>Book Now</button> </section>
                   </div>
                 </section>
                  <section className='h-[50px]  bg-black rounded-t-md'>
                   <div className=' h-[50px] bg-gray-700 flex gap-10 text-amber-50 '>
                    <section className='h-[50px] w-[20%] flex  text-amber-50'>Lagos to Guangzhou</section>
                     <section className='h-[50px] w-[20%]  flex  text-amber-50'>Qatar aIRWAYS</section>
                      <section className='h-[50px] w-[15%] flex  text-amber-50'>Return</section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'>25 jun-4 jul</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>20 hours ago</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>NGN 1249694 </section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'> <button className='h-[30px] w-[80px] bg-blue-300'>Book Now</button> </section>
                   </div>
                 </section>
                
               
                 <section className='h-[50px]  bg-black rounded-t-md'>
                   <div className=' h-[50px] bg-red-600 flex gap-10 text-amber-50 '>
                    <section className='h-[50px] w-[20%] flex  text-amber-50'>Lagos to Guangzhou</section>
                     <section className='h-[50px] w-[20%]  flex  text-amber-50'>Qatar aIRWAYS</section>
                      <section className='h-[50px] w-[15%] flex  text-amber-50'>Return</section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'>25 jun-4 jul</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>20 hours ago</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>NGN 1249694 </section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'> <button className='h-[30px] w-[80px] bg-blue-300'>Book Now</button> </section>
                   </div>
                 </section>
                 <section className='h-[50px]  bg-black rounded-t-md'>
                   <div className=' h-[50px] bg-gray-700 flex gap-10 text-amber-50 '>
                    <section className='h-[50px] w-[20%] flex  text-amber-50'>Lagos to Guangzhou</section>
                     <section className='h-[50px] w-[20%]  flex  text-amber-50'>Qatar aIRWAYS</section>
                      <section className='h-[50px] w-[15%] flex  text-amber-50'>Return</section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'>25 jun-4 jul</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>20 hours ago</section>
                      <section className='h-[50px] w-[20%]  flex  text-amber-50'>NGN 1249694 </section>
                      <section className='h-[50px] w-[20%] flex  text-amber-50'> <button className='h-[30px] w-[80px] bg-blue-300'>Book Now</button> </section>
                   </div>
                 </section>

                
                  
               </div>
            </div>
            <div className='h-[150px] bg-white'>
              <section className='h-[70px] w-[95%] flex items-center justify-center '><h1 className='text-1xl text-black'>* Please note that the prices are subject to availability and block out dates do apply over peak season</h1></section>
              <section className='h-[70px] '><h1 className='text-2xl font-bold flex items-center justify-center'>WHY FLY WITH QATAR?</h1></section>

            </div>
            <div className='h-[500px] bg-amber-100 flex items-center gap-8 justify-center'>
               <section className='h-[500px] w-[30%] bg-white '>
                   <section className='h-[300px] bg-white bg-[url(QatarAirways.jpg)] bg-contain hi'></section>
                   <section className='h-[200px] w-[90%] bg-white'><h1><p className='text-2xl'>Innovation</p> <br />Founded in just 1993 ,Qatar Airways is fastest <br />growing airline in the history of commercial of aviation</h1></section>
               </section>
                <section className='h-[500px] w-[30%] bg-white '>
                   <section className='h-[300px] bg-amber-700 bg-[url(qatarlady.jpg)] bg-contain hi'></section>
                   <section className='h-[200px] w-[90%] bg-white'><h1><p  className='text-2xl'>Service Excellence</p> <br />Voted 'Best Airline in the middle East',you can <br />experience Qatar world-class hospitality and <br />customer service,tailor-made tosuit your needs.</h1></section>
                </section>
                 <section className='h-[500px] w-[30%] bg-white'>
                   <section className='h-[300px] bg-amber-300 bg-[url(awards.jpeg)] bg-contain hi'></section>
                   <section className='h-[200px] w-[90%] bg-white'><h1><p  className='text-2xl'>Exclusivity</p>Qatar wold-class status has earned them <br />numerous awards.From spacious Business class <br />Cabin to  dine-on-demand 5-star dishes,travel in <br />style with Qatar.</h1></section>
                 </section>
            </div>
            <div className='h-[400px] bg-lime-600 gap-10 flex'>
               <section className='h-[400px] w-[30%] bg-amber-300'></section>
               <section className='h-[400px] w-[30%] bg-amber-300'></section>
               <section className='h-[400px] w-[30%] bg-amber-300'></section>

            </div>
            <div className='h-[50px] bg-white  '><h1 className='text-black '>The information on this page is correct as of date of publishing .while every effort made to keep the information as fresh as possible, Travelstart takes no responsibility for any of the information being out of date or incorrectly  noted </h1></div>

            <div className='h-[300px] bg-white flex items-center justify-center '>
            <section className='h-[200px] w-[30%] bg-white text-black'>
               <h1 className='text-2xl font-bold'>Why book with us?</h1> <br />
               <ol className='text-black'>
                <li>Bring you the best fare from qatar <br />Airline</li>
                <li> Expert assistance from booking to <br />Depature</li>
                <li> online destinations from planning your <br />Travels</li>
                
               </ol>
            </section>
            <section className='h-[200px] w-[30%] bg-white text-black'>
                <h1 className='text-2xl font-bold'>Already booked your flight?</h1> <br />
               <ol className='text-black'>
                <li>Bring you the best fare from qatar <br />Airline</li>
                <li> Expert assistance from booking to <br />Depature</li>
                <li> online destinations from planning your <br />Travels</li>
                
               </ol>
            </section>
            <section className='h-[200px] w-[30%] bg-white text-black'>
                <h1 className='text-2xl font-bold'>Personalised assistance</h1> <br />
               <ol className='text-black'>
                <li>Bring you the best fare from qatar <br />Airline</li>
                <li> Expert assistance from booking to <br />Depature</li>
                <li> online destinations from planning your <br />Travels</li>
                
               </ol>
            </section>
            </div>

      </div>
      
        
    
    
    
    
    </>
  )
}

export default BookSlot