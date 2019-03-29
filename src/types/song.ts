import { TColumns } from 'src/engine/types'

interface INote {
  id: number
  column: TColumns
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

