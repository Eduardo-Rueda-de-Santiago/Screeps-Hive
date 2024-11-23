export class CreepsReport {}

export function creepsTick(tick: number): CreepsReport {
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
  return new CreepsReport();
}
