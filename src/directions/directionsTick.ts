import { CreepsReport } from "../creeps/creepsTick";
import { StructuresReport } from "../structures/structuresTick";

export function directionsTick(tick: number, creepsReport: CreepsReport, structuresReport: StructuresReport) {
  console.log("Doing directions tick");
  console.log(creepsReport);
  console.log("Structures", structuresReport);
}
