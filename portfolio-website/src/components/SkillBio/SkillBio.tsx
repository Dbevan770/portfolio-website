import "./SkillBio.css";
import { Language } from "../../scenes/About/About";

interface SkillBioProps {
  language: Language | undefined;
}

const SkillBio = ({ language }: SkillBioProps) => {
  if (!language) {
    return null;
  }

  return (
    <>
      <h3 className="skill-desc-title">{language.title}</h3>
      <p className="skill-desc-bio">{language.bio}</p>
    </>
  );
};

export default SkillBio;
