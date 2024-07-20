import Market from "../components/market"
import Player from "../components/player"
import GalaxyMap from "../components/galaxymap"
import Contracts from "../components/contracts"

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-1 md:grid-cols-2 m-3">
          <Player/>
          <GalaxyMap/>
          <Market/>
          <Contracts/>
      </div>
    </main>
  );
}