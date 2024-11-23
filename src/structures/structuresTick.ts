export class StructuresReport {}

function handleSpawn(spawnName: string) {
  const spawn = Game.spawns[spawnName];
  if (!spawn.spawning){

    if
  }
}

export function structuresTick(tick: number): StructuresReport {
  console.log("Doing structure tick");
  const spawns: { [p: string]: StructureSpawn } = Game.spawns;

  for (const spawnName in spawns) {
    handleSpawn(spawnName);
  }
  return new StructuresReport();
}
