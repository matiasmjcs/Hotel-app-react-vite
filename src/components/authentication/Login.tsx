import { Button, LinearProgress, TextField } from "@mui/material"
import { loginService } from "../../services/login"
import { useNavigate } from "react-router";
import { ILogin } from "../../interfaces/user";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const LoginComponent = () => {

    const navigate = useNavigate();
    const userInicialValue: ILogin = {
      email: '',
      password: '',
    }
    const [user, setUser] = useState<ILogin>(userInicialValue)
    const [loading, setLoading] = useState<boolean>(false)
    

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
          e.preventDefault()
          setLoading(true)
          const response = await loginService(user)
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
        <form onSubmit={login} className="w-5/6 max-w-[400px] min-h-[200px] my-2 mx-auto flex flex-col items-center justify-center gap-2 text-black p-2 rounded-lg shadow-md">

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

        {loading ?
          <LinearProgress color="success" />:
          <article className="p-4 ">
            <Button className="mt-4" type='submit' variant='contained'>Login</Button>
          </article>
        }
        <Toaster />
      </form>
    )
}