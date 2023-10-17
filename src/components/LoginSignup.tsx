import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const Loginsignup = () => {
    return(
        <section className="flex w-full h-full flex-col justify-center justify-items-center my-[25px]">
            <section>
                <h2 className="text-lg font-semibold p-2 text-center text-slate-600">Don't miss out on exclusive offers. Sign up today.</h2>
            </section>
        <section className='p-2 flex gap-2 w-full justify-center'>
          <Link to="/login">
            <Button variant="contained">
            Login
            </Button>
          </Link>
          <Link  to="/signup">
            <Button variant="contained">
            sign up
            </Button>
          </Link>
        </section>
      </section>
    )
}