abstract class CreepRole {

  private readonly roleName: string;
  private readonly category: string;
  private readonly body: Array<any>;

  constructor(roleName: string, category: string, body: Array<any>) {
    this.roleName = roleName;
    this.category = category;
    this.body = body;
  }

  public getRoleName(): string {
    return this.roleName;
  }
  
  public getCategory(): string {
    return this.category;
  }

  public getBody(): Array<any> {
    return this.body;
  }

  public countCreepsWithRole(): number {
    let creepsWithRole: number = 0;
    for (let creepName in Game.creeps) {
      let creep: Creep = Game.creeps[creepName];
      if (creep.memory.role === this.getRoleName()) {
        creepsWithRole++;
      }
    }
    return creepsWithRole;
  }

  abstract run(creep: Creep): void ;
}


export {CreepRole}
