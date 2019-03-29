interface INote {
  id: string
  timestamp: number
  touchedAt: number | null
}

interface ISong {
  id: number
  name: string
  bpm: number
  notes: INote[]
}

export {
  INote,
  ISong
}

