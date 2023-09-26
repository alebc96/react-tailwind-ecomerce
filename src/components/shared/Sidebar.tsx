import { RiHome5Line, RiWaterPercentLine, RiPieChartLine, RiMailLine, RiNotification2Line, RiSettings4Line, RiLogoutBoxRLine } from "react-icons/ri";

function Sidebar( { showMenu }: {showMenu: boolean}) {

return (
    <div className={`bg-[#1f1d2d] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-3 rounded-tr-xl rounded-br-xl ${showMenu ? 'left-0' : '-left-full'} z-50 transition-all`}>
      <div>
        <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Logo</h1>
        <ul className="pl-4">
            <li className="p-4 bg-[#262837] rounded-s-lg">
                <a href="#" className="bg-[#ec7c6a] p-3 flex justify-center rounded-xl center text-gray-200">
                    <RiHome5Line className="text-xl"/>
                </a>
            </li>
            <li className="p-4 rounded-s-lg hover:bg-[#262837] group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl center text-[#ec7c6a] group-hover:text-gray-200 transition-colors">
                    <RiWaterPercentLine className="text-xl"/>
                </a>
            </li>
            <li className="p-4 rounded-s-lg hover:bg-[#262837] group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl center text-[#ec7c6a] group-hover:text-gray-200 transition-colors">
                    <RiPieChartLine className="text-xl"/>
                </a>
            </li>
            <li className="p-4 rounded-s-lg hover:bg-[#262837] group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl center text-[#ec7c6a] group-hover:text-gray-200 transition-colors">
                    <RiMailLine className="text-xl"/>
                </a>
            </li>
            <li className="p-4 rounded-s-lg hover:bg-[#262837] group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl center text-[#ec7c6a] group-hover:text-gray-200 transition-colors">
                    <RiNotification2Line className="text-xl"/>
                </a>
            </li>
            <li className="p-4 rounded-s-lg hover:bg-[#262837] group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl center text-[#ec7c6a] group-hover:text-gray-200 transition-colors">
                    <RiSettings4Line className="text-xl"/>
                </a>
            </li>
            
        </ul>
      </div>
      <div>
        <ul className="pl-4">
        <li className="p-4 rounded-s-lg hover:bg-[#262837] group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl center text-[#ec7c6a] group-hover:text-gray-200 transition-colors">
                    <RiLogoutBoxRLine className="text-xl"/>
                </a>
            </li>
        </ul> 
      </div>
    </div>
    
  )
}

export default Sidebar