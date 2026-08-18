/**
 * Finance and investment careers organised as a nested career tree.
 */
export const financeInvestmentJobs = [
  {
    id: "finance-investment",
    title: "Finance / Investment",
    category: "finance",
    subJobs: [
      { id: "finance-investment-investment-banking", title: "Investment Banking", category: "finance" },
      { id: "finance-investment-equity-research", title: "Equity Research", category: "finance" },
      { id: "finance-investment-financial-analyst", title: "Financial Analyst", category: "finance" },
      { id: "finance-investment-risk-analyst", title: "Risk Analyst", category: "finance" },
      { id: "finance-investment-credit-analyst", title: "Credit Analyst", category: "finance" },
      { id: "finance-investment-portfolio-management", title: "Portfolio Management", category: "finance" },
      { id: "finance-investment-asset-management", title: "Asset Management", category: "finance" },
      { id: "finance-investment-quantitative-analyst", title: "Quantitative Analyst", category: "finance" },
      { id: "finance-investment-quant-developer", title: "Quant Developer", category: "finance" },
      { id: "finance-investment-financial-data-analyst", title: "Financial Data Analyst", category: "finance" },
      { id: "finance-investment-corporate-finance", title: "Corporate Finance", category: "finance" },
      { id: "finance-investment-treasury", title: "Treasury", category: "finance" },
      { id: "finance-investment-fintech", title: "FinTech", category: "finance" },
    ],
  },
];

/**
 * Recursively searches finance and investment categories and sub-jobs by ID.
 *
 * @param {string} id - For example: "finance-investment-quant-developer".
 * @param {Array} jobs - The career tree to search.
 * @returns {object | undefined} The matching category or job.
 */
export function findFinanceInvestmentJob(id, jobs = financeInvestmentJobs) {
  for (const job of jobs) {
    if (job.id === id) {
      return job;
    }

    if (job.subJobs) {
      const match = findFinanceInvestmentJob(id, job.subJobs);
      if (match) {
        return match;
      }
    }
  }

  return undefined;
}

export default financeInvestmentJobs;
