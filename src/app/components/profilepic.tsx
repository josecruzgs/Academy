"use client";
import { initFirebase } from '@/firebase';
import { getAuth } from 'firebase/auth';
import { Fragment, useEffect, useState } from "react";
import { getPremiumStatus } from "../account/getPremiumStatus";

function Profilepic() {
    const app = initFirebase();
    const auth = getAuth(app);
    const defaultProfilePhotoURL = '/images/avatar.png';
    const [photoURL, setPhotoURL] = useState(auth.currentUser?.photoURL || defaultProfilePhotoURL);
    const [loadingProfileImage, setLoadingProfileImage] = useState(true);
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


  return (
    <div>
            {photoURL && (
            <img src={photoURL} alt="Profile Photo" className='rounded-full rounded-full ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-800'/>
              )}
    </div>
  )
}

export default Profilepic