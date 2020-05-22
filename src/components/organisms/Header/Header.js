import "./Header.css";

import React from "react";

import { ReactComponent as Hamburger } from "../../../icons/hamburger.svg";
import { ReactComponent as Inbox } from "../../../icons/inbox.svg";
import { ReactComponent as Logo } from "../../../icons/logo.svg";

const Header = () => {
  const baseclass = "header";

  return (
    <header className={baseclass}>
      <Logo className={`${baseclass}_logo`} />
      <div className={`${baseclass}__extras`}>
        <Inbox className={`${baseclass}__extras_inbox`} />
        <Hamburger className={`${baseclass}__extras_hamburger`} />
      </div>
    </header>
  );
};

export default Header;
