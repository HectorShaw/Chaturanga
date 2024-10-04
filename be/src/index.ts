import { WebSocketServer } from 'ws';
import { GameManager } from './Gamemanager';

const wss = new WebSocketServer({ port: 8080 });

const gamemanager = new GameManager();
  
wss.on('connection', function connection(ws) {
  gamemanager.addUser(ws)
  ws.on("disconnect" , () => gamemanager.deleteUser(ws))
});