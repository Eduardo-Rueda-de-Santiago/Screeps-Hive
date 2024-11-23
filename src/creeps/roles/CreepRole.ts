import { BasicHarvester } from "./Harvester";
import { BasicBuilder } from "./Builder";
import { BasicUpgrader } from "./Upgrader";

/**
 * Creep role interface
 */
export interface CreepRole {
  /**
   * Name of the role.
   */
  readonly name: string;

  /**
   * The body of the creep with this role.
   */
  readonly body: Array<BodyPartConstant>;

  /**
   * Actions creep with this role has to take.
   * @param creep The creep to act
   */
  readonly act: (creep: Creep) => void;
}

export function resolveRole(name: string): CreepRole | null {
  switch (name) {
    case BasicHarvester.name:
      return BasicHarvester;

    case BasicBuilder.name:
      return BasicBuilder;

    case BasicUpgrader.name:
      return BasicUpgrader;

    default:
      return null;
  }
}
