import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ansari131211@gmail.com</span>
        <div className="f-icons">


        <a
            href="https://github.com/mdsamir8863"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Gitub color="white" size={"3rem"} />

          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100011308907974"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Facebook color="white" size={"3rem"} />

          </a>
          <a
            href="https://www.instagram.com/mdsamir.bkp/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Insta color="white" size={"3rem"} />

          </a>

    
        </div>
      </div>
    </div>
  );
};

export default Footer;
