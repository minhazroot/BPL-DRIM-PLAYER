

import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Component/Banner/Banner'
import Nav from './Component/Nab_bar/Nav'
import Players from './Component/Players/Players';
import type { Iplayer } from './PlayersType/PlayersType';

const PlayerPromise =async():Promise<Iplayer[]>=>{
const res = await fetch('/data.json');
const data =await res.json()
return data;

}

function App() {
   const [Coin,SetCoin]=useState(5000);

  return (
    <>
  <Nav Coin={Coin} />
  <Banner/>
  <Suspense fallback={<div>Loding Data...</div>}>
  <Players PlayerPromise ={PlayerPromise()} Coin={Coin} SetCoin={SetCoin}  />
  </Suspense>
  
  
    </>
  )
}

export default App
