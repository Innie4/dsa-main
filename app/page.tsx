import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div className="relative w-full max-w-[1440px] bg-white">
            {/* Header Section */}
            <div className="absolute w-full h-[157px] bg-gray-800 rounded-t-[48px]">
                <div className="flex justify-center items-center gap-9 absolute w-[627px] h-[24px] left-1/2 transform -translate-x-1/2 top-[67px]">
                    <div className="flex items-center gap-1">
                        <span className="text-white text-[16px] font-normal">Essentials</span>
                        <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 12l-4-4h8z" />
                        </svg>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-white text-[16px] font-normal">Dashboards</span>
                        <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 12l-4-4h8z" />
                        </svg>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-white text-[16px] font-normal">Why choose DSA</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-white text-[16px] font-normal">Marketplace</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-white text-[16px] font-normal">Reports</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="absolute w-full h-[698px] bg-gray-50">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-white text-[64px] font-bold">Unleashing potential across Africa</h1>
                    <p className="text-white text-[22px] font-normal">Uncovering Africa’s rising stars through data and dedication.</p>
                    <button className="mt-4 px-6 py-2 bg-yellow-400 rounded-lg text-gray-800 font-semibold">Get Started</button>
                </div>
            </div>

            {/* Responsive Design */}
            <div className="flex flex-col md:flex-row justify-between p-4">
                <div className="flex flex-col items-center w-full md:w-1/3 p-4">
                    <h2 className="text-gray-800 text-[40px] font-bold">Gallery</h2>
                    <div className="w-full h-[291px] bg-blue-900 rounded-lg"></div>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/3 p-4">
                    <h2 className="text-gray-800 text-[40px] font-bold">Testimonials</h2>
                    <div className="w-full h-[291px] bg-blue-900 rounded-lg"></div>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/3 p-4">
                    <h2 className="text-gray-800 text-[40px] font-bold">Join Us</h2>
                    <div className="w-full h-[291px] bg-blue-900 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;