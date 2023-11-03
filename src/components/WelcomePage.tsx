import useData from "../zustand/useData.store"

function WelcomePage() {
  const { selectPage } = useData()

  return (
    <div className="select-none flex justify-center items-center flex-col w-100 h-screen">
      <div className="text-center w-1/2">
        <h1 className="text-5xl">Letter Run</h1>
        <button
          className="mt-10 p-0.5 w-1/5 h-7 bg-purple-900 rounded-sm text-white text-sm"
          onClick={() => {
            selectPage("OptionsPage")
          }}
        >
          Play
        </button>
      </div>
    </div>
  )
}

export default WelcomePage
