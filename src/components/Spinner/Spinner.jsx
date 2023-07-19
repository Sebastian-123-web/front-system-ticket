import spin from "../../assets/spin.svg"

export const Spinner = () => {
    return (
        <div className="animate-spin w-12">
            <img src={spin} alt="" />
        </div>
    )
}