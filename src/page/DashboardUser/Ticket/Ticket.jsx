import { StatusProgressBar } from "./Components/StatusProgressBar"
import { News } from "./Components/News"
import { GeneralData } from "./Components/GeneralData"
import { Description } from "./Components/Description"
import { Chat } from "./Components/Chat"
import { ImageView } from "./Components/ImageView"
import { Back } from "../../../components/Back/Back"

export const Ticket = () => {
    return (
        <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-6">
            <div className="col-span-9 row-span-2 grid grid-rows-3">
                <Back />
                <StatusProgressBar />
            </div>

            <News />

            <GeneralData />
            
            <Description />

            <Chat />
            
            <ImageView />
        </div>
    )
}
