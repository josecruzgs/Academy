"use client";
import { initFirebase } from "@/firebase";
import { useRouter } from "next/navigation";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Icon } from '@iconify/react';


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

  // const openForgotPasswordPopup = () => {
  //   setShowForgotPasswordPopup(true);
  // };

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
    try {
        await auth.signOut(); // Cierra la sesión actual
        provider.setCustomParameters({ prompt: 'select_account' }); // Habilita la selección de cuenta
        const result = await signInWithPopup(auth, provider); // Inicia sesión con Google
        const user = result.user;

        if (user) {
            goToAccount();
        }
    } catch (error) {
        console.error(error);
    }
};

  const goToAccount = () => {
    router.push("/account");
  };

  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  return (
    <>
      <div>
        <section >
          <div className="flex flex-col items-center text-white justify-center h-screen px-6 mx-auto md:h-screen lg:py-0">
            <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-100 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <div className="sign-in-container">
                  <div>
                  </div>
                  <form className="space-y-4 md:space-y-6" onSubmit={signIn}>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-200 ">Your email</label>
                      <input type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} className="bg-gray-800 border border-gray-800 text-gray-200 sm:text-sm rounded-lg focus:ring-gray-800 focus:border-gray-600 block w-full p-2.5" />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Password</label>
                      <input type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} className="bg-gray-800 border border-gray-800 text-gray-200 sm:text-sm rounded-lg focus:ring-gray-800 focus:border-gray-600 block w-full p-2.5" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start items-center text-center justify-center ">
                      </div>
                      <a
                        onClick={() => setShowForgotPasswordPopup(true)}
                        className="text-sm font-medium text-primary-600 text-center flex justify-center items-center m-auto hover:underline dark:text-primary-500 cursor-pointer"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p className="text-sm font-light text-gray-200 dark:text-gray-400  flex justify-center items-center m-auto ">
                      Don’t have an account yet? <a href="#" onClick={handleSignUpClick} className="font-medium text-primary-600 hover:underline dark:text-primary-500 pl-2"> Sign up</a>
                    </p>
                  </form>
                  {showForgotPasswordPopup && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                      <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Forgot Password</h2>
                        <p className="text-gray-600 mb-4">Please enter your email address to reset your password:</p>
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
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
                      <div className="bg-white p-8 rounded-lg shadow-lg">
                        <UserCircleIcon className="h-20 w-20 text-purple-500 text-center flex justify-center items-center m-auto" />
                        <p className="text-gray-800 text-center">{error}</p>
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
                <button onClick={signInWithGoogle} className="w-full text-black flex justify-center items-center  bg-slate-200 hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                <span className="mr-4 text-blue-700 font-bold">
                <Icon icon={"simple-icons:google"} />
    </span>
    Sign in with Google</button>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>

  )
}
