import React, { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../PlayersType/PlayersType";
import { MdDeleteForever } from "react-icons/md";

export interface SelectedPlayerProps {
      Coin: number;
  SetCoin: Dispatch<SetStateAction<number>>;
  SeletedPlayer: Iplayer[];
  setSeletedPlayer: Dispatch<SetStateAction<Iplayer[]>>;
}

const SelectedPlayer = ({
  SeletedPlayer,
  setSeletedPlayer,
  Coin,
  SetCoin
  
}: SelectedPlayerProps) => {
const handleRemovePlayer=(Player:Iplayer)=>{
    const resPlayer=SeletedPlayer.filter(selPlayer=>selPlayer.PlayerName !=Player.PlayerName )
setSeletedPlayer(resPlayer)
const NewCoin = Coin+ Player.price;
SetCoin(NewCoin);

}
if(SeletedPlayer.length===0){
  return (
    <h2 className="text-5xl font-bold flex items-center justify-center text-red-500">No Selected Player</h2>

  )
}
  
  return (
    <div>
      {/* <h2>Selected Player</h2> */}
      {SeletedPlayer.map((Player) => {
        return (
          <div className="flex items-center justify-between gap-4 w-full mx-auto p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300">
            {/* Player Information */}
            <div className="flex items-center gap-4 min-w-0">
              <img
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-100 shadow-sm"
                src={Player.PlayerImage}
                alt={Player.PlayerName}
              />

              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 truncate">
                  {Player.PlayerName}
                </h3>
                <p className="text-sm text-gray-400">Player</p>
              </div>
            </div>

            {/* Delete Button */}
            <button
              className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-90"
              title="Delete Player" onClick={()=>handleRemovePlayer(Player)}
            >
              <MdDeleteForever className="text-2xl" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayer;
