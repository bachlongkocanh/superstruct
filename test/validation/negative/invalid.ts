import { number, negative } from '../../..'

export const Struct = negative(number())

export const data = 'invalid'

export const error = {
  value: 'invalid',
  type: 'number',
  refinement: undefined,
  path: [],
  branch: [data],
}
