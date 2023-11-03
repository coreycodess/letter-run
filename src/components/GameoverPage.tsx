import useData from "../zustand/useData.store"

function GameOver() {
  const {
    getLetters,
    setCurrentLetter,
    setCurrentLetterPosition,
    setTimer,
    score,
    selectPage,
  } = useData()

  function handlePlayAgain() {
    getLetters([])
    setCurrentLetter("")
    setCurrentLetterPosition(0)
    setTimer(null)
    selectPage("OptionsPage")
  }

  return (
    <div className="select-none flex justify-center items-center flex-col w-100 h-screen rounded-sm">
      <h1 className="text-4xl">Game Over!</h1>
      <p className="mt-10 text-sm">Your score was {score}</p>
      <button
        className="mt-10 text-sm p-3 bg-purple-900 rounded-sm text-white"
        onClick={() => handlePlayAgain()}
      >
        Play Again?
      </button>
    </div>
  )
}

export default GameOver