export default {
  widgets: [
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
                  buildHookId: '610ed62b6119efd860e36e58',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-obyd4b3e',
                  apiId: '9390750a-974b-481a-bfeb-314cdd1e0e6d'
                },
                {
                  buildHookId: '610ed62bf1508f793a9418a3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fys4hbjj',
                  apiId: '59f43b61-c079-4ae6-8729-84876dc26df9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jillketo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fys4hbjj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
