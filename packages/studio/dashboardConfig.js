export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6259533f6ca6483a5805fe36',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3g1cqmun',
                  apiId: '62a1f65a-1d87-4b06-b2d9-7b77e3204aa0'
                },
                {
                  buildHookId: '6259533fdb5b6b369d0dd6f7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-svspvzuu',
                  apiId: '49732397-df80-45ea-ab47-38fa71d7db35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emielwit/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-svspvzuu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
