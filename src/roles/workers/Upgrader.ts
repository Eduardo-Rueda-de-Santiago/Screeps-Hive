import {WorkerRole} from "./Worker";

class UpgraderRole extends WorkerRole {

  public static readonly ROLE_NAME: string = "Upgrader";

  constructor() {
    super(UpgraderRole.ROLE_NAME);
  }

  run(creep: Creep): void {

    if (creep.store[RESOURCE_ENERGY] == 0) {
      let sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0]);
      }
    } else {
      if (creep.room.controller)
        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller);
        }
    }
  }


}

export {UpgraderRole};