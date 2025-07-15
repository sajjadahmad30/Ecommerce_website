import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';


const Register = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <section className='section !py-10'>
        <div className="container">
            <div className="card shadow-md w-[600px] !m-auto !rounded-md bg-white !p-5 !px-10">
                <h3 className='!text-[18px] !text-black !font-[600] !text-center'>Register with your new account</h3>

                <form action="" className='w-full !mt-5'>
                    <div className="form-group w-full !mb-5 flex gap-2">
                         <TextField id="name" type='text' label="Full Name *" variant="standard" className='w-full'/>
                         <TextField id="phonNo" type='number' label="Phone No *" variant="standard" className='w-[60%]'/>
                    </div>
                    <div className="form-group w-full !mb-5">
                         <TextField id="email" type='email' label="Email Id *" variant="standard" className='w-full'/>
                    </div>
                    <div className="form-group w-full !mb-5 relative">
                         <TextField id="password" type={isShowPassword===false ? 'password' : 'text'} label="Password *" variant="standard" className='w-full'/>
                         <Button className='!absolute !rounded-full !top-[10px] !right-[10px] !z-50 !w-[35px] !h-[35px]  !min-w-[35px] !text-black' onClick={()=> setIsShowPassword(!isShowPassword)}>
                            {
                                isShowPassword === false ? <IoMdEye className='text-[20px] !opacity-75'/> :
                                <IoMdEyeOff className='text-[20px] !opacity-75'/>
                            }
                            </Button>
                    </div>

                    
                  

                    <div className="flex items-center w-full !mt-3 !mb-3">
                        <Button className='btn-org btn-lg w-full'>Register</Button>
                    </div>

                    <p className='text-center'>Already have an account? <Link className='link text-[14px] font-[600] !text-[#ff5252]' to="/login">Login</Link></p>

                    <p className='text-center !font-[500]'>Or Continue with social account</p>

                    <Button className='flex gap-2 w-full !bg-[#f1f1f1] btn-lg !text-black'>
                        <FcGoogle className='!text-[20px]'/> Sign In with Google
                    </Button>

                </form>
            </div>
        </div>
    </section>
  )
}

export default Register
