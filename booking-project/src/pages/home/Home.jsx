import React from "react";
import Toggle from "../../toggle/Toggle";
import Searchbar from "../../components/searchbar/Searchbar";
import SubNav from "../../components/subNav/SubNav";

const Home = () => {
  return (
    <div>
      <div className="bg-green-500 pt-5">
        <SubNav />
        <Searchbar />
        <div className="text-white p-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold">Find your next stay</h2>
          <p className="text-lg mt-2">
            Search low prices on hotels, homes and much more...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
