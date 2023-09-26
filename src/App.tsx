import { RiMenu5Fill, RiAccountCircleLine, RiPieChartLine, RiShoppingBagLine, RiCloseFill, RiSearchLine, RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
//import image from './assets/bg-removed-dish.png'

// My compoenents
import Sidebar from "./components/shared/Sidebar"

function App() {

  const [showMenu, setShowMenu] = useState(false)
  const [showOrders, setShowOrders] = useState(false)

  // funciones
  const toggleShowMenu = (): void => {
    setShowMenu(!showMenu)
  }

  const toggleShowOrders = () => {
    setShowOrders(!showOrders)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu = { showMenu }/>
      {/*Menu movil*/}
      <nav className="bg-[#1f1d2d] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-500 flex justify-between items-center p-5 rounded-tl-xl rounded-tr-xl">
        <button className="p-2"><RiAccountCircleLine/></button>
        <button className="p-2"><RiPieChartLine/></button>
        <button className="p-2" onClick={toggleShowOrders}><RiShoppingBagLine/></button>
        <button className="text-gray-200 p-2 rounded-xl"
          onClick={toggleShowMenu} >
          {showMenu ? <RiCloseFill/> : <RiMenu5Fill/>}
          </button>
      </nav>

      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6 p-8">
          {/** header */}
          <header className="p-4">
            {/** Title and searchbar */}
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <div className="">
                <h1 className="text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">07 octuber 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                  <input type="text" className="bg-[#1f1d2d] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" placeholder="Search..."/>
                </div>
              </form>
            </div>
            {/** Tabs */}
            <nav className="mt-6 text-gray-300 flex flex-wrap items-center gap-6 border-b-2 border-b-gray-700">
              <a href="#" className="py-2 relative before:absolute before:w-2/3 before:h-1 before:left-0 before:bottom-[-2px] before:bg-[#ec7c6a] before:rounded-full text-[#ec7c6a]">Hot dishes</a>
              <a href="#" className="py-2">Cold dishes</a>
              <a href="#" className="py-2">Soup</a>
              <a href="#" className="py-2">Grill</a>
            </nav>
          </header>
          {/** Title menu and content*/}
          <div className="mb-24 p-4">
            <div className="flex justify-between items-center mb-14">
              <h2 className="text-xl text-gray-300">Choose dishes</h2>
              <div>
                <select name="" id="" className="text-gray-100 bg-[#1f1d2d] px-4 py-2 outline-none rounded-lg">
                  <option value="">Dine in</option>
                </select>
              </div>
            </div>
            {/** Content here */}
            <div className="mt-8 grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/** Card */}
              <div className="bg-[#1f1d2d] rounded-xl flex flex-col items-center text-gray-300 p-8 text-center">
                <img src="comida.png" alt="" className="w-48 h-48 object-cover -mt-20 shadow-md rounded-full"/>
                <p>Spacy sasoned seafood nodles</p>
                <span className="text-gray-400">$2.99</span>
                <p className="text-gray-500">20 Bowils available</p>
              </div>
              {/** Card */}
              <div className="bg-[#1f1d2d] rounded-xl flex flex-col items-center text-gray-300 p-8 text-center">
                <img src="comida.png" alt="" className="w-48 h-48 object-cover -mt-20 shadow-md rounded-full"/>
                <p>Spacy sasoned seafood nodles</p>
                <span className="text-gray-400">$2.99</span>
                <p className="text-gray-500">20 Bowils available</p>
              </div>
              {/** Card */}
              <div className="bg-[#1f1d2d] rounded-xl flex flex-col items-center text-gray-300 p-8  text-center">
                <img src="comida.png" alt="" className="w-48 h-48 object-cover -mt-20 shadow-md rounded-full"/>
                <p>Spacy sasoned seafood nodles</p>
                <span className="text-gray-400">$2.99</span>
                <p className="text-gray-500">20 Bowils available</p>
              </div>
              {/** Card */}
              <div className="bg-[#1f1d2d] rounded-xl flex flex-col items-center text-gray-300 p-8  text-center">
                <img src="comida.png" alt="" className="w-48 h-48 object-cover -mt-20 shadow-md rounded-full"/>
                <p>Spacy sasoned seafood nodles</p>
                <span className="text-gray-400">$2.99</span>
                <p className="text-gray-500">20 Bowils available</p>
              </div>
              {/** Card */}
              <div className="bg-[#1f1d2d] rounded-xl flex flex-col items-center text-gray-300 p-8  text-center">
                <img src="comida.png" alt="" className="w-48 h-48 object-cover -mt-20 shadow-md rounded-full"/>
                <p>Spacy sasoned seafood nodles</p>
                <span className="text-gray-400">$2.99</span>
                <p className="text-gray-500">20 Bowils available</p>
              </div>
              {/** Card */}
              <div className="bg-[#1f1d2d] rounded-xl flex flex-col items-center text-gray-300 p-8  text-center">
                <img src="comida.png" alt="" className="w-48 h-48 object-cover -mt-20 shadow-md rounded-full"/>
                <p>Spacy sasoned seafood nodles</p>
                <span className="text-gray-400">$2.99</span>
                <p className="text-gray-500">20 Bowils available</p>
                </div>
              </div>
            </div>
          </div>
          {/** Order column */}
          <div className={`lg:col-span-2 lg:static fixed bg-[#1f1d2d] w-full h-full ${showOrders ? 'right-0' : '-right-full'} transition-all`}>
          {/** Orders */}
          <div className="relative text-gray-300 pt-16 p-8 h-full overflow-y-scroll scroll-container" >
            <RiCloseFill className="lg:hidden absolute left-0 top-0 p-2 m-3 text-2xl box-content text-gray-300 rounded-full bg-[#262837]" onClick={ toggleShowOrders }/>
            <h1 className="mt-4">Order #12875563</h1>
            {/** Etiquetas */}
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="bg-[#ec7c6a] text-gray-300 rounded-lg px-4 py-2">Dine In</button>
              <button className="text-[#ec7c6a] rounded-lg px-4 py-2 border border-[#ec7c6a]">To Go</button>
              <button className="text-[#ec7c6a] rounded-lg px-4 py-2 border border-[#ec7c6a]">Delivery</button>
            </div>
            <div className="text-gray-300 grid grid-cols-6 mb-3 mt-4">
                <h5 className="col-span-4">Item</h5>
                <h5 className="col-span-1 text-center">Qty</h5>
                <h5 className="col-span-1 text-center">Price</h5>
            </div>
            {/** Products List */}
            <div className="flex flex-col gap-3">
              {/** Product Card */}
              <div className="bg-[#262837] grid grid-cols-6 p-4 rounded-xl">
                {/** Product description */}
                <div className="flex gap-1 items-center col-span-4">
                  <img src="comida.png" alt="" className="w-10 h-10 object-cover"/>
                  <div className="flex flex-col justify-evenly">
                    <h5 className="text-sm">Spacy sea...</h5>
                    <span className="text-gray-500"> $2.99 </span>
                  </div>
                </div>
                {/** Quantity */}
                <div className="col-span-1 flex justify-center items-center">
                  <span> 2 </span>
                </div>
                {/** Total price */}
                <div className="col-span-1 flex justify-center items-center">
                  <span> $4.99</span>
                </div>
                {/** Note */}
                <div className="col-span-6 grid grid-cols-6 mt-4">
                  <form className="col-span-5">
                    <input className="bg-[#1f1d2d] outline-none w-full py-1 px-3 rounded-lg" type="text" placeholder="Order note..."/>
                  </form>
                  <div className="col-span-1 flex justify-center items-center">
                    <button className="text-[#ec7c6a] text-xl border border-[#ec7c6a] p-1 rounded-lg">
                      <RiDeleteBin6Line/>
                    </button>
                  </div> 
                </div>
              </div>
              {/** Product Card */}
              <div className="bg-[#262837] grid grid-cols-6 p-4 rounded-xl">
                {/** Product description */}
                <div className="flex gap-1 items-center col-span-4">
                  <img src="comida.png" alt="" className="w-10 h-10 object-cover"/>
                  <div className="flex flex-col justify-evenly">
                    <h5 className="text-sm">Spacy sea...</h5>
                    <span className="text-gray-500"> $2.99 </span>
                  </div>
                </div>
                {/** Quantity */}
                <div className="col-span-1 flex justify-center items-center">
                  <span> 2 </span>
                </div>
                {/** Total price */}
                <div className="col-span-1 flex justify-center items-center">
                  <span> $4.99</span>
                </div>
                {/** Note */}
                <div className="col-span-6 grid grid-cols-6 mt-4">
                  <form className="col-span-5">
                    <input className="bg-[#1f1d2d] outline-none w-full py-1 px-3 rounded-lg" type="text" placeholder="Order note..."/>
                  </form>
                  <div className="col-span-1 flex justify-center items-center">
                    <button className="text-[#ec7c6a] text-xl border border-[#ec7c6a] p-1 rounded-lg">
                      <RiDeleteBin6Line/>
                    </button>
                  </div> 
                </div>
              </div>
              {/** Product Card */}
              <div className="bg-[#262837] grid grid-cols-6 p-4 rounded-xl">
                {/** Product description */}
                <div className="flex gap-1 items-center col-span-4">
                  <img src="comida.png" alt="" className="w-10 h-10 object-cover"/>
                  <div className="flex flex-col justify-evenly">
                    <h5 className="text-sm">Spacy sea...</h5>
                    <span className="text-gray-500"> $2.99 </span>
                  </div>
                </div>
                {/** Quantity */}
                <div className="col-span-1 flex justify-center items-center">
                  <span> 2 </span>
                </div>
                {/** Total price */}
                <div className="col-span-1 flex justify-center items-center">
                  <span> $4.99</span>
                </div>
                {/** Note */}
                <div className="col-span-6 grid grid-cols-6 mt-4">
                  <form className="col-span-5">
                    <input className="bg-[#1f1d2d] outline-none w-full py-1 px-3 rounded-lg" type="text" placeholder="Order note..."/>
                  </form>
                  <div className="col-span-1 flex justify-center items-center">
                    <button className="text-[#ec7c6a] text-xl border border-[#ec7c6a] p-1 rounded-lg">
                      <RiDeleteBin6Line/>
                    </button>
                  </div> 
                </div>
              </div>
              {/** Product Card */}
              <div className="bg-[#262837] grid grid-cols-6 p-4 rounded-xl">
                {/** Product description */}
                <div className="flex gap-1 items-center col-span-4">
                  <img src="comida.png" alt="" className="w-10 h-10 object-cover"/>
                  <div className="flex flex-col justify-evenly">
                    <h5 className="text-sm">Spacy sea...</h5>
                    <span className="text-gray-500"> $2.99 </span>
                  </div>
                </div>
                {/** Quantity */}
                <div className="col-span-1 flex justify-center items-center">
                  <span> 2 </span>
                </div>
                {/** Total price */}
                <div className="col-span-1 flex justify-center items-center">
                  <span> $4.99</span>
                </div>
                {/** Note */}
                <div className="col-span-6 grid grid-cols-6 mt-4">
                  <form className="col-span-5">
                    <input className="bg-[#1f1d2d] outline-none w-full py-1 px-3 rounded-lg" type="text" placeholder="Order note..."/>
                  </form>
                  <div className="col-span-1 flex justify-center items-center">
                    <button className="text-[#ec7c6a] text-xl border border-[#ec7c6a] p-1 rounded-lg">
                      <RiDeleteBin6Line/>
                    </button>
                  </div> 
                </div>
              </div>
              
            </div>
            {/** Submit payment */}
            <div className="bg-[#1f1d2d] w-full bottom-0 left-0 px-4 py-6 rounded-tl-xl rounded-tr-xl">
                <div className="flex item-center justify-between mb-3">
                  <span className="text-gray-500">Discount</span>
                  <span>$10</span>
                </div>
                <div className="flex item-center justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>$201.03</span>
                </div>
                <div>
                  <button className="bg-[#ec7c6a] text-gray-300 w-full p-2 mt-2 rounded-lg">
                    Continue to payment
                  </button>
                </div>
            </div> 
          </div>
        </div>
      </main> 
    </div>

  )
}

export default App
