import React from 'react'
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { initFirebase } from "@/firebase";
import { Disclosure, Menu } from '@headlessui/react'
import Profilepic from "./profilepic";
import Subscription from "./subscription";

function Userbutton() {
    const app = initFirebase();
    const auth = getAuth(app);
    const email = auth.currentUser?.email;
    const userName = auth.currentUser?.displayName;
    const router = useRouter();
    const signOut = () => {
        auth.signOut();
        router.push("/");
    };
    

  return (
    <div> <Menu as="div" className="relative ml-3">
    <div>
        <Menu.Button className="relative flex rounded-full w-8 h-8 text-sm ">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <div className="w-8 h-8">
                <Profilepic />
            </div>
        </Menu.Button>
    </div>
    <Menu.Items className="absolute right-0 leading-8 bg-gray-800 border border-gray-700 z-50 mt-5 pl-4 text-sm text-white w-80 md:w-60 origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

        <Menu.Item>
            <div className="font-semibold -mb-2 pt-1text-base">
                {userName}
            </div>
        </Menu.Item>
        <Menu.Item>
            <div> {email}
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="-ml-4">
                <Subscription />
            </div>

        </Menu.Item>
        <Menu.Item>
            <div className='text-slate-300 hover:text-slate-100'>
            <a href="/account" >My Account</a>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className='cursor-pointer text-slate-300 hover:text-slate-100'>
            <a onClick={signOut}>Sign out</a>
            </div>
        </Menu.Item>
    </Menu.Items>
</Menu></div>
  )
}

export default Userbutton