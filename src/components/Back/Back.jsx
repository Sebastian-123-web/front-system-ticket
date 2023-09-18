import { Link } from "react-router-dom"

export const Back = () => {
  return (
    <div className="col-span-1 row-span-1 text-[#9AAFC7] flex justify-between">
        <Link to={-1}><ion-icon name="arrow-back-outline"></ion-icon> Atras</Link>
        <div>
            <button className="bg-[#991b1b] py-2 px-3 rounded-lg text-white"><ion-icon name="lock-closed-outline"></ion-icon></button>
        </div>
    </div>
  )
}
