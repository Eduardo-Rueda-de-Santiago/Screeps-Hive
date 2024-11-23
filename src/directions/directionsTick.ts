import { CreepsReport } from "../creeps/CreepsReport";
import { StructuresReport } from "../structures/StructuresReport";
import { BasicHarvester } from "../creeps/roles/Harvester";

export function directionsTick(tick: number, creepsReport: CreepsReport, structuresReport: StructuresReport) {
  console.log("Doing directions tick");
  console.log(creepsReport);
  console.log("Structures", structuresReport);
  if (creepsReport.harvestersAmount < 3) {
    const spawn = Game.spawns["Spawn1"];
    const spawnList: Array<string> = spawn.memory?.spawnList || new Array<string>();
    if (!spawnList.includes(BasicHarvester.name)) spawnList.push(BasicHarvester.name);
    spawn.memory.spawnList = spawnList;
  }
}
