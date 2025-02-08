# create-qnets <a href="https://npmjs.com/package/create-qnets"><img src="https://img.shields.io/npm/v/create-qnets" alt="npm package"></a>

[English](./README.md) · 中文

## 搭建你的第一个 Qnets 项目

> **兼容性 说明:**
> Qnets 需要 [Node.js](https://nodejs.org/en/)版本 18+、20+。但是，有些模板需要更高的 Node.js 版本才能工作，如果您的包管理器对此发出警告，请升级。

使用 NPM:

```bash
$ npm create qnets@latest
```

使用 Yarn:

```bash
$ yarn create qnets
```

使用 PNPM:

```bash
$ pnpm create qnets
```

使用 Bun:

```bash
$ bun create qnets
```

然后按照提示操作！!

您还可以通过其他命令行选项直接指定要使用的项目名称和模板。例如，要构建 Qnets + React 项目，请运行：

```bash
# npm 7+, 需要额外的双破折号:
npm create qnets@latest my-react-app -- --template react-ts

# yarn
yarn create qnets my-react-app --template react-ts

# pnpm
pnpm create qnets my-react-app --template react-ts

# Bun
bun create qnets my-react-app --template react-ts
```

目前支持的模板预设包括：

- `koa2`
- `react-ts`
- `next-ts`

你可以使用 `.` 将项目名称的脚手架添加到当前目录中。
