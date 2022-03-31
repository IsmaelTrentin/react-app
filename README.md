# React app custom boiler plate

## Main packages

- react
- redux
- react-router-dom v6
- react-query
- axios
- sass
- react-transition-group
- classnames

## Changelog

### `0.0.2`

- Switched user state from `redux` to `react-query`
- Updated [files structure](./files.structure.md)

### `0.0.2`

- Updated Redux structure
  - User reducers
  - GobalModal reducers
- Added some basic components
- Fully implemented global modal

### `0.0.1`

- Bootstrapped project with CRA ts
- Switched to Sass modules
- Set up of Redux for a general user state
- Set up of React routers with:
  - Unprotected routes -> no need for login
  - Protected routes -> need to be logged in
- Set up mock for persistent user session data
