Welcome to cli-jsx
===

![Version](https://img.shields.io/github/package-json/v/horosgrisa/cli-jsx.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/horosgrisa/cli-jsx#readme)
[![Maintenance](https://img.shields.io/maintenance/yes/2019.svg)](https://github.com/horosgrisa/cli-jsx/graphs/commit-activity)
[![License: GPL-3.0](https://img.shields.io/github/license/horosgrisa/cli-jsx.svg)](https://github.com/horosgrisa/cli-jsx/blob/master/LICENSE)
![Downloads](https://img.shields.io/npm/dw/cli-jsx.svg)


> Renderer JSX in the Terminal.  
> Supports pretty tables and syntax highlighting


## Install

```sh
npm i -g cli-jsx
```

## Example

```sh
jsx demo.jsx
```

This will produce the following:

![Screenshot of cli-jsx](./images/1.png)

![Screenshot of cli-jsx](./images/2.png)


## Usage as module

```sh
npm i cli-jsx
```

```js
const cliJSX = require('cli-jsx');

const jsx = <h1>Hello World</h1>

console.log(cliJSX(jsx));
```

## Run tests

```sh
npm run test
```

## Author

👤**Grigorii Horos**

* Github: [@horosgrisa](https://github.com/horosgrisa)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/horosgrisa/cli-jsx/issues).

## Show your support

Give a ⭐️ if this project helped you!


## License

Copyright © 2019 [Grigorii Horos](https://github.com/horosgrisa).

This project is [GPL-3.0-or-later](https://github.com/horosgrisa/cli-jsx/blob/master/LICENSE) licensed.

