import React from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { BiSolidData } from "react-icons/bi";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaChartSimple } from "react-icons/fa6";

const WalletHelps = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mb-14">
      <h1 className="font-bold text-3xl mb-14 text-center">
        MyFinance Helps You:
      </h1>
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1 text-center mb-8 sm:mb-0">
          <HiQuestionMarkCircle
            className="mx-auto text-7xl mb-3"
            style={{ color: "#fc472e" }}
          />
          <h2 className="text-3xl font-bold mb-2">Ask The Questions</h2>
          <p className="text-lg">Where does my money go?</p>
        </div>
        <div className="flex-1 text-center mb-8 sm:mb-0">
          <BiSolidData
            className="mx-auto text-7xl mb-3"
            style={{ color: "#4abbf3" }}
          />
          <h2 className="text-3xl font-bold mb-2">See The Data</h2>
          <p className="text-lg">Unlock key insights</p>
        </div>
        <div className="flex-1 text-center mb-8 sm:mb-0">
          <PiClockCountdownFill
            className="mx-auto text-7xl mb-3"
            style={{ color: "#fb8e14" }}
          />
          <h2 className="text-3xl font-bold mb-2">Be Efficient</h2>
          <p className="text-lg">No missed payments</p>
        </div>
        <div className="flex-1 text-center mb-8 sm:mb-0">
          <FaChartSimple
            className="mx-auto text-7xl mb-3"
            style={{ color: "#00c187" }}
          />
          <h2 className="text-3xl font-bold mb-2">Have The Answers</h2>
          <p className="text-lg">Anytime, Anywhere</p>
        </div>
      </div>
    </div>
  );
};

export default WalletHelps;
