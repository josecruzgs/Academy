"use client";
import { initFirebase } from "@/firebase";
import { useRouter } from "next/navigation";
import { getCheckoutUrl, getPortalUrl } from "../account/stripePayment";
import React from 'react'
import { Fragment, useState } from "react";


function Subscription() {
    const app = initFirebase();
    const router = useRouter();
    const [isPremium, setIsPremium] = useState(false);

    
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
            className=" rounded-gull pt-2 shadow-lg"
        >
            <div className="flex pl-4 items-center pb-2 align-middle  text-slate-300 hover:text-white text-sm justify-center">
                Manage Subscription
            </div>
        </button>
        
    );

    
    const memberButton = isPremium ? managePortalButton : upgradeToPremiumButton;

  return (
    <div>{memberButton}</div>
  )
}

export default Subscription