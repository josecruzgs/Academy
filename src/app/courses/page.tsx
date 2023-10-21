"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import { initFirebase } from "@/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getPremiumStatus } from '../account/getPremiumStatus';

function courses() {

    const app = initFirebase();
const auth = getAuth(app);

const userName = auth.currentUser?.displayName;
  const email = auth.currentUser?.email;
  const router = useRouter();
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

  const statusPanel = isPremium ? <>Hola premium</> : <>Hola Standar</>;

  return (

    <>
    <div>Courses</div>
   {statusPanel}
    </>
  )
}

export default courses