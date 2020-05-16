module.exports = {
  siteName: 'swank.dev',
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
  ],
  transformers: {
    remark: {
      slug: false,
      autolinkHeadings: false
    }
  }
}
