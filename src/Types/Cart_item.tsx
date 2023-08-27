export interface Cart_item {
  email?: string | null
  _id?: string,
  model: string,
  color: string,
  size: number,
  price: number,
  img: string,
  quantity: number,
  payed?: boolean,
  createdAt?: string,
  updatedAt?: string,
  __v?: number
}
export enum ActionKind {
  SET_ITEM = 'SET_ITEM',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CHANGE_QUANTITY = 'CHANGE_QUANTITY',
}

export interface Action {
  type: ActionKind;
  payload: Cart_item[];
}
