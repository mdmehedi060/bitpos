

const RightDashboard = () => {
    return (
        
        <div className="w-full lg:w-full">
        <div className=" px-5 mt-5">
          <div className="font-bold text-xl my-8">Current Order</div>
          <div className="font-semibold">
            <span className="px-4 py-2 rounded-md bg-red-100 text-red-500">Clear All</span>
            <span className="px-4 py-2 rounded-md bg-gray-100 text-gray-800">Setting</span>
          </div>
        </div>
        <div className="px-5 py-4 mt-5 overflow-y-auto h-64">
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-row items-center w-2/5">
              <img src="https://source.unsplash.com/4u_nRgiLW3M/600x600" className="w-6 h-8 object-cover rounded-lg" alt />
              <span className="ml-4 font-semibold text-sm">Stuffed flank steak</span>
            </div>
            <div className="w-32 flex justify-between">
              <span className="px-3 py-1 rounded-md bg-gray-300 ">-</span>
              <span className="font-semibold mx-4">2</span>
              <span className="px-3 py-1 rounded-md bg-gray-300 ">+</span>
            </div>
            <div className="font-semibold text-lg w-16 text-center">
              $13.50
            </div>
          </div>             
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-row items-center w-2/5">
              <img src="https://source.unsplash.com/sc5sTPMrVfk/600x600" className="w-6 h-8 object-cover rounded-lg" alt />
              <span className="ml-4 font-semibold text-sm">Grilled Corn</span>
            </div>
            <div className="w-32 flex justify-between">
              <span className="px-3 py-1 rounded-md bg-gray-300 ">-</span>
              <span className="font-semibold mx-4">10</span>
              <span className="px-3 py-1 rounded-md bg-gray-300 ">+</span>
            </div>
            <div className="font-semibold text-lg w-16 text-center">
              $3.50
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-row items-center w-2/5">
              <img src="https://source.unsplash.com/MNtag_eXMKw/600x600" className="w-6 h-8 object-cover rounded-lg" alt />
              <span className="ml-4 font-semibold text-sm">Grilled Corn</span>
            </div>
            <div className="w-32 flex justify-between">
              <span className="px-3 py-1 rounded-md bg-gray-300 ">-</span>
              <span className="font-semibold mx-4">10</span>
              <span className="px-3 py-1 rounded-md bg-gray-300 ">+</span>
            </div>
            <div className="font-semibold text-lg w-16 text-center">
              $3.50
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-row items-center w-2/5">
              <img src="https://source.unsplash.com/MNtag_eXMKw/600x600" className="w-6 h-8 object-cover rounded-lg" alt />
              <span className="ml-4 font-semibold text-sm">Grilled Corn</span>
            </div>
            <div className="w-32 flex justify-between">
              <span className="px-3 py-1 rounded-md bg-gray-300 ">-</span>
              <span className="font-semibold mx-4">10</span>
              <span className="px-3 py-1 rounded-md bg-gray-300 ">+</span>
            </div>
            <div className="font-semibold text-lg w-16 text-center">
              $3.50
            </div>
          </div> 
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-row items-center w-2/5">
              <img src="https://source.unsplash.com/MNtag_eXMKw/600x600" className="w-6 h-8 object-cover rounded-lg" alt />
              <span className="ml-4 font-semibold text-sm">Ranch Burger</span>
            </div>
            <div className="w-32 flex justify-between">
              <span className="px-3 py-1 rounded-md bg-red-300 text-white">x</span>
              <span className="font-semibold mx-4">1</span>
              <span className="px-3 py-1 rounded-md bg-gray-300 ">+</span>
            </div>
            <div className="font-semibold text-lg w-16 text-center">
              $2.50
            </div>
          </div> 
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-row items-center w-2/5">
              <img src="https://source.unsplash.com/4u_nRgiLW3M/600x600" className="w-6 h-8 object-cover rounded-lg" alt />
              <span className="ml-4 font-semibold text-sm">Ranch Burger</span>
            </div>
            <div className="w-32 flex justify-between">
              <span className="px-3 py-1 rounded-md bg-red-300 text-white">x</span>
              <span className="font-semibold mx-4">1</span>
              <span className="px-3 py-1 rounded-md bg-gray-300 ">+</span>
            </div>
            <div className="font-semibold text-lg w-16 text-center">
              $2.50
            </div>
          </div>            
        </div>
        <div className="px-5 mt-5">
          <div className="py-4 rounded-md shadow-lg">
            <div className=" px-4 flex justify-between ">
              <span className="font-semibold text-sm">Subtotal</span>
              <span className="font-bold">$35.25</span>
            </div>
            <div className=" px-4 flex justify-between ">
              <span className="font-semibold text-sm">Discount</span>
              <span className="font-bold">- $5.00</span>
            </div>
            <div className=" px-4 flex justify-between ">
              <span className="font-semibold text-sm">Sales Tax</span>
              <span className="font-bold">$2.25</span>
            </div>
            <div className="border-t-2 mt-3 py-2 px-4 flex items-center justify-between">
              <span className="font-semibold text-2xl">Total</span>
              <span className="font-bold text-2xl">$37.50</span>
            </div>
          </div>
        </div>
        <div className="px-5 mt-5">
          <div className="rounded-md shadow-lg px-4 py-4">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <span className="uppercase text-xs font-semibold">cashless credit</span>
                <span className="text-xl font-bold text-yellow-500">$32.50</span>
                <span className=" text-xs text-gray-400 ">Available</span>
              </div>
              <div className="px-4 py-3 bg-gray-300 text-gray-800 rounded-md font-bold"> Cancel</div>
            </div>
          </div>
        </div>
        <div className="px-5 mt-5">
          <div className="px-4 py-4 rounded-md shadow-lg text-center bg-yellow-500 text-white font-semibold">
            Pay With Cashless Credit
          </div>
        </div>
      </div>


        
    );
};

export default RightDashboard;