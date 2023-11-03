export default function (amount: number) {
  const letters = "abcdefghijklmnopqrstuvwxyz"
  const result = []

  for (let i = 0; i < amount; ++i) {
    const letter = letters[Math.floor(Math.random() * amount)]

    result.push(letter)
  }

  return result
}
