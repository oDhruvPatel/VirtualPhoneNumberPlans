import React from 'react';

const BrowsePlans = () => {
  return (
    <div className="pt-48  bg-[#0e0e0e] px-[12vw] mx-auto min-h-[100vh] text-white flex flex-col items-center justify-start">
      {/* Search Bar */}
      <div className="w-full max-w-lg mb-10">
        <div className="flex justify-between items-center  p-4 rounded-lg">
          <input
            type="text"
            placeholder="Search for virtual phone plans..."
            className="w-full px-4 py-3 text-gray-200 bg-[#1a1a1a] border border-gray-600 rounded-l-lg focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-5 py-3 rounded-r-lg hover:bg-blue-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
          <p className="text-gray-400 mb-4">A simple and affordable plan for individuals who need basic virtual phone services.</p>
          <ul className="text-gray-300 mb-4">
            <li>Up to 100 minutes</li>
            <li>Basic call forwarding</li>
            <li>24/7 customer support</li>
          </ul>
          <p className="text-blue-400 font-semibold">Provider: ABC Corp</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
          <p className="text-gray-400 mb-4">A premium plan for businesses that require more advanced features and larger capacity.</p>
          <ul className="text-gray-300 mb-4">
            <li>Up to 500 minutes</li>
            <li>Advanced call forwarding</li>
            <li>Dedicated account manager</li>
          </ul>
          <p className="text-blue-400 font-semibold">Provider: XYZ Telecom</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
          <p className="text-gray-400 mb-4">For large organizations needing unlimited calls and premium features.</p>
          <ul className="text-gray-300 mb-4">
            <li>Unlimited minutes</li>
            <li>Advanced call analytics</li>
            <li>24/7 VIP support</li>
          </ul>
          <p className="text-blue-400 font-semibold">Provider: Global Telecom</p>
        </div>
      </div>
    </div>
  );
};

export default BrowsePlans;
