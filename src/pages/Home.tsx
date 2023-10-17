import { Header } from "../components/Header"

export const Home = () => {
  return (
    <body className="w-full">
      <Header />
      <main className="flex flex-col w-full justify-center justify-items-center items-center">
        <hr className="w-5/6 justify-self-center mt-10"/>
        <section className="grid items-start w-full h-[400px] mt-5 ">
          <h1 className="text-4xl font-bold px-2 text-center text-slate-600">Welcome to Hotel Alhambra del Golfo</h1>
          <p className="text-base font-medium text-slate-600 px-4 w-5/6 justify-self-center text-justify">
            Welcome to Alhambra del Golfo, your gateway to luxury and excellence in hospitality!
             We are a distinguished hotel chain, spread across exquisite destinations worldwide. 
             On our website, you'll find the gateway to the finest available rooms. With a simple click, 
             you can reserve the opulence and comfort you deserve. Explore our options, choose your perfect 
             getaway, and secure your place in absolute luxury. Your next unforgettable experience starts here!
          </p>
        <hr className="w-5/6 justify-self-center mb-10"/>
        </section>
      </main>
    </body>
  )
}
