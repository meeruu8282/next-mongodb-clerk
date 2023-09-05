export default function Pricing() {
  return (
    <div className=" justify-center items-center ">
      <div className="bg-blue-500 flex  justify-center">
        <div className="w-[921px] h-[108px] flex text-center ">
          <div className=" flex-row w-[838px] h-[52px] font-[Poppins] ">
            <div className=" text-center text-3xl">
              <h1 className=" justify-end font-semibold inline-block bg-yellow-500">
                Choose Your Plan
              </h1>
            </div>
            <div className="w-[921px] h-[32px] opacity-50 ">
              <p className="font-[Poppins] font-normal inline-block mt-4">
                Choose the plan that suits your needs and subscribe to the
                Carelyo platform
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  flex  mt-[414px] ml-[125px]  gap-[8px] w-[1190px] h-[463px] bg-green-300">
        <div className="w-[391px] h-[463px] rounded-[25px] bg-red-400">
          <div className="w-[333.98px] h-[413.09px] mt-[27.61px] ml-[29.23px] justify-between bg-red-200">
            <div className="w-[333.98px] h-[249px] gap-[10px] bg-blue-500">
              <div className="w-[333.98px] h-[32px] bg-yellow-400">
                <div className="w-[224px h-[26px] text-[#45AC60]">
                  Independent Doctor
                </div>
                <div className="w-[32px] h-[32px] rounded-md border-[2px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
