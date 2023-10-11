import { Button, LinearProgress, TextField } from '@mui/material';
import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

interface IUser {
  email: string
  password: string
  username: string
}

export const SignUp = () => {
  const navigate = useNavigate();
  const userInicialValue: IUser = {
    email: '',
    password: '',
    username: ''
  }
  const [user, setUser] = useState<IUser>(userInicialValue)
  const [loading, setLoading] = useState<boolean>(false)

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setLoading(true)
      const response = await axios.post('http://localhost:3000/api/v1/user/signup', user)
      console.log(response)
      toast.success('Successfully SingUp!')
      setUser(userInicialValue)
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <main className="p-4 grid justify-items-center">
      <h4 className='text-2xl text-slate-500 font-bold text-center'>SignUp</h4>
      <form onSubmit={signUp} className="max-w-md my-2 mx-auto flex flex-col gap-2 md:w-[500px] text-black p-6 rounded-lg shadow-md">
        <TextField
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })} id="username" label="username" variant="standard" />

        <TextField
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })} id="email" label="email" variant="standard" />
        <TextField
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })} id="password" label="password" variant="standard" />

        <Toaster />
        {loading ?
          <LinearProgress color="success" />
          :
          <Button type='submit' variant='contained'>Sign up</Button>
        }
      </form>
      <a onClick={() => navigate('/login')} className='cursor-pointer p-2 text-black ' >Already have an account? Log in here</a>
      <a onClick={() => navigate('/')} className='cursor-pointer p-2 text-black ' >Home</a>
    </main>

  )
}
