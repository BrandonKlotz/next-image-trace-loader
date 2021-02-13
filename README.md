![Version](https://img.shields.io/badge/stable-1.1.4-blue)
[![Downloads](https://img.shields.io/npm/dm/next-image-trace-loader.svg)](http://npm-stat.com/charts.html?package=next-image-trace-loader&from=2021-02-02)
[![MIT License](https://img.shields.io/npm/l/next-image-trace-loader.svg)](http://opensource.org/licenses/MIT)

# Next Image Trace Loader

Display a SVG traced image while your images lazy load for NextJS projects.

A wrapper of [`image-trace-loader`](https://github.com/EmilTholin/image-trace-loader) and [`next/image`](https://nextjs.org/docs/api-reference/next/image)

Was truly inspired by Gatsby sites that use [Image Trace](https://using-gatsby-image.gatsbyjs.org/traced-svg/) and wanted to achieve the same look in my Next projects.

Works out of the box with Next 10, if you need more customization you may want to copy the source and import the dependencies `image-trace-loader`, `file-loader`, and `url-loader`.

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

const tracedImages = {
  test: /\.(png|jpe?g|gif|jp2|webp)$/,
  use: [
    {
      loader: 'image-trace-loader'
    }
  ]
}

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push(tracedImages)
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
