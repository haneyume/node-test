import { type, Schema, MapSchema, ArraySchema } from '@colyseus/schema';

class Player extends Schema {
  @type('string') username: string;
  @type('string') status: string;
  @type('number') posX: number;
  @type('number') posY: number;
  @type('number') posZ: number;
  @type('number') rotY: number;
}

class SceneObject extends Schema {
  @type('number') posX: number;
  @type('number') posY: number;
  @type('number') posZ: number;
}

class World extends Schema {
  @type('number') width: number;
  @type('number') height: number;
  @type('number') items: number = 10;
}

class State extends Schema {
  @type(World) world: World = new World();
  @type({ map: Player }) players = new MapSchema<Player>();
  @type({ map: SceneObject }) sceneObjects = new MapSchema<SceneObject>();
  @type('string') winner: string;
  @type('boolean') draw: boolean;
}

export { State, Player };
