import { Header } from "../components/Header"
import { Loginsignup } from "../components/LoginSignup"

export const Home = () => {
  return (
    <body className="w-full">
      <Header/>
    <main className="p-2 m-3 flex flex-col w-full justify-center justify-items-center items-center">
      <Loginsignup/>
    </main>
    </body>
  )
}
