# create-qnets <a href="https://npmjs.com/package/create-qnets"><img src="https://img.shields.io/npm/v/create-qnets" alt="npm package"></a>

English · [中文](./README-zh_CN.md)

## Scaffolding Your First Qnets Project

> **Compatibility Note:**
> Qnets requires [Node.js](https://nodejs.org/en/) version 18+, 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

With NPM:

```bash
$ npm create qnets@latest
```

With Yarn:

```bash
$ yarn create qnets
```

With PNPM:

```bash
$ pnpm create qnets
```

With Bun:

```bash
$ bun create qnets
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Qnets + React project, run:

```bash
# npm 7+, extra double-dash is needed:
npm create qnets@latest my-react-app -- --template react-ts

# yarn
yarn create qnets my-react-app --template react-ts

# pnpm
pnpm create qnets my-react-app --template react-ts

# Bun
bun create qnets my-react-app --template react-ts
```

Currently supported template presets include:

- `koa2`
- `react-ts`

You can use `.` for the project name to scaffold in the current directory.
