import { create } from "zustand"

type DataT = {
  selectedTime: number
  time: number | null
  letters: string[]
  currentLetter: string
  currentLetterPosition: number
  selectedPage: string
  score: number
  letterAmount: number
  selectTime: (time: number) => void
  getLetters: (letters: string[]) => void
  selectPage: (pageName: string) => void
  setTimer: (currentTime: number | null) => void
  setCurrentLetter: (letter: string) => void
  setCurrentLetterPosition: (pos: number) => void
  setScore: (letterAmount: number) => void
  setLetterAmount: (amount: number) => void
}

const useData = create<DataT>()((set) => ({
  selectedTime: 0,
  time: null,
  letters: [],
  currentLetter: "",
  currentLetterPosition: 0,
  selectedPage: "",
  score: 0,
  letterAmount: 10,
  selectTime: (time) =>
    set((state) => ({ selectedTime: (state.selectedTime = time) })),
  getLetters: (newLetters) =>
    set((state) => ({
      letters: (state.letters = [...newLetters]),
      currentLetter: (state.currentLetter = newLetters[0]),
    })),
  selectPage: (pageName) =>
    set((state) => ({ selectedPage: (state.selectedPage = pageName) })),
  setTimer: (currentTime) =>
    set((state) => ({ time: (state.time = currentTime) })),
  setCurrentLetter: (letter) =>
    set((state) => ({ currentLetter: (state.currentLetter = letter) })),
  setCurrentLetterPosition: (pos) =>
    set((state) => ({
      currentLetterPosition: (state.currentLetterPosition = pos),
    })),
  setScore: (letterAmount) =>
    set((state) => ({
      score: state.score === letterAmount ? state.score : state.score + 1,
    })),
  setLetterAmount: (amount) =>
    set((state) => ({ letterAmount: (state.letterAmount = amount) })),
}))

export default useData
