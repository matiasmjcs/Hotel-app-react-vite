import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

export const FormHeader = () => {
    // Definir estados locales para los valores de entrada
    const [searchValue, setSearchValue] = useState('');
    const [checkinValue, setCheckinValue] = useState('2023-12-01');
    const [checkoutValue, setCheckoutValue] = useState('2023-12-12');
    const [roomValue, setRoomValue] = useState("1 room 2 adults");

    // Funciones para manejar cambios en los campos de entrada
    const handleSearchChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleCheckinChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckinValue(e.target.value);
    };

    const handleCheckoutChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckoutValue(e.target.value);
    };

    const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRoomValue(e.target.value );
    };

    return (
        <>
            <h2 className="text-xl font-bold p-2 text-white relative top-24">Choose your destination</h2>
            <form className="grid py-3 grid-cols-1 grid-rows-4 md:flex md:h-[50px] justify-items-center p-2 w-full  relative top-28 gap-3 transparent rounded-lg justify-between">
                <article className='flex flex-row gap-2 w-5/6 md:w-[150px] my-3 md:my-0'>
                    <label className='flex items-center' htmlFor="search">
                        <SearchIcon className="text-slate-600" />
                    </label>
                    <input
                        id="search"
                        placeholder="Search"
                        className="bg-transparent focus:outline-none"
                        type="text"
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </article>
                
                <input
                    id="checkin"
                    value={checkinValue}
                    className="rounded-xl py-2 w-[250px] transparent h-[30px] md:w-[150px] text-black "
                    type="date"
                    onChange={handleCheckinChange}
                />
                <input
                    id="checkout"
                    value={checkoutValue}
                    className="rounded-xl py-2 w-[250px] transparent h-[30px] md:w-[150px] text-black "
                    type="date"
                    onChange={handleCheckoutChange}
                />

                <article className='flex flex-row gap-2 items-center w-5/6 md:w-[150px]'>
                    <PersonIcon className="text-slate-600" />
                    <select
                        className="bg-transparent px-2"
                        value={roomValue}
                        onChange={handleRoomChange}
                    >
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
