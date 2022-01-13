import React from "react";
import { AiFillHeart } from "react-icons/ai";
import Template from "../../Template";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <Template>
        <div className="containerFooter">
          <p className="firstInfo">
            &copy; <span>2022 | All Rights Reserved |</span>
          </p>
          <div>
            <p>Developed with</p>
            <AiFillHeart />
          </div>
          <p>by Vlad Babiak in SoftServe Academy</p>
        </div>
      </Template>
    </footer>
  );
}
