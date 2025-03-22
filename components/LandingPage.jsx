import React from 'react';
import img from '../images/img.png';
import grassHopper from '../images/GrassHopper.png';
import GoogleVoice from '../images/GoogleVoice.png';
import eVoice from '../images/Evoice.png';
import ringCentral from '../images/ringCentral.png';
import twilo from '../images/twilo.png';
import { Popularplans } from './Popularplans';

const LandingPage = () => {
  return (
    <>
      <div className="bg-[#0e0e0e] px-[12vw] mx-auto min-h-[90vh] text-white flex flex-row items-center justify-between px-6">
        {/* Hero Section */}
        <div className="text-left max-w-3xl">
          <h1 className="text-5xl font-semibold mb-4 poppins">
            Find the Best Virtual Phone Number Plans
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            We aggregate data from multiple sources to bring you the best <br />
            virtual phone number plans in one place.
          </p>

          {/* Searchbar */}
          <div className="flex flex-col w-full max-w-md -mx-auto">
            
            <div className='flex '>
            <input
              type="text"
              placeholder="Search virtual number plans..."
              className="w-full px-4 py-3 text-gray-400 border border-gray-600 focus:outline-none rounded-none"
            />

            <button className="ml-0 bg-blue-500 text-white px-5 py-3  hover:bg-blue-600 cursor-pointer">
              Search
            </button>
            </div>

                 {/* <div className='w-full text-center poppins my-3'>or</div>
            <button className="mx-auto w-[50%] bg-[#1a1a1a] text-blue-400 px-5 py-3  hover:text-gray-200 hover:bg-blue-400 cursor-pointer">
              Browse plans
            </button>  */}

          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10">
          <img
            src="https://images.businessnewsdaily.com/app/uploads/2022/04/04074801/virtual-phone-line.png"
            alt="Virtual Phone Plans"
            className="rounded-lg shadow-lg h-[50vh] w-[60vh]"
          />
        </div>
      </div>

      <div className='w-screen h-full flex flex-col  gap-7 bg-[#0e0e0e] justify-center items-center'>
         <h1 className='poppins text-gray-500 text-xl'> Service providers</h1> 
        
        <div className='w-screen h-full flex gap-20 bg-[#0e0e0e] justify-center items-center pb-5'>
        <img
            src={grassHopper}
            alt="Virtual Phone Plans"
            className="rounded-lg shadow-lg h-10 w-[12%]"
          />

<img
            src={GoogleVoice}
            alt="Virtual Phone Plans"
            className="rounded-lg shadow-lg h-20 w-20"
          />

<img
            src={ringCentral}
            alt="Virtual Phone Plans"
            className="rounded-lg shadow-lg h-8 w-[10%]"
          />


<img
            src={twilo}
            alt="Virtual Phone Plans"
            className="rounded-lg shadow-lg h-12 w-[10%]"
          />



<img
            src={eVoice}
            alt="Virtual Phone Plans"
            className="rounded-lg shadow-lg h-12 w-[10%]"
          />
        </div>

          
      </div>


      <div>

      </div>


      <Popularplans/>
    </>
  );
};

export default LandingPage;