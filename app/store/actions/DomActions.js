import { GET_WINDOW_WIDTH } from '../types'

export const UpdatePageWidth = (width) => ({
  type: GET_WINDOW_WIDTH,
  payload: width
})
