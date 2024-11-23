/**
 * Data resulting from doing the creeps logic.
 */
export class CreepsReport {
  // Amount of creeps controlled.
  private creepsAmount: number;
  // Amount of harvesters controlled.
  private harvestersAmount: number;
  // Amount of builders controlled.
  private buildersAmount: number;

  constructor() {
    this.creepsAmount = 0;
    this.harvestersAmount = 0;
    this.buildersAmount = 0;
  }

  /**
   * Count a creep.
   */
  public countCreep(): void {
    this.creepsAmount++;
  }

  /**
   * Count a harvester.
   */
  public countHarvester(): void {
    this.harvestersAmount++;
  }

  /**
   * Count a builder.
   */
  public countBuilder(): void {
    this.buildersAmount++;
  }

  public toString(): string {
    return `Creep report: {
    creepsInGame: ${this.creepsAmount},
    harvestersInGame: ${this.harvestersAmount},
    buildersInGame: ${this.buildersAmount},
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
