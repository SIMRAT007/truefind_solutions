import React from 'react'
// Import your logo images
import logo1 from "../assets/companies/C1.png"
import logo2 from "../assets/companies/C2.png"
import logo3 from "../assets/companies/C3.png"
import logo4 from "../assets/companies/C4.png"
import logo5 from "../assets/companies/C5.png"
import logo6 from "../assets/companies/C6.jpeg"

const clients = () => {
    return (
        <>
            <section className="py-24 max-md:py-5 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center">
                        <span className="text-[#2E81CC] text-center font-medium mb-4 block">OUR PARTNERS</span>
                        <h1 className="text-4xl text-black text-center font-bold">We work with the best partners</h1>
                    </div>
                    
                    {/* Logo container - displaying logos in a row */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {/* Logo 1 */}
                        <a href="#" className="flex justify-center items-center bg-white border border-solid border-gray-300 shadow-md h-24 w-64 rounded-2xl hover:shadow-lg transition-all">
                            <img src={logo1} alt="Partner Logo" className="h-16 object-contain" />
                        </a>
                        
                        {/* Logo 2 */}
                        <a href="#" className="flex justify-center items-center bg-white border border-solid border-gray-300 shadow-md h-24 w-64 rounded-2xl hover:shadow-lg transition-all">
                            <img src={logo2} alt="Partner Logo" className="h-16 object-contain" />
                        </a>
                        
                        {/* Logo 3 */}
                        <a href="#" className="flex justify-center items-center bg-white border border-solid border-gray-300 shadow-md h-24 w-64 rounded-2xl hover:shadow-lg transition-all">
                            <img src={logo3} alt="Partner Logo" className="h-16 object-contain" />
                        </a>
                        
                        {/* Logo 4 */}
                        <a href="#" className="flex justify-center items-center bg-white border border-solid border-gray-300 shadow-md h-24 w-64 rounded-2xl hover:shadow-lg transition-all">
                            <img src={logo4} alt="Partner Logo" className="h-16 object-contain" />
                        </a>
                        
                        {/* Logo 5 */}
                        <a href="#" className="flex justify-center items-center bg-white border border-solid border-gray-300 shadow-md h-24 w-64 rounded-2xl hover:shadow-lg transition-all">
                            <img src={logo5} alt="Partner Logo" className="h-16 object-contain" />
                        </a>
                        
                        {/* Logo 6 */}
                        <a href="#" className="flex justify-center items-center bg-white border border-solid border-gray-300 shadow-md h-24 w-64 rounded-2xl hover:shadow-lg transition-all">
                            <img src={logo6} alt="Partner Logo" className="h-16 object-contain" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default clients
