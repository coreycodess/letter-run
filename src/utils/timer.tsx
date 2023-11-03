function timer(selectedTime: number, setTimer: (selectedTime: number) => void) {
  let time = selectedTime + 1

  const timer = setInterval(function () {
    time--
    setTimer(time)
    if (time === 0) {
      clearInterval(timer)
    }
  }, 1000)
}

export default timer
