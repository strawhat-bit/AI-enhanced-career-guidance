/**
 * Government career categories and their related job paths.
 * Categories are nested so the UI can display a category first and its
 * sub-jobs only after the category is selected.
 */
export const governmentJobs = [
  {
    id: "civil-administration",
    title: "Civil Administration",
    category: "government",
    subJobs: [
      { id: "civil-administration-ias", title: "IAS", category: "government" },
      { id: "civil-administration-state-administrative-services", title: "State Administrative Services", category: "government" },
      { id: "civil-administration-district-administration", title: "District Administration", category: "government" },
    ],
  },
  {
    id: "police-law-enforcement",
    title: "Police & Law Enforcement",
    category: "government",
    subJobs: [
      { id: "police-law-enforcement-ips", title: "IPS", category: "government" },
      { id: "police-law-enforcement-state-police", title: "State Police", category: "government" },
      { id: "police-law-enforcement-capf", title: "CAPF", category: "government" },
      { id: "police-law-enforcement-police-sub-inspector", title: "Police Sub-Inspector", category: "government" },
    ],
  },
  {
    id: "defence-armed-forces",
    title: "Defence / Armed Forces",
    category: "government",
    subJobs: [
      { id: "defence-armed-forces-army", title: "Army", category: "government" },
      { id: "defence-armed-forces-navy", title: "Navy", category: "government" },
      { id: "defence-armed-forces-air-force", title: "Air Force", category: "government" },
      { id: "defence-armed-forces-coast-guard", title: "Coast Guard", category: "government" },
    ],
  },
  {
    id: "judiciary",
    title: "Judiciary",
    category: "government",
    subJobs: [
      { id: "judiciary-civil-judge", title: "Civil Judge", category: "government" },
      { id: "judiciary-district-judge", title: "District Judge", category: "government" },
      { id: "judiciary-magistrate", title: "Magistrate", category: "government" },
    ],
  },
  {
    id: "foreign-affairs-diplomacy",
    title: "Foreign Affairs / Diplomacy",
    category: "government",
    subJobs: [
      { id: "foreign-affairs-diplomacy-indian-foreign-service", title: "Indian Foreign Service", category: "government" },
      { id: "foreign-affairs-diplomacy-diplomatic-services", title: "Diplomatic Services", category: "government" },
    ],
  },
  {
    id: "revenue-taxation",
    title: "Revenue & Taxation",
    category: "government",
    subJobs: [
      { id: "revenue-taxation-income-tax", title: "Income Tax", category: "government" },
      { id: "revenue-taxation-gst", title: "GST", category: "government" },
      { id: "revenue-taxation-customs", title: "Customs", category: "government" },
      { id: "revenue-taxation-revenue-departments", title: "Revenue Departments", category: "government" },
    ],
  },
  {
    id: "banking-financial-regulation",
    title: "Banking & Financial Regulation",
    category: "government",
    subJobs: [
      { id: "banking-financial-regulation-rbi", title: "RBI", category: "government" },
      { id: "banking-financial-regulation-sebi", title: "SEBI", category: "government" },
      { id: "banking-financial-regulation-nabard", title: "NABARD", category: "government" },
      { id: "banking-financial-regulation-public-sector-banking", title: "Public-Sector Banking", category: "government" },
    ],
  },
  {
    id: "government-finance-accounts",
    title: "Government Finance & Accounts",
    category: "government",
    subJobs: [
      { id: "government-finance-accounts-accounts", title: "Accounts", category: "government" },
      { id: "government-finance-accounts-audit", title: "Audit", category: "government" },
      { id: "government-finance-accounts-treasury", title: "Treasury", category: "government" },
      { id: "government-finance-accounts-financial-services", title: "Financial Services", category: "government" },
    ],
  },
  {
    id: "public-sector-undertakings",
    title: "Public Sector Undertakings (PSUs)",
    category: "government",
    subJobs: [
      { id: "public-sector-undertakings-ongc", title: "ONGC", category: "government" },
      { id: "public-sector-undertakings-ntpc", title: "NTPC", category: "government" },
      { id: "public-sector-undertakings-bhel", title: "BHEL", category: "government" },
      { id: "public-sector-undertakings-gail", title: "GAIL", category: "government" },
      { id: "public-sector-undertakings-iocl", title: "IOCL", category: "government" },
    ],
  },
  {
    id: "scientific-research",
    title: "Scientific Research",
    category: "government",
    subJobs: [
      { id: "scientific-research-isro", title: "ISRO", category: "government" },
      { id: "scientific-research-drdo", title: "DRDO", category: "government" },
      { id: "scientific-research-barc", title: "BARC", category: "government" },
      { id: "scientific-research-csir", title: "CSIR", category: "government" },
      { id: "scientific-research-government-laboratories", title: "Government Laboratories", category: "government" },
    ],
  },
  {
    id: "government-it-computer-science",
    title: "Government IT / Computer Science",
    category: "government",
    subJobs: [
      { id: "government-it-computer-science-nic", title: "NIC", category: "government" },
      { id: "government-it-computer-science-e-governance", title: "e-Governance", category: "government" },
      { id: "government-it-computer-science-government-software-it-departments", title: "Government Software / IT Departments", category: "government" },
    ],
  },
  {
    id: "government-engineering",
    title: "Government Engineering",
    category: "government",
    subJobs: [
      { id: "government-engineering-civil", title: "Civil Engineering", category: "government" },
      { id: "government-engineering-mechanical", title: "Mechanical Engineering", category: "government" },
      { id: "government-engineering-electrical", title: "Electrical Engineering", category: "government" },
      { id: "government-engineering-electronics", title: "Electronics Engineering", category: "government" },
      { id: "government-engineering-ai-it", title: "AI / IT Engineering", category: "government" },
    ],
  },
  {
    id: "healthcare-medical",
    title: "Healthcare / Medical",
    category: "government",
    subJobs: [
      { id: "healthcare-medical-government-doctor", title: "Government Doctor", category: "government" },
      { id: "healthcare-medical-nurse", title: "Nurse", category: "government" },
      { id: "healthcare-medical-pharmacist", title: "Pharmacist", category: "government" },
      { id: "healthcare-medical-medical-officer", title: "Medical Officer", category: "government" },
    ],
  },
  {
    id: "education",
    title: "Education",
    category: "government",
    subJobs: [
      { id: "education-government-teacher", title: "Government Teacher", category: "government" },
      { id: "education-professor", title: "Professor", category: "government" },
      { id: "education-lecturer", title: "Lecturer", category: "government" },
      { id: "education-academic-administration", title: "Academic Administration", category: "government" },
    ],
  },
  {
    id: "railways",
    title: "Railways",
    category: "government",
    subJobs: [
      { id: "railways-technical", title: "Technical", category: "government" },
      { id: "railways-operations", title: "Operations", category: "government" },
      { id: "railways-administration", title: "Administration", category: "government" },
      { id: "railways-finance", title: "Finance", category: "government" },
      { id: "railways-safety", title: "Safety", category: "government" },
    ],
  },
  {
    id: "postal-services",
    title: "Postal Services",
    category: "government",
    subJobs: [
      { id: "postal-services-postal-operations", title: "Postal Operations", category: "government" },
      { id: "postal-services-administration", title: "Administration", category: "government" },
      { id: "postal-services-technical-positions", title: "Technical Positions", category: "government" },
    ],
  },
  {
    id: "telecommunications",
    title: "Telecommunications",
    category: "government",
    subJobs: [
      { id: "telecommunications-government-telecom", title: "Government Telecom", category: "government" },
      { id: "telecommunications-communications", title: "Communications", category: "government" },
      { id: "telecommunications-spectrum-related-work", title: "Spectrum-Related Work", category: "government" },
    ],
  },
  {
    id: "transport",
    title: "Transport",
    category: "government",
    subJobs: [
      { id: "transport-road-transport", title: "Road Transport", category: "government" },
      { id: "transport-highways", title: "Highways", category: "government" },
      { id: "transport-rail-transport", title: "Rail Transport", category: "government" },
      { id: "transport-ports", title: "Ports", category: "government" },
      { id: "transport-aviation", title: "Aviation", category: "government" },
    ],
  },
  {
    id: "agriculture-rural-development",
    title: "Agriculture & Rural Development",
    category: "government",
    subJobs: [
      { id: "agriculture-rural-development-agriculture-departments", title: "Agriculture Departments", category: "government" },
      { id: "agriculture-rural-development-rural-development", title: "Rural Development", category: "government" },
      { id: "agriculture-rural-development-agricultural-research", title: "Agricultural Research", category: "government" },
    ],
  },
  {
    id: "forestry-environment",
    title: "Forestry & Environment",
    category: "government",
    subJobs: [
      { id: "forestry-environment-indian-forest-service", title: "Indian Forest Service", category: "government" },
      { id: "forestry-environment-forest-departments", title: "Forest Departments", category: "government" },
      { id: "forestry-environment-environmental-services", title: "Environmental Services", category: "government" },
    ],
  },
  {
    id: "statistics-economics",
    title: "Statistics & Economics",
    category: "government",
    subJobs: [
      { id: "statistics-economics-statistical-services", title: "Statistical Services", category: "government" },
      { id: "statistics-economics-economic-services", title: "Economic Services", category: "government" },
      { id: "statistics-economics-government-data-analysis", title: "Government Data Analysis", category: "government" },
    ],
  },
  {
    id: "labour-employment",
    title: "Labour & Employment",
    category: "government",
    subJobs: [
      { id: "labour-employment-labour-administration", title: "Labour Administration", category: "government" },
      { id: "labour-employment-employment-services", title: "Employment Services", category: "government" },
      { id: "labour-employment-social-security", title: "Social Security", category: "government" },
    ],
  },
  {
    id: "social-welfare",
    title: "Social Welfare",
    category: "government",
    subJobs: [
      { id: "social-welfare-women-child-development", title: "Women & Child Development", category: "government" },
      { id: "social-welfare-disability-welfare", title: "Disability Welfare", category: "government" },
      { id: "social-welfare-welfare-schemes", title: "Welfare Schemes", category: "government" },
    ],
  },
  {
    id: "urban-development",
    title: "Urban Development",
    category: "government",
    subJobs: [
      { id: "urban-development-municipal-administration", title: "Municipal Administration", category: "government" },
      { id: "urban-development-urban-planning", title: "Urban Planning", category: "government" },
      { id: "urban-development-smart-city-projects", title: "Smart-City Projects", category: "government" },
    ],
  },
  {
    id: "rural-development",
    title: "Rural Development",
    category: "government",
    subJobs: [
      { id: "rural-development-panchayat-administration", title: "Panchayat Administration", category: "government" },
      { id: "rural-development-rural-schemes", title: "Rural Schemes", category: "government" },
      { id: "rural-development-development-programs", title: "Development Programs", category: "government" },
    ],
  },
  {
    id: "public-works-infrastructure",
    title: "Public Works / Infrastructure",
    category: "government",
    subJobs: [
      { id: "public-works-infrastructure-pwd", title: "PWD", category: "government" },
      { id: "public-works-infrastructure-roads", title: "Roads", category: "government" },
      { id: "public-works-infrastructure-buildings", title: "Buildings", category: "government" },
      { id: "public-works-infrastructure-irrigation", title: "Irrigation", category: "government" },
      { id: "public-works-infrastructure-public-infrastructure", title: "Public Infrastructure", category: "government" },
    ],
  },
  {
    id: "water-resources",
    title: "Water Resources",
    category: "government",
    subJobs: [
      { id: "water-resources-irrigation", title: "Irrigation", category: "government" },
      { id: "water-resources-water-management", title: "Water Management", category: "government" },
      { id: "water-resources-groundwater", title: "Groundwater", category: "government" },
      { id: "water-resources-dams", title: "Dams", category: "government" },
    ],
  },
  {
    id: "energy-power",
    title: "Energy / Power",
    category: "government",
    subJobs: [
      { id: "energy-power-electricity-boards", title: "Electricity Boards", category: "government" },
      { id: "energy-power-power-psus", title: "Power PSUs", category: "government" },
      { id: "energy-power-energy-departments", title: "Energy Departments", category: "government" },
    ],
  },
  {
    id: "mining-geology",
    title: "Mining & Geology",
    category: "government",
    subJobs: [
      { id: "mining-geology-geological-survey", title: "Geological Survey", category: "government" },
      { id: "mining-geology-mining-departments", title: "Mining Departments", category: "government" },
      { id: "mining-geology-mineral-administration", title: "Mineral Administration", category: "government" },
    ],
  },
  {
    id: "food-civil-supplies",
    title: "Food & Civil Supplies",
    category: "government",
    subJobs: [
      { id: "food-civil-supplies-food-distribution", title: "Food Distribution", category: "government" },
      { id: "food-civil-supplies-procurement", title: "Procurement", category: "government" },
      { id: "food-civil-supplies-consumer-affairs", title: "Consumer Affairs", category: "government" },
    ],
  },
  {
    id: "legal-government-law",
    title: "Legal / Government Law",
    category: "government",
    subJobs: [
      { id: "legal-government-law-government-advocate", title: "Government Advocate", category: "government" },
      { id: "legal-government-law-legal-officer", title: "Legal Officer", category: "government" },
      { id: "legal-government-law-law-departments", title: "Law Departments", category: "government" },
    ],
  },
  {
    id: "intelligence-national-security",
    title: "Intelligence & National Security",
    category: "government",
    subJobs: [
      { id: "intelligence-national-security-intelligence", title: "Intelligence", category: "government" },
      { id: "intelligence-national-security-internal-security", title: "Internal Security", category: "government" },
      { id: "intelligence-national-security-strategic-organizations", title: "Strategic Organizations", category: "government" },
    ],
  },
  {
    id: "defence-research-technology",
    title: "Defence Research & Technology",
    category: "government",
    subJobs: [
      { id: "defence-research-technology-defence-rd", title: "Defence R&D", category: "government" },
      { id: "defence-research-technology-missiles", title: "Missiles", category: "government" },
      { id: "defence-research-technology-electronics", title: "Electronics", category: "government" },
      { id: "defence-research-technology-ai", title: "AI", category: "government" },
      { id: "defence-research-technology-robotics", title: "Robotics", category: "government" },
    ],
  },
  {
    id: "atomic-energy",
    title: "Atomic Energy",
    category: "government",
    subJobs: [
      { id: "atomic-energy-nuclear-research", title: "Nuclear Research", category: "government" },
      { id: "atomic-energy-nuclear-power", title: "Nuclear Power", category: "government" },
      { id: "atomic-energy-scientific-technical-services", title: "Scientific / Technical Services", category: "government" },
    ],
  },
  {
    id: "space",
    title: "Space",
    category: "government",
    subJobs: [
      { id: "space-research", title: "Space Research", category: "government" },
      { id: "space-satellites", title: "Satellites", category: "government" },
      { id: "space-launch-systems", title: "Launch Systems", category: "government" },
      { id: "space-applications", title: "Space Applications", category: "government" },
    ],
  },
  {
    id: "election-constitutional-institutions",
    title: "Election & Constitutional Institutions",
    category: "government",
    subJobs: [
      { id: "election-constitutional-institutions-election-administration", title: "Election Administration", category: "government" },
      { id: "election-constitutional-institutions-constitutional-statutory-bodies", title: "Constitutional / Statutory Bodies", category: "government" },
    ],
  },
  {
    id: "diplomatic-international-organizations",
    title: "Diplomatic / International Organizations",
    category: "government",
    subJobs: [
      { id: "diplomatic-international-organizations-government-linked-international-affairs", title: "Government-Linked International Affairs", category: "government" },
      { id: "diplomatic-international-organizations-development-work", title: "Development Work", category: "government" },
    ],
  },
  {
    id: "regulatory-bodies",
    title: "Regulatory Bodies",
    category: "government",
    subJobs: [
      { id: "regulatory-bodies-financial", title: "Financial Regulation", category: "government" },
      { id: "regulatory-bodies-telecom", title: "Telecom Regulation", category: "government" },
      { id: "regulatory-bodies-competition", title: "Competition Regulation", category: "government" },
      { id: "regulatory-bodies-energy", title: "Energy Regulation", category: "government" },
      { id: "regulatory-bodies-securities", title: "Securities Regulation", category: "government" },
    ],
  },
  {
    id: "public-sector-management",
    title: "Public Sector Management",
    category: "government",
    subJobs: [
      { id: "public-sector-management-administration", title: "Administration", category: "government" },
      { id: "public-sector-management-human-resources", title: "Human Resources", category: "government" },
      { id: "public-sector-management-operations", title: "Operations", category: "government" },
      { id: "public-sector-management-procurement", title: "Procurement", category: "government" },
    ],
  },
  {
    id: "research-policy",
    title: "Research & Policy",
    category: "government",
    subJobs: [
      { id: "research-policy-government-policy-research", title: "Government Policy Research", category: "government" },
      { id: "research-policy-planning", title: "Planning", category: "government" },
      { id: "research-policy-development-analysis", title: "Development Analysis", category: "government" },
    ],
  },
];

/**
 * Recursively searches categories and their nested sub-jobs by ID.
 *
 * @param {string} id - For example: "civil-administration-ias".
 * @param {Array} jobs - The job tree to search.
 * @returns {object | undefined} The matching category or sub-job.
 */
export function findGovernmentJob(id, jobs = governmentJobs) {
  for (const job of jobs) {
    if (job.id === id) {
      return job;
    }

    if (job.subJobs) {
      const match = findGovernmentJob(id, job.subJobs);
      if (match) {
        return match;
      }
    }
  }

  return undefined;
}

export default governmentJobs;
