import { useNavigate } from "react-router";

export const LinkAuthentication = ({href, text}:{href:string, text:string}) => {
    const navigate = useNavigate();
    return (
        <section className="flex flex-col gap-2">
        <a onClick={() => navigate(`/${href}`)} className='cursor-pointer p-2 hover:text-slate-700 text-black text-center' >{text}</a>
        </section>
    )
}