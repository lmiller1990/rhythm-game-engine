class Timer {
  interval: number = 100
  start: number = new Date().getTime()
  elapsed: number = 0
  time: number = 0

  constructor(public displayLog: boolean = false) {
    setTimeout(this.instance, this.interval)
  }

  getTime = () => new Date().getTime()

  getTimePassedSinceStart = () => this.getTime() - this.start

  instance = () => {
    this.time += this.interval
    this.elapsed = Math.floor(this.time / this.interval)

    const diff: number = this.getTimePassedSinceStart() - this.time

    const display: string = (this.elapsed / 10) % 1 == 0
      ? (this.elapsed / 10).toString() + '.0'
      : (this.elapsed / 10).toString()

    if (this.displayLog) {
      console.log(`Time passed: ${display}`)
    }

    setTimeout(this.instance, this.interval - diff)
  }
}

export default Timer
