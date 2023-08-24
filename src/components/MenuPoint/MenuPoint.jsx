export const MenuPoint = () => {
    return(
        <div className="cursor-pointer w-10 h-10 rounded-lg hover:bg-slate-200 flex flex-col justify-center items-center" onClick={() => alert('Menu de puntos')}>
            <div className="w-1 h-1 rounded-lg bg-black mb-1"></div>
            <div className="w-1 h-1 rounded-lg bg-black mb-1"></div>
            <div className="w-1 h-1 rounded-lg bg-black"></div>
        </div>
    )
}