import { CreepRole, resolveRole } from "./roles/CreepRole";
import { CreepsReport } from "./CreepsReport";

/**
 * Handles a single creep
 * @param creepName Name of the creep.
 * @param creepsReport Report to modify while handling the creep.
 */
function handleCreep(creepName: string, creepsReport: CreepsReport) {
  //Delete creep from memory if it no longer exists
  if (!(creepName in Game.creeps)) {
    delete Memory.creeps[creepName];
    return;
  }

  // Count the creep for report purposes
  creepsReport.countCreep();

  // Get the creep object.
  const creep: Creep = Game.creeps[creepName];

  // Get the role of the creep.
  const creepRole: CreepRole | null = resolveRole(creep.memory.role);

  // Act or flag as idle.
  creepRole ? creepRole.act(creep, creepsReport) : creepsReport.addIdleCreep(creepName);
}

/**
 * Handles the logic of all the creeps.
 * @param tick The tick of the game.
 */
export function creepsTick(tick: number): CreepsReport {
  console.log("Doing creep tick");

  const creeps = Memory.creeps;
  const creepsReport: CreepsReport = new CreepsReport();

  for (const creepName in creeps) {
    handleCreep(creepName, creepsReport);
  }

  return creepsReport;
}
