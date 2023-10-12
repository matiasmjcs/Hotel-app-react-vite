import React, { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { Button, LinearProgress, TextField } from '@mui/material'
interface IUser {
  email: string
  password: string
}

export const Login = () => {
  const navigate = useNavigate();
  const userInicialValue: IUser = {
    email: '',
    password: '',
  }
  const [user, setUser] = useState<IUser>(userInicialValue)
  const [loading, setLoading] = useState<boolean>(false)
  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setLoading(true)
      const response = await axios.post('https://hotel-app-react-vite.vercel.app/api/v1/user/login', user)
      toast.success('Successfully Login!')
      console.log(response)
      setUser(userInicialValue)
      setTimeout(() => {
        navigate('/profile');
      }, 1000)
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <main className="p-4 text-black grid justify-items-center">
      <h4 className='text-2xl text-slate-500 font-bold text-center'>Login</h4>
      <form onSubmit={login} className="max-w-md my-2 mx-auto flex flex-col gap-2 md:w-[500px] text-black p-6 rounded-lg shadow-md">

        <TextField
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })} id="email" label="email" variant="standard" />
        <TextField
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })} id="password" label="password" variant="standard" />

        {loading ?
          <LinearProgress color="success" />:
          <Button type='submit' variant='contained'>Login</Button>
        }
      </form>
      <a onClick={() => navigate('/signup')} className='cursor-pointer p-2 text-black text-center' >Don't have an account? Sign up here</a>
      <a onClick={() => navigate('/')} className='cursor-pointer p-2 text-black text-center' >Home</a>
      <Toaster />
    </main>

  )
}