import {  ISong } from '../types/song'

const mySong: ISong = {
  name: 'test song',
  bpm: 60,
  notes: [
    {
      timestamp: 1000,
      touchedAt: null
    },
    {
      timestamp: 3000,
      touchedAt: null
    },
    {
      timestamp: 3500,
      touchedAt: null
    }
  ]
}

export {
  mySong
}

