import React from 'react'

const Badge = (props) => {
  return (
    <span className={`!py-1 !px-4 capitalize inline-block rounded-full text-[11px] ${props.status === "pending" && "bg-[#ff5252] text-white"}  ${props.status === "confirm" && "bg-green-700 text-white"}  ${props.status === "delivered" && "bg-green-700 text-white"}`} >{props.status}</span>
  )
}

export default Badge
