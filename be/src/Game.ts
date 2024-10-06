import WebSocket from "ws";
import { Chess } from 'chess.js'


// interface Game {
//     id: number;
//     name: string;
//     player1: WebSocket,
//     player2: WebSocket,
// }

export class Game {
    public player1: WebSocket
    public player2: WebSocket
    public board: Chess
    private startTime: Date;

    constructor(player1: WebSocket, player2: WebSocket) {
        this.player1    = player1;
        this.player2 = player2;
        this.board = new Chess()
        this.startTime = new Date()

    }

    makeMove(socket: WebSocket, move: string) {
        //validation of your moves

    } 
}   