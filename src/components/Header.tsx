const Header = () => {
  // Define a type for the common SVG icon props
  interface SvgIconProps {
    className?: string;
  }

  // Inline SVG for PiGreaterThanThin
  const PiGreaterThanThinIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18l6-6-6-6"></path>
    </svg>
  );

  // Inline SVG for HiDotsHorizontal
  const HiDotsHorizontalIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="19" cy="12" r="1"></circle>
      <circle cx="5" cy="12" r="1"></circle>
    </svg>
  );

  // Inline SVG for CiSearch
  const CiSearchIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  // Inline SVG for GoBell
  const GoBellIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  );

  // Inline SVG for the 'Shape' placeholder (from previous context)
  const ShapeIcon: React.FC<SvgIconProps> = ({ className }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
    </svg>
  );


  return (
    <div className='flex justify-between items-center px-2 py-2 bg-white border-b border-gray-200'>
      {/* Left Navigation */}
      <div className='flex items-center gap-4'>
        <ShapeIcon className='w-4 h-4 text-gray-500' /> {/* Using inline SVG */}

        <div className='flex items-center gap-2 text-sm text-gray-500 font-medium'>
          <p>Workspace</p>
          <PiGreaterThanThinIcon className='w-3 h-3' /> {/* Using inline SVG */}
        </div>

        <div className='flex items-center gap-2 text-sm text-gray-500 font-medium'>
          <p>Folder 2</p>
          <PiGreaterThanThinIcon className='w-3 h-3' /> {/* Using inline SVG */}
        </div>

        <p className='font-semibold text-sm text-gray-800'>Spreadsheet 3</p>

        <HiDotsHorizontalIcon className='text-gray-400 w-4 h-4 cursor-pointer hover:text-gray-600' /> {/* Using inline SVG */}
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-4'>
        <div className='relative'>
          <input
            type='search'
            placeholder='Search within sheet'
            className='pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none'
          />
          <CiSearchIcon className='absolute left-3 top-2.5 text-gray-400 w-4 h-4' /> {/* Using inline SVG */}
        </div>

        <div className='relative'>
          <GoBellIcon className='text-gray-500 w-5 h-5 cursor-pointer hover:text-blue-500' /> {/* Using inline SVG */}
          <span className='absolute -top-1 right-[-2px] bg-[#4B6A4F] text-white text-[10px] px-1 font-bold rounded-full shadow-sm'>
            2
          </span>
        </div>
        <img
          src="https://placehold.co/40x40/cccccc/ffffff?text=User" // Placeholder for User.png
          alt="User Avatar"
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
  );
};

export default Header;
