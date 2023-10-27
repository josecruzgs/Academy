
"use client";
import { useEffect,useState } from "react";
import { initFirebase } from "@/firebase";
import { getPremiumStatus } from "../account/getPremiumStatus";
import React from 'react'
import { getAuth } from "firebase/auth";
import { PremiumPanel } from "../account/premiumPanel";
import { StandardPanel } from "../account/standardPanel";

function Usertype() {
    const app = initFirebase();
    const auth = getAuth(app);
    const [isPremium, setIsPremium] = useState(false);

    useEffect(() => {
        const checkPremium = async () => {
            const newPremiumStatus = auth.currentUser
                ? await getPremiumStatus(app)
                : false;
            setIsPremium(newPremiumStatus);
        };
        checkPremium();
    }, [app, auth.currentUser?.uid]);

    const statusPanel = isPremium ? <PremiumPanel /> : <StandardPanel />;

  return (
    <div>{statusPanel}</div>
  )
}

export default Usertype