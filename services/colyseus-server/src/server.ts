import http from 'http';
import express from 'express';
import { Server, Room } from 'colyseus';
import { monitor } from '@colyseus/monitor';

import { ApiRoutes } from './routes/ApiRoutes';
import { GameRoom } from './games/GameRoom';

const port = Number(process.env.PORT || 8080);

const app = express();
app.use(express.json());
app.use('/api', ApiRoutes);
app.use('/colyseus', monitor());
app.use(express.static('public'));

const gameServer = new Server({
  server: http.createServer(app),
});

gameServer.define('GameRoom', GameRoom);

gameServer.listen(port);
