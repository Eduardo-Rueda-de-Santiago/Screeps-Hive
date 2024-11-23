import { CreepRole, resolveRole } from "../creeps/roles/CreepRole";
import { StructuresReport } from "./StructuresReport";

function handleSpawn(spawnName: string) {
  const spawn = Game.spawns[spawnName];

  if (!spawn.spawning && spawn.memory?.spawnList) {
    const spawnList = spawn.memory?.spawnList;

    const creepToSpawn = spawnList?.pop();

    if (creepToSpawn) {
      const creepRole: CreepRole | null = resolveRole(creepToSpawn);

      if (creepRole) {
        spawn.spawnCreep(creepRole.body, creepRole.name + Game.time, {
          memory: {
            role: creepRole.name,
            room: spawn.room.name,
            working: false
          }
        });

        spawn.memory.spawnList = spawnList;
      }
    }
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
