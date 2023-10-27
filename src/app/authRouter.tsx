"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { initFirebase } from "@/firebase";
import { User, getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const HOME_ROUTE = "/login";
const ACCOUNT_ROUTE = "/account";

const AuthRouter = (props: any) => {
  const app = initFirebase();
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const pathName = usePathname();

  const isAccountRoute = pathName === ACCOUNT_ROUTE;
  
  useEffect(() => {
    if (!loading) {
      if (isAccountRoute) {
        if (user) {
          // Usuario autenticado, permitir acceso a ACCOUNT
        } else {
          // Usuario no autenticado, redirigir a HOME_ROUTE
          router.push(HOME_ROUTE);
        }
      }
    }
  }, [loading, user, isAccountRoute]);

  if (loading) {
    return null;
  } else {
    return <>{props.children}</>;
  }
};

export default AuthRouter;
