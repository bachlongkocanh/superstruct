import { string, pattern } from '../../..'

export const Struct = pattern(string(), /\d+/)

export const data = 'invalid'

export const error = {
  value: 'invalid',
  type: 'string',
  refinement: 'pattern',
  path: [],
  branch: [data],
}
