

import type { Iplayer } from "../PlayersType/PlayersType";
import PlayerCart from "../PlayerCart/PlayerCart";

export interface PlayersProps {
  Players: Iplayer[];
}

const AvailablePlayer = ({ Players }: PlayersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

    {
      Players.map((player) => <PlayerCart key={player.id} player ={player}></PlayerCart> )
    }

    </div>
  );
};

export default AvailablePlayer;
