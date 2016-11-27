# slides-javascript-shells [![Build Status][travis-image]][travis-url]

> Slides for my talk about JavaScript Shells

## Scripts

* `npm start` — start up the [local server](http://localhost:3000).
* `npm build` — build the presentation in `dist` folder
* `npm deploy` — build the presentation and deploy at [GitHub Pages](https://pages.github.com/)
* `npm lint` — check all files via [ESLint](eslint.org)
* `npm clean` — clean `dist` folder

# Demos

```sh
# Link demos as global packages
$ npm link

# Run dead-simple js-shell
$ js-shell-simple

# Run js-shell with SIGINT, SIGTSTP and SIGCONT event
$ js-shell-evented

# Run js-shell with command execution
$ js-shell-exec

# Run simple Vorpal example
$ vorpal

# Run Awkward shell
$ awkward
```

[travis-url]: https://travis-ci.org/denysdovhan/slides-javascript-shells
[travis-image]: https://img.shields.io/travis/denysdovhan/slides-javascript-shells.svg?style=flat-square
