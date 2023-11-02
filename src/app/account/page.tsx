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
import Profilepic from "../components/profilepic";

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
      className=" rounded-gull py-2 border rounded-full border-gray-600 shadow-lg px-4"
    >
      <div className="flex  items-center align-middle  text-slate-300 hover:text-white text-sm justify-center">
        Manage Subscription
      </div>
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
      <div className="antialiased pt-10 relative mt-10 lg:mt-10 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="text-5xl md:text-5xl font-bold mb-5 text-left text-gray-300 pb-4 md:pb-1">My Account</h1>
          <div className="pb-4 md:pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="p-4 glass-box rounded-2xl">
            <div className="flex flex-col sm:flex-row gap-4">

              <div className="w-full md:w-1/3 ">
                <div id="left" className="h-full bg-dots-top mx-auto my-auto  py-8 items-center  text-center border border-slate-800 shadow-xl bg-gray-900 rounded-lg">
                  <div className="justify-center items-center mx-auto flex w-24 h-24 ">
                   <Profilepic/>
                  </div>
                  <div className="font-semibold text-xl pt-4">
                    {userName}
                  </div>
                  <div>
                    {email}
                  </div>
                  <div className="mx-auto justify-center flex py-6">
                    {statusPanel}
                  </div>
                  <div className="mx-auto justify-center flex py-6">
                    {memberButton}
                  </div>
                 
                </div>
              </div>



              <div id="right" className="md:w-2/3 w-full">

                <div className="md:flex mb-4 gap-x-4 gap-y-4">

                  <div id="col1" className="basis-1/2 flex rounded-lg  mb-4 border border-slate-800 shadow-xl md:mb-0 items-center md:basis-1/4 p-4 bg-gray-900 ">
                    <FaBookReader className="h-10 w-10 mx-auto text-purple-500" />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-sm  font-medium text-gray-400">Courses taken</p>
                      <p className="text-lg font-semibold   text-purple-500">12<span className="text-xs pl-2">Courses</span></p>
                    </div>
                  </div>

                  <div id="col3" className="basis-1/2 dlex rounded-lg flex mb-4 md:mb-0 shadow-xl border border-slate-800 items-center md:basis-1/4 p-4 bg-gray-900 ">
                    <GiReceiveMoney className="h-10 w-10 mx-auto text-green-500" />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-sm  font-medium text-gray-400">Points Owned</p>
                      <p className="text-lg font-semibold   text-green-500">2256<span className="text-xs pl-2">Points</span></p>
                    </div>
                  </div>

                  <div id="col3" className="w-full rounded-lg flex mb-4 md:mb-0 items-center shadow-xl border border-slate-800 md:basis-1/2 p-4 bg-gray-900 ">
                    <BsBookmarkCheckFill className="h-10 w-10 mx-auto text-orange-400" />
                    <div className="text-right mx-auto">
                      <p className="mb-2 text-sm  font-medium text-gray-400">Education topics with best performance</p>
                      <p className="text-lg font-semibold   text-gray-200">Blockchain / NFTs</p>
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
