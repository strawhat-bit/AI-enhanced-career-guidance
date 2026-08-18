import technicalSkillTree, {
  findTechnicalSkillProfile,
} from "../technicalSkills.js";
import governmentSkillTree, {
  findGovernmentSkillProfile,
} from "../governmentSkills.js";
import businessManagementSkillTree, {
  findBusinessManagementSkillProfile,
} from "../businessManagementSkills.js";
import financeInvestmentSkillTree, {
  findFinanceInvestmentSkillProfile,
} from "../financeInvestmentSkills.js";

/**
 * One registry for every career-sector skill tree.
 * The app can import this file instead of importing four individual files.
 */
export const allSkillTrees = {
  technical: technicalSkillTree,
  government: governmentSkillTree,
  businessManagement: businessManagementSkillTree,
  financeInvestment: financeInvestmentSkillTree,
};

/**
 * Finds a career's skill profile across every sector.
 *
 * @param {string} careerId - For example: "software-engineer" or
 * "civil-administration-ias".
 * @returns {object | undefined} The matching skill profile.
 */
export function findSkillProfile(careerId) {
  return (
    findTechnicalSkillProfile(careerId) ||
    findGovernmentSkillProfile(careerId) ||
    findBusinessManagementSkillProfile(careerId) ||
    findFinanceInvestmentSkillProfile(careerId)
  );
}

export default allSkillTrees;
