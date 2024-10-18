import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function VerifyEmail() {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]); // track refrences
    const navigate = useNavigate();

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    const handleChange = (index, value) => {
        const newCode = [...code];
        
        // hanle pasted code
        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);

            // focus on the last non-empty input or the first empty one
            const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
            const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
            inputRefs.current[focusIndex].focus();
        } else {
            newCode[index] = value;
            setCode(newCode);

            // move focus to the next input field if value is entered
            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // get code and make it a string
        const verificationCode = code.join("");
        try {
            const url = 'http://localhost:4000/api/auth/verify-email'
            await axios.post(url, { code });

            toast.success('Verification code submitted');
            navigate('/auth/login');
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    };

    // Auto submit when all fields are filled
	useEffect(() => {
		if (code.every((digit) => digit !== "")) {
			handleSubmit(new Event("submit"));
		}
	}, [code]);


  return (
    <div className='min-h-screen flex justify-items-center items-center place-content-center'>
        <div className='max-w-md bg-gray-400 w-full rounded-2xl shadow-xl overflow-hidden backdrop-filter backdrop-blur-xl bg-opacity-50 '>
            <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <h2 className="text-center text-3xl font-bold mb-5 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                    Verify Email
                </h2>
                <p className="text-center text-gray-300 mb-5"> Enter  the digit codes sent to your email address.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex justify-between">
                        {code.map((digit, index) => (
                            <input 
                                type="text"
                                key={index}
                                maxLength="6"
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                ref={(el) => (inputRefs.current[index] = el)}

                                className='w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-500 rounded-lg focus:border-gray-500 focus:outline-none'
                            />
                        ))}
                    </div>

                    <div>
                        <button 
                        type='submit'
                            className='w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50'
                            // disabled={isLoading || code.some((digit) => !digit)}
                        >
                            {/* {isLoading ? "Verifying..." : "Verify Email"} */}
                            Verify Email
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default VerifyEmail