import { CreepRole } from "./CreepRole";

/**
 * Upgrades the controller
 */
export const Upgrader: CreepRole = {
  name: "Upgrader",

  body: [MOVE, WORK, CARRY],

  act: (creep: Creep) => {}
};
