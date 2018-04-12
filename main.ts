import Timer from './timer'
import Song from './song'

const song: Song = new Song()
console.log(song.beatsPerSecond)

for (const m in song.measures) {
  console.log(song.measures[m])
}
// const timer: Timer = new Timer(true)