import {HarvesterRole} from "../roles/workers/Harvester";
import {CreepRole} from "../roles/CreepRole";
import {UpgraderRole} from "../roles/workers/Upgrader";

export interface RoleHash {
  [details: string]: CreepRole;
}


class CreepWorkAssigner {
  private readonly roleTable: RoleHash;

  constructor() {

    this.roleTable = {};
    this.roleTable[HarvesterRole.ROLE_NAME] = new HarvesterRole();
    this.roleTable[UpgraderRole.ROLE_NAME] = new UpgraderRole();

  }

  public runCreeps(): void {
    for (let creepName in Game.creeps) {
      let creep: Creep = Game.creeps[creepName];
      this.roleTable[creep.memory.role].run(creep);
    }
  }

}

export {CreepWorkAssigner}
