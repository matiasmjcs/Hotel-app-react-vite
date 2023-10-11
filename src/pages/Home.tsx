import { Link } from "react-router-dom"
import "../styles/home.css"
import Button from '@mui/material/Button';

export const Home = () => {
  return (
    <main className="p-2 flex w-full min-h-[600px] justify-center justify-items-center items-center">
      <article className="ml-8 min-w-[300px] max-w-xl min-h-[300px] md:h-[440px] md:w-[800px] image-hotel">

      </article>
      <section className="flex w-full h-full flex-col justify-center justify-items-center">
        <section className='p-2 flex gap-2 w-full justify-center'>
          <Link to="/login">
            <Button variant="contained">
            Login
            </Button>
          </Link>
          <Link  to="/signup">
            <Button variant="contained">
            signup
            </Button>
          </Link>
        </section>
      </section>
    </main>
  )
}
