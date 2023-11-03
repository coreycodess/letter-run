import useData from "../zustand/useData.store"

function OptionsPage() {
  const { selectTime, selectPage } = useData()

  function handleOption(time: number) {
    selectTime(time)
    selectPage("GamePage")
  }

  return (
    <div className="select-none flex justify-center items-center flex-col w-100 h-screen">
      {/* Options */}
      <div className="text-center w-1/2">
        <h1 className="text-5xl">Select Time</h1>
        <div className="my-10 text-white">
          <button
            className="mx-5 p-3 bg-purple-900 rounded-sm text-sm"
            onClick={() => handleOption(15)}
          >
            15 seconds
          </button>
          <button
            className="mx-5 p-3 bg-purple-900 rounded-sm text-sm"
            onClick={() => handleOption(10)}
          >
            10 seconds
          </button>
          <button
            className="mx-5 p-3 bg-purple-900 rounded-sm text-sm"
            onClick={() => handleOption(5)}
          >
            5 seconds
          </button>
        </div>
      </div>
    </div>
  )
}

export default OptionsPage
