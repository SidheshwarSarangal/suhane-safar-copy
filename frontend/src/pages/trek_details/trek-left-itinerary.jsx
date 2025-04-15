import React from 'react';
import TrekLeftItineraryBox from './trek-left-itinerary-box';

const TrekLeftItinerary = () => {
    return (
        <div className="w-full cursor-default pt-10 px-4">
            <div className="rounded-xl w-11/12 justify-self-start mx-auto ">
                <h2 className="text-4xl font-bold mb-18">Trek Itinerary</h2>
                <TrekLeftItineraryBox
                    number={1}
                    heading="Manali Arrival"
                    text="Arrive in Manali and check into the hotel. Trek briefing and equipment check."
                />
                <TrekLeftItineraryBox
                    number={2}
                    heading="Manali To Solang Valley"
                    text="Drive to Solang Valley and start trekking. Camp under the stars."
                />
                <TrekLeftItineraryBox
                    number={2}
                    heading="Manali To Solang Valley"
                    text="Drive to Solang Valley and start trekking. Camp under the stars."
                />
                <TrekLeftItineraryBox
                    number={2}
                    heading="Manali To Solang Valley"
                    text="Drive to Solang Valley and start trekking. Camp under the stars."
                />
                <TrekLeftItineraryBox
                    number={2}
                    heading="Manali To Solang Valley"
                    text="Drive to Solang Valley and start trekking. Camp under the stars."
                />
                <TrekLeftItineraryBox
                    number={2}
                    heading="Manali To Solang Valley"
                    text="Drive to Solang Valley and start trekking. Camp under the stars."
                />
                <TrekLeftItineraryBox
                    number={2}
                    heading="Manali To Solang Valley"
                    text="Drive to Solang Valley and start trekking. Camp under the stars."
                />
                <TrekLeftItineraryBox
                    number={2}
                    heading="Manali To Solang Valley"
                    text="Drive to Solang Valley and start trekking. Camp under the stars."
                />
            </div>


        </div>
    );
};

export default TrekLeftItinerary;
