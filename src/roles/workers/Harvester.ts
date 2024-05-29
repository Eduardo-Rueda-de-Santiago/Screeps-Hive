import {WorkerRole} from "./Worker";

class HarvesterRole extends WorkerRole {

  public static readonly ROLE_NAME: string = "Harvester";

  constructor() {
    super(HarvesterRole.ROLE_NAME);
  }

  run(creep: Creep): void {

    if (creep.store.getFreeCapacity() > 0) {

      let sources = creep.room.find(FIND_SOURCES);

      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {

        creep.moveTo(sources[0]);

      }

    } else {

      if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

        creep.moveTo(Game.spawns['Spawn1']);

      }

    }
  }

}

export {HarvesterRole};
