
import { createStandardAction } from 'typesafe-actions'
import { ISong } from '../../types/song'

interface ISetSongsPayload {
  songs: ISong[]
}
const setSongs = createStandardAction('songs/SET_SONGS')<ISetSongsPayload>()

export {
  setSongs,
  ISetSongsPayload
}
