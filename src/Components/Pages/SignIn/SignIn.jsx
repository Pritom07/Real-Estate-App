import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const SignIn = () => {
  const [seePass, SetseePass] = useState(false);
  const handlePassShowing = () => {
    SetseePass(!seePass);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const email = dataForm.get("email");
    const password = dataForm.get("password");
  };

  useEffect(() => {
    AOS.init({ duration: 650, easing: "ease-in-out-sine", once: true });
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      className="card w-full max-w-sm shrink-0 shadow-2xl backdrop-blur-xs"
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
                className="input"
                placeholder="Email"
                name="email"
                required
              />
              <label className="fieldset-label font-semibold text-black text-[16px]">
                Password
              </label>
              <input
                type={seePass ? "text" : "password"}
                className="input"
                placeholder="Password"
                name="password"
                required
              />

              <div
                onClick={handlePassShowing}
                className="text-[18px] cursor-pointer relative bottom-8 left-72"
              >
                {seePass ? <FaEyeSlash /> : <FaEye />}
              </div>

              <div className="-mt-3">
                <a className="link link-hover font-semibold text-black text-[16px]">
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
          <button className="bg-red-700 rounded-[6px] py-2.5 cursor-pointer hover:scale-x-105 duration-200">
            <FaGoogle className="inline mr-2"></FaGoogle>
            Login With Google
          </button>
          <button className="bg-black rounded-[6px] py-2.5 mt-3 cursor-pointer hover:scale-x-105 duration-200">
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
