import { songsReducer } from '../reducers'
import { setSongs } from '../actions'
import { song } from 'test/factories/songs'

describe('songsReducer', () => {
  describe('setSongs', () => {
    it('adds new songs to the state', () => {
      const action = setSongs({ songs: [ song ] })

      const state = songsReducer(undefined, action)

      expect(state.all[song.id]).toEqual(song)
      expect(state.ids).toEqual([ song.id ])
    })
  })
})
