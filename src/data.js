export const SITE = {
  name: "Siva S",
  title: "Software Engineer · Systems & Algorithms",
  resume: "/resume.pdf",
  github: "https://github.com/SIVA-CEG",
  linkedin: "https://www.linkedin.com/in/siva2005",
  email: "2023115113@student.annauniv.edu"
};

// SKILLS: chronological order
export const SKILLS = [
  // Programming Languages
  { id: "lang-c", group: "Programming Languages", title: "C / C++", icon: "/skills/c_cpp.png", desc: "Low-level systems programming; xv6, kernel work, data structures." },
  { id: "lang-python", group: "Programming Languages", title: "Python", icon: "/skills/python.png", desc: "Scripting, automation, Flask APIs, data processing." },
  { id: "lang-java", group: "Programming Languages", title: "Java", icon: "/skills/java.png", desc: "Object-oriented design and backend fundamentals." },

  // Web Technologies
  { id: "web-html", group: "Web Technologies", title: "HTML / CSS", icon: "/skills/html_css.png", desc: "Responsive design, semantic markup." },
  { id: "web-js", group: "Web Technologies", title: "JavaScript / React", icon: "/skills/react.png", desc: "SPA development, component-driven architecture." },
  { id: "web-node", group: "Web Technologies", title: "Node.js", icon: "/skills/nodejs.png", desc: "Backend services and REST APIs." },

  // Databases
  { id: "db-postgres", group: "Databases", title: "PostgreSQL", icon: "/skills/postgres.png", desc: "Normalized schema, stored procedures, efficient queries." },
  { id: "db-mongo", group: "Databases", title: "MongoDB", icon: "/skills/mongodb.png", desc: "Document DB for flexible schemas (when needed)." },

  // Tools
  { id: "tool-git", group: "Tools", title: "Git / GitHub", icon: "/skills/git.png", desc: "Version control, clean commit history, PR workflow." },
  { id: "tool-docker", group: "Tools", title: "Docker", icon: "/skills/docker.png", desc: "Containerization for reproducible dev environments." },
  { id: "tool-vscode", group: "Tools", title: "VS Code", icon: "/skills/vscode.png", desc: "Editor of choice; efficient dev workflows." },

  // Soft skills
  { id: "soft-problem", group: "Soft Skills", title: "Problem Solving", icon: "/skills/problem.png", desc: "Strong DSA background — practice on LeetCode and GfG." },
  { id: "soft-team", group: "Soft Skills", title: "Leadership & Communication", icon: "/skills/team.png", desc: "Teamwork, mentoring and public speaking experience." }
];

export const PROJECTS = [
  {
    id: "code-retrieval",
    title: "Code Retrieval System",
    desc: "Trie-based retrieval engine enabling O(n) prefix searches for fast code lookup.",
    tech: ["C++", "PostgreSQL"],
    url: "https://github.com/SIVA-CEG/CODE-RETRIEVAL-SYSTEM"
  },
  {
    id: "narayana-clone",
    title: "Naan Mudhalvan Website Clone",
    desc: "Responsive e-learning portal clone with UI components and optimized loading.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    url: "https://github.com/SIVA-CEG/NARAYANA-WEBSITE-CLONE"
  },
  {
    id: "cricket-dbms",
    title: "Cricket Team & Player Management",
    desc: "Web system for managing players, triggers, injuries and stats with automated updates.",
    tech: ["PostgreSQL", "Flask"],
    url: "https://github.com/SIVA-CEG/CRICKET_DBMS"
  },
  {
    id: "xv6",
    title: "Priority-Based Process Management in xv6",
    desc: "Extended xv6 kernel with priority scheduling, system calls, introspection commands.",
    tech: ["C", "xv6"],
    url: "https://github.com/SIVA-CEG/XV6-PROJECT"
  }
];

