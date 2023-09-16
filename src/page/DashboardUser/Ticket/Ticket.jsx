import { Link } from "react-router-dom"

export const Ticket = () => {
    return (
        <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-6">
            <div className="col-span-9 row-span-2 grid grid-rows-3">
                <div className="col-span-1 row-span-1 text-[#9AAFC7] flex justify-between">
                    <Link to={-1}><ion-icon name="arrow-back-outline"></ion-icon> Atras</Link>
                    <div>
                        <button className="bg-[#991b1b] py-2 px-3 rounded-lg text-white"><ion-icon name="lock-closed-outline"></ion-icon></button>
                    </div>
                </div>
                <div className="col-span-1 row-span-2 bg-white rounded-lg border border-[#E0EDFF] p-5">
                    <div>
                        <div>
                            gaaaaaaaaaaaaaaaaaaaaaa
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-3 row-span-2 bg-white rounded-lg border border-[#E0EDFF] p-5">Noticias</div>


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
            <div className="col-span-4 row-span-4 bg-white rounded-lg border border-[#E0EDFF] p-5">
                <p className="font-bold mb-3">Descripcion</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae asperiores saepe ratione at molestiae magnam delectus esse officiis cum aliquam, quos modi, corrupti perferendis cumque architecto suscipit, eius iusto pariatur!</p>
            </div>
            <div className="col-span-3 row-span-4 bg-white rounded-lg border border-[#E0EDFF] p-5">
                <div className="flex items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#31A24C] mr-2"></div>
                    <p className="font-bold">Chat</p>
                </div>
                <div>Aqui van los mensajes del chat</div>
            </div>
            <div className="col-span-5 row-span-2 bg-white rounded-lg border border-[#E0EDFF] p-5 flex justify-between items-center">
                <div className="w-28 h-28 truncate flex items-center">
                    <img 
                        src="https://mtotec.weebly.com/uploads/3/7/1/7/37171727/2699903.jpg?362"
                        alt="" 
                        />
                </div>
                <div className="w-28 h-28 truncate flex items-center">
                    <img 
                        src="https://mtotec.weebly.com/uploads/3/7/1/7/37171727/2699903.jpg?362"
                        alt="" 
                        />
                </div>
                <div className="w-28 h-28 truncate flex items-center">
                    <img 
                        src="https://mtotec.weebly.com/uploads/3/7/1/7/37171727/2699903.jpg?362"
                        alt="" 
                        />
                </div>
            </div>
        </div>
    )
}
