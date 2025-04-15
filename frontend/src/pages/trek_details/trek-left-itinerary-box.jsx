import React from 'react';

const TrekLeftItineraryBox = ({ number, heading, text }) => {
  return (
    <div className="flex items-center bg-sky-100 p-6 mb-14 w-full ">
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-cyan-700 text-white text-2xl font-bold">
        {number}
      </div>
      <div className="ml-5">
        <h2 className="text-3xl  font-bold  ">{heading}</h2>
        <p className="text-xl mt-3 w-11/12">{text}</p>
      </div>
    </div>
  );
};

export default TrekLeftItineraryBox;
