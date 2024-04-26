import React from "react";

import { FooterLogoDescription } from "./FooterLogoDescription";
import { FooterJoinBox } from "./FooterJoinBox";
import { FooterMenu } from "./FooterMenu";
import { FooterCopyright } from "./FooterCopyright";

const Footer = () => {
  return (
    <div className="footer">
      <FooterLogoDescription />
      <FooterJoinBox />
      <FooterMenu />
      <FooterCopyright />
    </div>
  );
};

export { Footer };
