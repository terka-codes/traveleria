import { Link } from "react-router-dom"


function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 py-12">
            <div className="container mx-auto flex flex-wrap max-w-5xl w-11/12 md:justify-between">
                <div className="w-full md:w-1/3 text-center md:text-left mr-6">
                    <h5 className="uppercase mb-6 font-bold">Company Name</h5>
                    <p className="mb-4">123 Main Street</p>
                    <p className="mb-4">City, State 12345</p>
                    <p className="mb-4">Phone:
                        <a href="tel:+1234567890" className="text-gray-400 hover:text-white"> 123-456-7890</a>
                    </p>
                    <p className="mb-4">Email:
                        <a href="mailto:info@company.com" className="text-gray-400 hover:text-white"> info@company.com</a>
                    </p>
                </div>
                <div className="w-full md:w-1/4 text-center md:text-left">
                    <h5 className="uppercase mb-6 font-bold">Links</h5>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <Link to="/" className="text-gray-400 hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <Link to="/tropical-locations/" className="text-gray-400 hover:text-white">
                                Tropical Locations
                            </Link>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <Link to="/winter-locations/" className="text-gray-400 hover:text-white">
                                Winter Locations
                            </Link>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <Link to="/book-now/" className="text-gray-400 hover:text-white">
                                Book Now
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 text-center md:text-left">
                    <h5 className="uppercase mb-6 font-bold">Follow Us</h5>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0"><a href="#" className="text-gray-400 hover:text-white">
                            Facebook
                        </a></li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0"><a href="#" className="text-gray-400 hover:text-white">
                            Instagram
                        </a></li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0"><a href="#" className="text-gray-400 hover:text-white">
                            LinkedIn
                        </a></li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0"><a href="#" className="text-gray-400 hover:text-white">
                            Twitter
                        </a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer