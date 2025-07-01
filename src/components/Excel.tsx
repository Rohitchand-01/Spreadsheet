import { MdInsertLink } from 'react-icons/md'
import { LuRefreshCcw } from 'react-icons/lu'
import shape from '../assets/Shape.png'
import { HiDotsHorizontal } from 'react-icons/hi'
import { FaPlus } from 'react-icons/fa6'
import { IoBagAdd } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'
import { FaChevronCircleDown } from 'react-icons/fa'
import { HiMiniUser } from 'react-icons/hi2'
import { TbWorld } from 'react-icons/tb'
import { BsPersonRaisedHand } from 'react-icons/bs'

const Excel = () => {
  return (
    <div className='flex border border-gray-100'>
      <div>
        <div className='bg-white w-[32px] h-[42px]'></div>
        <div className='p-2'>#</div>
      </div>

      <div>
        <div className='flex justify-between items-center bg-white border-b border-gray-200'>
          <div className='flex items-center gap-4 w-[631px] px-4 py-1 bg-[#E2E2E2] p-1'>
            <div className=' flex items-center bg-white p-1 rounded-md gap-2 '>
              <MdInsertLink className='text-blue-900' />
              <p>Q3 Financial Overview</p>
            </div>
            <LuRefreshCcw className='text-orange-500' />
          </div>
        </div>

        <div className='flex  border-b border-gray-200'>
          <div className='flex bg-[#EEEEEE] w-[256px] p-2 px-2 gap-2 text-gray-400 border-b border-white'>
            <IoBagAdd className='mt-1' />
            <p className='text-gray-500 font-semibold'>Job Request</p>
          </div>
          <div className=' flex bg-[#EEEEEE] w-[124px] px-2 p-2 gap-2 text-gray-400 border border-white'>
            <SlCalender className='mt-1' />
            <p className='text-gray-500 font-semibold'>Schedule</p>
          </div>
          <div className='flex bg-[#EEEEEE] w-[124px] p-2 px-2 gap-2 text-gray-400 border-b border-white'>
            <FaChevronCircleDown className='mt-1' />
            <p>Status</p>
          </div>
          <div className='flex bg-[#EEEEEE] w-[127px] p-2 px-2 gap-2 text-gray-400 border-b border-white'>
            <HiMiniUser className='mt-1' />
            <p>Submitter</p>
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center w-[124px] h-[42px] bg-white border-b border-gray-200'></div>
        <div className='flex bg-[#EEEEEE] w-[126px] p-2 px-2 gap-2 text-gray-400 border-b border-white'>
          <TbWorld className='mt-1' />
          <p> URL</p>
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center px-2 py-2 bg-[#D2E0D4] w-[124px] border-b border-gray-200 '>
          <div className='flex items-center gap-2 px-3'>
            <img src={shape} alt='Shape' />
            <p>ABC</p>
            <HiDotsHorizontal className='text-gray-500 mt-1' />
          </div>
        </div>
        <div className='flex bg-[#E8F0E9] w-[126px] h-[42px] p-2 px-2 gap-2 text-gray-400 border-b border-white font-semibold'>
          <BsPersonRaisedHand className='mt-1' />
          <p>Assigned</p>
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center px-2 py-2 bg-[#DCCFFC] w-[251px] border-b border-gray-200'>
          <div className='flex items-center gap-2 px-8'>
            <img src={shape} alt='Shape' />
            <p>Answer a question</p>
          </div>
        </div>
        <div className='flex'>
          <div className='bg-[#EAE3FC] w-[125px] h-[42px] p-2 px-2 gap-2 text-[#DCCFFC] border-b border-white font-semibold'>
            Priority
          </div>
          <div className='bg-[#EAE3FC] w-[126px] h-[42px] p-2 px-2 gap-2 text-[#DCCFFC] border-b border-white font-semibold'>
            Due Date
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center px-2 py-2 bg-[#FAC2AF] w-[124px] border-b border-gray-200'>
          <div className='flex items-center gap-2 px-3'>
            <img src={shape} alt='Shape' />
            <p>Extract</p>
            <HiDotsHorizontal className='text-gray-500 mt-1' />
          </div>
        </div>
        <div className='bg-[#FFE9E0] text-[#FAC2AF] h-[42px] p-2 px-2 gap-2 border-b border-white font-semibold'>
          Est. Value
        </div>
      </div>

      <div>
        <div className='flex  items-center px-2 py-3 bg-[#EEEEEE] border-b w-[124px] border-gray-200'>
          <div className='flex items-center gap-2 px-10'>
            <FaPlus className='' />
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center px-2 py-2 bg-white border-b border-gray-200'></div>
    </div>
  )
}

export default Excel
