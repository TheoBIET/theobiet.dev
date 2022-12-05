import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const defaultData = {
  "skills": ["Languages", "Technologies", "Tools", "Softwares"],
  "roles": [
    "a Fullstack Developer",
    "a passionate",
    "a Node.js Ninja",
    "a Data Lover",
    "learning AI",
    "discovering Web 3",
    "a technology enthusiast"
  ],
  "socials": [
    {
      icon: <FaGithub />,
      url: 'https://github.com/TheoBIET',
      className: 'github'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/ThéoBIET/',
      className: 'linkedin'
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/DavDav_js',
      className: 'twitter'
    }
  ]
}
