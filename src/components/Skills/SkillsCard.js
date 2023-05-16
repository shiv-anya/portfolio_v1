import React from "react";
const softwareSkills = [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5",
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt",
  },
  {
    skillName: "bootstrap",
    fontAwesomeClassname: "fab fa-bootstrap",
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js",
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react",
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node",
  },
  {
    skillName: "vuejs",
    fontAwesomeClassname: "fab fa-vuejs",
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm",
  },
  {
    skillName: "sql-DB",
    fontAwesomeClassname: "fas fa-database",
  },
  {
    skillName: "mongoDB",
    fontAwesomeClassname: "fas fa-database",
  },
  {
    skillName: "java",
    fontAwesomeClassname: "fab fa-java",
  },
  {
    skillName: "firebase",
    fontAwesomeClassname: "fas fa-fire",
  },
  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git",
  },
];
const SkillsCard = () => {
  return (
    <div>
      <ul className="flex flex-wrap justify-center">
        {softwareSkills.map((skills, i) => {
          return (
            <li
              key={i}
              className="mr-5 mt-5 flex flex-col justify-between items-center"
              name={skills.skillName}
            >
              <i
                className={`${skills.fontAwesomeClassname} text-6xl text-gray-400 hover:text-purple-600`}
              ></i>
              <p className="text-xs mt-1 capitalize">{skills.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsCard;
