import { PiGreaterThanThin } from 'react-icons/pi'
import Shape from '../assets/shape.svg'
import { HiDotsHorizontal } from 'react-icons/hi'
import { CiSearch } from 'react-icons/ci'
import { GoBell } from 'react-icons/go'
import User from '../assets/User.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-2 py-2 bg-white border-b border-gray-200'>
      {/* Left Navigation */}
      <div className='flex items-center gap-4'>
        <img src={Shape} alt='shape' className='w-4 h-4' />

        <div className='flex items-center gap-2 text-sm text-gray-500 font-medium'>
          <p>Workspace</p>
          <PiGreaterThanThin className='w-3 h-3' />
        </div>

        <div className='flex items-center gap-2 text-sm text-gray-500 font-medium'>
          <p>Folder 2</p>
          <PiGreaterThanThin className='w-3 h-3' />
        </div>

        <p className='font-semibold text-sm text-gray-800'>Spreadsheet 3</p>

        <HiDotsHorizontal className='text-gray-400 w-4 h-4 cursor-pointer hover:text-gray-600' />
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-4'>
        <div className='relative'>
          <input
            type='search'
            placeholder='Search within sheet'
            className='pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none'
          />
          <CiSearch className='absolute left-3 top-2.5 text-gray-400 w-4 h-4' />
        </div>

        <div className='relative'>
          <GoBell className='text-gray-500 w-5 h-5 cursor-pointer hover:text-blue-500' />
          <span className='absolute -top-1 right-[-2px] bg-[#4B6A4F] text-white text-[10px] px-1 font-bold  rounded-full shadow-sm'>
            2
          </span>
        </div>
        <img
          src={User}
          alt=''
          className='w-10 h-10 rounded-full border border-gray-300 cursor-pointer hover:border-blue-500'
        />
        <div className='flex flex-col text-sm leading-tight'>
          <p className='font-medium text-[12px] text-gray-800'>John Doe</p>
          <p className='text-gray-400 text-[10px] truncate max-w-[120px]'>
            JohnDoe@example.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
