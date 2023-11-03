import useData from "../zustand/useData.store"

function GameOver() {
  const { score } = useData()

  function handlePlayAgain() {
    window.location.reload()
  }

  return (
    <div className="select-none flex justify-center items-center flex-col w-100 h-screen rounded-sm">
      <h1 className="text-4xl">Game Over!</h1>
      <p className="mt-10 text-md">Your score was {score}</p>
      <button
        className="my-10 p-3 w-28 bg-purple-900 rounded-sm text-sm text-white"
        onClick={() => handlePlayAgain()}
      >
        Start Again?
      </button>
    </div>
  )
}

export default GameOver
