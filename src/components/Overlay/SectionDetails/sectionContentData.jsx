// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About us",
    content: (
      <p>
        Welcome to our 3D Promotional Webapp, created during Megan Ai. 
        This experience helped us boost our confidence and develop our
        soft and technical skills, gearing us up for future challenges. Check it
        out and witness the amazing outcome of our teamwork! 📱✨🎉
      </p>
    ),
  },
  { key: "team", title: "Our team", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Modules",
    content: (
      <ul className="credits">
        <li>
          <a>Megan GPT</a>
        </li>
        <li>
          <a>Text To Image Generator(MAGi)</a>
        </li>
        <li>
          <a >Text Finder</a>
        </li>
        <li>
          <a >Background Remover</a>
        </li>
        <li>
          <a >Essay Writer and Tools</a>
        </li>

      </ul>
    ),
  },
];

export default sectionsContentData;
