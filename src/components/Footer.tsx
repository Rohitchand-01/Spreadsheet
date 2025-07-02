import { FaPlus } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 z-50">
      <div className="flex gap-6 items-center px-1 h-[32px]">
        <div className="w-[10px]" />

        <div className="bg-[#E8F0E9] w-[124px] h-[32px] p-2 text-[#3a4f3c] font-semibold border-t border-[#3a4f3c]">
          <p>All Order</p>
        </div>

        <div className="w-[124px] h-[32px] p-2 text-gray-500 font-semibold">
          <p>Pending</p>
        </div>

        <div className="w-[124px] h-[32px] p-2 text-gray-500 font-semibold">
          <p>Reviewed</p>
        </div>

        <div className="w-[124px] h-[32px] p-2 text-gray-500 font-semibold">
          <p>Arrived</p>
        </div>

        <div className="w-[124px] h-[32px] p-2 text-gray-500 font-semibold flex items-center">
          <FaPlus className="mt-[2px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
