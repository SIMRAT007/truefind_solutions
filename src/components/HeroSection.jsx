import backgroundVideo from '../assets/herobg.mp4';

const HeroSection = () => {

     const phoneNumber = '+1-780-851-0652'; // Replace with your number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

    return (
        <>
            <section className="lg:pt-40 pt-0 lg:p-0 h-full mt-0 relative bg-white" id='home'>
                {/* Removed background video and overlay for white background */}
                <div className="relative py-10 overflow-hidden m-10 lg:m-0 2xl:py-16 xl:py-8 lg:rounded-tl-2xl lg:rounded-bl-2xl">
                    {/* Content Overlay */}
                    <div className="relative z-10 mx-auto md:w-[90%] px-4 sm:px-6 lg:px-4">
                        <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-10 lg:gap-2">
                            {/* Content Part */}
                            <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0 max-md:mt-10">
                                <div className="flex items-center text-sm font-medium text-black justify-center lg:justify-start">
                                    <span className="bg-[#2E81CC] py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3">#1</span>
                                    Your Marketing Partner
                                </div>
                                <h1
                                    className="py-8 text-center text-black font-bold font-manrope md:text-8xl text-6xl lg:text-left leading-[70px]"
                                    style={{
                                        lineHeight: "1"
                                    }}
                                >
                                    Transform your business vision into digital{" "}
                                    <span
                                        className="text-[#2E81CC]"
                                        style={{
                                            background: "none",
                                            WebkitBackgroundClip: "unset",
                                            WebkitTextFillColor: "#2E81CC",
                                        }}
                                    >
                                        excellence
                                    </span>
                                </h1>
                                <p className="text-black text-xl text-center lg:text-left">
                                    Empowering brands with innovative designs and tailored business strategies to thrive and grow in the ever-evolving digital landscape.
                                </p>

                                <div className="my-10 flex justify-center lg:justify-start">
                                    <button className="bg-[#2E81CC] rounded-full py-4 px-8 text-lg font-semibold text-white hover:bg-[#1d5fa3] cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[0px_10px_25px_-5px_rgba(46,129,204,0.5)] flex items-center justify-center gap-2" onClick={handleCall}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="animate-pulse">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                        Call Us Now
                                    </button>
                                </div>

                                <div className="flex items-center flex-col lg:flex-row">
                                    <div className="flex items-center">
                                        <img
                                            src="https://pagedone.io/asset/uploads/1694846673.png"
                                            alt="Rounded image"
                                            className="border-2 border-solid border-indigo-50 rounded-full relative z-50 object-cover"
                                        />
                                        <img
                                            src="https://pagedone.io/asset/uploads/1694846691.png"
                                            alt="Rounded image"
                                            className="border-2 border-solid border-indigo-50 rounded-full relative z-30 -ml-3 object-cover"
                                        />
                                        <img
                                            src="https://pagedone.io/asset/uploads/1694846704.png"
                                            alt="Rounded image"
                                            className="border-2 border-solid border-indigo-50 rounded-full relative z-20 -ml-3 object-cover"
                                        />
                                    </div>
                                    <span className="mt-0 max-md:mt-5 text-base text-black font-medium lg:ml-3">
                                        500+ Positive Reviews
                                    </span>
                                </div>
                            </div>



                            {/* Image Part */}
                            <div className="w-full xl:col-span-5 lg:col-span-6 block relative -mt-20">
                                {/* Abstract Elements */}
                                <div className="absolute top-0 right-10 w-32 h-32 bg-teal-500 rounded-full opacity-20 blur-xl"></div>
                                <div className="absolute bottom-20 left-0 w-24 h-24 bg-amber-500 rounded-full opacity-20 blur-xl"></div>
                                <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-rose-500 rounded-full opacity-10 blur-lg"></div>

                                {/* Additional Abstract Elements */}
                                {/* Circles */}
                                <div className="absolute top-[15%] right-[25%] w-12 h-12 border-2 border-emerald-400 rounded-full opacity-40"></div>
                                <div className="absolute bottom-[10%] right-[15%] w-20 h-20 border-4 border-violet-400 rounded-full opacity-30"></div>
                                <div className="absolute top-[60%] left-[10%] w-16 h-16 border-2 border-dashed border-indigo-400 rounded-full opacity-40"></div>

                                {/* Lines */}
                                <div className="absolute top-[20%] left-[20%] w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full transform rotate-45"></div>
                                <div className="absolute top-[30%] right-[20%] w-36 h-1 bg-gradient-to-l from-fuchsia-400 to-transparent rounded-full transform -rotate-45"></div>
                                <div className="absolute bottom-[25%] right-[30%] w-20 h-0.5 bg-orange-300 rounded-full transform rotate-[30deg] opacity-40"></div>

                                {/* Geometric Shapes */}
                                <div className="absolute top-[40%] left-[15%] w-8 h-8 border-2 border-sky-300 transform rotate-45 opacity-30"></div>
                                <div className="absolute bottom-[35%] left-[35%] w-10 h-10 bg-gradient-to-br from-green-400 to-lime-500 opacity-10 rounded-sm transform rotate-12"></div>

                                {/* Dotted Elements */}
                                <div className="absolute top-[50%] right-[40%] flex space-x-1">
                                    <div className="w-1 h-1 bg-yellow-300 rounded-full opacity-70"></div>
                                    <div className="w-1 h-1 bg-yellow-300 rounded-full opacity-70"></div>
                                    <div className="w-1 h-1 bg-yellow-300 rounded-full opacity-70"></div>
                                </div>
                                <div className="absolute bottom-[60%] left-[25%] flex space-x-1">
                                    <div className="w-1 h-1 bg-pink-300 rounded-full opacity-70"></div>
                                    <div className="w-1 h-1 bg-pink-300 rounded-full opacity-70"></div>
                                    <div className="w-1 h-1 bg-pink-300 rounded-full opacity-70"></div>
                                </div>

                                {/* Curved Line */}
                                <svg className="absolute top-[70%] left-[5%] w-24 h-24 opacity-30" viewBox="0 0 100 100">
                                    <path d="M10,50 Q50,10 90,50" stroke="#06b6d4" strokeWidth="2" fill="none" />
                                </svg>
                                <svg className="absolute top-[10%] right-[5%] w-20 h-20 opacity-20" viewBox="0 0 100 100">
                                    <path d="M10,50 Q50,90 90,50" stroke="#f472b6" strokeWidth="2" fill="none" />
                                </svg>

                                {/* Blur Light Effect */}
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[450px] lg:w-[550px] lg:h-[750px] rounded-full mt-10"
                                    style={{
                                        background: "radial-gradient(ellipse at center, rgba(46, 129, 204, 0.7), rgba(46, 129, 204, 0))",
                                        filter: "blur(50px)",
                                        zIndex: 0,
                                    }}
                                ></div>

                                {/* Overlapping Images - Completely different mobile layout */}
                                <div className="relative w-full sm:w-auto lg:w-[40.8125rem] xl:ml-16 z-10 max-md:mt-30">
                                    {/* Desktop layout - hidden on mobile */}
                                    <div className="hidden sm:flex justify-center mt-6 lg:mt-0 relative">
                                        {/* Abstract elements above images */}
                                        <div className="absolute -top-20 md:-top-32 left-1/4 w-20 h-20 border-2 border-white border-dashed rounded-full opacity-60 z-20"></div>
                                        <div className="absolute -top-16 md:-top-24 right-1/4 w-32 h-1.5 bg-gradient-to-r from-cyan-300 to-transparent opacity-70 z-20 rotate-45"></div>
                                        <svg className="absolute -top-24 md:-top-40 left-1/3 w-16 h-16 opacity-70 z-20" viewBox="0 0 100 100">
                                            <path d="M20,50 L80,50" stroke="white" strokeWidth="2" strokeDasharray="5,3" />
                                            <path d="M50,20 L50,80" stroke="white" strokeWidth="2" strokeDasharray="5,3" />
                                        </svg>
                                        <div className="absolute -top-20 md:-top-28 right-1/3 w-14 h-14 border-2 border-amber-300 rounded-full opacity-70 z-20"></div>

                                        {/* First Square Image */}
                                        <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-xl rounded-2xl overflow-hidden">
                                            <img
                                                src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                                alt="Featured image 1"
                                                className="w-full h-full object-cover border-4 border-white"
                                            />
                                            <div className="absolute inset-0 bg-black opacity-15 rounded-2xl"></div>
                                        </div>

                                        {/* Second Square Image */}
                                        <div className="absolute top-20 left-28 md:top-32 md:left-48 lg:top-40 lg:left-64 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-xl rounded-2xl overflow-hidden ">
                                            <img
                                                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                                alt="Featured image 2"
                                                className="w-full h-full object-cover border-4 border-white"
                                            />
                                            <div className="absolute inset-0 bg-black opacity-15 rounded-2xl"></div>

                                            {/* Decorative Elements */}
                                            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#2E81CC] rounded-full shadow-lg"></div>
                                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-90 shadow-lg"></div>
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute -bottom-6 right-1/4 w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg rotate-12 opacity-90 shadow-lg"></div>
                                        <div className="absolute top-10 -right-6 w-14 h-14 border-4 border-[#2E81CC] rounded-full shadow-md"></div>
                                    </div>

                                    {/* Mobile-specific layout - hidden on desktop */}
                                    <div className="flex justify-center sm:hidden -mt-10">
                                        {/* Single clean image for mobile */}
                                        <div className="relative w-[100%] max-w-sm h-64 shadow-xl rounded-2xl overflow-hidden z-10">
                                            <img
                                                src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                                alt="Featured image"
                                                className="w-full h-full object-cover border-4 border-white rounded-2xl"
                                            />
                                            <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;