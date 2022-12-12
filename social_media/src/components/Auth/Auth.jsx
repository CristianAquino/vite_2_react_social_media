import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { authFail, authStart, authSuccess } from "../../redux/slice/authSlice";
import { logIn, signUp } from "../../https/authRequest";
import { useNavigate } from "react-router-dom";

const initial = {
  firstname: "",
  lastname: "",
  password: "",
  confirmpass: "",
  username: "",
};

const Auth = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authSlice);
  const infoInputSty =
    "border-none outline-none bg-inputColor rounded-[8px] py-[4px] px-[8px] flex-1";

  const infoInputDivSty =
    "flex gap-[1rem] h-[2rem] w-[100%] items-center justify-center";

  const [isSignUp, setIsSignUp] = useState(true);

  const [data, setData] = useState(initial);

  const [confirmPass, setConfirmPass] = useState(true);

  const { token } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  const resetForm = () => {
    setConfirmPass(true);
    setData(initial);
  };

  const handleSignUp = (data) => {
    dispatch(authStart());
    signUp(data)
      .then((res) => dispatch(authSuccess(res)))
      .catch((e) => {
        console.error(e);
        dispatch(authFail());
      });
  };
  const handleLogIn = (data) => {
    dispatch(authStart());
    logIn(data)
      .then((res) => dispatch(authSuccess(res)))
      .catch((e) => {
        console.error(e);
        dispatch(authFail());
      });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? handleSignUp(data)
        : setConfirmPass(false);
    } else {
      handleLogIn(data);
    }
  };

  useEffect(() => {
    if (token) return navigate("/home");
  }, [token]);

  return (
    //   auth
    <div className="flex items-center justify-center h-[100vh] gap-[4rem] relative">
      {/* a left */}
      <div className="flex items-center justify-center gap-[2rem]">
        <FaTwitter className="text-orange text-[4rem]" />
        {/* webname */}
        <div>
          <h1 className="text-[3rem] bg-red-500 bg-buttonBg bg-100% bg-repeat bg-auth">
            ZKC Media
          </h1>
          <h6 className="text-[0.85rem] font-bold">
            Explore the ideas throughout the world
          </h6>
        </div>
      </div>
      {/* a right */}
      <div>
        {/* infoForm authform */}
        <form
          className="flex flex-col justify-center items-center gap-[2rem] bg-cardColor rounded-[1rem] p-[1rem]"
          onSubmit={handleSubmit}
        >
          <h3 className="font-bold">{isSignUp ? "Sign Up" : "Log In"}</h3>
          {isSignUp && (
            <div className={infoInputDivSty}>
              {/* infoInput */}
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                className={infoInputSty}
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                className={infoInputSty}
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div className={infoInputDivSty}>
            {/* infoInput */}
            <input
              type="text"
              placeholder="Userame"
              name="username"
              className={infoInputSty}
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div className={infoInputDivSty}>
            {/* infoInput */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              className={infoInputSty}
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmpass"
                className={infoInputSty}
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            className={
              confirmPass
                ? "hidden"
                : "block text-red-500 text-[12px] self-end mr-[5px]"
            }
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              className="text-[12px] cursor-pointer"
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
          <button
            className="flex items-center justify-center self-end text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] w-[6rem]hover:cursor-pointer "
            type="submit"
          >
            {loading ? "Loading..." : isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
