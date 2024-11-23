import { CreepRole } from "./CreepRole";
import { CreepsReport } from "../CreepsReport";

/**
 * Upgrades the controller
 */
export const BasicUpgrader: CreepRole = {
  name: "BasicUpgrader",

  body: [MOVE, WORK, CARRY],

  act: (creep: Creep, creepReport: CreepsReport) => {}
};