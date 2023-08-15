import React, { useContext } from "react";
import Menu from "../functionnal/Menu";
import AnonymousBanner from "../ui/AnonymousBanner";
import LoginBox from "../ui/LoginBox";
import SignOut from "../sign-out";

const withLayoutPrivate = <P extends object>(Component: React.ComponentType<P>) =>
  function T(pageProps: any) {


    return (
      <>
        <Menu />
        <AnonymousBanner />
        <SignOut/>
          
      </>
    );
  };

export default withLayoutPrivate;
