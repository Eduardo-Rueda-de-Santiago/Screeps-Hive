import { CreepRole } from "./CreepRole";

/**
 * Upgrades the controller
 */
export const BasicUpgrader: CreepRole = {
  name: "BasicUpgrader",

  body: [MOVE, WORK, CARRY],

  act: (creep: Creep) => {}
};
