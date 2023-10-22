"use client";
import { initFirebase } from "@/firebase";
import { useRouter } from "next/navigation";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

export default function Register() {

  const handleLoginClick = () => {
    router.push("/login"); 
  }; 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const router = useRouter();

  const app = initFirebase();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (user) {
      goToAccount();
    }
  };


  const goToAccount = () => {
    router.push("/account");
  };

  return (
    <>
      <div>
        <section className="">
          <div className="flex flex-col items-center justify-center h-screen px-6  mx-auto md:h-screen lg:py-0">

            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  Create your account
                </h1>

                <div className="sign-in-container">

                  <form className="space-y-4 md:space-y-6" onSubmit={signUp}>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-white">Your email</label>
                      <input type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} className="border  sm:text-sm rounded-lg block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"  />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-white">Password</label>
                      <input type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Account</button>
                    <p className="text-sm font-light text-gray-300 flex justify-center items-center m-auto">
                    Already have an account <a href="#"  onClick={handleLoginClick}className="font-medium hover:underline text-purple-400 pl-2">Login</a>
                    </p>
                  </form>

                </div>
               
              </div>
            </div>
          </div>
        </section>
      </div>

    </>

  )
}
