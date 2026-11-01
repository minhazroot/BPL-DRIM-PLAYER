import { use } from "react";
import type { Iplayer } from "../../PlayersType/PlayersType";
import AvailablePlayer from "../../AvailablePlayer/AvailablePlayer";
// import PlayerCart from "../../PlayerCart/PlayerCart";

export interface PlayersProps {
    PlayerPromise: Promise<Iplayer[]>
}

const Players = ({ PlayerPromise }: PlayersProps) => {
    const Players =use(PlayerPromise);
    return <div className=" container mx-auto">
    <div className="flex justify-between gap-5 mt-10">
    <h2 className="text-5xl text-black-400">Available Players</h2> 
    <div className="flex gap-2">
       <button className="btn btn-warning">Available</button> 
       <button className="btn btn-secondary">Secondary</button>

    </div>
</div>
<AvailablePlayer Players={Players}  />

    </div>
}

export default Players;