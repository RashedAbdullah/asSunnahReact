import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { TbHomeMove } from "react-icons/tb";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { bookingAuth } from "./firebase.config";
import GoogleGithub from "../../loginWithOthers/GoogleGithub";

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(bookingAuth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const handleSignInEffect = async () => {
      if (loading) {
        return;
      }

      if (error) {
        return Swal.fire({
          title: error?.message,
          icon: "error",
        });
      }
    };

    if (user) {
      Swal.fire({
        title: "Successfully Sign in done",
        icon: "success",
      }).then(() => {
        navigate(from, { replace: true });
      });
    }
    handleSignInEffect();
  }, [user, loading, error, navigate, from]);

  const handleSignInForm = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email.trim() !== "" && password.trim() !== "") {
      await signInWithEmailAndPassword(email, password);
    } else {
      Swal.fire({
        title: "Enter valid info",
        text: "Empty input not allowed",
        icon: "info",
      });
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in with your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignInForm} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
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
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-green-500 hover:text-green-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <GoogleGithub />

          <p className="mt-5 text-center text-sm text-gray-500">
            Haven't accont?{" "}
            <NavLink
              to="/signup"
              href="#"
              className="font-semibold leading-6 text-green-600 hover:text-indigo-500"
            >
              Create account
            </NavLink>
          </p>
        </div>

        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => navigate(-1)}
            className=" border border-green-600 text-green-900 py-1 px-4 rounded"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => navigate("/")}
            className=" border border-green-600 text-green-900 py-1 px-4 rounded"
          >
            <TbHomeMove />
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
