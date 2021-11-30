# alias

Gives actualized value from alias or returns given alias

## Installation

```bash
$ npm install @kmccullough/alias
```

## Usage

```js
alias('prod', { production: 'prod' })   // Returns 'production'
alias('prod', { production: ['prod'] }) // Returns 'production'
alias({ production: 'prod' })('prod')   // Returns 'production'
```

## License

[MIT](./LICENSE.txt)
