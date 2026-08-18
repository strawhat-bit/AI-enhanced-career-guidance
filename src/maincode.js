import { findBusinessManagementJob } from "./businessManagementJobs.js";
import { findFinanceInvestmentJob } from "./financeInvestmentJobs.js";
import { findGovernmentJob } from "./governmentJobs.js";
import technical from "./technical.js";

import { findBusinessManagementSkillProfile } from "./businessManagementSkillTree.js";
import { findFinanceInvestmentSkillProfile } from "./financeInvestmentSkillTree.js";
import { findGovernmentSkillProfile } from "./governmentSkillTree.js";
import { findTechnicalSkillProfile } from "./technicalSkillTree.js";

/**
 * Unified recursive lookup:
 * Finds a career by ID and also retrieves its skill profile.
 *
 * @param {string} id - Career/job ID (e.g., "finance-investment-quant-developer").
 * @returns {{ job: object | undefined, skills: object | undefined }}
 */
export function findCareerWithSkills(id) {
  let job, skills;

  // Business / Management
  job = findBusinessManagementJob(id);
  if (job) skills = findBusinessManagementSkillProfile(id);

  // Finance / Investment
  if (!job) {
    job = findFinanceInvestmentJob(id);
    if (job) skills = findFinanceInvestmentSkillProfile(id);
  }

  // Government
  if (!job) {
    job = findGovernmentJob(id);
    if (job) skills = findGovernmentSkillProfile(id);
  }

  // Technical
  if (!job) {
    const techJobs = technical();
    job = techJobs.find(j => j.id === id);
    if (job) skills = findTechnicalSkillProfile(id);
  }

  return { job, skills };
}

// Example usage
function main() {
  console.log("=== Lookup Examples ===");

  console.log(findCareerWithSkills("business-management-management-product-manager"));
  console.log(findCareerWithSkills("finance-investment-quant-developer"));
  console.log(findCareerWithSkills("civil-administration-ias"));
  console.log(findCareerWithSkills("ai-ml-engineer"));
}

main();
