import { number, nullable } from '../../..'

export const Struct = nullable(number())

export const data = 'invalid'

export const error = {
  value: 'invalid',
  type: 'number',
  refinement: undefined,
  path: [],
  branch: [data],
}
