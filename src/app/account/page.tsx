"use client";
import { useRouter } from "next/navigation";
import { PremiumPanel } from "../account/premiumPanel";
import { StandardPanel } from "../account/standardPanel";
import { Fragment, useEffect, useState } from "react";
import { initFirebase } from "@/firebase";
import { getAuth } from "firebase/auth";
import { getCheckoutUrl, getPortalUrl } from "../account/stripePayment";
import { getPremiumStatus } from "../account/getPremiumStatus";
import { FaBookReader } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BsBookmarkCheckFill } from "react-icons/bs";
import Breadcrumb from "../components/breadcrum";
import CoursesTake from "./coursestake";
import Quiztable from "./quiztable";
import DarkButton from "../components/darkbutton";


const breadcrumbItems = [
  { href: "/", text: "Home" },
  { href: "/account", text: "My Account" },
  // { href: "/categoria/subcategoria", text: "Subcategoría" },
  // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
];

export default function AccountPage() {

  const app = initFirebase();
  const auth = getAuth(app);
  const userName = auth.currentUser?.displayName;
  const email = auth.currentUser?.email;
  const defaultProfilePhotoURL = '/images/avatar.png';
  const [photoURL, setPhotoURL] = useState(auth.currentUser?.photoURL || defaultProfilePhotoURL);
  const [loadingProfileImage, setLoadingProfileImage] = useState(true);

  const router = useRouter();
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const photoURL = user.photoURL;
        setIsPremium(await getPremiumStatus(app));
        setPhotoURL(photoURL || defaultProfilePhotoURL);
        setLoadingProfileImage(false); // Mark the image as loaded
      } else {
        setIsPremium(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [app, auth]);


  useEffect(() => {
    const checkPremium = async () => {
      const newPremiumStatus = auth.currentUser
        ? await getPremiumStatus(app)
        : false;
      setIsPremium(newPremiumStatus);
    };
    checkPremium();
  }, [app, auth.currentUser?.uid]);

  const upgradeToPremium = async () => {
    const priceId = "price_1O2JRlKwnCNgrsJqB6SrWWS9";
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    router.push(checkoutUrl);
    console.log("Upgrade to Premium");
  };

  const manageSubscription = async () => {
    const portalUrl = await getPortalUrl(app);
    router.push(portalUrl);
    console.log("Manage Subscription");
  };

  const signOut = () => {
    auth.signOut();
    router.push("/");
  };

  const upgradeToPremiumButton = (
    <button
      onClick={upgradeToPremium}
      className="bg-purple-700 p-2 ml-3 my-2 text-white px-6 text-lg rounded-lg hover:bg-purple-600 shadow-lg"
    >
      <div className="flex text-sm font-semibold items-center align-middle justify-center ">
        Upgrade To Premium
      </div>
    </button>
  );

  const managePortalButton = (
    <button
      onClick={manageSubscription}
      className="bg-slate-200 dark:bg-slate-700 border border-gray-300 rounded-full dark:border-slate-500 shadow-lg"
    >
      <div className="flex pl-4 items-center py-2 px-6 align-middle text-slate-800 dark:text-white  hover:text-white text-sm justify-center">
        Manage Subscription
      </div>
    </button>
  );



  const InfoNoLogeado = (
    <button

      className="text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
    >
      <a href="/login">
        <div className="flex gap-2 items-center align-middle">
          Academic Access
        </div></a>
    </button>
  );

  const InfoLogeado = (
    <button
      onClick={signOut}
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Sign Out
    </button>
  );


  const statusPanel = isPremium ? <PremiumPanel /> : <StandardPanel />;
  const memberButton = isPremium ? managePortalButton : upgradeToPremiumButton;

  const breadcrumbItems = [
    { href: "/", text: "Home" },
    { href: "/account", text: "My Account" },
    // { href: "/categoria/subcategoria/mipagina", text: "Mi Página" },
  ];

 

  return (
   
    <>
    
      <div className="antialiased pt-10 relative mt-10 lg:mt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-700 dark:text-gray-300 pb-4 md:pb-1">My Account</h1>
          <div className="pb-4 md:pb-4">
            <Breadcrumb items={breadcrumbItems} />
            
          </div>
          <div className="p-4 bg-slate-300 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-600">
            <div className="flex flex-col sm:flex-row gap-4">

              <div className="w-full md:w-1/3 ">
                <div id="left" className="h-full mx-auto my-auto border border-gray-100 dark:border-gray-600 py-8 items-center my-auto text-center shadow-xl bg-slate-200  dark:bg-gray-900 rounded-lg">
                  <div className="justify-center flex">
                    {photoURL && (
                      <img src={photoURL} alt="Profile Photo" className="w-24 h-24 rounded-full border-2" />
                    )}
                  </div>
                  <div className="font-semibold text-gray-700 dark:text-gray-200 text-xl pt-4">
                    {userName}
                  </div>
                  <div className="text-gray-700 dark:text-gray-200">
                    {email}
                  </div>
                  <div className="mx-auto text-gray-700 dark:text-gray-200  justify-center flex py-6">
                    {statusPanel}
                  </div>
                  <div className="mx-auto text-gray-700 dark:text-gray-200 justify-center flex ">
                    {memberButton}
                  </div>
                 
                </div>
              </div>



              <div id="right" className="md:w-2/3 w-full">

                <div className="md:flex mb-4 gap-x-4 gap-y-4">

                  <div id="col1" className="basis-1/2 border border-gray-100 dark:border-gray-600 flex rounded-lg flex mb-4 shadow-xl md:mb-0 items-center md:basis-1/4 p-4 bg-slate-200 dark:bg-gray-900 ">
                    <FaBookReader className="h-10 w-10 mx-auto text-slate-400 dark:text-slate-700" />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-sm  font-medium text-gray-500 dark:text-gray-400">Courses taken</p>
                      <p className="text-lg font-semibold  text-xl text-purple-500">12</p>
                    </div>
                  </div>

                  <div id="col3" className="basis-1/2 dlex rounded-lg border border-gray-100 dark:border-gray-600 flex mb-4 md:mb-0 shadow-xl items-center md:basis-1/4 p-4 bg-slate-200 dark:bg-gray-900">
                    <GiReceiveMoney className="h-10 w-10 mx-auto text-slate-400 dark:text-slate-700" />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-sm  font-medium text-gray-500 dark:text-gray-400">VKRs Owned</p>
                      <p className="text-lg font-semibold  text-xl text-green-500">2256<span className="text-xs pl-2">VRK</span></p>
                    </div>
                  </div>

                  <div id="col3" className="w-full rounded-lg flex mb-4 border border-gray-100 dark:border-gray-600 md:mb-0 items-center shadow-xl md:basis-1/2 p-4 bg-slate-200 dark:bg-gray-900">
                    <BsBookmarkCheckFill className="h-10 w-10 mx-auto text-slate-400 dark:text-slate-700" />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-sm  font-medium text-gray-500 dark:text-gray-400">Education topics with best performance</p>
                      <p className="text-lg font-semibold  text-xl text-gray-700 dark:text-gray-200">Blockchain / NFTs</p>
                    </div>
                  </div>

                </div>

                <div className="mb-4">
                  
                   <Quiztable/>
                 
                </div>


                <div>
                  <div className="w-full ">
                    <CoursesTake />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
    
  );
}
