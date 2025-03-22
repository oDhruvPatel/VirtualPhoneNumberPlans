import React from 'react'

export const Popularplans = () => {
  return (
    <div>
       
<div className="w-screen h-full flex flex-col  bg-[#0e0e0e] justify-center items-center pt-32 -pb-10">
  <h1 className="poppins text-gray-400 text-4xl font-bold">Popular Plans</h1>

  <div className="w-screen h-full flex gap-20 bg-[#0e0e0e] justify-center items-center py-16">
  <div className="max-w-xs bg-[#1a1a1a] rounded-lg shadow-lg p-6  transition-all hover:bg-blue-600 hover:text-white">
    <h2 className="text-2xl font-semibold text-white">Basic Plan</h2>
    <p className="text-gray-300 my-4">
      A cost-effective plan suitable for individual use with essential features.
    </p>
    <h3 className="text-lg text-white font-semibold">Features:</h3>
    <ul className="text-gray-300 list-disc pl-5">
      <li>Call forwarding</li>
      <li>Voicemail</li>
      <li>24/7 support</li>
    </ul>
    <p className="mt-4 text-gray-400">Provider: Example Provider</p>
  </div>

  {/* Card 2 */}
  <div className="max-w-xs bg-[#1a1a1a] rounded-lg shadow-lg p-6  transition-all hover:bg-blue-600 hover:text-white">
    <h2 className="text-2xl font-semibold text-white">Pro Plan</h2>
    <p className="text-gray-300 my-4">
      A premium plan for businesses with additional features and flexibility.
    </p>
    <h3 className="text-lg text-white hover:text-white font-semibold">Features:</h3>
    <ul className="text-gray-300 list-disc pl-5">
      <li>Advanced call routing</li>
      <li>Custom voicemail greetings</li>
      <li>International calling</li>
    </ul>
    <p className="mt-4 text-gray-400">Provider: Pro Provider</p>
  </div>

  {/* Card 3 */}
  <div className="max-w-xs bg-[#1a1a1a] rounded-lg shadow-lg p-6  transition-all hover:bg-blue-600 hover:text-white">
    <h2 className="text-2xl font-semibold text-white text-white">Enterprise Plan</h2>
    <p className="text-gray-300 my-4">
      A feature-packed plan for enterprises requiring advanced features and scalability.
    </p>
    <h3 className="text-lg text-white font-semibold">Features:</h3>
    <ul className="text-gray-300 list-disc pl-5">
      <li>Dedicated support</li>
      <li>Advanced analytics</li>
      <li>Multiple extensions</li>
    </ul>
    <p className="mt-4 text-gray-400">Provider: Enterprise Provider</p>
  </div>
</div>
</div>


    </div>
  )
}
