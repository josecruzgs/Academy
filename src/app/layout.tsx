import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthRouter from "./authRouter";
import Navigation from "./components/navigation";
import Footer from "./components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vrakka Academy",
  description: "Turn your routine into a lucrative venture with our habit app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
    <html  lang="en" >
      <link rel="icon" href="/images/favicon.ico" />

      
      <body className={inter.className}>
        <AuthRouter>
          <div className="fixed w-full z-50 top-0 lg:pt-4 md:pt-2 ">
            <Navigation />
          </div>
          <div className="bg-dots-top bg-primary-100">
            <div className="bg-dots-bottom z-20">
              <div className="circletopright"></div>
              <div className="circlebottomleft"></div>
              <div className="text-white  items-center">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </AuthRouter>
      </body>
    </html>
   
  );
}
