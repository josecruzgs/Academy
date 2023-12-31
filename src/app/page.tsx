"use client";
import { initFirebase } from "@/firebase";
import { useRouter } from "next/navigation";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Carrousel from "./components/carrousel";
import Spotlightscards from "./components/spotlights-cards";
import HowWork from "./components/howwork";
import CoursesSection from "./components/coursesSection";
import Steps from "./components/steps";
import Testimonials from "./components/fancy-testimonial-slider";
import Byvrakka from "./components/byvrakka";
import VideoWelcome from "./components/videowelcome";
import VideoThumb from "../../public/images/videocover.webp"

export default function Home() {
  const router = useRouter();

  const app = initFirebase();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    provider.setCustomParameters({ prompt: 'select_account' });

    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (user) {
      goToAccount();
    }
  };

  const rightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );

  const goToAccount = () => {
    router.push("/account");
  };



  return (
    <>
      <div className="antialiased  relative pt-20 ">
        <div className=" mx-auto max-w-screen-xl text-center ">

          <div className="antialiased  relative   ">

            <div className="flex flex-col md:flex-row">

              <div className="w-full md:w-1/2 py-4">
                <div className="py-2 px-4 mx-auto max-w-screen-xl text-center md:text-left md:justify-left lg:pt-8 md:pl-2">
                  <a href="https://vrakka.com" target="_blank" className="inline-flex justify-between bg-black items-center py-1 px-1 pr-4 mb-7 text-sm  rounded-full  text-white  hover:bg-gray-900" role="alert">
                    <span className="text-xs bg-primary-500 rounded-full text-white px-4 py-1.5 mr-3">Are you ready?</span>
                    <span className="text-sm font-medium">Visit vrakka.com</span>
                    <svg className="ml-2 w-10 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  </a>
                  <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300">Where Innovation Meets</h1>
                  <p className="text-6xl font-bold  mb-4  bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">Web 3.0 Education</p>
                  <div className="md:text-left">
                    <p className="mb-2 text-white text-base font-normal lg:text-lg   ">
                      In our academy, we are not only teaching about cryptocurrencies and blockchain but also contributing to building a more inclusive and equitable future through technology. We invite you to join this mission"</p>
                  </div>
                  <div className="flex flex-col mt-10 mb-8 lg:mb-10 space-y-4 sm:flex-row md:justify-start sm:space-y-0 sm:space-x-4">
                    <a href="/register" className="inline-flex text-gray-100 justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-primary-800 focus:ring-4 focus:ring-primary-900">
                      Start Now
                      <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2  flex flex-col justify-center items-center">
                <div className="text-center p-2">
                  <VideoWelcome
                    thumb={VideoThumb}
                    thumbWidth={900}
                    thumbHeight={732}
                    thumbAlt="Vrakka Academy"
                    video="/videos/vrakka.mp4"
                    videoWidth={660}
                    videoHeight={415}
                  />
                </div>
              </div>
            </div>




          </div>
          <Spotlightscards />
          <HowWork />
          <CoursesSection />
          <Steps />
          <Testimonials />
          <div className="px-4 pb-2 md:pb-12 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-300 uppercase">FEATURED BY</span>
            <Carrousel />
          </div>
          <Byvrakka />

        </div>
      </div>

    </>
  );
}
