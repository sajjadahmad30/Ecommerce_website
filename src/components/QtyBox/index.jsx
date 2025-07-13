import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const QtyBox = () => {
    const [qtyValue, setQtyValue] = useState(1);

    const plus = ()=>{
        setQtyValue(qtyValue+1);
    }
    const minus = ()=>{
      if(qtyValue > 1) {
        setQtyValue(qtyValue-1);
      }else{
        setQtyValue(1);
      }
    }
  return (
    <div className="qtyBox flex items-center relative">
        <input type="number" name="" className="w-full border-1 border-[rgba(0,0,0,0.2)] !pl-5 !h-[40px] !p-2 text-[15px] focus:outline-none rounded-md" value={qtyValue}/>
        <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50">
             <Button className='!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] hover:!bg-[#f1f1f1] !rounded-none' onClick={plus}><FaAngleUp className='!text-[12px] opacity-55'/></Button>
             <Button className='!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] hover:!bg-[#f1f1f1] !rounded-none' onClick={minus}><FaAngleDown className='!text-[12px] opacity-55'/></Button>
        </div>


      
    </div>
  )
}

export default QtyBox
