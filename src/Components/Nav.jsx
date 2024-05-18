import React, { useState } from "react";
import uzFlag from "../assets/images/Uzbekistan-flag.webp";
import ruFlag from "../assets/images/russia.png";
import { IoSearchSharp } from "react-icons/io5";
import { uz, ru } from "../lang";

const Nav = () => {
  const [flag, setFlag] = useState(true);
  const [lang, setLang] = useState(uz)
  const changeLang = (til) => {
    til == 'uz' ? setLang(ru): setLang(uz)
    setFlag(!flag)
  }
  return (
    <nav className="nav">
      <div className="nav_lang">
        <button className={`nav_lang_btn ${flag &&'active'}`} onClick={()=> changeLang('uz')}>
          <span>Uz</span>
          <img src={uzFlag} alt="" />
        </button>
        <button className={`nav_lang_btn ${!flag &&'active'}`} onClick={()=> changeLang('ru')}>
          <span>RU</span>
          <img src={ruFlag} alt="" />
        </button>
      </div>
      <div className="container">
        <h2 className="nav_title">{lang.appbartitle}</h2>
      </div>
      <button className="nav_search">
        <IoSearchSharp />
      </button>
    </nav>
  );
};

export default Nav;
