import { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router";
import { ThemeContext } from "../../Provider/Provider";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createAccount, updateUserProfile, emailVerification } =
    useContext(ThemeContext);
  const navigate = useNavigate();

  const [seePass, SetseePass] = useState(false);
  const handlePassShowing = () => {
    SetseePass(!seePass);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const name = dataForm.get("name");
    const PhotoURL = dataForm.get("photo");
    const email = dataForm.get("email");
    const password = dataForm.get("password");
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    const userData = {
      displayName: name,
      photoURL: PhotoURL,
    };

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password should atleast One Capital letter, one Small letter,one special character and length atlest 6"
      );
      return;
    }

    createAccount(email, password)
      .then((userCredential) => {
        updateUserProfile(userData)
          .then(() => {})
          .catch((err) => {
            console.log(err.message);
          });

        emailVerification().then(() => {
          toast(
            "An email is sent in your email account. Please Verify before Signin into your account."
          );
        });

        navigate("/auth/signIn");
        console.log(userCredential.user);
      })
      .catch((err) => {
        console.log(err.message);
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
          <form onSubmit={handleSignUp}>
            <fieldset className="fieldset">
              <label className="fieldset-label font-semibold text-black text-[16px]">
                Name
                <IoStarSharp className="text-red-700 inline ml-0.5 text-[12px]" />
              </label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
                required
              />
              <label className="fieldset-label font-semibold text-black text-[16px]">
                Photo-URL
                <IoStarSharp className="text-red-700 inline ml-0.5 text-[12px]" />
              </label>
              <input
                type="text"
                className="input"
                placeholder="PhotoURL"
                name="photo"
                required
              />
              <label className="fieldset-label font-semibold text-black text-[16px]">
                Email
                <IoStarSharp className="text-red-700 inline ml-0.5 text-[12px]" />
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
                <IoStarSharp className="text-red-700 inline ml-0.5 text-[12px]" />
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

              <button className="btn bg-violet-700 text-white border-2 border-violet-700 hover:scale-x-105 duration-200">
                SignUp
              </button>
            </fieldset>
          </form>
        </div>
        <p className="font-semibold text-center mt-1 text-[16px]">
          Already have an account? go to
          <Link to="/auth/signIn" className="text-violet-700 ml-0.5">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
