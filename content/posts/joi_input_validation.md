---
title: 'Validate Data on a Node Server with Joi'
date: 2020-05-20
slug: 'joi-input-validation'
description: 'Validate client input as soon as it hits your server using Joi'
category: 'Tutorial'
tags: ['node', 'hapi', 'joi']
---

Validating user input is an important part of building a secure, high-quality application. Let's take a look at why it's so important and how we can do it using [Joi](https://github.com/hapijs/joi).

## Input Validation 101

As a general rule, you should validate early and often to ensure that you're providing the proper feedback to your users around how to input data.

Here's an example of a validation strategy for a web application:

1. Use proper `input` types (e.g. `type="text"` for text input, `type="url"` for a URL, etc.).
2. Validate input on `blur` (e.g. use a Regex or similar to ensure the text matches a given pattern).
3. Validate input on `submit` (e.g. check for proper format and content prior to sending data to a server).
4. Validate request `body` to ensure everything that was delivered to the server is properly formatted & allowed.
5. Use database schemas to ensure you're not adding anything to your data store that shouldn't be there.

In this tutorial, we'll focus on number 4 – validating as soon as data hits our server.

## Start a Project

We need a Node Server to test with, so we'll start by getting that set up using Hapi. Feel free to use your own app if you have one!

I chose [Hapi](https://hapi.dev/) because Joi is a package from the Hapi team, but you can use Joi with any Node framework, including inside serverless functions with no framework, which is where I typically use it!

Create a new directory with `mkdir joi-input-validation`. Then, run the following:

- `cd joi-input-validation`
- `npm init -y`
- `npm i @hapi/hapi`
- `touch index.js`

Add the following to `index.js`:

```js
// index.js

const Hapi = require('@hapi/hapi')

const init = async () => {
  const server = Hapi.server({
    port: 4321,
    host: 'localhost'
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return 'it works'
    }
  })

  // Our POST route for testing
  server.route({
    method: 'POST',
    path: '/',
    handler: async ({ payload }) => {
      return payload
    }
  })

  await server.start()
  console.info('Node Server running at http://localhost:4321')
}

init()
```

Run your Node server with `node index.js`. If you visit [http://localhost:4321/](http://localhost:4321/) you should see "it works" in the browser.

## Make a POST Request

In this example, we'll simulate a successful submission of a username and password by sending it right back to the client as the response.

Let's make a POST request to our server to test it out using this command: `curl -d '{"username":"bs","password":"p@ssword"}' -H "Content-Type: application/json" -X POST http://localhost:4321/`

This request should return exactly what you send it: `{"username":"bs","password":"p@ssword"}`.

## Establish Validation Rules

Now that we're set up and submitting data to our server, we can establish some rules for what that data should look like.

We're asking for a username and a password, so here are some example rules that we might want to enforce:

- Usernames should be at least 4 characters
- Usernames should be no more than 20 characters
- Passwords should be at least 12 characters

With those rules as our guide, let's get validating! Just remember, whenever we make a change to our server, we'll need to kill it and start it again using `node index.js`.

## Implement Validation

Let's install Joi, which is our validation library: `npm i @hapi/joi`.

Don't forget, you can use this package and the following implementation with any (or no) Node framework.

Next, let's add Joi to our project and define a schema to validate against. Add the following to the beginning of `index.js`:

```js
// index.js

const Hapi = require('@hapi/hapi')
const Joi = require('@hapi/joi')

const schema = Joi.object({
  // This object is what our object will need to look like
  username: Joi.string()
    .min(4)
    .max(20)
    .required(),
  password: Joi.string()
    .min(12)
    .required()
})

// existing code...
```

Now that we have our schema designed and we're enforcing our rules, we need to edit our POST route and use that schema to test our data:

```js
// ...

// Our POST route for testing
server.route({
  method: 'POST',
  path: '/',
  handler: async ({ payload }) => {
    try {
      const input = await schema.validateAsync(payload, { abortEarly: false })
      // Data is valid, let's move on!
      return input
    } catch (error) {
      // Data is invalid, let's tell our user the bad news...
      return error.details
    }
  }
})

// ...
```

In the code above, we modified our handler to include a `try/catch` block in order to either return our valid data or return validation errors. We want to return all validation errors to the client and not just the first one, so we also added an options object to our `validateAsync` method with `abortEarly` set to `false`.

### Try with invalid input

If we repeat our `curl` request, we'll see that we now get an array of errors back. With that information, the client can handle letting the user know exactly what needs to be changed.

### Try again with valid input

Now, let's test with some valid input: `curl -d '{"username":"bswank","password":"mY_Secur3 p@22wrd"}' -H "Content-Type: application/json" -X POST http://localhost:4321/`

That's it! You're validating user input with a schema and can extend this concept to accept more complicated and realistic data.

## Further Reading

- Check out the all the code from this post in [this GitHub repo](https://github.com/bswank/joi-input-validation-example).
- There's way more to Joi than we covered here. Check out [Joi's docs](https://hapi.dev/module/joi/) to learn more.
- You can use this [Schema Tester](https://hapi.dev/module/joi/tester/) to learn how to build more complex schemas.

---

Need some help? Feel free to [reach out](https://twitter.com/briansw).
