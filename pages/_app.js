import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import OffCanvasMenu from "@/components/offCanvasMenu/OffCanvasMenu";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [menuStatus, setMenuStatus] = useState("close");
  const router = useRouter();
  useEffect(() => {
    setMenuStatus("close");
  }, [router.asPath]);

  return (
    <AppContext.Provider value={{ menuStatus, setMenuStatus }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      {menuStatus == 'open' &&  <OffCanvasMenu />}
    </AppContext.Provider>
  );
}
