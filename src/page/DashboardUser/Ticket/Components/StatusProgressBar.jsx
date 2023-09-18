import { useState } from "react"

export const StatusProgressBar = () => {

  const [prog,setProg] = useState(0)

  const progress = (p) => {
    if(p=="r"){
      setProg(prog-25)
    }else if(p=="s"){
      setProg(prog+25)
    }
  }

  return (
    <div className="col-span-1 row-span-2 flex flex-col items-center bg-white rounded-lg border border-[#E0EDFF] p-5">
      <div className="w-[85%] h-2 bg-[#E7E9EC] rounded-xl mb-20">
        <div className={`bg-black w-[${prog}%] h-2 relative rounded-xl duration-700`}>
            <div className="rounded-xl bg-black w-6 h-6 absolute left-[100%] translate-x-[-50%] top-[-8px]">
              <div className="bg-black text-white absolute w-28 text-center left-[-44px] bottom-[-50px] p-1 rounded-lg">
                <div className="absolute w-0 h-0 border-r-[5px] border-l-[5px] border-b-[10px] border-b-black border-solid border-r-transparent border-l-transparent bottom-[32px] right-[50%] translate-x-[50%]"></div>
                En Proceso
              </div>
            </div>
        </div>
      </div>
      <button onClick={() => progress("r")} className=" bg-red-800 text-white">atras</button>
      <button onClick={() => progress("s")} className=" bg-red-800 text-white">siguiente</button>
    </div>
  )
}
