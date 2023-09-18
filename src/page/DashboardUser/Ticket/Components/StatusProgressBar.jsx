
export const StatusProgressBar = () => {
  return (
    <div className="col-span-1 row-span-2 flex justify-center bg-white rounded-lg border border-[#E0EDFF] p-5">
        <div className="bg-black  w-[85%] h-2 relative rounded-xl">
            <div className="rounded-xl bg-black w-6 h-6 absolute top-[-8px] left-[0%] translate-x-[24px] ">
              <div className="bg-black text-white absolute w-28 text-center left-[-44px] bottom-[-50px] p-1 rounded-lg">
                <div className="absolute w-0 h-0 border-r-[5px] border-l-[5px] border-b-[10px] border-b-black border-solid border-r-transparent border-l-transparent bottom-[32px] right-[50%] translate-x-[50%]"></div>
                En Proceso
              </div>
            </div>
            {/* before:absolute before:w-0 before:h-0 before:border-b-orange-600 before:text-transparent before:border-r-[10px] before:order-l-[10px] before:border-b-[20px] before:border-solid before:order-r-transparent before:border-l-transparent */}
        </div>
    </div>
  )
}
