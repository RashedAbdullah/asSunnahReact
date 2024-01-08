import React from "react";

const SubNav = () => {
  const sunNavigations = [
    {
      icon: "",
      title: "Stays",
      nav: "",
    },
    {
      icon: "",
      title: "Flights",
      nav: "",
    },
    {
      icon: "",
      title: "Car rentals",
      nav: "",
    },
    {
      icon: "",
      title: "Attractions",
      nav: "",
    },
    {
      icon: "",
      title: "Airport taxis",
      nav: "",
    },
  ];
  return (
    <div className="pb-10">
      <header>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <ul className="flex gap-3 flex-wrap">
            {sunNavigations.map((sub) => (
              <li
                className="border hover:border-blue-500 hover:bg-gray-50 hover:text-green-500 rounded-full py-2 transition px-5 cursor-pointer"
                key={sub.title}
              >
                {sub.title}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SubNav;
