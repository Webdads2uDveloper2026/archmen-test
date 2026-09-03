import Header from "@/components/Header";
import { MyProvider } from "@/components/ContextAPIProvide";
import { Fragment } from "react";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Interior designers in chennai | Home interior designer in chennai.",
    description: "View Arcmen's bedroom interior design project with elegant decor, customised furniture, smart storage solutions, and contemporary design elements.",
};

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
