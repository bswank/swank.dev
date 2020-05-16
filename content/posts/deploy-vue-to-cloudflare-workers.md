---
title: 'Deploy a Vue App to Cloudflare Workers'
date: 2020-05-13
slug: 'deploy-vue-to-cloudflare-workers'
description: 'Deploy your Vue app to the edges of the web with Cloudflare Workers'
category: 'Tutorial'
tags: ['#vue', '#cloudflare-workers']
---

Cloudflare Workers is probably the easiest way to deploy super fast serverless code to edge locations around the world. In this post, we'll explore what it takes to deploy a Vue application with Workers (hint: it doesn't take much).

## Prerequisites

You'll need a [Cloudflare](https://cloudflare.com/) account with Cloudflare Workers enabled, as well as the [Workers Unlimited Plan](https://workers.cloudflare.com/sites#plans).

I was able to test with the free plan so you probably can, too, but I recommend upgrading because it's a great deal.

## Create a Vue App

To get started, let's create a Vue app via the CLI with `npx @vue/cli create vue-on-workers && cd vue-on-workers`. This will create our app, install our dependencies, and put us right where we need to be.

## Install the Wrangler CLI

Wrangler is a sweet CLI that Cloudflare cooked up for us. Install it with `npm i -g @cloudflare/wrangler`.

For this next part, you'll [need an API Token](https://developers.cloudflare.com/api/tokens/create). TIP: Use the "Edit Cloudflare Workers" template.

Run `wrangler config` to get set up using the CLI.

## Configure Your Project

With our Vue app created and Wrangler all config'd up, we can now turn our Vue project into a Wrangler project by running `wrangler init --site`.

You may notice your project now has a `wrangler.toml` file as well as an additional directory, called `workers-site`.

Now, all that's left to do is add a couple things to the config file. Add your `account_id` (can be found in the bottom-right of your Cloudflare dashboard) and ensure `bucket` is set to the `dist` directory:

```toml
name = "vue-on-workers"
type = "webpack"
account_id = "add_your_account_id" # HERE
workers_dev = true
route = ""
zone_id = ""

[site]
    bucket = "dist" # AND HERE
    entry-point = "workers-site"
```

## Deploy to Workers

Once you've set those two items in your `wrangler.toml` file, run `npm run build && wrangler publish` to build and deploy!

That's it!

🎉🎉🎉

## Additional Reading & Considerations

- There's additional work that needs to be done in order to ensure that Vue Router can handle routing appropriately, which you can read more about in this great [Stack Overflow answer](https://stackoverflow.com/questions/58432345/cloudflare-workers-spa-with-vuejs/58439234#58439234).
- Workers is a great (_possibly_ better) solution for hosting a statically-generated site, like the ones you get from [Gridsome](https://gridsome.org/), [Gatsby](https://www.gatsbyjs.org/), or [Hugo](https://gohugo.io/).
- Read more about [hosting a site on Cloudflare Workers](https://workers.cloudflare.com/sites).

---

Need some help? Want to chat? Feel free to [reach out](https://twitter.com/briansw).

See something needing correction? Feel free to [edit this post](https://github.com/bswank/swank.deb/edit/master/content/posts/deploy-vue-to-cloudflare-workers.md) on GitHub.
