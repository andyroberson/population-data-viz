<img
  src='https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png'
  height='48'
/>

# carbonplan / simple-site

**website template using our stack**

[![GitHub][github-badge]][github]
![MIT License][]

[github]: https://github.com/carbonplan/design
[github-badge]: https://flat.badgen.net/badge/-/github?icon=github&label
[mit license]: https://flat.badgen.net/badge/license/MIT/blue

This repository is a super simple website set up using the basic components of our web stack and design system: React, Next, ThemeUI, our components, and our theme.

## usage

To run locally

```js
npm install
npm run dev
```

and then visit `http://localhost:4000/` in your browser.

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a non-profit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of climate solutions with open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/simple-site/issues/new) or [sending us an email](mailto:hello@carbonplan.org).


## the DATA VIZ by Andy 👩🏻‍💻
hello !! 👋 Here's my little D3 and React map / table showing the population
Before starting out, I knew China had a ton of people but dang, the map as is, just really drove that point home. I actually thought it was an error at first. 😳 so yeah, left that map is with that hope that others will have the same holy smokes realization as me. 

But I also wanted something that let people explore the data a bit more and see the numbers. Sooo, that's where I turned to my good pal, grid-js. Grid-js was great because it let people actually *explore() the data. Sort it, page through it, etc, in a way that you wouldn't be able to do with tooltips on a map (not to mention lots of countries == lots of tooltips == kind of annoying experience for users. tooltips everywhereeee). Anyway, I've used gridjs a few times, and remembered it being pretty easy to set up and work with, so it was nice to just get something up quick on a page, which was another bonus. ✨

Finally, theme UI is cool! Drove me slightly nuts because I _really_ wanted my chart to update in time with the carbonplan theme, but thanks to the docs, we got there. 🎉
