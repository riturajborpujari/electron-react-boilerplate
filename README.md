## How to build an Electron app using create-react-app. No webpack configuration or “ejecting” necessary.

Code repo for post on [freeCodeCamp](https://medium.freecodecamp.com/building-an-electron-application-with-create-react-app-97945861647c#.ze6c9qin1).

https://medium.freecodecamp.com/building-an-electron-application-with-create-react-app-97945861647c#.ze6c9qin1

There is another branch, [npm-start](https://github.com/csepulv/electron-with-create-react-app/tree/npm-start)
It uses `npm-start` instead of `npm run dev`. (change submitted by [vcarl](https://github.com/vcarl)) Details are in this [pull request](https://github.com/csepulv/electron-with-create-react-app/pull/2)

Thanks to [marbemac](https://github.com/marbemac) for submitting a pull request that captures logging output. It can be found in [logging-capture](https://github.com/csepulv/electron-with-create-react-app/tree/logging-capture)

Thanks to [vicentedealencar](https://github.com/vicentedealencar) for an example of using [electron-builder](https://github.com/electron-userland/electron-builder) for packaging. Details are [here](https://github.com/vicentedealencar/electron-with-create-react-app/commit/f1729381d588e65ac140ce5a08cc6277babd9641).

### Note

**Always** close the electron app by pressing *Ctrl* + *C* to avoid letting react app running in background
**Run** *./node_modules/.bin/electron-rebuild* for re-building sqlite3 to work with Electron