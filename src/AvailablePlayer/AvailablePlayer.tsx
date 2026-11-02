import type { Iplayer } from "../PlayersType/PlayersType";
import PlayerCart from "../PlayerCart/PlayerCart";
import type { Dispatch, SetStateAction } from "react";

export interface PlayersProps {
  Players: Iplayer[];
  Coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  SeletedPlayer: Iplayer[];
  setSeletedPlayer: Dispatch<SetStateAction<Iplayer[]>>;
}

const AvailablePlayer = ({
  Players,
  Coin,
  setCoin,
  SeletedPlayer,
  setSeletedPlayer,
}: PlayersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {Players.map((player) => (
        <PlayerCart
          key={player.id}
          player={player}
          Coin={Coin}
          setCoin={setCoin}
          SeletedPlayer={SeletedPlayer}
          setSeletedPlayer={setSeletedPlayer}
        ></PlayerCart>
      ))}
    </div>
  );
};

export default AvailablePlayer;
