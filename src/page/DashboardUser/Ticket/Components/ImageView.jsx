import Swal from 'sweetalert2/dist/sweetalert2.js'

export const ImageView = () => {

    const imgs = [
        { "img" : "https://mtotec.weebly.com/uploads/3/7/1/7/37171727/2699903.jpg?362" },
        { "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bsodwindows10.png/800px-Bsodwindows10.png"},
        { "img" : "https://miracomosehace.com/wp-content/uploads/mch/simbolo-sistema-0xc0000428_9672.jpg"},
        { "img" : "https://i.ytimg.com/vi/9dw71fZsww8/maxresdefault.jpg"},
    ]

    const ShowImage = (img) => {
        Swal.fire({
            imageUrl: img,
            imageWidth: "600px",
            imageAlt: 'A tall image'
        })
    }

    return (
        <div className="col-span-5 row-span-2 bg-white rounded-lg border border-[#E0EDFF] p-5 inline-flex flex-wrap justify-between items-center">
            {
                imgs.length > 0 && imgs.map( (img,i) => (
                    <div onClick={() => ShowImage(img.img)} className="w-24 h-24 flex items-center overflow-hidden" key={i}>
                        <img
                            src={ img.img }
                            alt=""
                        />
                    </div>
                ) )
            }
        </div>
    )
}
