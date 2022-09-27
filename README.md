# Microdata Parser (microdata-parser-ts)

Lightweight microdata parser and extractor written in TypeScript. Easily scrape microdata from websites.

## Installation

```sh
yarn add microdata-parser-ts
# or
npm install microdata-parser-ts --save
# or
pnpm install microdata-parser-ts
```

## Usage

You can either provide a URL to be fetched then parsed, or a full HTML that will be parsed.

```ts
import { parseURL } from 'microdata-parser-ts'

parseURL('https://example.com')
  .then((microData) => console.log(microData))
```

```ts
import { parseHTML } from 'microdata-parser-ts'

const html= `
    <body>
    ...
    </body>
`

parseHTML(html)
  .then((microData) => console.log(microData))
```

## Maintainers

This project is maintained by [Raed Chammam](https://raed.dev)

## License

MIT
