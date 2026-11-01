import { FaFlag, FaRegUserCircle, FaWallet } from "react-icons/fa";
import type { Iplayer } from "../PlayersType/PlayersType";

export interface PlayerCartProps {
    player: Iplayer ;
}

export default function PlayerCart({ player }: PlayerCartProps) {
    
    return (
         <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">

          {/* Player Image */}
          <div className="p-4 pb-0">
            <img
              src={player.PlayerImage}
              alt={player.PlayerName}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>

          {/* Player Information */}
          <div className="p-5 space-y-4">

            {/* Player Name */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaRegUserCircle className="text-xl text-gray-500" />
                <h2 className="text-xl font-bold text-gray-800">
                  {player.PlayerName}
                </h2>
              </div>

              <span className="badge badge-success badge-outline">
                {player.PlayerType}
              </span>
            </div>

            {/* Country */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FaFlag />
              <span>{player.origin}</span>
            </div>

            <div className="divider my-1"></div>

            {/* Player Skills */}
            <div className="space-y-3">

              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Batting Style</span>
                <span className="font-semibold text-gray-800 text-sm">
                  {player.BattingStyle}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Bowling Style</span>
                <span className="font-semibold text-gray-800 text-sm text-right">
                  {player.BowlingStyle}
                </span>
              </div>

            </div>

            <div className="divider my-1"></div>

            {/* Price and Button */}
            <div className="flex justify-between items-center gap-3">

              <div>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <FaWallet /> Player Price
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  ${player.price.toLocaleString()}
                </h3>
              </div>

              <button className="btn btn-primary rounded-xl px-5">
                Choose Player
              </button>

            </div>

          </div>
        </div>
    )
}