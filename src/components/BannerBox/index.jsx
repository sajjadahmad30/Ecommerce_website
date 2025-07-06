import React from 'react'
import { Link } from 'react-router-dom'

const BannerBox = (props) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group">
    <Link to={"/"}>
    <img src={props.img} className="w-full h-[200px] transition-all group-hover:rotate-1 group-hover:scale-110" />
    </Link>
</div>
  )
}

export default BannerBox
