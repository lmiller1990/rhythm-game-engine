import { judgedNotes, missedNotes, untouchedNotes } from '../../../store/notes/selectors'
import { INotesState } from '../../../store/notes/types'
import { note } from '../../../../test/factories/notes'

describe('notesSelectors', () => {
  describe('judgedNotes', () => {
    it('returns notes that have been hit', () => {
      const state: INotesState = {
        all: { 
          1: {
            ...note, id: 1, touchedAt: null
          },
          2: {
            ...note, id: 2, touchedAt: 1000
          }
        },
        ids: [1, 2]
      }

      const actual = judgedNotes(state)

      expect(actual).toEqual([ state.all[2] ])
    })
  })

  describe('untouchedNotes', () => {
    it('returns notes yet to be judged', () => {
      const state: INotesState = {
        all: { 
          1: {
            ...note, id: 1, touchedAt: null
          },
          2: {
            ...note, id: 2, touchedAt: 1000
          }
        },
        ids: [1, 2]
      }

      const actual = untouchedNotes(state)

      expect(actual).toEqual([ state.all[1] ])
    })
  })

  describe('missedNotes', () => {
    it('returns notes passed maximum timing window', () => {
      const state: INotesState = {
        all: { 
          1: {
            ...note, id: 1, timestamp: 1000
          },
          2: {
            ...note, id: 2, timestamp: 2000
          }
        },
        ids: [1, 2]
      }

      const actual = missedNotes(1500, state)

      expect(actual).toEqual([ state.all[1] ])
    })
  })
})