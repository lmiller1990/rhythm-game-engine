class Song {
  bpm: number = 180
  beatsPerSecond: number = this.bpm / 60

  measures: string[][] = [
    [
      '10000000',
      '10000010',
      '10010000',
      '10000110',
    ],
    [
      '00000110',
      '00110010',
      '00110000',
      '00100010',
    ],
  ]

  cosntructor() {}
}

export default Song