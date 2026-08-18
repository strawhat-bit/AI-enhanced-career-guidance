/**
 * Business and management careers organised as a nested career tree.
 */
export const businessManagementJobs = [
  {
    id: "business-management",
    title: "Business / Management",
    category: "business",
    subJobs: [
      {
        id: "business-management-management",
        title: "Management",
        category: "business",
        subJobs: [
          { id: "business-management-management-business-analyst", title: "Business Analyst", category: "business" },
          { id: "business-management-management-management-consultant", title: "Management Consultant", category: "business" },
          { id: "business-management-management-strategy-analyst", title: "Strategy Analyst", category: "business" },
          { id: "business-management-management-operations-manager", title: "Operations Manager", category: "business" },
          { id: "business-management-management-project-manager", title: "Project Manager", category: "business" },
          { id: "business-management-management-program-manager", title: "Program Manager", category: "business" },
          { id: "business-management-management-product-manager", title: "Product Manager", category: "business" },
          { id: "business-management-management-business-development-manager", title: "Business Development Manager", category: "business" },
        ],
      },
    ],
  },
];

/**
 * Recursively searches business and management categories and sub-jobs by ID.
 *
 * @param {string} id - For example: "business-management-management-product-manager".
 * @param {Array} jobs - The career tree to search.
 * @returns {object | undefined} The matching category or job.
 */
export function findBusinessManagementJob(id, jobs = businessManagementJobs) {
  for (const job of jobs) {
    if (job.id === id) {
      return job;
    }

    if (job.subJobs) {
      const match = findBusinessManagementJob(id, job.subJobs);
      if (match) {
        return match;
      }
    }
  }

  return undefined;
}

export default businessManagementJobs;
