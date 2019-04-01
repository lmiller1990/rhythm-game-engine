import { IBaseState } from './types'

function mapEntities<T>(entityState: IBaseState<T>): T[] {
  return entityState.ids.map(id => entityState.all[id]);
}

export {
  mapEntities
}
