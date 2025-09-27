import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="container">
      <Avatar />
      <Data />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <img className="profile" src="./profile-card/profile.jpg" alt="profile" />
  );
}

function Data() {
  return (
    <div className="data">
      <h1>jonas schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or t
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill name={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ name, level, color }) {
  let emoji;
  if (level === "beginner") emoji = "👶";
  if (level === "intermediate") emoji = "👍";
  if (level === "advanced") emoji = "💪";

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>{emoji}</span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
