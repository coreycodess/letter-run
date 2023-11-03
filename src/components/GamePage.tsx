import { useEffect, useState } from "react"
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css"
import useData from "../zustand/useData.store"
import generateLetters from "../utils/generateLetters"
import timer from "../utils/timer"

const newLetters = generateLetters(10)

function WaitComponent() {
  return (
    <div className="select-none flex justify-center items-center flex-col w-100 h-screen rounded-sm text-center">
      <p className="text-3xl">Game will start in a few seconds...</p>
      <p className="mt-10 text-sm">type the letters as fast as you can!</p>
    </div>
  )
}

function GamePage() {
  const [wait, setWait] = useState("wait")

  const {
    time,
    setTimer,
    selectedTime,
    letters,
    getLetters,
    setCurrentLetter,
    currentLetter,
    setCurrentLetterPosition,
    currentLetterPosition,
    selectPage,
    setScore,
    score,
  } = useData()

  useEffect(() => {
    setTimeout(() => {
      setWait("done")
    }, 2000)
  }, [])

  function onKeyPress(button: string) {
    if (button.toLowerCase() === letters[currentLetterPosition].toLowerCase()) {
      setCurrentLetterPosition(currentLetterPosition + 1)
      setCurrentLetter(letters[currentLetterPosition + 1])
      setScore()
    }

    if (button.toLowerCase() !== letters[currentLetterPosition].toLowerCase())
      handleGameOver()

    if (letters.length === currentLetterPosition + 1) {
      handleGameOver()
    }
  }

  function handleGameOver() {
    getLetters([])
    setCurrentLetter("")
    setCurrentLetterPosition(0)
    setTimer(null)
    selectPage("GameOverPage")
  }

  useEffect(() => {
    getLetters(newLetters)
    timer(selectedTime, setTimer)
  }, [])

  function handleKeyDown(e: KeyboardEvent) {
    const key = e.key

    if (key.toLowerCase() === letters[currentLetterPosition].toLowerCase()) {
      setCurrentLetterPosition(currentLetterPosition + 1)
      setCurrentLetter(letters[currentLetterPosition + 1])
      setScore()
    }

    if (key.toLowerCase() !== letters[currentLetterPosition].toLowerCase())
      handleGameOver()

    if (letters.length === currentLetterPosition + 1) {
      handleGameOver()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)

    // Don't forget to clean up
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [letters, currentLetterPosition])

  useEffect(() => {
    if (time === 0) handleGameOver()
  }, [time])

  return (
    <>
      {wait === "done" ? (
        <div className="select-none flex justify-center items-center flex-col w-100 h-screen rounded-sm">
          <div className="w-4/5 bg-purple-900 text-white">
            {/* Header */}
            <div className="flex p-3 items-center justify-between">
              <p>Score: {score}</p>
              <p>Time: {time}</p>
            </div>

            {/* Main */}
            <div className="my-10 text-center text-3xl">
              <h1>{currentLetter}</h1>
            </div>
          </div>

          {/* Keyboard */}
          <div className="w-4/5 text-black">
            <Keyboard onKeyPress={onKeyPress} />
          </div>
        </div>
      ) : (
        <WaitComponent />
      )}
    </>
  )
}

export default GamePage
