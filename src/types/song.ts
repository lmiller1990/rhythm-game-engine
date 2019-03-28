interface INote {
  id: string
  timestamp: number
  touchedAt: number | null
}

interface ISong {
  name: string
  bpm: number
  notes: INote[]
}

export {
  INote,
  ISong
}

