import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <div className="form-control mb-4">
                  <label className="label">Enter Name</label>
                  <input
                    type="text"
                    className="input input-bordered dark:bg-slate-700"
                    placeholder="Enter your full name"
                    {...register("name", { required: true })}
                  />
                  <br />
                  {errors.name && (
                    <span className="text-red-500 text-xs">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="form-control mb-4">
                  <label className="label">Enter Email</label>
                  <input
                    type="email"
                    className="input input-bordered dark:bg-slate-700"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-red-500 text-xs">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="form-control mb-4">
                  <label className="label">Enter Mobile Number</label>
                  <input
                    type="tel"
                    className="input input-bordered dark:bg-slate-700"
                    placeholder="Enter your mobile number"
                    {...register("mobile", {
                      required: true,
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Invalid mobile number",
                      },
                    })}
                  />
                  <br />
                  {errors.mobile && (
                    <span className="text-red-500 text-xs">
                      {errors.mobile.message}
                    </span>
                  )}
                </div>

                <div className="form-control mb-4">
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input input-bordered dark:bg-slate-700"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-red-500 text-xs">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="form-control mb-6">
                  <label className="label">Confirm Password</label>
                  <input
                    type="password"
                    className="input input-bordered dark:bg-slate-700"
                    placeholder="Confirm your password"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  <br />
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-xs">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn bg-secondary text-white w-full hover:bg-secondary-dark transition duration-300"
                >
                  Signup
                </button>

                <p className="text-center mt-4 text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500 underline">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
