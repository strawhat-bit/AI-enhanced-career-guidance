/**
 * Skills and subjects for government career categories.
 * A detailed role such as "civil-administration-ias" inherits the closest
 * matching category profile, such as "civil-administration".
 */
export const governmentSkillTree = [
  {
    id: "government",
    title: "Government Careers",
    subJobs: [
      { id: "civil-administration", skills: ["Public communication", "Decision-making", "Policy analysis", "Leadership"], subjects: ["Indian Polity", "Public Administration", "History", "Current Affairs"] },
      { id: "police-law-enforcement", skills: ["Discipline", "Situational awareness", "Investigation", "Communication"], subjects: ["Indian Polity", "Criminal Law Basics", "Current Affairs", "Physical Fitness"] },
      { id: "defence-armed-forces", skills: ["Discipline", "Teamwork", "Leadership", "Physical fitness"], subjects: ["General Knowledge", "Mathematics", "Physics", "English"] },
      { id: "judiciary", skills: ["Legal reasoning", "Research", "Writing", "Judgement"], subjects: ["Constitutional Law", "Criminal Law", "Civil Law", "Legal Writing"] },
      { id: "foreign-affairs-diplomacy", skills: ["Communication", "Negotiation", "Cultural awareness", "Policy analysis"], subjects: ["International Relations", "Indian Polity", "Economics", "Current Affairs"] },
      { id: "revenue-taxation", skills: ["Numerical reasoning", "Attention to detail", "Investigation", "Report writing"], subjects: ["Taxation", "Accounting", "Economics", "Indian Polity"] },
      { id: "banking-financial-regulation", skills: ["Financial analysis", "Risk awareness", "Data analysis", "Communication"], subjects: ["Economics", "Banking", "Finance", "Current Affairs"] },
      { id: "government-finance-accounts", skills: ["Accounting", "Auditing", "Numerical reasoning", "Record keeping"], subjects: ["Accounting", "Public Finance", "Auditing", "Economics"] },
      { id: "public-sector-undertakings", skills: ["Technical or business operations", "Teamwork", "Safety awareness", "Communication"], subjects: ["Engineering or Management", "Economics", "Aptitude", "Current Affairs"] },
      { id: "scientific-research", skills: ["Research", "Experimentation", "Data analysis", "Scientific writing"], subjects: ["Physics", "Chemistry", "Mathematics", "Research Methods"] },
      { id: "government-it-computer-science", skills: ["Programming", "System administration", "Cybersecurity basics", "Problem solving"], subjects: ["Computer Science", "Databases", "Networks", "Cybersecurity"] },
      { id: "government-engineering", skills: ["Engineering design", "Technical drawing", "Problem solving", "Safety awareness"], subjects: ["Mathematics", "Physics", "Core Engineering", "Project Management"] },
      { id: "healthcare-medical", skills: ["Clinical care", "Communication", "Ethics", "Attention to detail"], subjects: ["Biology", "Chemistry", "Anatomy", "Public Health"] },
      { id: "education", skills: ["Teaching", "Communication", "Lesson planning", "Assessment"], subjects: ["Education", "Subject Specialisation", "Psychology", "Pedagogy"] },
      { id: "railways", skills: ["Operations planning", "Safety awareness", "Technical troubleshooting", "Teamwork"], subjects: ["Aptitude", "Mathematics", "Engineering Basics", "General Knowledge"] },
      { id: "postal-services", skills: ["Customer service", "Record keeping", "Operations", "Communication"], subjects: ["Aptitude", "General Knowledge", "Basic Mathematics", "Computer Basics"] },
      { id: "telecommunications", skills: ["Network troubleshooting", "Technical communication", "System monitoring", "Problem solving"], subjects: ["Electronics", "Communication Systems", "Computer Networks", "Physics"] },
      { id: "transport", skills: ["Logistics", "Safety management", "Planning", "Operations"], subjects: ["Transport Management", "Geography", "Engineering Basics", "Public Policy"] },
      { id: "agriculture-rural-development", skills: ["Field research", "Community engagement", "Project planning", "Data collection"], subjects: ["Agriculture", "Rural Development", "Economics", "Environmental Science"] },
      { id: "forestry-environment", skills: ["Fieldwork", "Environmental assessment", "Conservation planning", "Report writing"], subjects: ["Environmental Science", "Biology", "Geography", "Ecology"] },
      { id: "statistics-economics", skills: ["Statistical analysis", "Research", "Data visualization", "Policy analysis"], subjects: ["Statistics", "Economics", "Mathematics", "Data Analysis"] },
      { id: "labour-employment", skills: ["Communication", "Policy interpretation", "Case management", "Negotiation"], subjects: ["Labour Law", "Economics", "Social Work", "Indian Polity"] },
      { id: "social-welfare", skills: ["Empathy", "Community engagement", "Case management", "Communication"], subjects: ["Social Work", "Psychology", "Indian Polity", "Public Policy"] },
      { id: "urban-development", skills: ["Urban planning", "Project coordination", "Stakeholder communication", "Data analysis"], subjects: ["Urban Planning", "Geography", "Public Policy", "Civil Engineering Basics"] },
      { id: "rural-development", skills: ["Community engagement", "Programme management", "Field research", "Communication"], subjects: ["Rural Development", "Agriculture", "Economics", "Public Policy"] },
      { id: "public-works-infrastructure", skills: ["Project management", "Site supervision", "Safety management", "Technical planning"], subjects: ["Civil Engineering", "Project Management", "Environmental Science", "Public Procurement"] },
      { id: "water-resources", skills: ["Water planning", "Data analysis", "Fieldwork", "Project coordination"], subjects: ["Hydrology", "Environmental Science", "Civil Engineering", "Geography"] },
      { id: "energy-power", skills: ["Technical troubleshooting", "Safety awareness", "System operations", "Project planning"], subjects: ["Electrical Engineering", "Physics", "Energy Systems", "Environmental Science"] },
      { id: "mining-geology", skills: ["Field surveying", "Safety management", "Data analysis", "Technical reporting"], subjects: ["Geology", "Mining Engineering", "Environmental Science", "Physics"] },
      { id: "food-civil-supplies", skills: ["Supply-chain coordination", "Record keeping", "Inspection", "Communication"], subjects: ["Public Administration", "Economics", "Supply Chain", "Indian Polity"] },
      { id: "legal-government-law", skills: ["Legal research", "Writing", "Argumentation", "Policy interpretation"], subjects: ["Constitutional Law", "Administrative Law", "Legal Writing", "Indian Polity"] },
      { id: "intelligence-national-security", skills: ["Observation", "Analysis", "Confidentiality", "Situational awareness"], subjects: ["Indian Polity", "International Relations", "Security Studies", "Current Affairs"] },
      { id: "defence-research-technology", skills: ["Research", "Engineering design", "Data analysis", "Technical documentation"], subjects: ["Physics", "Engineering", "Computer Science", "Research Methods"] },
      { id: "atomic-energy", skills: ["Safety discipline", "Scientific research", "Technical analysis", "Documentation"], subjects: ["Physics", "Nuclear Science", "Mathematics", "Engineering"] },
      { id: "space", skills: ["Scientific research", "Systems engineering", "Data analysis", "Problem solving"], subjects: ["Physics", "Mathematics", "Aerospace Engineering", "Computer Science"] },
      { id: "election-constitutional-institutions", skills: ["Administrative planning", "Communication", "Data management", "Policy interpretation"], subjects: ["Indian Polity", "Public Administration", "Law Basics", "Current Affairs"] },
      { id: "diplomatic-international-organizations", skills: ["Communication", "Negotiation", "Research", "Cross-cultural awareness"], subjects: ["International Relations", "Economics", "Political Science", "Current Affairs"] },
      { id: "regulatory-bodies", skills: ["Policy analysis", "Research", "Compliance review", "Data analysis"], subjects: ["Economics", "Law Basics", "Finance", "Public Policy"] },
      { id: "public-sector-management", skills: ["Leadership", "Operations management", "Communication", "Procurement awareness"], subjects: ["Management", "Public Administration", "Finance", "Business Communication"] },
      { id: "research-policy", skills: ["Research", "Policy analysis", "Data analysis", "Report writing"], subjects: ["Economics", "Political Science", "Statistics", "Public Policy"] },
    ],
  },
];

/**
 * Recursively finds the closest matching government skill profile.
 * Specific roles inherit the profile of their parent category.
 */
export function findGovernmentSkillProfile(id, nodes = governmentSkillTree, closestMatch) {
  for (const node of nodes) {
    let bestMatch = closestMatch;

    if (id === node.id) return node;
    if (id.startsWith(`${node.id}-`) && (!bestMatch || node.id.length > bestMatch.id.length)) {
      bestMatch = node;
    }

    if (node.subJobs) {
      const match = findGovernmentSkillProfile(id, node.subJobs, bestMatch);
      if (match) return match;
    }

    if (bestMatch) return bestMatch;
  }

  return closestMatch;
}

export default governmentSkillTree;
