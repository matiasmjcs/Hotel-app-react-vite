import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const Loginsignup = () => {
    return(
        <section className="flex w-full h-full flex-col justify-center justify-items-center">
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