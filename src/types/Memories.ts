export {};

declare global {
  // Memory extension samples
  interface Memory {
    uuid: number;
    log: any;
  }

  interface CreepMemory {
    role: string;
    room: string;
    working: boolean;
  }

  interface SpawnMemory {
    spawnList: Array<string>;
  }
}
