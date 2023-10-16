import { Button, LinearProgress, TextField } from "@mui/material"
import { useState } from "react";
import { ISignUp } from "../../interfaces/user";
import { useNavigate } from "react-router";
import { signUpService } from "../../services/signUp";
import toast, { Toaster } from "react-hot-toast";

export const SignUpComponent = () => {
    const navigate = useNavigate();
    const userInicialValue: ISignUp = {
      email: '',
      password: '',
      username: ''
    }
    const [user, setUser] = useState<ISignUp>(userInicialValue)
    const [loading, setLoading] = useState<boolean>(false)
  
    const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault()
        setLoading(true)
        const response = await signUpService(user)
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
        <form onSubmit={signUp} className="w-5/6 max-w-[400px] min-h-[200px] my-2 mx-auto flex flex-col items-center justify-center gap-2 text-black p-2 rounded-lg shadow-md">
        <TextField
          type="text"
          className="w-5/6"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })} id="username" label="username" variant="standard" />

        <TextField
          type="text"
          className="w-5/6"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })} id="email" label="email" variant="standard" />
        <TextField
          type="password"
          className="w-5/6"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })} id="password" label="password" variant="standard" />

        <Toaster />
        {loading ?
          <LinearProgress color="success" />
          :
          <article className="p-4 ">
          <Button type='submit' variant='contained'>Sign up</Button>
        </article>
        }
      </form>
    )
}