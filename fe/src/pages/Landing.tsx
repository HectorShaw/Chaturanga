import { useNavigate } from "react-router-dom";
import th from "./../assets/th.jpeg";
import Button from "../components/Button";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center px-4 sm:px-8">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={th} className="max-w-full md:max-w-96" alt="Chaturanga" />
          </div>

          <div className="pt-8 md:pt-16">
            <div className="flex justify-center md:justify-start items-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-white text-center md:text-left">
                Let's Play Chaturanga
                <br />
                The Old Way, The Original Way
              </h1>
            </div>

            <div className="mt-8 md:mt-16 flex justify-center md:justify-start">
              <Button onClick={() => navigate("/game")}>Play Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
