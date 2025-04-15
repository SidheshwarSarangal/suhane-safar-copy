import React from "react";

const TrekHighlights = () => {
    return (
        <div className="w-100% pt-18 cursor-default">
            <div className=" px-8 lg:px-16 gap-40 py-10 w-11/12 bg-sky-100 mx-auto mt-10">
                <div className="text-4xl font-semibold">
                    Trek Highlights
                </div>
                <div className="text-xl">
                    <p className="font-semibold text-2xl mt-5">Best time to visit</p>
                    <p className="text-2xl mt-5">May to October</p>
                    <p className="font-semibold text-2xl mt-5">What's included</p>
                </div>
                <div className="text-xl ml-2 mt-5">
                    <ul className="list-disc list-inside mt-2">
                        <li className="mt-2.5">Expert mountain guides</li>
                        <li className="mt-2.5">Camp stays & guesthouse accommodation</li>
                        <li className="mt-2.5">All meals (vegetarian & non-vegetarian options)</li>
                        <li className="mt-2.5">Transportation from Manali</li>
                        <li className="mt-2.5">Trekking gear and equipment</li>
                        <li className="mt-2.5">Permits and forest entry fees</li>
                        <li className="mt-2.5">Medical and safety equipment</li>
                    </ul>

                </div>
                <div className="w-full flex pb-5 justify-center">
                    <button className="bg-black text-2xl px-10 text-white py-3 rounded-2xl mt-12 font-semibold hover:bg-gray-800 transition-colors duration-300">
                        Book This Trek
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TrekHighlights;
