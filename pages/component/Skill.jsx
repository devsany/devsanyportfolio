import { Formik } from "formik";
import React from "react";
import Formiks from "./Formik";
import SomeSkill1 from "./SomeSkill1";

const Skill = () => {
  return (
    <div>
      <div className="skill_main">
        <div className="skill_main1">
          <div className="skill">
            <div className="skill_header">
              <h2>React Formik</h2>
              <a href="linkedin.com/pulse/react-formik-sunny-raj--oya4f/?trackingId=B8atiBtdzLUAlWGp16rmXQ%3D%3D">
                <div className="skill_link">View My Article on Linkedin</div>
              </a>
            </div>
            <div className="form">
              <Formiks />
            </div>
            <div className="skill">
              <SomeSkill1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
