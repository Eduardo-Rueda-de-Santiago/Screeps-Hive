import { BasicHarvester } from "./roles/Harvester";
import { BasicBuilder } from "./roles/Builder";
import { Upgrader } from "./roles/Upgrader";

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

  public toString(): string {
    return `Creep report: {
    creepsInGame: ${this._creepsAmount},
    harvestersInGame: ${this._harvestersAmount},
    buildersInGame: ${this._buildersAmount},
    }`;
  }
}

/**
 * Handles a single creep
 * @param creepName Name of the creep.
 * @param creepsReport Report to modify while handling the creep.
 */
function handleCreep(creepName: string, creepsReport: CreepsReport) {
  //Delete creep from memory if it no longer exists
  if (!(creepName in Game.creeps)) {
    delete Memory.creeps[creepName];
    return;
  }

  // Count the creep for report purposes
  creepsReport.countCreep();

  const creep: Creep = Game.creeps[creepName];

  switch (creep.memory.role) {
    case BasicHarvester.name:
      BasicHarvester.act(creep);
      break;

    case BasicBuilder.name:
      BasicBuilder.act(creep);
      break;

    case Upgrader.name:
      Upgrader.act(creep);
      break;

    default:
      creepsReport.addIdleCreep(creepName);
  }
}

/**
 * Handles the logic of all the creeps.
 * @param tick The tick of the game.
 */
export function creepsTick(tick: number): CreepsReport {
  console.log("Doing creep tick");

  const creeps = Memory.creeps;
  const creepsReport: CreepsReport = new CreepsReport();

  for (const creepName in creeps) {
    handleCreep(creepName, creepsReport);
  }

  return creepsReport;
}
