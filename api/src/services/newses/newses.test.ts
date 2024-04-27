import type { News } from '@prisma/client'

import { newses } from './newses'
import type { StandardScenario } from './newses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('newses', () => {
  scenario('returns all newses', async (scenario: StandardScenario) => {
    const result = await newses()

    expect(result.length).toEqual(Object.keys(scenario.news).length)
  })
})
