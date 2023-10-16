import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
export const FormHeader = () => {
    return (
        <>
            <h2 className="text-xl font-bold p-2 text-white relative top-24">Choose your destination</h2>
            <form className="grid py-3 grid-cols-1 grid-rows-4 md:flex md:h-[50px] justify-items-center p-2 w-full  relative top-28 gap-3 transparent rounded-lg justify-between">
                <article className='flex flex-row gap-2 w-5/6 md:w-[150px] my-3 md:my-0'>
                    <label className='flex items-center' htmlFor="search">
                        <SearchIcon className="text-slate-600" />
                    </label>
                    <input id="search" placeholder="Search" className="bg-transparent focus:outline-none" type="text" />
                </article>
                    <input id="checkin" value="check in" className="rounded-xl px-2 w-5/6 md:w-[150px] text-black " type="date" />

                    <input id="checkout" value="check out" className="rounded-xl px-2 w-5/6 md:w-[150px] text-black " type="date" />

                <article className='flex flex-row gap-2 items-center w-5/6 md:w-[150px]'>
                    <PersonIcon className="text-slate-600" />
                    <select className="bg-transparent px-2">
                        <option className='text-slate-600' disabled selected>1 room 2 adults</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </article>
                <button className='md:bg-white w-5/6 md:w-[130px] py-2 md:p-0 bg-blue-600 text-white md:text-blue-600 font-semibold rounded-2xl justify-self-center md:justify-self-end'>Search</button>
            </form>
        </>
    )
}