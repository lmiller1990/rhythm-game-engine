interface IBaseState<T> {
  all: { 
    [key: string]: T 
  }
  ids: number[]
}

export {
  IBaseState
}
