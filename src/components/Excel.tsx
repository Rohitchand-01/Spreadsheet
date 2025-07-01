import { MdInsertLink } from 'react-icons/md'
import { LuRefreshCcw } from 'react-icons/lu'
import shape from '../assets/Shape.png'
import { HiDotsHorizontal } from 'react-icons/hi'
import { FaPlus } from 'react-icons/fa6'
import { IoBagAdd } from 'react-icons/io5'
import { PiCalendarBlank } from 'react-icons/pi'
import { FaChevronCircleDown } from 'react-icons/fa'
import { HiMiniUser } from 'react-icons/hi2'
import { TbWorld } from 'react-icons/tb'
import { BsPersonRaisedHand } from 'react-icons/bs'

const jobRequests = [
  'Launch social media campaign for product XYZ',
  'Update press kit for company redesign',
  'Finalize user testing feedback for app update',
  'Design new features for the website',
  'Prepare financial report for Q4'
]

const submittedDates = ['15-11-2024', '28-10-2024', '05-12-2024', '10-01-2025', '25-01-2025']
const statuses = ['In-process', 'Need to start', 'In-process', 'Complete', 'Blocked']
const submitters = ['Aisha Patel', 'Irfan Khan', 'Mark Johnson', 'Emily Green', 'Jessica Brown']
const urls = [
  'https://example.com/task1',
  'https://example.com/task2',
  'https://example.com/task3',
  'https://example.com/task4',
  'https://example.com/task5'
]
const assignedTo = ['Raj Verma', 'Sara Ali', 'John Wick', 'Maya Nair', 'Dev Mehta']
const priorities = ['High', 'Medium', 'Low']
const dueDates = ['30-11-2024', '10-11-2024', '25-12-2024', '15-01-2025', '31-01-2025']
const values = ['$1,200', '$900', '$1,500', '$2,000', '$800']
const remarks = ['', '', '', '', '']

const statusStyles = {
  'In-process': 'bg-[#FFF3D6] text-[#D29500]',
  'Complete': 'bg-[#D3F2E3] text-[#2E8B57]',
  'Blocked': 'bg-[#FFE1DE] text-[#C0392B]',
  'Need to start': 'bg-[#E2E8F0] text-[#3C4F69]'
}

const priorityStyles = {
  High: 'text-[#EF4D44] font-semibold',
  Medium: 'text-[#C29210] font-semibold',
  Low: 'text-[#1A8CFF] font-semibold'
}

const Excel = () => {
  return (
    <div className="flex flex-col border border-gray-300 font-sans">
      {/* Header Row */}
      <div className="flex">
        <div>
          <div className="bg-white w-[32px] h-[42px]" />
          <div className="flex items-center justify-center h-[42px] border border-gray-300 text-sm text-gray-500">#</div>
        </div>

        <div>
          <div className="flex items-center bg-white border border-gray-300">
            <div className="flex items-center gap-4 w-[631px] px-4 py-2 bg-[#E2E2E2]">
              <div className="flex items-center bg-white px-2 py-1 rounded-md gap-2">
                <MdInsertLink className="text-blue-900" />
                <p className="text-sm">Q3 Financial Overview</p>
              </div>
              <LuRefreshCcw className="text-orange-500" />
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center bg-[#EEEEEE] w-[256px] h-[42px] px-2 gap-2 text-gray-500 font-semibold border border-gray-300">
              <IoBagAdd />
              <p>Job Request</p>
            </div>
            <div className="flex items-center bg-[#EEEEEE] w-[124px] h-[42px] px-2 gap-2 text-gray-500 font-semibold border border-gray-300">
              <PiCalendarBlank />
              <p>Schedule</p>
            </div>
            <div className="flex items-center bg-[#EEEEEE] w-[124px] h-[42px] px-2 gap-2 text-gray-500 font-semibold border border-gray-300">
              <FaChevronCircleDown />
              <p>Status</p>
            </div>
            <div className="flex items-center bg-[#EEEEEE] w-[128px] h-[42px] px-2 gap-2 text-gray-500 font-semibold border border-gray-300">
              <HiMiniUser />
              <p>Submitter</p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-[124px] h-[46px] bg-white border border-gray-300" />
          <div className="flex items-center bg-[#EEEEEE] w-[124px] h-[42px] px-2 gap-2 text-gray-500 font-semibold border border-gray-300">
            <TbWorld />
            <p>URL</p>
          </div>
        </div>

        <div>
          <div className="flex items-center px-3 bg-[#D2E0D4] w-[124px] h-[46px] border border-gray-300">
            <img src={shape} alt="Shape" />
            <p>ABC</p>
            <HiDotsHorizontal className="text-gray-500 ml-auto" />
          </div>
          <div className="flex items-center bg-[#E8F0E9] w-[124px] h-[42px] px-2 gap-2 text-gray-500 font-semibold border border-gray-300">
            <BsPersonRaisedHand />
            <p>Assigned</p>
          </div>
        </div>

        <div>
          <div className="flex items-center px-8 bg-[#DCCFFC] w-[252px] h-[46px] border border-gray-300 gap-2">
            <img src={shape} alt="Shape" />
            <p>Answer a question</p>
          </div>
          <div className="flex">
            <div className="bg-[#EAE3FC] w-[125px] h-[42px] px-2 flex items-center text-[#7F56D9] border border-gray-300 font-semibold">
              Priority
            </div>
            <div className="bg-[#EAE3FC] w-[126px] h-[42px] px-2 flex items-center text-[#7F56D9] border border-gray-300 font-semibold">
              Due Date
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center px-3 bg-[#FAC2AF] w-[124px] h-[46px] border border-gray-300">
            <img src={shape} alt="Shape" />
            <p>Extract</p>
            <HiDotsHorizontal className="text-gray-500 ml-auto" />
          </div>
          <div className="bg-[#FFE9E0] text-[#D16A47] h-[42px] px-2 flex items-center border border-gray-300 font-semibold">
            Est. Value
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center bg-[#EEEEEE] w-[122px] h-[46px] border border-gray-300">
            <FaPlus className="text-gray-500" />
          </div>
          <div className="bg-[#EEEEEE] w-[122px] h-[42px] border border-gray-300 flex items-center justify-center font-semibold text-gray-500">
        
          </div>
        </div>
      </div>

      {/* Rows */}
      {Array.from({ length: 25 }).map((_, i) => {
        const status = statuses[i % statuses.length]
        const priority = priorities[i % priorities.length]
        const showData = i < 5
        return (
          <div className="flex" key={i}>
            <div className="w-[32px] h-[42px] flex items-center justify-center border border-gray-300 text-sm text-gray-500">
              {i + 1}
            </div>
            <div className="w-[256px] h-[42px] border border-gray-300 px-2 flex items-center text-sm text-gray-700">
              {showData ? jobRequests[i] : ''}
            </div>
            <div className="w-[124px] h-[42px] border border-gray-300 px-2 flex items-center text-sm text-gray-700">
              {showData ? submittedDates[i] : ''}
            </div>
            <div className="w-[124px] h-[42px] border border-gray-300 px-2 flex items-center">
              {showData ? (
                <span className={`px-2 py-1 text-sm ${statusStyles[status]}`}>
                  {status}
                </span>
              ) : ''}
            </div>
            <div className="w-[127px] h-[42px] border border-gray-300 px-2 flex items-center text-sm text-gray-700">
              {showData ? submitters[i] : ''}
            </div>
            <div className="w-[124px] h-[42px] border border-gray-300 px-2 flex items-center text-sm text-blue-600 underline truncate">
              {showData ? (
                <a href={urls[i]} target="_blank" rel="noopener noreferrer">
                  {urls[i]}
                </a>
              ) : ''}
            </div>
            <div className="w-[124px] h-[42px] border border-gray-300 px-2 flex items-center text-sm text-gray-700">
              {showData ? assignedTo[i] : ''}
            </div>
            <div className={`w-[125px] h-[42px] border border-gray-300 px-2 flex items-center text-sm ${showData ? priorityStyles[priority] : 'text-gray-700'}`}>
              {showData ? priority : ''}
            </div>
            <div className="w-[126px] h-[42px] border border-gray-300 px-2 flex items-center text-sm text-gray-700">
              {showData ? dueDates[i] : ''}
            </div>
            <div className="w-[124px] h-[42px] border border-gray-300 px-2 flex items-center text-sm text-gray-700">
              {showData ? values[i] : ''}
            </div>
            <div className="w-[124px] h-[42px] border border-gray-300 px-2 flex items-center text-sm text-gray-700">
              {showData ? remarks[i] : ''}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Excel
