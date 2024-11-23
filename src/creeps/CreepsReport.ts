/**
 * Data resulting from doing the creeps logic.
 */
export class CreepsReport {
  // Amount of creeps controlled.
  private _creepsAmount: number;
  // Amount of harvesters controlled.
  private _harvestersAmount: number;
  // Amount of builders controlled.
  private _buildersAmount: number;
  // Names of the idle creeps
  private readonly _idleCreeps: Array<string>;

  constructor() {
    this._creepsAmount = 0;
    this._harvestersAmount = 0;
    this._buildersAmount = 0;
    this._idleCreeps = new Array<string>();
  }

  /**
   * Count a creep.
   */
  public countCreep(): void {
    this._creepsAmount++;
  }

  /**
   * Count a harvester.
   */
  public countHarvester(): void {
    this._harvestersAmount++;
  }

  /**
   * Count a builder.
   */
  public countBuilder(): void {
    this._buildersAmount++;
  }

  /**
   * Adds the name of the idle creep to the array.
   * @param idleCreepName Name of the idle creep.
   */
  public addIdleCreep(idleCreepName: string): void {
    this._idleCreeps.push(idleCreepName);
  }

  /**
   * Returns an array with the name of the idle creeps
   */
  get idleCreeps(): Array<string> {
    return this._idleCreeps;
  }

  get creepsAmount(): number {
    return this._creepsAmount;
  }

  get harvestersAmount(): number {
    return this._harvestersAmount;
  }

  get buildersAmount(): number {
    return this._buildersAmount;
  }

  public toString(): string {
    return `Creep report: {
    creepsInGame: ${this._creepsAmount},
    harvestersInGame: ${this._harvestersAmount},
    buildersInGame: ${this._buildersAmount},
    }`;
  }
}
