import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../PlayersType/PlayersType";
import AvailablePlayer from "../../AvailablePlayer/AvailablePlayer";
import SelectedPlayer from "../../AvailablePlayer/SelectedPlayer";

// Players Component-এর Props-এর Interface তৈরি করা হয়েছে।
// Parent Component থেকে PlayerPromise গ্রহণ করা হবে।
// PlayerPromise-এর মধ্যে একাধিক Player-এর Data একটি Array হিসেবে থাকবে।
// Promise Resolve হলে Iplayer[] Type-এর Data পাওয়া যাবে।
export interface PlayersProps {
  PlayerPromise: Promise<Iplayer[]>;
  Coin: number;
  SetCoin: Dispatch<SetStateAction<number>>;
}

// Players Component তৈরি করা হয়েছে।
// এখানে Parent Component থেকে PlayerPromise Props হিসেবে গ্রহণ করা হচ্ছে।
const Players = ({ PlayerPromise, Coin, SetCoin }: PlayersProps) => {
  // Step 1: use() Hook ব্যবহার করে Promise থেকে Player-এর Data সংগ্রহ করা হচ্ছে।
  // Promise Resolve হলে Players Variable-এর মধ্যে সম্পূর্ণ Player Array পাওয়া যাবে।
  // Promise Resolve না হওয়া পর্যন্ত React Component Suspend অবস্থায় থাকবে।
  const Players = use(PlayerPromise);

  // Step 2: Button-এর Active Status নিয়ন্ত্রণ করার জন্য State তৈরি করা হয়েছে।
  // Initial Value হিসেবে "available" সেট করা হয়েছে।
  // ফলে Component প্রথমবার Render হলে Available Button Active থাকবে।
  const [ButtonType, setButtonType] = useState("available");

  // Step 3: Button-এর Active Status পরিবর্তন করার জন্য একটি Function তৈরি করা হয়েছে।
  // Function-এর Parameter হিসেবে "available" অথবা "selected" গ্রহণ করা হবে।
  // setButtonType() দিয়ে State-এর Value Update করা হচ্ছে।
  // State পরিবর্তন হলে React Component পুনরায় Render হবে।
  const HandelUpdateButtonType = (type: "available" | "selected") => {
    setButtonType(type);
  };

  //Selected player status
  const [SeletedPlayer, setSeletedPlayer] = useState<Iplayer[]>([]);

  return (
    // পুরো Players Section-কে একটি Container-এর মধ্যে রাখা হয়েছে।
    // container দিয়ে Content-এর সর্বোচ্চ Width নিয়ন্ত্রণ করা হয়।
    // mx-auto দিয়ে Container-কে Horizontal Center করা হয়েছে।
    <div className="container mx-auto">
      {/* Step 4: Heading এবং Button-গুলোকে একই Row-তে Display করা হচ্ছে। */}
      {/* justify-between দিয়ে Heading ও Button-এর মধ্যে সর্বোচ্চ Space রাখা হয়েছে। */}
      {/* mt-10 দিয়ে উপরের দিকে Margin দেওয়া হয়েছে। */}
      <div className="flex justify-between gap-5 mt-10">
        {/* Step 5: Conditional Rendering ব্যবহার করে Heading পরিবর্তন করা হচ্ছে। */}
        {/* ButtonType-এর Value "available" হলে Available Players Heading দেখাবে। */}
        {/* অন্যথায় Selected Players Heading দেখাবে। */}
        {/* অর্থাৎ কোন Button Active আছে তার উপর Heading নির্ভর করছে। */}
        {ButtonType === "available" ? (
          <h2 className="text-5xl text-black-400">Available Players</h2>
        ) : (
          <h2 className="text-5xl text-black-400">Selected Players</h2>
        )}

        {/* Available এবং Selected Button-কে পাশাপাশি রাখার জন্য Flex ব্যবহার করা হয়েছে। */}
        <div className="flex">
          {/* Available Button */}

          <button
            // Step 6: Available Button-এ Click Event যুক্ত করা হয়েছে।
            // Button-এ Click করলে HandelUpdateButtonType Function Call হবে।
            // Parameter হিসেবে "available" পাঠানো হচ্ছে।
            // ফলে ButtonType State-এর Value "available" হয়ে যাবে।
            onClick={() => HandelUpdateButtonType("available")}
            // Step 7: Conditional Styling ব্যবহার করে Active Button-এর Style নির্ধারণ করা হচ্ছে।
            // ButtonType-এর Value "available" হলে btn-warning Class যুক্ত হবে।
            // অন্যথায় কোনো Active Class যুক্ত হবে না।
            // rounded-r-none দিয়ে Button-এর ডান পাশের Border Radius সরিয়ে দেওয়া হয়েছে।
            className={`btn ${
              ButtonType === "available" ? "btn-warning" : ""
            } rounded-r-none`}
          >
            Available
          </button>

          {/* Selected Button */}

          <button
            // Step 8: Selected Button-এ Click Event যুক্ত করা হয়েছে।
            // Click করলে HandelUpdateButtonType Function Call হবে।
            // Parameter হিসেবে "selected" পাঠানো হচ্ছে।
            // ফলে ButtonType State-এর Value "selected" হয়ে যাবে।
            onClick={() => HandelUpdateButtonType("selected")}
            // Step 9: Conditional Styling ব্যবহার করে Selected Button-এর Active Style নির্ধারণ করা হচ্ছে।
            // ButtonType-এর Value "selected" হলে btn-secondary Class যুক্ত হবে।
            // অন্যথায় কোনো Active Class যুক্ত হবে না।
            // rounded-l-none দিয়ে Button-এর বাম পাশের Border Radius সরিয়ে দেওয়া হয়েছে।
            className={`btn ${
              ButtonType === "selected" ? "btn-secondary" : ""
            } rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>

      {/* Step 10: Conditional Rendering ব্যবহার করে Component পরিবর্তন করা হচ্ছে। */}
      {/* ButtonType-এর Value "available" হলে AvailablePlayer Component দেখানো হবে। */}
      {/* Players Array-কে Props হিসেবে AvailablePlayer Component-এ পাঠানো হচ্ছে। */}
      {/* অন্যথায় SelectedPlayer Component Display করা হবে। */}
      {/* অর্থাৎ Button পরিবর্তন করলে নিচের Content-ও পরিবর্তন হবে। */}
      {ButtonType === "available" ? (
        <AvailablePlayer
          Players={Players}
          Coin={Coin}
          setCoin={SetCoin}
          SeletedPlayer={SeletedPlayer}
          setSeletedPlayer={setSeletedPlayer}
        />
      ) : (
        <SelectedPlayer SeletedPlayer={SeletedPlayer} setSeletedPlayer={setSeletedPlayer} Coin={Coin} SetCoin={SetCoin} />
      )}
    </div>
  );
};

// Players Component-কে অন্য Component-এ ব্যবহার করার জন্য Export করা হয়েছে।
export default Players;
