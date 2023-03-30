import "./SkillBio.css";
import jsonData from "../../assets/languagebios.json";

const SkillBio = ({ language }: { language: string }) => {
  return (
    <>
      <h3 className="skill-desc-title">
        {jsonData[language as keyof typeof jsonData].title}
      </h3>
      <p className="skill-desc-bio">
        {jsonData[language as keyof typeof jsonData].bio}
      </p>
    </>
  );
};

export default SkillBio;
