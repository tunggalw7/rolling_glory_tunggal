import React from "react";
import twitterIcon from "assets/images/icon-twitter.svg";
import facebookIcon from "assets/images/icon-facebook.svg";
import instagramIcon from "assets/images/icon-instagram.svg";

function Footer() {
  return (
    <footer className="grid 2md:flex justify-center 2md:justify-between items-center bg-gray text-white 2md:py-4 2md:px-32 h-full text-center 2md:h-24 z-50 cursor-pointer">
      <div className="flex text-center gap-8 2md:m-0 m-auto my-6 items-center">
        <img src={instagramIcon} alt="twitter" />
        <img src={facebookIcon} alt="twitter" />
        <img src={twitterIcon} alt="twitter" />
      </div>
      <div className="grid 2md:flex 2md:gap-8 text-sm 2md:mb-0 mb-6">
        <p>Terms & Condition</p>
        <p>|</p>
        <p>Copyright © 2018. All rights reserved. PT Radya Gita Bahagi</p>
      </div>
    </footer>
  );
}

export default Footer;
