# vue-persistedstate-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

<p align="center">
  <img alt="" src="https://i.imgur.com/prUNzrf.png">
</p>

<p align="center">
  <i>Artwork from <a href="https://pinia.vuejs.org/">Pinia</a></i>
</p>

<h1 align="center">pinia-plugin-persistedstate</h1>
<p align="center">Configurable persistence and rehydration of Pinia stores.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/pinia-plugin-persistedstate">
    <img alt="npm" src="https://img.shields.io/npm/v/pinia-plugin-persistedstate?color=%23c12127&label=version&logo=npm" />
  </a>
  <a href="https://github.com/prazdevs/pinia-plugin-persistedstate/actions/workflows/ci.yml">
    <img alt="CI" src="https://img.shields.io/github/actions/workflow/status/prazdevs/pinia-plugin-persistedstate/ci.yml?branch=main&color=2088FF&logo=github%20actions">
  </a>
  <a href="https://app.codecov.io/gh/prazdevs/pinia-plugin-persistedstate">
    <img alt="Coverage" src="https://img.shields.io/codecov/c/github/prazdevs/pinia-plugin-persistedstate?color=%23f01f7a&flag=plugin&logo=codecov">
  </a>
  <a href="https://github.com/prazdevs/pinia-plugin-persistedstate/tree/HEAD/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/prazdevs/pinia-plugin-persistedstate?color=%233da639&logo=open%20source%20initiative" />
  </a>
</p>

<p align="center">
  <a href="https://prazdevs.github.io/pinia-plugin-persistedstate/" alt="pinia-plugin-persistedstate docs" >
    <img src="https://img.shields.io/badge/PINIA--PLUGIN--PERSISTEDSTATE-READ%20THE%20DOCS%20-blueviolet?style=for-the-badge&logo=read-the-docs&logoColor=white" />
  </a>
</p>

<p align="center">
  <a href="https://prazdevs.github.io/pinia-plugin-persistedstate/" alt="pinia-plugin-persistedstate english docs" >
    English
  </a>
  |
  <a href="https://prazdevs.github.io/pinia-plugin-persistedstate/zh" alt="pinia-plugin-persistedstate chinese docs" >
    简体中文
  </a>
</p>

## ✨ Features

- Persist Pinia stores with a friendly API inspired by [`vuex-persistedstate`](https://github.com/robinvdvleuten/vuex-persistedstate).
- Highly customisable with custom storage, customer serializer, paths picking...
- Compatible with everything that uses Pinia.
- No external dependencies in a tiny package (<1kB gzipped).

## 🚀 Quickstart

1. Install with your favorite package manager:
   - **pnpm** : `pnpm i pinia-plugin-persistedstate`
   - npm : `npm i pinia-plugin-persistedstate`
   - yarn : `yarn add pinia-plugin-persistedstate`

2. Add the plugin to pinia:
```ts
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
```

3. Add the `persist` option to the store you want to be persisted:
```ts
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      someState: 'hello pinia',
    }
  },
  persist: true,
})
```

## 🔧 Configuration

You can configure how a store is persisted by specifying options to the `persist` property:

```ts
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      someState: 'hello pinia',
    }
  },
  persist: {
    storage: sessionStorage,
    paths: ['someState'],
  },
})
```

All the available configuration options are explained [here](https://prazdevs.github.io/pinia-plugin-persistedstate/guide/config.html).

## ⚠️ Limitations

There are some limitations that should be considered, more on those [here](https://prazdevs.github.io/pinia-plugin-persistedstate/guide/limitations.html).

## 🤝 Contributing

Run into a problem? Open an [issue](https://github.com/prazdevs/pinia-plugin-persistedstate/issues/new/choose).
Want to add some feature? PRs are welcome!

## 📝 License

Copyright © 2021-present [Sacha Bouillez](https://github.com/prazdevs).
This project is under [MIT](https://github.com/prazdevs/pinia-plugin-persistedstate/blob/main/LICENSE) license.
