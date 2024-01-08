import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import AuthUserDetails from "./AuthUserDetails";
import MobileMenu from "./MobileMenu";
import { navigation } from "./blogData";
import Toggle from "../../toggle/Toggle";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile menu */}
      <MobileMenu open={open} setOpen={setOpen} />

      <header className="relative bg-green-500 text-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="">
            <div className="flex h-16 items-center justify-between">
              <div className="ml-4 flex lg:ml-0">
                {!open && (
                  <button
                    type="button"
                    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden mr-5"
                    onClick={() => setOpen(true)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                )}
                <div className="flex align-middle justify-center items-center">
                  <NavLink to="/">
                    <span className="sr-only">Page logo</span>
                    <img
                      className="h-8 w-auto rounded-full"
                      src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/404391919_3445113009112118_2309358618049763158_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEkV8V6P2zhuTcGvnYKqfdrDL-N7yic0iAMv43vKJzSIL3ADUp2KExVMCfOgBtwmCUVztkihvB3KkosG3hXZ-xb&_nc_ohc=lsv7J-4HUMwAX90xdIc&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCvTHENtSkWm3LtXbQb42gnzbOtEEP-5Y_ZTJfQmPzsMQ&oe=659E3CE5"
                      alt="User profile"
                    />
                  </NavLink>
                </div>
              </div>

              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-center">
                <div className="flex h-full space-x-8">
                  {navigation?.pages?.map((page) => (
                    <NavLink
                      key={page.name}
                      to={page.navlink}
                      className="flex items-center text-sm font-medium text-white hover:text-gray-400"
                    >
                      {page.name}
                    </NavLink>
                  ))}
                  <Toggle />
                </div>
              </Popover.Group>

              <AuthUserDetails />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
