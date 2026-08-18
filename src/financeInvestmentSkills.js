/**
 * Skills and subjects for finance and investment careers.
 * IDs match the careers in src/data/financeInvestment.js.
 */
export const financeInvestmentSkillTree = [
  {
    id: "finance-investment",
    title: "Finance / Investment",
    subJobs: [
      { id: "finance-investment-investment-banking", skills: ["Financial modelling", "Valuation", "PowerPoint", "Research"], subjects: ["Corporate Finance", "Accounting", "Economics", "Financial Modelling"] },
      { id: "finance-investment-equity-research", skills: ["Company analysis", "Financial modelling", "Report writing", "Excel"], subjects: ["Financial Analysis", "Accounting", "Economics", "Capital Markets"] },
      { id: "finance-investment-financial-analyst", skills: ["Budgeting", "Forecasting", "Excel", "Financial reporting"], subjects: ["Accounting", "Corporate Finance", "Financial Analysis", "Statistics"] },
      { id: "finance-investment-risk-analyst", skills: ["Risk assessment", "Data analysis", "Financial modelling", "Reporting"], subjects: ["Risk Management", "Statistics", "Financial Markets", "Economics"] },
      { id: "finance-investment-credit-analyst", skills: ["Credit assessment", "Financial statement analysis", "Research", "Report writing"], subjects: ["Accounting", "Corporate Finance", "Credit Analysis", "Economics"] },
      { id: "finance-investment-portfolio-management", skills: ["Asset allocation", "Market analysis", "Risk management", "Performance analysis"], subjects: ["Investments", "Portfolio Theory", "Financial Markets", "Statistics"] },
      { id: "finance-investment-asset-management", skills: ["Investment research", "Client communication", "Risk management", "Financial analysis"], subjects: ["Investments", "Portfolio Management", "Financial Markets", "Economics"] },
      { id: "finance-investment-quantitative-analyst", skills: ["Python or R", "Mathematical modelling", "Statistics", "Data analysis"], subjects: ["Probability", "Statistics", "Calculus", "Financial Mathematics"] },
      { id: "finance-investment-quant-developer", skills: ["Python or C++", "Algorithm design", "Data engineering", "Testing"], subjects: ["Programming", "Data Structures", "Financial Mathematics", "Statistics"] },
      { id: "finance-investment-financial-data-analyst", skills: ["SQL", "Excel", "Python", "Data visualization"], subjects: ["Statistics", "Databases", "Financial Analysis", "Data Analytics"] },
      { id: "finance-investment-corporate-finance", skills: ["Financial planning", "Valuation", "Budgeting", "Business communication"], subjects: ["Corporate Finance", "Accounting", "Economics", "Financial Modelling"] },
      { id: "finance-investment-treasury", skills: ["Cash management", "Liquidity planning", "Financial analysis", "Risk management"], subjects: ["Corporate Finance", "Banking", "Financial Markets", "Accounting"] },
      { id: "finance-investment-fintech", skills: ["Financial systems", "Data analysis", "Programming basics", "Product thinking"], subjects: ["Financial Technology", "Banking", "Programming", "Cybersecurity Basics"] },
    ],
  },
];

/**
 * Recursively finds the skill profile for a finance or investment career ID.
 */
export function findFinanceInvestmentSkillProfile(id, nodes = financeInvestmentSkillTree) {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.subJobs) {
      const match = findFinanceInvestmentSkillProfile(id, node.subJobs);
      if (match) return match;
    }
  }
  return undefined;
}

export default financeInvestmentSkillTree;
