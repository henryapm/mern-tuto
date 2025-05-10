import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";

const Navbar = ({darkMode, toggleDarkMode}) => {
    
  return (
    <nav className="container flex justify-between mx-auto   text-black dark:text-white">
        <div className="logo">
            <Link to={"/"}>
                <h1 className="uppercase font-bold text-2xl text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500">Product Store 🛒</h1>
            </Link>
        </div>
        <div className="controls flex flex-row items-center gap-2">
            <Link to={"/create"}>
                <CiSquarePlus fontSize={20}/>
            </Link>
            <button onClick={toggleDarkMode}>
                {darkMode ? <LuSun /> : <FiMoon />}
            </button>
        </div>
    </nav>
  )
}

export default Navbar