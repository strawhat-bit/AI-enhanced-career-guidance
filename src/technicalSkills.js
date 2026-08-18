/**
 * Skills and subjects for technical careers.
 * IDs match the careers in src/data/technical.js.
 */
export const technicalSkillTree = [
  {
    id: "technical",
    title: "Technical Careers",
    subJobs: [
      { id: "software-engineer", skills: ["Programming", "Problem solving", "Git", "Debugging"], subjects: ["Data Structures & Algorithms", "Computer Networks", "Databases", "Operating Systems"] },
      { id: "ai-ml-engineer", skills: ["Python", "Machine learning", "Data analysis", "Model evaluation"], subjects: ["Linear Algebra", "Probability", "Machine Learning", "Deep Learning"] },
      { id: "data-scientist", skills: ["Python or R", "SQL", "Data visualization", "Statistical analysis"], subjects: ["Statistics", "Probability", "Machine Learning", "Databases"] },
      { id: "data-engineer", skills: ["SQL", "Python", "ETL pipelines", "Cloud data tools"], subjects: ["Databases", "Data Warehousing", "Distributed Systems", "Cloud Computing"] },
      { id: "backend-developer", skills: ["Server-side programming", "API design", "Databases", "Authentication"], subjects: ["Databases", "Computer Networks", "System Design", "Security Basics"] },
      { id: "frontend-developer", skills: ["HTML", "CSS", "JavaScript", "UI accessibility"], subjects: ["Web Development", "User Interface Design", "JavaScript", "Browser Fundamentals"] },
      { id: "full-stack-developer", skills: ["Frontend development", "Backend development", "Databases", "Deployment"], subjects: ["Web Development", "Databases", "Computer Networks", "System Design"] },
      { id: "mlops-engineer", skills: ["Python", "Docker", "CI/CD", "Model deployment"], subjects: ["Machine Learning", "Cloud Computing", "DevOps", "Distributed Systems"] },
      { id: "cloud-engineer", skills: ["Cloud platforms", "Networking", "Infrastructure as code", "Monitoring"], subjects: ["Cloud Computing", "Computer Networks", "Security", "Linux"] },
      { id: "devops-engineer", skills: ["Linux", "Docker", "CI/CD", "Automation"], subjects: ["Operating Systems", "Computer Networks", "Cloud Computing", "Security"] },
      { id: "cybersecurity-engineer", skills: ["Threat analysis", "Network security", "Security testing", "Incident response"], subjects: ["Cybersecurity", "Computer Networks", "Cryptography", "Operating Systems"] },
      { id: "embedded-engineer", skills: ["C/C++", "Microcontrollers", "Hardware debugging", "Real-time programming"], subjects: ["Digital Electronics", "Microprocessors", "Embedded Systems", "Computer Architecture"] },
      { id: "robotics-engineer", skills: ["Python or C++", "Sensors", "Control systems", "Robot programming"], subjects: ["Robotics", "Control Systems", "Mechanical Design", "Computer Vision"] },
      { id: "computer-vision-engineer", skills: ["Python", "OpenCV", "Deep learning", "Image processing"], subjects: ["Computer Vision", "Linear Algebra", "Deep Learning", "Digital Image Processing"] },
      { id: "nlp-llm-engineer", skills: ["Python", "Natural language processing", "Prompt design", "Model evaluation"], subjects: ["NLP", "Machine Learning", "Deep Learning", "Linguistics Basics"] },
      { id: "ai-research-engineer", skills: ["Python", "Research reading", "Experiment design", "Model implementation"], subjects: ["Machine Learning", "Deep Learning", "Linear Algebra", "Probability"] },
      { id: "game-developer", skills: ["C# or C++", "Game engines", "3D math", "Debugging"], subjects: ["Computer Graphics", "Linear Algebra", "Physics", "Game Development"] },
      { id: "mobile-developer", skills: ["Kotlin, Swift, or React Native", "API integration", "Mobile UI", "Testing"], subjects: ["Mobile Development", "Software Engineering", "Databases", "User Interface Design"] },
      { id: "database-engineer-dba", skills: ["SQL", "Database administration", "Performance tuning", "Backup and recovery"], subjects: ["Database Management Systems", "Data Modeling", "Security", "Distributed Databases"] },
      { id: "qa-sdet", skills: ["Test design", "Automation testing", "Debugging", "API testing"], subjects: ["Software Testing", "Programming Fundamentals", "Databases", "Web Development"] },
      { id: "blockchain-developer", skills: ["Solidity or smart contracts", "Cryptography", "Web3 tools", "Security review"], subjects: ["Blockchain", "Cryptography", "Distributed Systems", "Computer Networks"] },
    ],
  },
];

/**
 * Recursively finds the skill profile for a technical career ID.
 */
export function findTechnicalSkillProfile(id, nodes = technicalSkillTree) {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.subJobs) {
      const match = findTechnicalSkillProfile(id, node.subJobs);
      if (match) return match;
    }
  }
  return undefined;
}

export default technicalSkillTree;
