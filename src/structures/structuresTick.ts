export class StructuresReport {}

export function structuresTick(tick: number): StructuresReport {
  console.log("Doing structure tick");
  return new StructuresReport();
}
