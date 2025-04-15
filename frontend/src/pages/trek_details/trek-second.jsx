import React from "react";
import TrekCards from "./trek-left-cards";
import TrekHighlights from "./trek-right-highlights";
import TrekLeftDescription from "./trek-left-description";
import TrekLeftItinerary from "./trek-left-itinerary";

const TrekSecond = () => {
    return (
        <div>

            <div className="flex flex-col-reverse md:flex-row min-h-screen w-11/12 mx-auto">
                <div className="w-full md:w-3/5 ">
                    <TrekCards />
                    <TrekLeftDescription />
                    <TrekLeftItinerary />

                </div>
                <div className="w-full md:w-2/5 ">
                    <TrekHighlights />
                </div>
            </div>
            <div className="w-full flex pb-24 justify-center">
                <button className="bg-cyan-700 text-3xl px-11 text-white py-3 rounded-2xl mt-12 font-semibold hover:bg-cyan-800 transition-colors duration-300">
                    Book This Trek
                </button>
            </div>

        </div>
    );
};

export default TrekSecond;
