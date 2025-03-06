import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <>
            {isVisible && (
                <div className="relative bg-[#191C1F]">
                    {/* Main Content */}
                    <div className="flex max-w-7xl bg-[#191C1F] justify-between  items-center w-full mx-auto py-4">
                        <div className="flex items-center justify-center gap-3">
                            <p className="bg-[#F3DE6D] rotate-3 px-[10.3px] py-[6.52px] font-semibold txt-color leading-7 text-7">
                                Black
                            </p>
                            <p className="font-semibold text-2xl leading-8">Friday</p>
                        </div>
                        <div className="px-8">
                            <div className="flex items-center justify-center gap-2">
                                <p className="font-medium text-sm leading-5">Up to</p>
                                <p className="text-[#EBC80C] font-semibold text-[40px] leading-8">59%</p>
                                <p className="font-semibold leading-7 text-[20px]">OFF</p>
                            </div>
                        </div>
                        <div className="bg-[#EBC80C]">
                            <button className="uppercase font-bold text-sm txt-color pl-6 pr-3 py-1 leading-8 flex items-center gap-2">
                                shop now
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Close Button */}
                    <div className="absolute top-3 right-3 bg-[#303639] p-2 rounded cursor-pointer">
                        <X onClick={() => setIsVisible(false)} className="text-white" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
