import type { Prisma, News } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NewsCreateArgs>({
  news: {
    one: {
      data: {
        id: 'String',
        title: 'String',
        summary: 'String',
        link: 'String',
        published: '2024-04-27T06:12:40.244Z',
        author: 'String',
        imageURL: 'String',
        titleDetailType: 'String',
        titleDetailLanguage: 'String',
        titleDetailBase: 'String',
        titleDetailValue: 'String',
        summaryDetailType: 'String',
        summaryDetailLanguage: 'String',
        summaryDetailBase: 'String',
        summaryDetailValue: 'String',
        linkRel: 'String',
        linkType: 'String',
        linkHref: 'String',
        linkLength: 'String',
        authorName: 'String',
      },
    },
    two: {
      data: {
        id: 'String',
        title: 'String',
        summary: 'String',
        link: 'String',
        published: '2024-04-27T06:12:40.244Z',
        author: 'String',
        imageURL: 'String',
        titleDetailType: 'String',
        titleDetailLanguage: 'String',
        titleDetailBase: 'String',
        titleDetailValue: 'String',
        summaryDetailType: 'String',
        summaryDetailLanguage: 'String',
        summaryDetailBase: 'String',
        summaryDetailValue: 'String',
        linkRel: 'String',
        linkType: 'String',
        linkHref: 'String',
        linkLength: 'String',
        authorName: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<News, 'news'>
