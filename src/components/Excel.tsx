import React from 'react';

// Define the exact literal types for your status and priority
type Status = 'In-process' | 'Complete' | 'Blocked' | 'Need to start';
type Priority = 'High' | 'Medium' | 'Low';

const jobRequests = [
  'Launch social media campaign for product XYZ',
  'Update press kit for company redesign',
  'Finalize user testing feedback for app update',
  'Design new features for the website',
  'Prepare financial report for Q4'
];

const submittedDates = ['15-11-2024', '28-10-2024', '05-12-2024', '10-01-2025', '25-01-2025'];
const statuses: Status[] = ['In-process', 'Need to start', 'In-process', 'Complete', 'Blocked'];
const submitters = ['Aisha Patel', 'Irfan Khan', 'Mark Johnson', 'Emily Green', 'Jessica Brown'];
const urls = [
  'https://example.com/task1',
  'https://example.com/task2',
  'https://example.com/task3',
  'https://example.com/task4',
  'https://example.com/task5'
];
const assignedTo = ['Raj Verma', 'Sara Ali', 'John Wick', 'Maya Nair', 'Dev Mehta'];
const priorities: Priority[] = ['High', 'Medium', 'Low', 'High', 'Medium']; // Added more priorities to match length
const dueDates = ['30-11-2024', '10-11-2024', '25-12-2024', '15-01-2025', '31-01-2025'];
const values = ['$1,200', '$900', '$1,500', '$2,000', '$800'];

// Define the types for your style mapping objects using Record<KeyType, ValueType>
const statusStyles: Record<Status, string> = {
  'In-process': 'bg-[#FFF3D6] text-[#D29500] rounded-full text-center px-2 py-1',
  'Complete': 'bg-[#D3F2E3] text-[#2E8B57] rounded-full text-center px-2 py-1',
  'Blocked': 'bg-[#FFE1DE] text-[#C0392B] rounded-full text-center px-2 py-1',
  'Need to start': 'bg-[#E2E8F0] text-[#3C4F69] rounded-full text-center px-2 py-1'
};

const priorityStyles: Record<Priority, string> = {
  High: 'text-[#EF4D44] font-semibold',
  Medium: 'text-[#C29210] font-semibold',
  Low: 'text-[#1A8CFF] font-semibold'
};

const Excel: React.FC = () => {
  // Define a type for the common SVG icon props
  interface SvgIconProps {
    className?: string;
  }

  // Inline SVG for the 'Shape' placeholder
  const ShapeIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
    </svg>
  );

  // Inline SVGs for all react-icons
  const MdInsertLinkIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L10 3.46l-1.54 1.54"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L14 20.54l1.54-1.54"></path>
    </svg>
  );

  const LuRefreshCcwIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.5 2v6h-6"></path>
      <path d="M2.5 22v-6h6"></path>
      <path d="M22 11.5a10 10 0 0 1-20 0"></path>
      <path d="M2 12.5a10 10 0 0 1 20 0"></path>
    </svg>
  );

  const HiDotsHorizontalIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="19" cy="12" r="1"></circle>
      <circle cx="5" cy="12" r="1"></circle>
    </svg>
  );

  const FaPlusIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 4.5V19.5M4.5 12H19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const IoBagAddIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
      <line x1="12" y1="10" x2="12" y2="16"></line>
      <line x1="9" y1="13" x2="15" y2="13"></line>
    </svg>
  );

  const PiCalendarBlankIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  const FaChevronCircleDownIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.71 9.29l-3.59 3.59c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l2.89 2.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.59-3.59c-.39-.39-1.02-.39-1.41 0z"/>
    </svg>
  );

  const HiMiniUserIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"/>
    </svg>
  );

  const TbWorldIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );

  const BsPersonRaisedHandIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-2 14c-2.21 0-4 1.79-4 4v2h12v-2c0-2.21-1.79-4-4-4H10zm10-4h-2V7h2V4h-2V2h-2v2h-2v3h-2v5h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2z"/>
    </svg>
  );

  return (
    <div className="flex flex-col border border-gray-200 font-sans w-fit">
      <div className="flex">
        <div className="w-[32px] h-[32px] border border-gray-200 bg-white" />
        <div className="flex">
          <div className="flex items-center gap-4 w-[631px] h-[32px] px-4 py-2 bg-[#E2E2E2] border border-gray-200">
            <div className="flex items-center bg-white px-2 py-1 rounded-md gap-2">
              <MdInsertLinkIcon className="text-blue-900" />
              <p className="text-sm">Q3 Financial Overview</p>
            </div>
            <LuRefreshCcwIcon className="text-orange-500" />
          </div>
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 flex items-center justify-center bg-white">
          <TbWorldIcon className="text-gray-600" />
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 px-3 flex items-center gap-2 bg-[#D2E0D4]">
          <ShapeIcon className="text-gray-500" />
          <p>ABC</p>
          <HiDotsHorizontalIcon className="text-gray-500 ml-auto" />
        </div>
        <div className="w-[300px] h-[32px] border border-gray-200 flex items-center gap-2 px-3 bg-[#DCCFFC]">
          <ShapeIcon className="text-gray-500" />
          <p>Answer a question</p>
        </div>
        <div className="w-[150px] h-[32px] border border-gray-200 px-3 flex items-center gap-2 bg-[#FAC2AF]">
          <ShapeIcon className="text-gray-500" />
          <p>Extract</p>
          <HiDotsHorizontalIcon className="text-gray-500 ml-auto" />
        </div>
        <div className="w-[150px] h-[32px] border border-gray-200 flex items-center justify-center bg-[#EEEEEE]">
          <FaPlusIcon className="text-gray-500" />
        </div>
      </div>

      <div className="flex">
        <div className="w-[32px] h-[32px] border border-gray-200 flex items-center justify-center text-sm text-gray-500">#</div>
        <div className="w-[256px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#EEEEEE]">
          <IoBagAddIcon className="text-gray-500" /> Job Request
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#EEEEEE]">
          <PiCalendarBlankIcon className="text-gray-500" /> Schedule
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#EEEEEE]">
          <FaChevronCircleDownIcon className="text-gray-500" /> Status
        </div>
        <div className="w-[128px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#EEEEEE]">
          <HiMiniUserIcon className="text-gray-500" /> Submitter
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#EEEEEE]">
          <TbWorldIcon className="text-gray-500" /> URL
        </div>
        <div className="w-[124px] h-[32px] border border-gray-200 px-2 flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#E8F0E9]">
          <BsPersonRaisedHandIcon className="text-gray-500" /> Assigned
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
        
        </div>
      </div>

      {Array.from({ length: 17 }).map((_, i) => {
        const show = i < 5;
        const status = statuses[i % statuses.length];
        const priority = priorities[i % priorities.length];

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
              {show ? <a href={urls[i]} target="_blank" rel="noopener noreferrer">{urls[i]}</a> : ''}
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
             
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Excel;
