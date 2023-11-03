import { useState, useEffect } from "react"
import useData from "../zustand/useData.store"

function OptionsPage() {
  const { selectTime, setLetterAmount, selectPage } = useData()

  const [trackOptions, setTrackOptions] = useState({
    time: "",
    letterAmount: "",
  })

  function handleOption(time: number) {
    selectTime(time)
    setTrackOptions({ ...trackOptions, time: "done" })
  }

  function handleLetterAmount(amount: number) {
    setLetterAmount(amount)
    setTrackOptions({ ...trackOptions, letterAmount: "done" })
  }

  useEffect(() => {
    if (trackOptions.time === "done" && trackOptions.letterAmount === "done") {
      selectPage("GamePage")
    }
  }, [trackOptions])

  return (
    <div className="select-none flex justify-center items-center flex-col w-100 h-screen">
      {/* Options */}
      <div className="text-center w-1/2">
        <h1 className="text-3xl sm:text-5xl">Select Time</h1>
        <div className="my-10 text-white">
          <button
            className="mx-5 my-2 sm:my-0 p-3 w-24 bg-purple-900 rounded-sm text-sm"
            onClick={() => handleOption(15)}
          >
            15 seconds
          </button>
          <button
            className="mx-5 my-2 sm:my-0 p-3 w-24 bg-purple-900 rounded-sm text-sm"
            onClick={() => handleOption(10)}
          >
            10 seconds
          </button>
          <button
            className="mx-5 my-2 sm:my-0 p-3 w-24 bg-purple-900 rounded-sm text-sm"
            onClick={() => handleOption(5)}
          >
            5 seconds
          </button>
        </div>
      </div>

      {/* Letter Amount */}
      <div className="text-center w-1/2">
        <h1 className="text-3xl sm:text-5xl">Letter Amount</h1>
        <div className="my-10 text-white">
          <button
            className="mx-5 my-2 sm:my-0 p-3 w-24 bg-purple-900 rounded-sm text-sm"
            onClick={() => handleLetterAmount(15)}
          >
            15 Letters
          </button>
          <button
            className="mx-5 my-2 sm:my-0 p-3 w-24 bg-purple-900 rounded-sm text-sm"
            onClick={() => handleOption(20)}
          >
            20 Letters
          </button>
          <button
            className="mx-5 my-2 sm:my-0 p-3 w-24 bg-purple-900 rounded-sm text-sm"
            onClick={() => handleOption(25)}
          >
            25 Letters
          </button>
        </div>
      </div>
    </div>
  )
}

export default OptionsPage
