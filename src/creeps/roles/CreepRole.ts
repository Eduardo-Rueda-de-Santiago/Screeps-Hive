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
