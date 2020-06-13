import { object, string, pattern, refinement } from '../../..'

const Section = pattern(string(), /^\d+(\.\d+)*$/)

export const Struct = object({
  section: Section,
  subsection: refinement('Subsection', Section, (value, ctx) => {
    const { branch } = ctx
    const parent = branch[0]
    return value.startsWith(`${parent.section}.`)
  }),
})

export const data = {
  section: '1',
  subsection: '2.1',
}

export const error = {
  value: '2.1',
  type: 'string',
  refinement: 'Subsection',
  path: ['subsection'],
  branch: [data, data.subsection],
}
