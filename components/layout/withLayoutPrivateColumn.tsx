import React, { useContext } from "react";
import Menu from "../functionnal/Menu";
import AnonymousBanner from "../ui/AnonymousBanner";
import LoginBox from "../ui/LoginBox";
import SignOut from "../sign-out";

const withLayoutPrivateColumn = <P extends object>(Component: React.ComponentType<P>) =>
  function T(pageProps: any) {


    return (
      <>
        <Menu />
        <AnonymousBanner />
        <div id="page">
          <div
            style={{
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <SignOut />
          </div>
        </div>
      </>
    );
  };

export default withLayoutPrivateColumn;
