import { GET_WINDOW_WIDTH, TOGGLE_MODAL } from '../types'

export const UpdatePageWidth = (width) => ({
  type: GET_WINDOW_WIDTH,
  payload: width
})

export const ToggleModal = (boolean) => ({
  type: TOGGLE_MODAL,
  payload: boolean
})
