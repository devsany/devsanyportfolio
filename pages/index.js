import Image from "next/image";
import { Inter } from "next/font/google";
import { CircularProgressbar } from "react-circular-progressbar";
import { useState } from "react";
import AboutMe from "./component/AboutMe";
import RecentProject from "./component/RecentProject";
import Card from "./component/Card";
import RecentSkill from "./component/RecentSkill";
import Skill from "./component/Skill";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hide, setHide] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showCoreTechnology, setShowCoreTechnology] = useState(false);
  const [showCss, setShowCss] = useState(false);
  const [showJavascript, setShowJavascript] = useState(false);
  const [showFrameWork, setShowFrameWork] = useState(false);
  const [showVersion, setShowVersion] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [showApi, setShowApi] = useState(false);
  const handleHide = () => {
    setHide(!hide);
  };
  const handleShowSkill = () => {
    setShowSkill(!showSkill);
  };
  const handleLocaiton = () => {
    setShowLocation(!showLocation);
  };
  const handleCoreTechnology = () => {
    setShowCoreTechnology(!showCoreTechnology);
  };
  const handleCss = () => {
    setShowCss(!showCss);
  };
  const handleJavascript = () => {
    setShowJavascript(!showJavascript);
  };
  const handleFramework = () => {
    setShowFrameWork(!showFrameWork);
  };
  const handleVersion = () => {
    setShowVersion(!showVersion);
  };
  const handleTest = () => {
    setShowTest(!showTest);
  };
  const handleApi = () => {
    setShowApi(!showApi);
  };
  return (
    <main>
      <div className="nav">
        <div>
          <button className="location" onClick={handleHide}>
            {hide ? "Show Description ->" : "<- hide Description"}
          </button>
        </div>
        <div className="navbar location">Navbar</div>
      </div>
      <div className="main">
        <div className="left" style={{ display: hide ? "none" : "block" }}>
          <div className="left_cornor_1">
            <div className="location">
              <img src="" alt="" />
              <h2>Sunny Sharma</h2>
              <h3>Front-end Developer</h3>
            </div>
          </div>
          <div className="left_cornor_1">
            <div className="header_skill" onClick={handleLocaiton}>
              <div className="showSkill">
                <h2>🚓 Location</h2>
              </div>
              <div className="show">{showLocation ? "Hide" : "Show"} </div>
            </div>
            <div className="location">
              <div
                className="local"
                style={{
                  display: showLocation ? "flex" : "none",
                }}
              >
                <div>Residence</div>
                <div>India</div>
              </div>
              <div
                className="local"
                style={{
                  display: showLocation ? "flex" : "none",
                }}
              >
                <div>City</div>
                <div>Bodhgaya</div>
              </div>
              <div
                className="local"
                style={{
                  display: showLocation ? "flex" : "none",
                }}
              >
                <div>Age</div>
                <div>23</div>
              </div>
            </div>
          </div>
          <hr />

          <div className="left_cornor_1">
            <div className="header_skill" onClick={handleShowSkill}>
              <div className="showSkill">
                <h2>❤Language</h2>
              </div>
              <div className="show">{showSkill ? "Hide" : "Show"} </div>
            </div>
            <div className="location">
              <div
                className="local"
                style={{
                  display: showSkill ? "flex" : "none",
                }}
              >
                <div>English</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={80} />
                </div>
                {/* <div>4.6 / 5</div> */}
              </div>
              <div
                className="local"
                style={{ display: showSkill ? "flex" : "none" }}
              >
                <div>Hindi</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={99} />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="left_cornor_1">
            <div className="header_skill" onClick={handleCoreTechnology}>
              <div className="showSkill">
                <h2>💺Core Technology</h2>
              </div>
              <div className="show">
                {showCoreTechnology ? "Hide" : "Show"}{" "}
              </div>
            </div>
            <div className="location">
              <div
                className="local"
                style={{ display: showCoreTechnology ? "flex" : "none" }}
              >
                <div>HTML 5</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={91} />
                </div>
              </div>
              <div
                className="local"
                style={{ display: showCoreTechnology ? "flex" : "none" }}
              >
                <div>CSS 3</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={90} />
                </div>
              </div>
              <div
                className="local"
                style={{ display: showCoreTechnology ? "flex" : "none" }}
              >
                <div>Responsive Design</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={85} />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="left_cornor_1">
            <div className="header_skill" onClick={handleCss}>
              <div className="showSkill">
                <h2>🦖Css Framework</h2>
              </div>
              <div className="show">{showCss ? "Hide" : "Show"} </div>
            </div>
            <div className="location">
              <div
                className="local"
                style={{ display: showCss ? "flex" : "none" }}
              >
                <div>Tailwind CSS</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={75} />
                </div>
              </div>
              <div
                className="local"
                style={{ display: showCss ? "flex" : "none" }}
              >
                <div>Bootstrap</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={74} />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="left_cornor_1">
            <div className="header_skill" onClick={handleJavascript}>
              <div className="showSkill">
                <h2>😎Javascript</h2>
              </div>
              <div className="show">{showJavascript ? "Hide" : "Show"} </div>
            </div>
            <div className="location">
              <div
                className="local"
                style={{ display: showJavascript ? "flex" : "none" }}
              >
                <div>ES6</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={74} />
                </div>
              </div>
              <h3
                style={{
                  display: showJavascript ? "flex" : "none",
                  textAlign: showJavascript ? "center" : "center",
                }}
              >
                Key Point
              </h3>
              <h4
                style={{
                  display: showJavascript ? "flex" : "none",
                  textAlign: showJavascript ? "center" : "center",
                }}
              >
                (Event handling, Error handling ,DOM)
              </h4>
            </div>
          </div>
          <hr />
          <div className="left_cornor_1">
            <div className="header_skill" onClick={handleFramework}>
              <div className="showSkill">
                <h2>🤞FrameWork</h2>
              </div>
              <div className="show">{showFrameWork ? "Hide" : "Show"} </div>
            </div>
            <div className="location">
              <div
                className="local"
                style={{
                  display: showFrameWork ? "flex" : "none",
                }}
              >
                <div>Next JS</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={83} />
                </div>
              </div>
              <div
                className="local"
                style={{
                  display: showFrameWork ? "flex" : "none",
                }}
              >
                <div>React Redux Toolkit</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={84} />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="left_cornor_1">
            <div className="header_skill" onClick={handleVersion}>
              <div className="showSkill">
                <h2>🏗Version Control</h2>
              </div>
              <div className="show">{showVersion ? "Hide" : "Show"} </div>
            </div>
            <div className="location">
              <div
                className="local"
                style={{
                  display: showVersion ? "flex" : "none",
                }}
              >
                <div>Git-Base</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={87} />
                </div>
              </div>
              <div
                className="local"
                style={{
                  display: showVersion ? "flex" : "none",
                }}
              >
                <div>GitHub</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={94} />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="left_cornor_1">
            <div className="header_skill" onClick={handleTest}>
              <div className="showSkill">
                <h2>🧪Testing</h2>
              </div>
              <div className="show">{showTest ? "Hide" : "Show"} </div>
            </div>
            <div className="location">
              <div
                className="local"
                style={{
                  display: showTest ? "flex" : "none",
                }}
              >
                <div>Unit Testing (jest)</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={73} />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="left_cornor_1">
            <div className="header_skill" onClick={handleApi}>
              <div className="showSkill">
                <h2>📲API Integration</h2>
              </div>
              <div className="show">{showApi ? "Hide" : "Show"} </div>
            </div>
            <div className="location">
              <div
                className="local"
                style={{
                  display: showApi ? "flex" : "none",
                }}
              >
                <div>Axios</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={98} />
                </div>
              </div>
              <div
                className="local"
                style={{
                  display: showApi ? "flex" : "none",
                }}
              >
                <div>Axios</div>
                <div style={{ width: 25, height: 25 }}>
                  <CircularProgressbar value={98} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <AboutMe />
          <RecentProject />
          <Card />
          <RecentSkill />
          <Skill />
        </div>
      </div>
    </main>
  );
}
