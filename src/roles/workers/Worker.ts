import {CreepRole} from "../CreepRole";

abstract class WorkerRole extends CreepRole {

  public static readonly CATEGORY_NAME: string = "Worker";
  public static readonly BODY: Array<any> = [MOVE, CARRY, WORK];

  constructor(roleName: string) {
    super(roleName, WorkerRole.CATEGORY_NAME, WorkerRole.BODY);
  }

}

export {WorkerRole};
