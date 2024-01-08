import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { bookingAuth } from "../components/auth/firebase.config";

const GoogleGithub = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(bookingAuth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(bookingAuth);
  const [googleGithubErr, setGoogleGithubErr] = useState({});
  const navigate = useNavigate();

  if (googleError || githubError) {
    return setGoogleGithubErr({
      secialLogInErr: `${googleError} ${githubError}`,
    });
  }

  useEffect(() => {
    if (googleUser || githubUser) {
      Swal.fire({
        title: "Successfully Sign in done",
        icon: "success",
      }).then(() => {});
      navigate("/");
    }
  }, [googleUser, githubUser, navigate]);

  return (
    <>
      {googleLoading || githubLoading ? (
        <p>Loading...</p>
      ) : (
        <div className=" mt-5 flex justify-center text-green-600 text-2xl gap-6">
          <div className="cursor-pointer" onClick={() => signInWithGoogle()}>
            <FaGoogle size="30px" />
          </div>
          <div className="cursor-pointer" onClick={() => signInWithGithub()}>
            <FaGithub size="30px" />
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleGithub;
