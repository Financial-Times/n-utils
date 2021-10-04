# n-utils [![npm version](https://badge.fury.io/js/%40financial-times%2Fn-utils.svg)](https://badge.fury.io/js/%40financial-times%2Fn-utils) [![CircleCI](https://circleci.com/gh/Financial-Times/n-utils.svg?style=shield)](https://circleci.com/gh/Financial-Times/workflows/n-utils) [![Coverage Status](https://coveralls.io/repos/github/Financial-Times/n-utils/badge.svg?branch=main)](https://coveralls.io/github/Financial-Times/n-utils?branch=main) [![Dependencies](https://david-dm.org/Financial-Times/n-utils.svg)](https://david-dm.org/Financial-Times/n-utils) [![Known Vulnerabilities](https://snyk.io/test/github/Financial-Times/n-utils/badge.svg)](https://snyk.io/test/github/Financial-Times/n-utils)

a collection of custom utils built following FP and complement ES6/7 features

- [quickstart](#quickstart)
- [install](#install)
- [collections](#collections)
  * [object utils](#object-utils)
    + [trimObject](#trimobject)
    + [onlyValues](#onlyvalues)
    + [removeObjectKeys](#removeobjectkeys)

## quickstart
```js
import { trimObject } from '@financial-times/n-utils'; // partially import any function you need
```

## install
```shell
npm install @financial-times/n-utils
```

## collections

### object utils
> all utils are pure functions that clone the original object and maintains its prototype
#### trimObject
```js
  const trimmed = trimObject(obj); // remove any key whose value is undefined, null or empty string ''
```
#### onlyValues
```js
  const trimmed = onlyValues(obj); // trimObject and remove any key whose value is a function
```
#### removeObjectKeys
```js
  const filtered = removeObjectKeys(obj)(['key1', 'key2']); // input can be [String] or String
```
