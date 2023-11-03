import WelcomePage from "./components/WelcomePage"
import OptionsPage from "./components/OptionsPage"
import GamePage from "./components/GamePage"
import GameOverPage from "./components/GameoverPage"
import useData from "./zustand/useData.store"

function App() {
  const { selectedPage } = useData()

  return (
    <>
      {selectedPage === "" && <WelcomePage />}
      {selectedPage === "OptionsPage" && <OptionsPage />}
      {selectedPage === "GamePage" && <GamePage />}
      {selectedPage === "GameOverPage" && <GameOverPage />}
    </>
  )
}

export default App
