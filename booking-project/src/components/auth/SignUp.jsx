import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import { bookingAuth } from "./firebase.config";
import GoogleGithub from './../../loginWithOthers/GoogleGithub';

const SignUp = () => {
  const navigate = useNavigate();
  const [sixDisit, setSixDigit] = useState("");
  const [matchPassword, setMatchPassword] = useState("");

  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const formChangeValue = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(bookingAuth, {
      sendEmailVerification: true,
    });
  const [updateProfile, updating] = useUpdateProfile();
console.log(user)
  if (error) {
    return Swal.fire({
      title: error?.message,
      icon: "error",
    });
  }

  useEffect(() => {
    if (user) {
      Swal.fire({
        title: "Successfully sign up done",
        icon: "success",
      }).then(() => {});
      return navigate("/");
    }
  }, [user]);

  const clearInputs = () => {
    inputs.fname = "";
    inputs.lname = "";
    inputs.email = "";
    inputs.password = "";
    inputs.conPassword = "";
  };

  const handleSignUpForm = async (e) => {
    e.preventDefault();

    if (inputs.password !== inputs.conPassword) {
      return setMatchPassword("password doesn't match!");
    } else if (inputs.password.length < 6) {
      return setSixDigit("Password must be 6 digin or longer then");
    }
    // with email and password
    await createUserWithEmailAndPassword(inputs.email, inputs.password);
    await updateProfile({ displayName: `${inputs.fname} ${inputs.lname}` });
    clearInputs();
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
        {/* Sign in with google or github */}
        <GoogleGithub />

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your Accont
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5" onSubmit={handleSignUpForm}>
            <div>
              <label
                htmlFor="fname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>

              <input
                onChange={formChangeValue}
                value={inputs.fname}
                id="fname"
                name="fname"
                type="text"
                autoComplete="fname"
                placeholder="First name"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />

              <label
                htmlFor="lname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>

              <input
                onChange={formChangeValue}
                value={inputs.lname}
                id="lname"
                name="lname"
                type="text"
                autoComplete="lname"
                placeholder="Last name"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={formChangeValue}
                  value={inputs.email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter email"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  onChange={formChangeValue}
                  value={inputs.password}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
                <p className="text-red-600 text-[13px]">{sixDisit}</p>
              </div>
              {/* confirm password */}
              <div className="flex items-center justify-between">
                <label
                  htmlFor="conPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  onChange={formChangeValue}
                  value={inputs.conPassword}
                  id="conPassword"
                  name="conPassword"
                  type="password"
                  placeholder="Confirm password"
                  autoComplete="current-password"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
                <p className="text-red-700 text-[13px]">{matchPassword}</p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-1 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <NavLink
              to="/signin"
              href="#"
              className="font-semibold leading-6 text-green-600 hover:text-indigo-500"
            >
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
