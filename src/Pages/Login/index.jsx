import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';


const Login = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <section className='section !py-10'>
        <div className="container">
            <div className="card shadow-md w-[500px] !m-auto !rounded-md bg-white !p-5 !px-10">
                <h3 className='!text-[18px] !text-black !font-[600] !text-center'>Login to your account</h3>

                <form action="" className='w-full !mt-5'>
                    <div className="form-group w-full !mb-5 relative">
                         <TextField id="email" type='email' label="Email Id *" variant="outlined" className='w-full'/>
                    </div>
                    <div className="form-group w-full !mb-5 relative">
                         <TextField id="password" type={isShowPassword===false ? 'password' : 'text'} label="Password *" variant="outlined" className='w-full'/>
                         <Button className='!absolute !rounded-full !top-[10px] !right-[10px] !z-50 !w-[35px] !h-[35px]  !min-w-[35px] !text-black' onClick={()=> setIsShowPassword(!isShowPassword)}>
                            {
                                isShowPassword === false ? <IoMdEye className='text-[20px] !opacity-75'/> :
                                <IoMdEyeOff className='text-[20px] !opacity-75'/>
                            }
                            </Button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login
