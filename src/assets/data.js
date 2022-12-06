import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const defaultData = {
  "skills": ["Languages", "Technologies", "Softwares"],
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
  ],
  "languages": [
    [
      "JavaScript",
      "(S)CSS & HTML",
      "MySQL & PostgreSQL",
      "Python",
      "Bash"
    ]
  ],
  "technologies": [
    [
      "React & Next.js",
      "Vue.js & Nuxt.js",
      "Three.js",
      "Jest & Cypress",
      "Express",
    ],
    [
      "GraphQL",
      "MongoDB",
      "Docker",
      "Git",
      "Ubuntu",
    ]
  ],
  "softwares": [
    [
      "Insomnia & Postman",
      "Jira & Confluence",
      "GitLab & GitHub",
      "VS Code",
      "Figma"
    ]
  ]
};

export const screenThemes = {
  "blue": {
    "name": "blue",
    "background": "blue",
    "color": "darkblue",
  },
  "black": {
    "name": "black",
    "background": "black",
    "color": "white",
  },
  "green": {
    "name": "green",
    "background": "green",
    "color": "darkgreen",
  },
  "red": {
    "name": "red",
    "background": "red",
    "color": "darkred",
  },
  "yellow": {
    "name": "yellow",
    "background": "yellow",
    "color": "orange",
  },
}
