import React, { useState } from "react";
const AboutMe = () => {
  const [hide, setHide] = useState(false);
  const handleHide = () => {
    setHide(!hide);
  };
  return (
    <div className="about_me_main">
      <div className="about_me_main_header_left">
        <div
          className="about_me_main_header_left_1"
          style={{ display: hide ? "flex" : "none" }}
        >
          <div>
            <div>
              <span className="hii"> Hii, Everyone</span>{" "}
              <span className="name">
                I am <u>Sunny</u>
              </span>
            </div>
            <div className="developer">- A Frontend Developer</div>
          </div>
        </div>
        <div className="about_me_main_header_left_2">
          {" "}
          <button onClick={handleHide}>click</button>hii every one
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
