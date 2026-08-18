/**
 * Skills and subjects for business and management careers.
 * IDs match the careers in src/data/businessManagement.js.
 */
export const businessManagementSkillTree = [
  {
    id: "business-management",
    title: "Business / Management",
    subJobs: [
      {
        id: "business-management-management",
        title: "Management",
        subJobs: [
          { id: "business-management-management-business-analyst", skills: ["Requirements gathering", "Excel", "Data analysis", "Communication"], subjects: ["Business Analysis", "Statistics", "Databases", "Business Communication"] },
          { id: "business-management-management-management-consultant", skills: ["Problem solving", "Presentation", "Research", "Stakeholder management"], subjects: ["Business Strategy", "Economics", "Operations Management", "Business Communication"] },
          { id: "business-management-management-strategy-analyst", skills: ["Market research", "Data analysis", "Strategic thinking", "Presentation"], subjects: ["Business Strategy", "Economics", "Statistics", "Marketing"] },
          { id: "business-management-management-operations-manager", skills: ["Process improvement", "Planning", "Team coordination", "Data analysis"], subjects: ["Operations Management", "Supply Chain", "Project Management", "Business Analytics"] },
          { id: "business-management-management-project-manager", skills: ["Planning", "Risk management", "Communication", "Agile methods"], subjects: ["Project Management", "Operations Management", "Business Communication", "Finance Basics"] },
          { id: "business-management-management-program-manager", skills: ["Strategic planning", "Leadership", "Cross-team coordination", "Risk management"], subjects: ["Program Management", "Business Strategy", "Operations Management", "Leadership"] },
          { id: "business-management-management-product-manager", skills: ["User research", "Prioritisation", "Product strategy", "Data analysis"], subjects: ["Product Management", "Marketing", "User Experience", "Business Analytics"] },
          { id: "business-management-management-business-development-manager", skills: ["Sales", "Negotiation", "Relationship building", "Market research"], subjects: ["Marketing", "Business Strategy", "Sales Management", "Business Communication"] },
        ],
      },
    ],
  },
];

/**
 * Recursively finds the skill profile for a business or management career ID.
 */
export function findBusinessManagementSkillProfile(id, nodes = businessManagementSkillTree) {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.subJobs) {
      const match = findBusinessManagementSkillProfile(id, node.subJobs);
      if (match) return match;
    }
  }
  return undefined;
}

export default businessManagementSkillTree;
