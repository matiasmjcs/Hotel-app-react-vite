import { useLocation } from "react-router-dom";
export default function NavBarComponent() {
  const location = useLocation();
  return (
    <nav className=" grid justify-items-end fixed w-full transparent top-0 right-0 font-mono z-10">
      <ul className={`flex flex-row gap-3 px-2 text-slate-600 font-semibold text-lg`}>
        <li className="p-2">
          <a href="/">Home</a>
        </li >
        <li className="p-2">
          <a href="/hotels">hotels</a>
        </li>
        {
          location.pathname === "/login" 
          ?  <li className="p-2"><a href="/signup">Signup</a></li> 
          : <li className="p-2"><a href="/login">Login</a></li>
        }
        
      </ul>
    </nav>
  );
}
