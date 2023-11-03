import useData from "../zustand/useData.store"

function WelcomePage() {
  const { selectPage } = useData()

  return (
    <div className="select-none flex justify-center items-center flex-col w-100 h-screen">
      <div className="text-center w-1/2">
        <h1 className="text-5xl">Letter Run</h1>
        <button
          className="my-10 p-3 w-24 bg-purple-900 rounded-sm text-sm text-white"
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
