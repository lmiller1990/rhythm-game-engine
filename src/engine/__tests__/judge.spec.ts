import { INote } from 'src/types/song'
import { judge } from '../judge'

const notes: INote[] = [
  { id: 1, column: 1, timestamp: 1000, touchedAt: null },
  { id: 2, column: 1, timestamp: 2000, touchedAt: 1900 },
  { id: 3, column: 1, timestamp: 3000, touchedAt: null }
]

test('returns the best matching untouched note', () => {
  const actual = judge(1, 2900, notes)

  expect(actual).toBe(notes[2])
})

test('returns null when all notes outside max timing window', () => {
  const actual = judge(1, 100000, notes)

  expect(actual).toBeNull()
})

test('returns null when no matching note in column', () => {
  const actual = judge(2, 100000, notes)

  expect(actual).toBeNull()
})
