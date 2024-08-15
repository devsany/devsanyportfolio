import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
const AboutMe = () => {
  const [hide, setHide] = useState(true);
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
          <div>
            <div className="left_cornor_1">
              <div className="header_skill">
                <div className="showSkill">
                  <h2>🏫Education</h2>
                </div>
                <div className="show">
                  {/* {showCoreTechnology ? "Hide" : "Show"}{" "} */}
                </div>
              </div>
              <div className="location">
                <div
                  className="local"
                  // style={{ display: showCoreTechnology ? "flex" : "none" }}
                >
                  <div>Martriculation</div>
                  <div style={{ width: 25, height: 25 }}>2018</div>
                </div>
                <div
                  className="local"
                  // style={{ display: showCoreTechnology ? "flex" : "none" }}
                >
                  <div>Intermediate</div>
                  <div style={{ width: 25, height: 25 }}>2020</div>
                </div>
                <div
                  className="local"
                  // style={{ display: showCoreTechnology ? "flex" : "none" }}
                >
                  <div>BCA</div>
                  <div style={{ width: 25, height: 25 }}>2024</div>
                </div>
              </div>
            </div>
            <div className="left_cornor_1">
              <div className="header_skill">
                <div className="showSkill">
                  <h2>🎮Hobby</h2>
                </div>
                <div className="show">
                  {/* {showCoreTechnology ? "Hide" : "Show"}{" "} */}
                </div>
              </div>
              <div className="location">
                <div
                  className="local"
                  // style={{ display: showCoreTechnology ? "flex" : "none" }}
                >
                  <div>Learn about Tech</div>
                  <div style={{ width: 25, height: 25 }}>
                    <CircularProgressbar value={91} />
                  </div>
                </div>
                <div
                  className="local"
                  // style={{ display: showCoreTechnology ? "flex" : "none" }}
                >
                  <div>Coding</div>
                  <div style={{ width: 25, height: 25 }}>
                    <CircularProgressbar value={100} />
                  </div>
                </div>
                <div
                  className="local"
                  // style={{ display: showCoreTechnology ? "flex" : "none" }}
                >
                  <div>Poster Editing</div>
                  <div style={{ width: 25, height: 25 }}>
                    <CircularProgressbar value={91} />
                  </div>
                </div>
                <div
                  className="local"
                  // style={{ display: showCoreTechnology ? "flex" : "none" }}
                >
                  <div>Teaching</div>
                  <div style={{ width: 25, height: 25 }}>
                    <CircularProgressbar value={80} />
                  </div>
                </div>
                <div
                  className="local"
                  // style={{ display: showCoreTechnology ? "flex" : "none" }}
                >
                  <div>Traveling</div>
                  <div style={{ width: 25, height: 25 }}>
                    <CircularProgressbar value={75} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
