import Header from "@/components/Header";
import { MyProvider } from "@/components/ContextAPIProvide";
import { Fragment } from "react";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <MyProvider>
        {children}
      </MyProvider>
      <Footer />
    </Fragment>
  );
}
