This project target is to make a BMI calculator.

## New Tech?

- Vanilla.js, which means you can't any third-party js library, like jQuery!
- Airbnb JavaScript Coding Style.
- SCSS OOCSS.

## New Tools?

- ESLint, I used the wesbos setting, which makes you easily to build your eslint setting (https://github.com/wesbos/eslint-config-wesbos)
- Prettier, a tool can auto-format your code.

## Problem?

Have to think more coding way when you don't use jQuery.

## How to solve the problem?

You can use the querySelector in your vanilla.js code, instead of using jQuery

```js
//Bad, jQuery
$("a");

//Good, Vanilla.js
const a = document.querySelector(".a");
```
