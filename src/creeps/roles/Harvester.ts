import { CreepRole } from "./CreepRole";
import { CreepsReport } from "../CreepsReport";

/**
 * Basic harvester role.
 * Gets energy to the spawn from some energy source
 */
export const BasicHarvester: CreepRole = {
  name: "BasicHarvester",

  body: [MOVE, WORK, CARRY],

  act: (creep: Creep, creepReport: CreepsReport) => {
    if (creep.store.getFreeCapacity() > 0) {
      let sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0]);
      }
    } else if (Game.spawns["Spawn1"].energy < Game.spawns["Spawn1"].energyCapacity) {
      if (creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(Game.spawns["Spawn1"]);
      }
    }
    creepReport.countHarvester();
  }
};
