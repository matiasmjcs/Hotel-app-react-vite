import { Loginsignup } from "../components/login-signup"

export const Home = () => {
  return (
    <>
    <header>
      <h1 className="text-xl font-bold p-2 text-center mx-2 mt-3 text-slate-600">
      Welcome to Alhambra of the Gulf Hotel, Your Luxury Destination
      </h1>
    </header>
    <main className="p-2 flex flex-col w-full justify-center justify-items-center items-center">
      <img className="w-[90%] h-full max-w-xl rounded-md" src="/src/assets/img-hotel.png"/>
      <Loginsignup/>
    </main>
    </>
  )
}
