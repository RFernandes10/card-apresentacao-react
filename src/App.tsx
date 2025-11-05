import { useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useTheme } from "./contexts/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <ThemeSwitcher />
      <ProfileCard
        name="Roberto Fernandes"
        title="Desenvolvedor Fullstack"
        bio="Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Com experiência em diversas tecnologias, busco sempre aprender e aplicar as melhores práticas."
        profileImage="/perfil.jpeg"
        githubUrl="https://github.com/RFernandes10"
        linkedinUrl="https://www.linkedin.com/in/roberto-wolowitz/"
        skills={[
          "HTML",
          "CSS",
          "JavaScript",
          "NodeJs",
          "React",
          "Git",
          "PostgreSQL",
          "Figma",
          "Postman",
          "Jest",
          "TypeScript",
          "Context API",
          "Redux",
          "SQL",
          "NoSQL",
          "Express",
          "Deploy",
          "Prisma",
        ]}
      />
    </div>
  );
}

export default App;
