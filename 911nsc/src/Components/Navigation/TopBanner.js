import React from "react";
import "../../styles/TopBanner.scss";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function TopBanner() {
  return (
    <div className="top-banner-container">
      <div className="row justify-content-end">
        <div className="col-2">
          <FontAwesomeIcon icon={faPhone} className="top-banner-icon" />
          +58 4123067875
        </div>
        <div className="col-2">
          <FontAwesomeIcon icon={faEnvelope} className="top-banner-icon" />
          911Nscreaciones@gmail.com
        </div>
      </div>
    </div>
  );
}
