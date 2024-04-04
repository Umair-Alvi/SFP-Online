import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import {useForm} from "react-hook-form"
import Input from '../component/Input'
import Button from '../component/button/Button'


const Forget = () => {
    const navigate = useNavigate()
    
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
  return (
    <>
    <div className='flex items-center justify-center w-full  bg-ocean-500'>
        <div className={` max-w-lg bg-white rounded-3xl p-10 border border-black/10 updated-form position-absolute top-35 start-50 translate-middle`}>
       
        <h2 class="card-title text-center updated-header">Request Password Reset</h2>
        <p className='card-text updated-subtitle'>
        Enter your email for password reset.
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form  className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="name@sfp.co.za"
                type="email"
                className=""
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                
                <Link to="/login" className='inline-block mb-1 pl-1 form-label updated-email'>Login ?</Link>
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
      
    </>
  )
}

export default Forget
