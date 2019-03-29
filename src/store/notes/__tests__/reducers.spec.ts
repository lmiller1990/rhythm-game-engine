import { INotesState } from '../types'
import { updateNote } from '../actions';
import { notesReducer } from '../reducers';
import { note } from 'test/factories/notes'

describe('notesReducer', () => {
  context('note not in state', () => {
    it('adds new note', () => {
      const action = updateNote({ note })

      const actual = notesReducer(undefined, action)

      expect(actual.all).toEqual({ [note.id]: note })
      expect(actual.ids).toEqual([note.id])
    })
  })

  context('note is in state', () => {
    it('updates existing note', () => {
      const state: INotesState = {
        ids: [ note.id ],
        all: { 
          [note.id]: {
            ...note,
            touchedAt: null
          }
        }
      }
      const action = updateNote({
        note: { ...note, touchedAt: 1000 }
      })

      const actual = notesReducer(state, action)

      expect(actual.all[note.id].timestamp).toEqual(1000)
      expect(actual.ids).toEqual([note.id])
    })
  })
})

