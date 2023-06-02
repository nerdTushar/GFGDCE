import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import Loader from "../components/Loader";
import Error from "../components/Error";

const initialValues = {
  email: "",
  password: "",
  agreeToTerms: false,
};

const LoginScreen = () => {
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginState;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        dispatch(loginUser(values));
        action.resetForm();
      },
    });

  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Something Went Wrong" />}
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <div className="flex flex-row justify-between px-20 mt-4">
        <div className="w-1/2 px-20 flex flex-col justify-center">
          <h1 className="text-5xl text-center font-black">Welcome Back</h1>
          <form onSubmit={handleSubmit}>
            <div className="md:mt-14 mt-10 relative">
              <input
                type="email"
                placeholder="Email"
                className="border-solid border-2 shadow-sm shadow-gray-400 border-black bg-white/5 font-black outline-none text-gfgmaincolor rounded-lg focus:border-gfgmaincolor py-2 px-4 w-full"
                autoComplete="off"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.email === "" ? null : errors.email && touched.email ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.email === "" && errors.email && touched.email ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.email && touched.email ? (
                <p className="text-red-500">{errors.email}</p>
              ) : null}
            </div>

            <div className="mt-5 relative">
              <input
                type="password"
                placeholder="Password"
                className="border-solid border-2 shadow-sm shadow-gray-400 border-black bg-white/5 font-black outline-none text-gfgmaincolor rounded-lg focus:border-gfgmaincolor py-2 px-4 w-full"
                autoComplete="off"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.password === "" ? null : errors.password &&
                touched.password ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : (
                <AiFillCheckCircle className="absolute fill-green-500 right-4 text-xl top-3" />
              )}
              {values.password === "" && errors.password && touched.password ? (
                <AiFillExclamationCircle className="absolute fill-red-500 right-4 text-xl top-3" />
              ) : null}
              {errors.password && touched.password ? (
                <p className="text-red-500">{errors.password}</p>
              ) : null}
            </div>
            <div className="mt-5 flex justify-start items-center w-full">
              <input
                type="checkbox"
                className="border-solid border-2 rounded-3xl border-gfgmaincolor"
                name="agreeToTerms"
                checked={values.agreeToTerms}
                onChange={handleChange}
                style={{ accentColor: "#308d42" }}
              />
              <span className="ml-2 text-black flex">
                I accept the &nbsp;{" "}
                <p className="text-gfgmaincolor hover:text-black font-bold">
                  Terms of Use
                </p>
                &nbsp; & &nbsp;
                <p className="text-gfgmaincolor hover:text-black font-bold">
                  Privacy Policy
                </p>
              </span>
            </div>
            {errors.agreeToTerms && touched.agreeToTerms && (
              <div className="text-red-500">{errors.agreeToTerms}</div>
            )}
            <div className="md:mt-14 mt-8">
              {values.agreeToTerms === false ||
              (errors.agreeToTerms && touched.agreeToTerms) ? (
                <button
                  className="w-full bg-black/40 rounded-lg shadow-sm shadow-gray-400 font-black hover:bg-gfgmaincolor/40 hover:text-white py-3 text-center text-white"
                  type="submit"
                >
                  Log in!
                </button>
              ) : (
                <button
                  className="w-full bg-black rounded-lg shadow-sm shadow-gray-400 font-black hover:bg-gfgmaincolor hover:text-white py-3 text-center text-white"
                  type="submit"
                >
                  Log in!
                </button>
              )}
            </div>
          </form>
          <span className="text-black mt-5">
            Don't Have an Account ? &nbsp;
            <NavLink
              to="/signup"
              className="text-gfgmaincolor hover:text-black font-black"
            >
              Sign up!
            </NavLink>
          </span>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src="../images/toolsitems.png" alt="not valid" />
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
