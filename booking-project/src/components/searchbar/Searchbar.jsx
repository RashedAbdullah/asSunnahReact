import React, { useState } from "react";
import Calendar from "./Calendar";

const Searchbar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPersonInfo, setShowPersonInfo] = useState(false);
  const [adult, setadult] = useState(1);
  const [child, setChild] = useState(0);
  const [room, setRoom] = useState(1);
  return (
    <div>
      <form
        action=""
        className="flex bg-green-500 p-2 justify-center gap-1 lg:flex-row flex-col"
      >
        <div className="">
          <input
            className="p-2 lg:w-auto w-[100%] focus:outline-none"
            type="text"
            placeholder="Where are you going?"
          />
        </div>
        <div className="relative">
          <button
            className=" h-full bg-white p-2 lg:w-auto w-[100%]"
            type="button"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            Check-in date — Check-out date
          </button>
          <div className=" lg:absolute top-[45px] left-[-300px]">
            {showCalendar && <Calendar />}
          </div>
        </div>
        <div className="bg-white flex align-middle relative">
          <button
            onClick={() => setShowPersonInfo(!showPersonInfo)}
            type="button"
            className="lg:w-auto w-[100%] p-2"
          >
            <span>{adult}</span> adults · <span>{child}</span> Child ·{" "}
            <span>{room}</span> room
          </button>

          {showPersonInfo && (
            <div className=" absolute top-10 w-96 sm:w-full">
              <div className="w-full bg-white p-2 ">
                <div className="flex  align-middle text-[18px] relative">
                  <p className="py-1 px-6">Adults</p>
                  <div className="border py-1 px-5 absolute right-2">
                    <button onClick={() => setadult(adult - 1)} type="button">
                      {" "}
                      -{" "}
                    </button>{" "}
                    <span className="px-2">{adult}</span>{" "}
                    <button onClick={() => setadult(adult + 1)} type="button">
                      +
                    </button>
                  </div>
                </div>

                <div className="flex bg-white align-middle text-[18px] w-full relative">
                  <p className="py-1 px-6">Child</p>
                  <div className="border py-1 px-5 absolute right-2">
                    <button type="button" onClick={() => setChild(child - 1)}>
                      {" "}
                      -{" "}
                    </button>{" "}
                    <span className="px-2">{child}</span>{" "}
                    <button type="button" onClick={() => setChild(child + 1)}>
                      +
                    </button>
                  </div>
                </div>

                <div className="flex bg-white align-middle text-[18px] w-full relative">
                  <p className="py-1 px-6">Room</p>
                  <div className="border py-1 px-5 absolute right-2">
                    <button type="button" onClick={() => setRoom(room - 1)}>
                      {" "}
                      -{" "}
                    </button>{" "}
                    <span className="px-2">{room}</span>{" "}
                    <button type="button" onClick={() => setRoom(room + 1)}>
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => setShowPersonInfo(false)}
                    type="button"
                    className="bg-green-500 text-white w-full py-2 mt-2"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" flex align-middle">
          <button
            type="submit"
            className="bg-blue-500 text-white lg:w-auto w-[100%] p-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
