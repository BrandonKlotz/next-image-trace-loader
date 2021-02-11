![Version](https://img.shields.io/badge/version-1.0.1-blue)
[![Downloads](https://img.shields.io/npm/dm/next-image-trace-loader.svg)](http://npm-stat.com/charts.html?package=next-image-trace-loader&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/next-image-trace-loader.svg)](http://opensource.org/licenses/MIT)

# Next Image Trace Loader

Display an SVG traced image while your images lazy load on your website.

A wrapper of [`image-trace-loader`](https://github.com/EmilTholin/image-trace-loader) for your Next projects.

Was truly inspired by Gatsby sites that use [Image Trace](https://using-gatsby-image.gatsbyjs.org/traced-svg/) and wanted to achieve the same look in my Next projects.

- Uses [`next/image`](https://nextjs.org/docs/api-reference/next/image)
- Customizable transition delay.

Works out of the box, but if you need more customization you may want to copy the source and import the dependencies.

## Example

View site:
https://next-image-trace-loader.vercel.app/

## Getting started

Install the component to your project.

```
yarn add next-image-trace-loader

# or

npm install next-image-trace-loader
```

Update your `next.config.js` to trace images as SVGs.

```
// next.config.js

const moduleConfig = {
  test: /\.(png|jpe?g|gif|jp2|webp)$/,
  use: [
    {
      loader: 'image-trace-loader'
    }
  ]
}

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push(moduleConfig)
    return config
  }
}
```

## Usage in your project

Basic Usage:

```
import ImageTrace from "next-image-trace-loader"
import ringPlanet from '../public/planet-1.png'

export default function Home() {
  return (
    <>
      <ImageTrace
        src='/planet-1.png'
        trace={ringPlanet.trace}
        nextImageProps={{width: 800, height: 400}}
      />
    </>
  )
}
```

When using `layout=fill` with `next/image` we need to send in `width` and `height` properties that will be styled on the `divs` that wrap the `images`.

```
import ImageTrace from "next-image-trace-loader"
import ringPlanet from '../public/planet-1.png'

export default function Home() {
  return (
    <>
      <ImageTrace
        src='/planet-1.png'
        trace={ringPlanet.trace}
        width='800px'
        height='400px'
        nextImageProps={{layout: 'fill'}}
      />
    </>
  )
}
```

Adding styling to the image.

```
import ImageTrace from "next-image-trace-loader"
import profile from '../public/profile.jpg'

export default function Home() {
  return (
    <>
      <ImageTrace
        src='/profile.jpg'
        trace={profile.trace} nextImageProps={{width: 400, height: 400, className: "rounded"}} />
    </>
  )
}
```
