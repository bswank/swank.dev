---
title: 'Add Serverless Functions to any Static Site'
date: 2020-05-07
slug: 'add-serverless-functions'
description: 'Quickly add a serverless backend to any static site, including React, Vue, or other SPA static sites.'
category: 'Tutorial'
tags: ['#netlify', '#serverless', '#node']
---

Adding just a bit of backend functionality to your Netlify-hosted static site is a perfect use-case for serverless functions. Let's get up and running.

## Why?

Whether you want to keep a third-party or proprietary API key or secret from being shipped to the browser, or you just need a little server-side functionality, a serverless function can bridge the gap.

## Prepare Your Project

**First, we need to make sure our project is hosted on Netlify.**

Let's connect our project to a Netlify and get set up using [Netlify Dev](https://www.netlify.com/products/dev/), which will allow us to test our functions locally:

1. Create a Netlify account if you don't have one already.
2. Ensure you have the Netlify CLI installed locally. You can do this by running `npm i -g netlify-cli`. If you run into a permissions issue, check out the [NPM docs](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) on the issue.
3. Authenticate your CLI to Netlify by running `netlify login`.
4. Initialize your Netlify project by running `netlify init`. This will create a site on Netlify and associate your project with that new site.

### Configure a Functions Directory

**Now that we're set up with a Netlify project, we need to tell Netlify where to find our functions.**

1. Create a new directory at the root of your project. I typically name this directory something like, `/api`.
2. Create a config file to tell Netlify where to look for your functions:

```toml
# netlify.toml

[dev]
    functions: '/api'
```

### Create a Function

**Now that Netlify knows where to look for our functions, we can write our first one!**

Create a new file in the `/api` directory:

```js
// testy.js

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'yup, it works'
    })
  }
}
```

### Test Locally Using Netlify Dev

**With our function created, let's make sure it works!**

1. Start your dev server by running `netlify dev`. You may need to [choose or configure](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md#netlifytoml-dev-block) a start command.
2. Visit [http://localhost:8888/.netlify/functions/testy](http://localhost:8888/.netlify/functions/testy)

That's it! Need some help? Feel free to reach out!

---

Thanks for reading! Hope this was helpful!

See something needing correction? Feel free to [edit this post](https://github.com/bswank/swank.dev/blob/master/content/posts/add-serverless-functions.md) on GitHub.
