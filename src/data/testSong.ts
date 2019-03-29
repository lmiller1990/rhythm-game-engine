import {  ISong } from '../types/song'

const mySong: ISong = {
  id: 1,
  name: 'test song',
  bpm: 60,
  notes: [
    {
      id: '1000',
      timestamp: 1000,
      touchedAt: null
    },
    {
      id: '3000',
      timestamp: 3000,
      touchedAt: null
    },
    {
      id: '3500',
      timestamp: 3500,
      touchedAt: null
    }
  ]
}

export {
  mySong
}

