import http from 'http';
import { Room, Client } from 'colyseus';

import { State, Player } from './Schemas';

interface OptionProps {}

export class GameRoom extends Room<State> {
  maxClients = 50;

  // 🔥 onCreate
  async onCreate(options: OptionProps) {
    console.log('GameRoom created!', options);

    this.setState(new State());

    this.onMessage('update', (client, data) => {
      const player = this.state.players.get(client.sessionId);
      player.status = data.status;
      player.posX = data.posX;
      player.posY = data.posY;
      player.posZ = data.posZ;
      player.rotY = data.rotY;
    });
  }

  // 🔥 onAuth
  async onAuth(
    client: Client,
    options: OptionProps,
    request: http.IncomingMessage,
  ) {
    return true;
  }

  // 🔥 onJoin
  async onJoin(client: Client, options: OptionProps, auth: any) {
    const player = new Player();
    player.username = client.sessionId;
    player.status = 'idle';
    player.posX = 0;
    player.posY = 0;
    player.posZ = 0;
    player.rotY = 0;

    this.state.players.set(client.sessionId, player);
  }

  // 🔥 onLeave
  async onLeave(client: Client, consented: boolean) {
    if (this.state.players.has(client.sessionId)) {
      this.state.players.delete(client.sessionId);
    }
  }

  // 🔥 onDispose
  async onDispose() {}
}
