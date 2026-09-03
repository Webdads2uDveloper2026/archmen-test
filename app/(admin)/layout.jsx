import { Fragment } from "react";

export const metadata = {
  title: "Arcmen Admin Panel ",
  description: "Welcome to admin panel",
};

export default function RootLayout({ children }) {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
