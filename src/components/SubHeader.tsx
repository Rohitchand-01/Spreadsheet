import { PiGreaterThanThin } from 'react-icons/pi'
import { VscEyeClosed } from "react-icons/vsc";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { GoFilter } from "react-icons/go";
import Arrow from '../assets/Arrow Autofit.png'
import { RiDownloadLine } from "react-icons/ri";
import { FaRegShareFromSquare } from "react-icons/fa6";
import shape from '../assets/Shape.png'




const SubHeader = () => {
  return (
    <div className='flex justify-between items-center px-2 py-2 bg-white border-b border-gray-200'>
      <div className='flex items-center gap-4'>
        <div className='flex gap-2'>
          <p>Tool bar</p>
          <div className='flex items-center mt-1'>
            <PiGreaterThanThin className='w-3 h-3' />
            <PiGreaterThanThin className='w-3 h-3 -ml-[2px]' />
          </div>
        </div>
        <span className='text-gray-200 text-xl'>|</span>
        <div className='flex items-center gap-5 text-sm font-medium'>
            <div className='flex items-center gap-2 text-sm font-medium'>
                <VscEyeClosed />
                <p>Hide fields</p>
            </div>
            <div className='flex items-center gap-2 text-sm font-medium'>
                <HiMiniArrowsUpDown />
                <p>Sort</p>
            </div>

            <div className='flex items-center gap-2 text-sm font-medium'>
                <GoFilter />
                <p>Filter</p>
            </div>

            <div className='flex items-center gap-2 text-sm font-medium'>
                <img src={Arrow} alt='arrow' className='w-4 h-4' />
                <p>Cell view</p>
            </div>
            
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2 text-sm font-medium text-gray-500 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer'>
            <RiDownloadLine />
            <p>Import</p>
        </div>
        <div className='flex items-center gap-2 text-sm font-medium text-gray-500 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer'>
            <RiDownloadLine className=" rotate-180" />
            <p>Export</p>
        </div>
        <div className='flex items-center gap-2 text-sm font-medium text-gray-500 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer'>
            <FaRegShareFromSquare />
            <p>Share</p>
        </div>
        <div className='flex bg-[#4B6A4F] gap-1 p-1 rounded-md cursor-pointer hover:bg-[#3a4f3c] transition duration-200 ease-in-out px-5'>
            <img src={shape} alt="" className='w-4 h-4 mt-1' />
            <p className='text-white'>New Action</p>
        </div>
      </div>
    </div>
  )
}

export default SubHeader
