import fetcher from "./API/fetcher";
import { SWRConfig } from "swr";
import PokedexContainer from "./Pokedex/PokedexContainer";

function App() {
  return (
    <div className="app">
      <SWRConfig value={{ fetcher, suspense: true }}>
        <PokedexContainer />
      </SWRConfig>
    </div>
  );
}

export default App;
