---
title: 'How to Publish a Package to NPM (in 5 Minutes)'
date: 2020-05-11
slug: 'publishing-to-npm'
description: 'Publish your first package to NPM in 5 minutes or less.'
category: 'Tutorial'
tags: ['#npm', '#javascript']
---

Publishing a package to NPM is a quick and efficient way to re-use code across multiple projects.

## Prerequisites

Before we get going, make sure you have an [NPM account](https://npmjs.org/) and have NPM installed and updated by running `npm i -g npm@latest`. You'll also need [Node](https://nodejs.org/en/) installed.

## Create a Project

Let's get a project up and running. We'll build a small utility to catch and help us fix all our errors.

1. Create an empty directory: `mkdir super-error-handler && cd super-error-handler`
2. Generate a `package.json`: `npm init -y` This will produce some fine defaults.
3. Create your utility: `touch index.js`

```js
// super-error-handler/index.js

module.exports = function handleError(error) {
  const query = encodeURI(error.message)
  console.error(`https://stackoverflow.com/search?q=${query}`)
}
```

## Create a Test Environment

Now that we have some code, let's see if it works!

1. Create another empty directory outside of the original: `mkdir test-env && cd test-env`
2. Generate another `package.json`: `npm init -y`
3. Create a symbolic link to your utility so you can require it like other installed modules: `npm link /path/to/super-error-handler`
4. Create a file to test with: `touch index.js`

```js
// test-env/index.js

const handleError = require('super-error-handler')

function testErrorHandler() {
  try {
    throw new Error('something bad happened')
  } catch (error) {
    handleError(error)
  }
}

testErrorHandler()
```

Now that we have some test code written with our error handler, let's give it a try: run `node index.js`.

## Publish to NPM

Almost there! Since every NPM package needs a unique name, you'll need to namespace your package by setting the `name` field in your `package.json` to `@your_npm_username/super-error-handler`.

Finally, from the `super-error-handler` directory, run `npm adduser` to authenticate to NPM and then `npm publish`.

That's it! You've published your first NPM package! Head to [npmjs.org](https://npmjs.org/packages)
to search for it and check it out.

## Additional Tips

Now that your code is available on NPM, here are a few things you can and should do:

- Check out the [NPM docs](https://docs.npmjs.com/files/package.json) on `package.json` fields and fill them in appropriately.
- Create a GitHub repo for your project.
- Add an `.npmignore` file to keep some of your repo from being downloaded by users of your module. Here's a great [Stack Overflow question](https://stackoverflow.com/questions/25124844/should-i-npmignore-my-tests) detailing how you might use one.
- Use `np` to level up your NPM game. It helps to take care of a bunch of additional publishing steps, including creating a release on GitHub. [Read the docs](https://www.npmjs.com/package/np) on NPM.

---

Need some help or want to share your newly-uploaded NPM package? Feel free to [reach out](https://twitter.com/briansw).

See something needing correction? Feel free to [edit this post](https://github.com/bswank/swank.dev/blob/master/content/posts/add-serverless-functions.md) on GitHub.
