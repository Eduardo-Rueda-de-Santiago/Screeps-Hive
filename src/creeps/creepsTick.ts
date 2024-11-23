export class CreepsReport {
  private creepsAmount: number;

  constructor() {
    this.creepsAmount = 0;
  }

  public addCreepCount(): void {
    this.creepsAmount++;
  }

  public toString(): string {
    return `Creep report: {
    creepsInGame: ${this.creepsAmount}
    }`;
  }
}

function handleCreep(creepName: string, creepsReport: CreepsReport) {
  if (!(creepName in Game.creeps)) {
    delete Memory.creeps[creepName];
    return;
  }

  creepsReport.addCreepCount();
}

export function creepsTick(tick: number): CreepsReport {
  console.log("Doing creep tick");

  const creeps = Memory.creeps;
  const creepsReport: CreepsReport = new CreepsReport();

  for (const creepName in creeps) {
    handleCreep(creepName, creepsReport);
  }

  return creepsReport;
}
