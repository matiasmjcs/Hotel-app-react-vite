import { useLocation } from "react-router-dom";

export default function NavBarComponent() {
  const location = useLocation();
  return (
    <nav className=" grid justify-items-end fixed top-0 right-0 font-mono z-10">
      <ul className={`flex flex-row gap-3 px-2 ${location.pathname === "/" ? 'text-white' : 'text-slate-600'} font-semibold text-lg`}>
        <li className="p-2">
          <a href="/">Home</a>
        </li >
        <li className="p-2">
          <a href="/hotels">hotels</a>
        </li>
        {
          location.pathname === "/" ?  <li className="p-2">
          <a href="/login">login</a>
        </li> : null
        }
        {
          location.pathname === "/login" ?  <li className="p-2">
          <a href="/signup">Signup</a>
        </li> : null
        }
        {
          location.pathname === "/signup" ? <li className="p-2">
          <a href="/login">Login</a>
        </li> : null
        }
      </ul>
    </nav>
  );
}
