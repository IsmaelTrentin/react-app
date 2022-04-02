# Project intended files structure

## Standards

### Components

Every component must be in a folder with its `name` containing `index.tsx` and `styles.ts`. For logical operations a file named `index.logic.ts[x]` may be added. They must be exported as default.

### Hooks

Every hook must have this filename structure: `use<hookName>`. They must **not** be exported as default

## `src`

| Folder        | Contents                                                                       |
| ------------- | ------------------------------------------------------------------------------ |
| `@types`      | `index.d.ts` with type definitions                                             |
| `components`  | All shared/non specific stateful components                                    |
| `hooks`       | The app hooks (also `react-query`'s)                                           |
| `middlewares` | The app middlewares components                                                 |
| `public`      | All media files like fonts, svgs and pngs                                      |
| `reducers`    | The `redux` reducers with their actions and the main reducer `main.reducer.ts` |
| `routes`      | The app routing related components                                             |
| `sass`        | SASS related files                                                             |
| `services`    | The `axios` client or any async specific services                              |
| `util`        | Constants in the `constants.ts` file or utility functions and classes          |
| `views`       | The app views/pages                                                            |

### `src/public`

A parent folder for the media type must exist. For example `png/image.png` or `svg/icon.svg`.

### `src/reducers`

A reducer must be in a folder with its `name` containing `actions.ts` and `reducer.ts`. The reducer's actions go into `actions.ts` and the reducer itself goes into `reducer.ts`.

### `src/util`

Filenames words must be separated with `.`. No camel case or other.
Example: `local.storage.keys.ts`

### `src/views`

The views components reside at the first level. All the view specific components (view state specific) must be children of the view's folder.
