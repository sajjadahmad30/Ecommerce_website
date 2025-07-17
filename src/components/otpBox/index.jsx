import { Button } from '@mui/material';
import React, { useRef, useState } from 'react';

const OtpBox = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus next input if exists
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '') {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      }
    }
  };

    const verifyOTP = (e)=>{
       e.preventDefault()
       alert(otp)
    }


  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d{1,6}$/.test(paste)) {
      const newOtp = paste.split('').concat(Array(6).fill('')).slice(0, 6);
      setOtp(newOtp);
      newOtp.forEach((digit, idx) => {
        if (inputRefs.current[idx]) {
          inputRefs.current[idx].value = digit;
        }
      });
      if (inputRefs.current[paste.length - 1]) {
        inputRefs.current[paste.length - 1].focus();
      }
    }
  };

  const getOtpValue = () => {
    alert("Entered OTP: " + otp.join(''));
  };

  return (
    <>
      <div className="flex gap-2 items-center justify-center !mt-4" onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="w-[45px] h-[45px] text-center border border-gray-400 rounded-md text-[16px]"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            
          />
        ))}
      </div>
       <form onSubmit={verifyOTP}>
        <div className="flex items-center justify-center !mt-5 !px-1">
            <Button type='submit' className='btn-org btn-lg w-full'>Verify OTP</Button>
        </div>   
       </form>
    </>
  );
};

export default OtpBox;
