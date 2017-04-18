# angular-es6-seed

Seed project for angular apps using ES6 and webpack bundler.

Started with https://github.com/willyelm/angular-es6-seed, so thanks to Williams Medina.  I rewrote the entire webpack packaging and started adding features.

This project was tested with the latest version 6.10.1 of nodeJS and 3.10.10 of npm, please make sure you have atleast  [node.js](https://nodejs.org/) 5+ and [NPM](https://www.npmjs.com/) 3+ installed.

## Usage & Develop

- Clone or fork this repository
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- browser should open to [`http://localhost:3000`](http://localhost:3000)

## Build

to create a ready production distribution package of the project please run:

```
npm run build
```

after running build the generated files will be available at `/dist`

## Testing

This seed has protractor and karma for end to end testing and unit testing respectively.

### Unit Testing

make sure your tests are named with a `-test.js` suffix then. to run karma simply run:

```
npm test
```

### End to end Testing

to start protractor, your app must be running.  Use 'npm start' then run:

```
npm run protractor
```

### TODO:
Add coverage
e2e-test for home
