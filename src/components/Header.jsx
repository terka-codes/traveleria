import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faBars } from "@fortawesome/free-solid-svg-icons"

function Header() {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="flex justify-center bg-gray-200">
            <nav className="flex justify-between items-center text-gray-700 max-w-5xl w-11/12 py-3">
                <h2 className="cursor-pointer text-2xl">
                    <Link to="/">traveleria.</Link>
                </h2>

                <div className="flex items-center">
                    <button
                        type="button"
                        className="inline-block md:hidden ml-auto p-2 text-gray-500 hover:text-gray-600 
                            focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
                        aria-label="Toggle Navigation"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {showMenu ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
                        </svg>
                    </button>

                    <ul
                        className={`${showMenu ? "flex" : "hidden"} md:flex flex-col md:flex-row
                            md:items-center md:justify-center text-gray-700 w-full md:w-auto ml-4`}
                    >
                        <li className="text-gray-500 md:text-sm text-2xl cursor-pointer md:mx-4 my-2 md:my-0 hover:text-gray-900">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-gray-500 md:text-sm text-2xl cursor-pointer md:mx-4 my-2 md:my-0 hover:text-gray-900">
                            <Link to="/tropical-locations/">Tropical Locations</Link>
                        </li>
                        <li className="text-gray-500 md:text-sm text-2xl cursor-pointer md:mx-4 my-2 md:my-0 hover:text-gray-900">
                            <Link to="/winter-locations/">Winter Locations</Link>
                        </li>
                        <li className="text-white md:text-sm text-2xl bg-gradient-to-r from-cyan-500 to-blue-600 
                            py-2 px-5 rounded-3xl cursor-pointer md:mx-4 my-2 md:my-0
                            focus:outline-none focus:ring-2 drop-shadow hover:drop-shadow-lg
                            focus:ring-gray-900 focus:ring-offset-2 hover:scale-105 transition duration-700 ease-out">
                            <Link to="/book-now/">BOOK NOW</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
