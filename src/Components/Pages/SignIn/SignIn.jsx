import { useContext, useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../../Provider/Provider";
import { toast } from "react-toastify";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const { signInAccount, passwordReset, googleSignin, githubSignin } =
    useContext(ThemeContext);
  const Location = useLocation();
  const navigate = useNavigate();
  console.log(Location);
  const emailRef = useRef();

  const [seePass, SetseePass] = useState(false);
  const handlePassShowing = () => {
    SetseePass(!seePass);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const email = dataForm.get("email");
    const password = dataForm.get("password");

    signInAccount(email, password)
      .then((userCredential) => {
        if (!userCredential.user.emailVerified) {
          toast.warn(
            "Please verify your e-mail account. A message is sent in your e-mail"
          );
          return;
        } else {
          {
            Location?.state ? navigate(Location?.state) : navigate("/");
          }
        }
      })
      .catch((err) => {
        toast.error(
          `Please Ensure you are given correct E-mail and Password. ${err.message}`
        );
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    passwordReset(email)
      .then(() => {
        toast.info("Check your e-mail to reset password.");
      })
      .catch((err) => {
        toast.error(`Enter your E-mail to reset Password. ${err.message}`);
      });
  };

  const handleGoogleLogin = () => {
    const GoogleProvider = new GoogleAuthProvider();
    googleSignin(GoogleProvider)
      .then(() => {
        {
          Location?.state ? navigate(Location?.state) : navigate("/");
        }
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });
  };

  const handleGithubLogin = () => {
    const GithubProvider = new GithubAuthProvider();
    githubSignin(GithubProvider)
      .then(() => {
        {
          Location?.state ? navigate(Location?.state) : navigate("/");
        }
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });
  };

  useEffect(() => {
    AOS.init({ duration: 650, easing: "ease-in-out-sine", once: true });
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      className="card w-full max-w-sm shrink-0 shadow-2xl backdrop-blur-xs relative z-[10]"
    >
      <div className="card-body flex flex-col w-full">
        <div>
          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">
              <label className="fieldset-label font-semibold text-black text-[16px]">
                Email
              </label>
              <input
                type="email"
                className="input focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Email"
                name="email"
                ref={emailRef}
                required
              />

              <div className="relative w-full max-w-md">
                <label className="fieldset-label font-semibold text-black text-[16px]">
                  Password
                </label>
                <input
                  type={seePass ? "text" : "password"}
                  className="input w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Password"
                  name="password"
                  required
                />
                <div
                  onClick={handlePassShowing}
                  className="absolute right-4 top-10 text-[18px] cursor-pointer text-gray-600 hover:text-black"
                >
                  {seePass ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <div className="mt-1">
                <a
                  onClick={handleForgetPassword}
                  className="link link-hover font-semibold text-black text-[16px]"
                >
                  Forgot password?
                </a>
              </div>
              <button className="btn bg-violet-700 text-white border-2 border-violet-700 mt-4 hover:scale-x-105 duration-300">
                Login
              </button>
            </fieldset>
          </form>
        </div>
        <div className="divider font-semibold">OR</div>
        <div className="flex flex-col text-white">
          <button
            onClick={handleGoogleLogin}
            className="bg-red-700 rounded-[6px] py-2.5 cursor-pointer hover:scale-x-105 duration-200"
          >
            <FaGoogle className="inline mr-2"></FaGoogle>
            Login With Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="bg-black rounded-[6px] py-2.5 mt-3 cursor-pointer hover:scale-x-105 duration-200"
          >
            <FaGithub className="inline mr-2 text-[18px]"></FaGithub>
            Login With Github
          </button>
        </div>
        <p className="font-semibold text-center mt-1 text-[16px]">
          Don't have an account? go to
          <Link to="/auth/signUp" className="text-violet-700 ml-0.5">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
