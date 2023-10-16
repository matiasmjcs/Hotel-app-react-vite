import { FormHeader } from "./formHeader"

export const Header = () => {
    return (
        <header className="w-full p-2 h-[700px] flex flex-col header ">
            <h1 className="text-4xl relative top-20 font-bold p-2 text-start mt-3 text-slate-600">
               <span className="text-white">Your Luxury Seaside Escape.</span> 
            </h1>
            <FormHeader/>
        </header>
    )
}