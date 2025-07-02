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
const remarks = ['Urgent task', 'Follow-up needed', 'On hold', 'Review in progress', 'Ready for delivery']

const statusStyles = {
  'In-process': 'bg-[#FFF3D6] text-[#D29500] rounded-full text-center px-2 py-1',
  'Complete': 'bg-[#D3F2E3] text-[#2E8B57] rounded-full text-center px-2 py-1',
  'Blocked': 'bg-[#FFE1DE] text-[#C0392B] rounded-full text-center px-2 py-1',
  'Need to start': 'bg-[#E2E8F0] text-[#3C4F69] rounded-full text-center px-2 py-1'
}

const priorityStyles = {
  High: 'text-[#EF4D44] font-semibold',
  Medium: 'text-[#C29210] font-semibold',
  Low: 'text-[#1A8CFF] font-semibold'
}

const Excel = () => {
  return (
    <div className="flex flex-col border border-gray-200 font-sans w-fit">
      <div className="flex">
        <div className="w-[32px] h-[32px] border border-gray-200 bg-white" />
        <div className="flex">
          <div className="flex items-center gap-4 w-[631px] h-[32px] px-4 py-2 bg-[#E2E2E2] border border-gray-200">
            <div className="flex items-center bg-white px-2 py-1 rounded-md gap-2">
              <MdInsertLink className="text-blue-900" />
              <p className="text-sm">Q3 Financial Overview</p>
            </div>
            <LuRefreshCcw className="text-orange-500" />
          </div>
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 flex items-center justify-center bg-white">
          <TbWorld className="text-gray-600" />
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 px-3 flex items-center gap-2 bg-[#D2E0D4]">
          <img src={shape} alt="Shape" />
          <p>ABC</p>
          <HiDotsHorizontal className="text-gray-500 ml-auto" />
        </div>
        <div className="w-[300px] h-[32px] border border-gray-200 flex items-center gap-2 px-3 bg-[#DCCFFC]">
          <img src={shape} alt="Shape" />
          <p>Answer a question</p>
        </div>
        <div className="w-[150px] h-[32px] border border-gray-200 px-3 flex items-center gap-2 bg-[#FAC2AF]">
          <img src={shape} alt="Shape" />
          <p>Extract</p>
          <HiDotsHorizontal className="text-gray-500 ml-auto" />
        </div>
        <div className="w-[150px] h-[32px] border border-gray-200 flex items-center justify-center bg-[#EEEEEE]">
          <FaPlus className="text-gray-500" />
        </div>
      </div>

      <div className="flex">
        <div className="w-[32px] h-[32px] border border-gray-200 flex items-center justify-center text-sm text-gray-500">#</div>
        <div className="w-[256px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#EEEEEE]">
          <IoBagAdd /> Job Request
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#EEEEEE]">
          <PiCalendarBlank /> Schedule
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#EEEEEE]">
          <FaChevronCircleDown /> Status
        </div>
        <div className="w-[128px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#EEEEEE]">
          <HiMiniUser /> Submitter
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#EEEEEE]">
          <TbWorld /> URL
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#E8F0E9]">
          <BsPersonRaisedHand /> Assigned
        </div>
        <div className="w-[150px] h-[32px] border border-gray-200 px-2 flex items-center text-[#7F56D9] font-semibold bg-[#EAE3FC]">
          Priority
        </div>
        <div className="w-[150px] h-[32px] border border-gray-200 px-2 flex items-center text-[#7F56D9] font-semibold bg-[#EAE3FC]">
          Due Date
        </div>
        <div className="w-[150px] h-[32px] border border-gray-200 px-2 flex items-center text-[#D16A47] font-semibold bg-[#FFE9E0]">
          Est. Value
        </div>
        <div className="w-[150px] h-[32px] border border-gray-200 px-2 flex items-center text-gray-500 font-semibold bg-[#EEEEEE]">
          Remarks
        </div>
      </div>

      {Array.from({ length: 17 }).map((_, i) => {
        const show = i < 5
        const status = statuses[i % statuses.length]
        const priority = priorities[i % priorities.length]

        return (
          <div className="flex" key={i}>
            <div className="w-[32px] h-[32px] border border-gray-200 flex items-center justify-center text-sm text-gray-500">
              {i + 1}
            </div>
            <div className="w-[256px] h-[32px] border border-gray-200 px-2 flex items-center text-[12px] text-gray-700">
              {show ? jobRequests[i] : ''}
            </div>
            <div className="w-[124px] h-[32px] border border-gray-200 px-2 flex items-center text-sm text-gray-700">
              {show ? submittedDates[i] : ''}
            </div>
            <div className="w-[124px] h-[32px] border border-gray-200 flex items-center justify-center text-sm">
              {show ? <span className={statusStyles[status]}>{status}</span> : ''}
            </div>
            <div className="w-[128px] h-[32px] border border-gray-200 px-2 flex items-center text-sm text-gray-700">
              {show ? submitters[i] : ''}
            </div>
            <div className="w-[124px] h-[32px] border border-gray-200 px-2 flex items-center text-sm text-blue-600 underline truncate">
              {show ? <a href={urls[i]} target="_blank">{urls[i]}</a> : ''}
            </div>
            <div className="w-[124px] h-[32px] border border-gray-200 px-2 flex items-center text-sm text-gray-700">
              {show ? assignedTo[i] : ''}
            </div>
            <div className={`w-[150px] h-[32px] border border-gray-200 px-2 flex items-center text-sm ${show ? priorityStyles[priority] : 'text-gray-700'}`}>
              {show ? priority : ''}
            </div>
            <div className="w-[150px] h-[32px] border border-gray-200 px-2 flex items-center text-sm text-gray-700">
              {show ? dueDates[i] : ''}
            </div>
            <div className="w-[150px] h-[32px] border border-gray-200 px-2 flex items-center text-sm text-gray-700">
              {show ? values[i] : ''}
            </div>
            <div className="w-[150px] h-[32px] border border-gray-200 px-2 flex items-center text-sm text-gray-700">
              {show ? remarks[i] : ''}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Excel
