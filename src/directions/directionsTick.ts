import { CreepsReport } from "../creeps/creepsTick";
import { StructuresReport } from "../structures/structuresTick";
import * as console from "console";

export function directionsTick(tick: number, creepsReport: CreepsReport, structuresReport: StructuresReport) {
  console.log("Creeps: ", creepsReport);
  console.log("Structures", structuresReport);
}
