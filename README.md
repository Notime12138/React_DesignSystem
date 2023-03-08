<p align="center">
  <a href="https://reactjs.org/" target="blank"><img src="https://reactnative.dev/img/header_logo.svg" width="150" alt="React Logo" /></a>
</p>

<p align="center">
    React is a JavaScript library for building user interfaces.
<p align="center">
<a href="https://github.com/facebook/react/blob/main/LICENSE">
    <img src="https://camo.githubusercontent.com/83d3746e5881c1867665223424263d8e604df233d0a11aae0813e0414d433943/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667" alt="Package License" />
</a>
<a href="https://circleci.com/gh/facebook/react">
    <img src="https://camo.githubusercontent.com/99099608e7ae1078a7e6339d8f051f685131fa4fbefbf1544b679dbd1123a603/68747470733a2f2f636972636c6563692e636f6d2f67682f66616365626f6f6b2f72656163742d6e61746976652e7376673f7374796c653d736869656c64" alt="Current CircleCI build status.">
</a>
<a href="https://www.npmjs.com/package/react">
    <img src="https://img.shields.io/npm/v/react.svg?style=flat" alt="Current npm package version.">
</a>
<a href="https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request">
    <img src="https://camo.githubusercontent.com/b0ad703a46e8b249ef2a969ab95b2cb361a2866ecb8fe18495a2229f5847102d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" alt="PRs welcome!">
</a>

## Description

Design system

## Installation

```bash
$ npm install
```

## Running Demonstration

If storybook is not initialized

```bash
$ npx storybook init
```

To run storybook

```bash
$ npm run storybook
```

## Publish Storybook (with Chromatic)
Build storybook first
```bash
$ npm run build-storybook
```
Go to [Chromatic](https://www.chromatic.com/) and choose the project, copy project-token

Deploy storybook on Chromatic
```bash
$ npx chromatic --project-token=<26aa4d0eb4b2>
```

## Usage (for now)

In a react file

```text
import "component_name" from ".../src/components/index.ts"
```

```text
All the props are in Interface of each component (Name.tsx)
and usage examples in Name.stories.tsx
```

```text
All props meaning can be found in Figma
```

[Figma link](https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=0%3A1)

```text
Any custom modification should use htmlAttributes by style={{}}
In certain components, background color and color may be overwritten
In this case, please overwrite in style as well
```

## Documentation

There's three main parts:

1. foundation
   1. colors
   2. typography
2. components  
   all components (16 for now)  
   each component contains 4 file:
   1. \_name.scss
   2. index.ts
   3. Name.stories.tsx
   4. Name.tsx
3. pattern  
   the same structure with components
