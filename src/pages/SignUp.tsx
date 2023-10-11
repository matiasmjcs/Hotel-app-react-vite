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
      const response = await axios.post('http://localhost:3000/users/signup', user)
      console.log(response)
      toast.success('Successfully SingUp!')
      setUser(userInicialValue)
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <main className="p-4 t text-black dark:text-white grid justify-items-center">
       <h4 className='text-2xl white:text-black font-bold text-center'>SignUp</h4>
      <form onSubmit={signUp} className="max-w-md mx-auto dark:text-white dark:bg-slate-950 bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="username" className="block font-semibold mb-1">username</label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="w-full border dark:bg-slate-500 dark:border-black border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="email" className="block font-semibold mb-1">email</label>
        <input
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full border dark:bg-slate-500 dark:border-black border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="password" className="block font-semibold mb-1">password</label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full border dark:bg-slate-500 dark:border-black border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
      <Toaster />
      {loading ? <span>loading...</span>:
      <button className="w-full bg-blue-500 text-white font-semibold py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">SignUp</button>
      }
      </form>
      <a onClick={()=>navigate('/login')} className='cursor-pointer p-2 text-black dark:text-white text-center' >Already have an account? Log in here</a>
      <a onClick={()=>navigate('/')} className='cursor-pointer p-2 text-black dark:text-white text-center' >Home</a>
    </main>

  )
}
