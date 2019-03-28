import { createStandardAction } from 'typesafe-actions'
import { INote } from '../../types/song'

interface IUpdateNotePayload {
  note: INote
}

const updateNote = createStandardAction('notes/UPDATE_NOTE')<IUpdateNotePayload>()

export {
  updateNote
}
