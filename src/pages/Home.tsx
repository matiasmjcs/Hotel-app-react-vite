import { Loginsignup } from "../components/login-signup"

export const Home = () => {
  return (
    <main className="p-2 flex flex-col md:flex-row w-full min-h-[600px] justify-center justify-items-center items-center">
      <img className="w-[90%] h-full max-w-xl rounded-md" src="/src/assets/img-hotel.png"/>
      <Loginsignup/>
    </main>
  )
}
