import { CreepRole } from "./CreepRole";

/**
 * Basic builder role.
 * Builds whatever is needed.
 */
export const BasicBuilder: CreepRole = {
  name: "BasicBuilder",
  body: [MOVE, WORK, CARRY],
  act: (creep: Creep) => {}
};
