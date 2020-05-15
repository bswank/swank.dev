---
title: 'Implement Fuzzy Text Search with Mongoose'
date: 2020-05-16
slug: 'mongoose-fuzzy-search'
description: 'Add simple fuzzy text search to your Mongoose model'
category: 'Tutorial'
tags: ['#mongodb', '#mongoose', '#node']
---

There are a bunch of great services that make search really simple, but adding simple fuzzy text search to a Mongoose model is a quick & easy win.

## Prerequisites

You'll need a Node project up and running with Mongoose installed and at least one Mongoose model.

## A Little Bit About Fuzzy Search

Fuzzy search is a standard in search implementations. Users expect it and we should deliver as advocates of our users. A simple text search needs to allow for a small typo, a missing space, and other errors.

Text search in MongoDB is fairly straight-forward. The `$regex` operator allows for partial-text search and the `$text` operator makes a full-text search possible, but enabling fuzzy search is a little more complicated.

### Indexing & n-grams

In order to match something like "uzz" to "fuzzy" we need to break "fuzzy" up into smaller pieces and index it. `mongoose-fuzzy-searching` is a simple package that helps us index text fields on our documents with n-grams, allowing us to match smaller text samples to potential matches in our collections – aka fuzzy search.

## Implementation

Let's get started by installing the necessary package: `npm i mongoose-fuzzy-searching`.

With our package installed, we can add it as a plugin to our `schema`:

```js
import mongoose, { Schema } from 'mongoose'
import mongooseFuzzySearching from 'mongoose-fuzzy-searching'

const user = new Schema({
  firstName: String
})

user.plugin(mongooseFuzzySearching, { fields: ['firstName'] })

export default mongoose.model('User', user)
```

Now that we have the plugin added, any new documents added to our `User` collection will have the appropriate text index! In order to use our newly-implemented plugin, all we need to do is call the `fuzzySearch` method on our collection instead of `find`:

```js
import User from '../models/User'

const users = await User.fuzzySearch('query')
```

Given an empty query, our `fuzzySearch` method will act just like a `find` call, returning all relavent results.

## Further Reading

To learn more about how to use `mongoose-fuzzy-searching` with existing data, it's various options, or with more complex `mongoose.find()` calls, check out the [readme on NPM](https://www.npmjs.com/package/mongoose-fuzzy-searching).

---

Need some help? Feel free to [reach out](https://twitter.com/briansw).

See something needing correction? Feel free to [edit this post](https://github.com/bswank/swank.dev/blob/master/content/posts/mongoose-fuzzy-search.md) on GitHub.
