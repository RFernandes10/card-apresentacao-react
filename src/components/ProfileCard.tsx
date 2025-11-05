import React, { useState, type JSX } from "react";
import { FaGithub, FaLinkedin, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma, FaGitAlt, FaDatabase, FaCloudUploadAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiJest, SiRedux, SiExpress, SiPrisma } from 'react-icons/si';

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  githubUrl: string;
  linkedinUrl: string;
  skills: string[];
}

const skillIcons: { [key: string]: JSX.Element } = {
  React: <FaReact className="text-blue-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-600" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400" />,
  NodeJs: <FaNodeJs className="text-green-500" />,
  NextJs: <SiNextdotjs className="text-gray-700" />,
  Figma: <FaFigma className="text-purple-500" />,
  Git: <FaGitAlt className="text-orange-600" />,
  Jest: <SiJest className="text-red-600" />,
  Redux: <SiRedux className="text-purple-500" />,
  SQL: <FaDatabase className="text-blue-400" />,
  NoSQL: <FaDatabase className="text-green-400" />,
  PostgreSQL: <FaDatabase className="text-blue-700" />,
  MongoDB: <FaDatabase className="text-green-600" />,
  Postman: <FaDatabase className="text-orange-400" />,
  Express: <SiExpress className="text-gray-500" />,
  Deploy: <FaCloudUploadAlt className="text-blue-400" />,
  Prisma: <SiPrisma className="text-gray-600" />,
  'Context API': <FaReact className="text-blue-400" />,
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  bio,
  profileImage,
  githubUrl,
  linkedinUrl,
  skills,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-80 h-96 perspective-1000 cursor-pointer group focus:outline-none"
      onClick={() => setIsFlipped(!isFlipped)}
      tabIndex={0} // Make the div focusable
    >
      <div
        className={`relative w-full min-h-full duration-700 transform-style-preserve-3d transition-all group-hover:shadow-2xl group-hover:shadow-blue-400/50 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of the card */} 
        <div className="absolute w-full h-full backface-hidden bg-card-background backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center justify-center border border-border">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-link"
          />
          <h2 className="text-2xl font-bold text-text-primary mb-1">{name}</h2>
          <h3 className="text-md text-link mb-3">{title}</h3>
          <p className="text-sm text-text-secondary text-center mb-4">{bio}</p>
          <div className="flex space-x-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-link transition-colors duration-300">
              <FaGithub className="text-2xl" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-link transition-colors duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Back of the card */} 
        <div className="absolute w-full h-full backface-hidden bg-card-background backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center justify-center border border-border rotate-y-180">
          <h3 className="text-xl font-bold text-text-primary mb-4">Skills</h3>
          <div className="grid grid-cols-3 gap-4 text-text-secondary">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center transition-all duration-300 ease-in-out ${
                  isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${isFlipped ? index * 50 : 0}ms` }}
              >
                {skillIcons[skill] || skill}
                <span className="text-xs mt-1">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
