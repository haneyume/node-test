import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import socketio from 'socket.io';

import { ApiRouter } from './routers/ApiRouter';
import { UploadRouter } from './routers/UploadRouter';

///////////////////////////////////////////////////////////////////////

const app = express();
app.disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(morgan('dev'));

app.use('/api', ApiRouter);
app.use('/api', UploadRouter);

app.use(express.static('public'));

const port = Number(process.env.PORT || 8080);
const server = app.listen(port, () => {
  console.log(new Date(), `🚀 Server is running on port ${port}`);
});

///////////////////////////////////////////////////////////////////////

declare module 'socket.io' {
  interface Socket {
    uid: string;
  }
}

const io = new socketio.Server(server, {});

io.use((socket, next) => {
  const uid = socket.handshake.query.token as string;

  socket.uid = uid;
  socket.join(uid);

  next();
});

io.on('connection', (socket) => {
  console.log(new Date(), socket.id, `connection`);
  console.log(new Date(), socket.uid, `connection`);

  socket.on('disconnecting', (reason) => {
    console.log(new Date(), socket.uid, `disconnecting => ${reason}`);
  });

  socket.on('disconnect', (reason) => {
    console.log(new Date(), socket.uid, `disconnect => ${reason}`);
  });

  socket.on('error', (error) => {
    console.log(new Date(), socket.uid, `error => ${error}`);
  });
});
