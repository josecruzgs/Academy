"use client";
import { initFirebase } from "@/firebase";
import { useRouter } from "next/navigation";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";

export default function Login() {



  const [error, setError] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleSignUpClick = () => {
    router.push("/register");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const app = initFirebase();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);

  const openForgotPasswordPopup = () => {
    setShowForgotPasswordPopup(true);
  };

  const closeForgotPasswordPopup = () => {
    setShowForgotPasswordPopup(false);
  };


  const signIn = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successful login
        const user = userCredential.user;
        console.log(userCredential);
        if (user) {
          // Redirect to the "/account" page
          router.push("/account");
        }
      })

      .catch((error) => {
        setError("Invalid user. Verify your email and password.");
        setShowErrorPopup(true); // Mostrar el popup de error
        console.log(error);
      });
  };

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (user) {
      goToAccount();
    }
  };


  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, forgotPasswordEmail)
      .then(() => {
        toast.success("Password reset email sent. Check your email.");
        closeForgotPasswordPopup(); // Cierra el popup después del éxito
      })
      .catch((error) => {
        console.error(error);
        toast.error("Password reset email could not be sent. Check your email address.");
      });
  };



  const goToAccount = () => {
    router.push("/account");
  };

  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  const notify = () => toast("Wow so easy!");

  return (
    <>
      <div>
        <section className="pt-1 lg:pt-10">
          <div className="flex flex-col items-center justify-center h-screen px-6  mx-auto md:h-screen lg:py-0">
            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  Sign in to your account
                </h1>
                <div className="sign-in-container">
                  <div>
                  </div>
                  <form className="space-y-4 md:space-y-6" onSubmit={signIn}>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-white">Your email</label>
                      <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        autoComplete="email" // Agrega esta línea
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-white">Password</label>
                      <input type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start items-center text-center justify-center ">
                      </div>
                      <a
                        onClick={() => setShowForgotPasswordPopup(true)}
                        className="text-sm font-medium  text-center flex justify-center items-center m-auto hover:underline text-gray-200 cursor-pointer"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button type="submit" className="w-full text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-600 hover:bg-purple-700 focus:ring-gray-800">Sign in</button>
                    <p className="text-sm font-light text-gray-400  flex justify-center items-center m-auto ">
                      Don’t have an account yet? <a href="#" onClick={handleSignUpClick} className="font-medium  hover:underline text-purple-500 pl-2"> Sign up</a>
                    </p>
                  </form>
                  {showForgotPasswordPopup && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                      <div className="bg-gray-800 border-purple-900 border  p-8 rounded-lg  shadow-lg">
                        <h2 className="text-lg font-semibold mb-4 text-gray-200">Forgot Password</h2>
                        <p className="text-gray-200 mb-4">Please enter your email address to reset your password:</p>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={forgotPasswordEmail}
                          onChange={(e) => setForgotPasswordEmail(e.target.value)}
                          className="w-full p-2 border rounded-lg mb-4 text-gray-900"
                        />

                        <div className="flex justify-end">
                          <button
                            onClick={closeForgotPasswordPopup}
                            className="text-primary-600 hover:underline cursor-pointer mr-4"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleForgotPassword}
                            className="text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2 text-center"
                          >
                            Reset Password
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {showErrorPopup && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                      <div className="bg-gray-800 border border-purple-500 p-8 rounded-lg shadow-lg">
                        <FcAbout className="h-20 w-20 text-white text-center flex justify-center items-center m-auto" />
                        <p className="text-white text-center">{error}</p>
                        <button
                          onClick={() => setShowErrorPopup(false)}
                          className="mt-4 w-full text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py-2 text-center"
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  )}

                </div>
                <button onClick={signInWithGoogle} className="w-full text-black bg-white hover:bg-slate-100 focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center">
                  <FcGoogle className="mr-2 w-5 h-5" />
                  Sign in with Google
                </button>

              </div>
            </div>
          </div>
        </section>
      </div>

    </>

  )
}
