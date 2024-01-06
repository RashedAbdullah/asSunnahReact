import React, { Fragment, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { allAuths } from "../config/firebase.config";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { signOut } from "firebase/auth";
import { FaUserAstronaut } from "react-icons/fa";
import Swal from "sweetalert2";

const AuthUserDetails = () => {

    const navigate = useNavigate();
    const [showUserProfile, setShowUserProfile] = useState(false);
    const [user] = useAuthState(allAuths);

    const signOutHandle = () => {
        setShowUserProfile(!showUserProfile);
        // signOut(allAuths);
        Swal.fire({
          title: "Signed out",
          icon: "info",
        }).then(() => {});
        navigate("/");
      };
  return (
    <>
      <div className="ml-auto flex items-center">
        {/* User profile or sign in page */}
        <div className="ml-4 flow-root lg:ml-6 justify-center">
          {user ? (
            <div className=" cursor-pointer flex align-middle ">
              <p className="mr-3 mt-2">{user?.displayName}</p>
              <div onClick={() => setShowUserProfile(!showUserProfile)}>
                {user?.photoURL ? (
                  <img
                    className="h-[35px] w-[35px] rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUserAstronaut size="25px" />
                )}
              </div>
            </div>
          ) : (
            <NavLink to="signin" className="group -m-2 flex items-center p-2">
              <FaUserCircle size="25px" />
              <span className="sr-only">User profile</span>
            </NavLink>
          )}
        </div>
      </div>

      <Transition.Root show={showUserProfile} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setShowUserProfile}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex justify-end">
            {/* Transition from left site */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <Dialog.Panel
                onClick={() => setShowUserProfile(false)}
                className="relative flex max-w-xs flex-col overflow-y-auto bg-black text-white bg-opacity-80 pb-12 shadow-xl"
              >
                <div className="flex p-5 justify-end">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setShowUserProfile(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Navlinks */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6 text-center">
                  <div className="flow-root">
                    <NavLink
                      to="/userProfile"
                      onClick={() => setShowUserProfile(false)}
                      className="-m-2 block p-2 font-medium text-white w-60 hover:bg-teal-950 transition "
                    >
                      Your profile
                    </NavLink>
                  </div>
                  <div className="flow-root">
                    <button
                      to="/"
                      onClick={signOutHandle}
                      className="-m-2 block p-2 font-medium text-white w-60 hover:bg-teal-950 transition "
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default AuthUserDetails;
