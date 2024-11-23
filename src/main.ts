import { ErrorMapper } from "utils/ErrorMapper";
import { directionsTick } from "./directions/directionsTick";
import { structuresTick, StructuresReport } from "./structures/structuresTick";
import { creepsTick, CreepsReport } from "creeps/creepsTick";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  const tick: number = Game.time;

  console.log(`Current game tick is ${tick}`);

  const structureReport: StructuresReport = structuresTick(tick);
  const creepsReports: CreepsReport = creepsTick(tick);

  directionsTick(tick, creepsReports, structureReport);
});
