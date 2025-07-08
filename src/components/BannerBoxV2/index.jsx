
import { Link } from "react-router-dom"
import "../BannerBoxV2/style.css"
const BannerBoxV2 = (props) => {
  return (
   <div className="bannerBoxV2 !w-full rounded-md relative group overflow-hidden">
    <img src={props.image} alt="" className="w-full !rounded-md transition-all duration-150 group-hover:scale-105"/>
    <div className={`info absolute !p-5 top-0 ${props.info=== "left" ? "left-0" : "right-0"} w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2 ${props.info=== "left" ? "" : "!pl-12"} `}>
        <h2 className="text-[18px] font-[600]">Samsung Gear VR Camera</h2>
        <span className="text-[20px] font-[600] w-full text-[#ff5252]">$129.00</span>
        <div className="w-full">
        <Link to={"/"} className="text-[16px] font-[600] hover:underline link">SHOP NOW</Link>
        </div>
    </div>
   </div>
  )
}

export default BannerBoxV2
