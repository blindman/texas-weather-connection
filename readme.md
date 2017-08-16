# texas-weather-connection [![Build Status](https://travis-ci.org/blindman/texas-weather-connection.svg?branch=master)](https://travis-ci.org/blindman/texas-weather-connection) [![codecov](https://codecov.io/gh/blindman/texas-weather-connection/badge.svg?branch=master)](https://codecov.io/gh/blindman/texas-weather-connection?branch=master)

> Retrieve data collected by the Texas Weather Connection (http://twc.tamu.edu/)


## Install

```
$ npm install texas-weather-connection
```


## Usage

```js
const twc = require('texas-weather-connection');

twc.getKBDI('8/17/17', data => console.log(data));
twc.getTFD('8/17/17', data => console.log(data));
twc.getNEXRAD('8/17/17', data => console.log(data));
```


## License

MIT © [blindman](https://github.com/blindman)
