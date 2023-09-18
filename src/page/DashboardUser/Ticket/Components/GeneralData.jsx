
export const GeneralData = () => {
  return (
    <div className="col-span-5 row-span-2 bg-white rounded-lg border border-[#E0EDFF] p-5 flex flex-row justify-between">
        <div className="flex flex-col justify-between">
            <p className="font-bold text-2xl">Ticket #12</p>
            <p>No puedo ingresar al SIDIGE</p>
            <p>Anydesk: <span className="font-bold text-[#991b1b]">482632780</span></p>
        </div>
        <div className="flex flex-col justify-between">
            <div className="flex flex-row items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-800 mr-2"></div>
                Urgente
            </div>

            <div className="bg-black rounded-lg p-1">
                <p className="text-4xl text-center text-white">
                    <ion-icon name="desktop-outline"></ion-icon>
                </p>
            </div>
        </div>
    </div>
  )
}
