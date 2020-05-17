---
title: 'Introducing My New Website & the Tech Behind It'
date: 2020-04-29
slug: 'new-website'
description: 'My very first blog post in which I write about why and how I finally coded up my own site.'
category: 'Announcement'
tags: ['netlify', 'vue', 'gridsome', 'jamstack']
---

Hey, thanks for reading my very first blog post in which I write about why and how I finally coded up my own site.

## "Where can I find you online?"

If you're a web professional, or aspire to be one, you'll get used to answering this question. Whether it's a job application, an email with a potential client, or your Twitter bio – everyone wants to see your online space and check out your portfolio.

My LinkedIn profile served me well to help present potential employers with some basic facts about me and my experience, but as soon as I got hired at my current gig, I felt like I was finally at a point where I could ditch it. With some extra time on my hands and a renewed interest in starting to create content to help mentor aspiring developers, I decided it was time to whip something up!

## Content is Key

I'm not so great at producing content. I tend to agonize over my creative process and then chicken out right before it's time to publish. I re-read and over-think and convince myself that my contribution is redundant or unnecessary.

I have to keep reminding myself that I've been the grateful recipient of a TON of redundant, imperfect content. Those courses, posts, books, and videos happened to be in the right place at the right time and in the right format presented just the right way for me to consume and understand. I am who I am today because of them, and I hope that what I produce can help someone else in the same way.

Practically speaking, I decided to keep it simple here. I love reading people's bios and all about the gear they use, so I followed suit and have an introduction and a [/uses](https://swank.dev/uses/) page.

## Overcoming My Design Shortcomings

I typically come up with one or two patterns I like, but then I lack the depth of experience to extrapolate that into a more cohesive and complex design. The end product usually ends up consisting of the same pattern over and over again (which you may notice is the way I built this site).

One way I tried to overcome my lack of design ability was to follow some **simple design rules**:

- Leave plenty of space (big margins and lots of padding)
- Use a font that's relatively easy to read at both large and small sizes
- Ensure reasonably-high contrast ratios
- Generate a color palette and use that palette throughout (I used [Coolors.co](https://coolors.co/))
- Follow existing design patterns for layout (steal)
- Use CSS Grid and percentage-based-widths throughout to ensure that the site is naturally responsive
- Use CSS custom properties to make viewport-size-related changes super simple

## Choosing a Tech Stack

This was pretty simple. I've worked extensively with Vue, so I decided to take a swing at this site with [Gridsome](https://gridsome.org), which is the Vue counterpart to React's Gatsby.

The experience has been great. I am having some issues with Babel transpilation and polyfilling, but the Gridsome community is working on some things related to this.

### Content Management

My page and blog post content is generated from markdown files parsed by [`@gridsome/vue-remark`](https://gridsome.org/plugins/@gridsome/vue-remark), which gives me the ability to import and use Vue components, other markdown files, or any other data, as well as query the GraphQL layer directly.

### Hosting

It's always a joy to deploy anything to [Netlify](https://netlify.com/) and this site is no exception. I'm currently using Netlify's DNS management and Analytics products along with hosting for this site.

### Functions

The best way to add just a bit of backend functionality to a static site is a good ol' fashion serverless function. Upon launch, I didn't need any backend functionality, but I do have some plans for a couple I'll add in the future. More to come on this.

### Source

In case you'd like to use this as a boilerplate, submit a PR to fix all my terrible choices, or check out the source for any other reason, you can find it on [GitHub](https://github.com/bswank/swank.dev).

---

Thanks for reading! Hope this was helpful!
