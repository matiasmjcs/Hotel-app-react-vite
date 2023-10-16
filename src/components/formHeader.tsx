import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
export const FormHeader = () => {
    return (
        <form className="grid grid-cols-1 grid-rows-4 md:flex md:h-[50px] justify-items-center p-2 w-full  relative top-28 gap-1 transparent rounded-lg justify-between">
            <article className='flex flex-row gap-2 w-[200px] md:w-[150px]'>
                <label className='flex items-center' htmlFor="search">
                    <SearchIcon className="text-slate-600" />
                </label>
                <input id="search" placeholder="Search" className="bg-transparent focus:outline-none" type="text" />
            </article>
            <input id="checkin" value="2024-01-01" className="transparent rounded-xl text-black px-2 w-[200px] md:w-[150px]" type="date" />
            <input id="checkout" value="2024-01-01" className="transparent rounded-xl text-black px-2 w-[200px] md:w-[150px]" type="date" />
            <article className='flex flex-row gap-2 items-center w-[200px] md:w-[150px]'>
                <PersonIcon className="text-slate-600" />
                <select className="bg-transparent px-2">
                    <option className='text-slate-600' disabled selected>1 room 2 adults</option>
                    <option>1</option>
                    <option>2</option>
                </select>
            </article>
            <button className='md:bg-white w-[200px] md:w-[130px] bg-blue-600 text-white md:text-blue-600 font-semibold rounded-2xl justify-self-center md:justify-self-end'>Search</button>
        </form>
    )
}