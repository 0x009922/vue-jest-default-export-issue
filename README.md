# Issue

Something goes wrong when i exporting function as default export from `.vue` file. It is common case when my component is functional.

## How to reproduce

```sh
## if no pnpm:
# npm i -g pnpm

pnpm i
pnpm test
```

## Expected behavior

Expect to test my functional component as any another components.

## Actual behavior

I am getting a warn from Vue that my component 'is missing template or render function', and actually, by `console.log`, i can see, that my component in test is not a function, but it is a function in it's own module. I think that something broked in export-import mechanism.
