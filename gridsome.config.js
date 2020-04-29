module.exports = {
  siteName: 'Swank.dev',
  siteUrl: 'https://swank.dev/',
  siteDescription:
    'The tiny corner of the internet owned and operated by Brian Swank.',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug',
        remark: {
          plugins: [['@gridsome/remark-prismjs', { transformInlineCode: true }]]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/page-content/**/*.md',
        typeName: 'PageContent'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000 // default
      }
    }
    // {
    //   use: 'gridsome-plugin-feed',
    //   options: {
    //     contentTypes: ['Post'],
    //     feedOptions: {
    //       title: 'A Gridsome Minimal Blog',
    //       description: 'Best blog feed evah.'
    //     },
    //     rss: {
    //       enabled: true,
    //       output: '/feed.xml'
    //     },
    //     atom: {
    //       enabled: false,
    //       output: '/feed.atom'
    //     },
    //     json: {
    //       enabled: false,
    //       output: '/feed.json'
    //     },
    //     maxItems: 25,
    //     htmlFields: ['description', 'content'],
    //     enforceTrailingSlashes: false,
    //     filterNodes: node => true,
    //     nodeToFeedItem: node => ({
    //       title: node.title,
    //       date: node.date || node.fields.date,
    //       content: node.content
    //     })
    //   }
    // }
  ],
  transformers: {
    remark: {
      slug: false,
      autolinkHeadings: false
    }
  }
}
