import { Chess, Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../pages/Game";

export const ChessBoard = ({
  board,
  socket,
  setBoard,
  chess, 
}: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];

  socket: WebSocket | null;
  
  setBoard: (board: any) => void;
  
  chess: Chess;
}) => {
  const [from, setFrom] = useState<Square | null>(null);
  

  return (
    <div className="text-white ">
      {board.map((row, i) => (
        <div key={i} className="flex">
          {row.map((square, j) => {
            const squareRep = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;
            
            
            return (
              <div
                onClick={() => {
                  if (!from) {
                    setFrom(squareRep);
                  } else {
                    
                    if (socket) {
                      socket.send(
                        JSON.stringify({
                          type: MOVE,
                          payload: { 
                            move: {
                              from,
                              to: squareRep 
                            }
                            },
                        })
                      );
                      setFrom(null);
                      chess.move({
                        from,
                        to: squareRep
                  
                      })
                      
                      setBoard(chess.board());
                      console.log({
                        from,
                        to: squareRep
                    })

          
              
                  }
                }}}
                key={j}
                className={`w-16 h-16 flex items-center justify-center ${
                  (i + j) % 2 === 0 ? "bg-gray-500" : "bg-gray-300"
                }`}
              >
                <div className="w-full flex justify-center">
                  {square ? (
                    <span
                      className={
                        square.color === "w" ? "text-black" : "text-white"
                      }
                    >
                      {square.type}
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
