import React from "react";
import "./header.scss";
import Button from "../Button";
import LogoImgSvg from "../svg/LogoImgSvg";
import LogoTextSvg from "../svg/LogoTextSvg";

const Header = () => {
  return (
    <header className="header">
      <div className="outer-container">
        <div className="header__menu">
          <div className="header__logo">
            <LogoImgSvg />
            <LogoTextSvg />
          </div>
          <div className="header__buttons">
            <Button text="Users" />
            <Button text="Sign up" />
          </div>
        </div>
        {/* перенести в меин, поправить контеинер  изменить классы */}
      </div>
    </header>
  );
};
export default Header;
