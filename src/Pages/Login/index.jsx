import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import { MyContext } from '../../App';


const Login = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [formFields, setFormFields] = useState({
        email:"",
        password:"",
    });

    const context = useContext(MyContext);

    const history = useNavigate();

    const forgotPasswrod=()=>{
         history('/verify');
         context.openAlertBox("success", "OTP Send!")
    }
  return (
    <section className='section !py-10'>
        <div className="container">
            <div className="card shadow-md w-[400px] !m-auto !rounded-md bg-white !p-5 !px-10">
                <h3 className='!text-[18px] !text-black !font-[600] !text-center'>Login to your account</h3>

                <form action="" className='w-full !mt-5'>
                    <div className="form-group w-full !mb-5 relative">
                         <TextField id="email" type='email' label="Email Id *" variant="outlined" className='w-full' name='email'/>
                    </div>
                    <div className="form-group w-full !mb-5 relative">
                         <TextField id="password" type={isShowPassword===false ? 'password' : 'text'} label="Password *" variant="outlined" className='w-full' name='password'/>
                         <Button  className='!absolute !rounded-full !top-[10px] !right-[10px] !z-50 !w-[35px] !h-[35px]  !min-w-[35px] !text-black' onClick={()=> setIsShowPassword(!isShowPassword)}>
                            {
                                isShowPassword === false ? <IoMdEye className='text-[20px] !opacity-75'/> :
                                <IoMdEyeOff className='text-[20px] !opacity-75'/>
                            }
                            </Button>
                    </div>

                    
                    <a className='link text-[14px] cursor-pointer font-[600]' 
                    onClick={forgotPasswrod}>Forgot Password?</a>


                    <div className="flex items-center w-full !mt-3 !mb-3">
                        <Button className='btn-org btn-lg w-full'>Login</Button>
                    </div>

                    <p className='text-center'>Not Registered? <Link className='link text-[14px] font-[600] !text-[#ff5252]' to="/register">Sign Up</Link></p>

                    <p className='text-center !font-[500]'>Or Continue with social account</p>

                    <Button className='flex gap-2 w-full !bg-[#f1f1f1] btn-lg !text-black'>
                        <FcGoogle className='!text-[20px]'/> Login with Google
                    </Button>

                </form>
            </div>
        </div>
    </section>
  )
}

export default Login
