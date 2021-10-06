import Link from 'next/link'
import NavLink from './NavLink'

export const NavBar = () => {
    return (
        <div>
            <nav className="px-5 md:px-20 lg:px-30 " >
                <div className="flex justify-between py-5 text-pri-100">
                    <div className="flex-grow-0">
                        <h1>DENNY</h1>
                    </div>
                    <div className="hidden md:block" >
                        <NavLink route="/" title="About" />
                        <NavLink route="/" title="Projects" />
                        <NavLink route="/" title="Blog" />
                    </div>

                    <div className="-mr-2 flex md:hidden lg:hidden">
                        <button
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>

                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
