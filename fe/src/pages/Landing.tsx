import chessBoard from "./../assets/chessBoard.jpg";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 ">
          <div className="flex justify-center">
            <img src={chessBoard} className="max-w-96" />
          </div>

          <div className="pt-16">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold text-white">
                lets play ! The Old way the Orignal way
              </h1>
            </div>

            
              <div className="flex justify-center mt-4">
                <button className="px-8 py-4 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold rounded">
                  Play Now
                </button> 
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
