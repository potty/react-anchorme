# react-anchorme

![](https://github.com/potty/react-anchorme/workflows/Tests/badge.svg) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-anchorme)](https://bundlephobia.com/result?p=react-anchorme) ![npm](https://img.shields.io/npm/dm/react-anchorme)

React component using [Anchorme.js](https://github.com/alexcorvi/anchorme.js) to detect URLs, emails, and IP addresses in text and convert them into clickable HTML links.

**Compatibility:** React 16.8+ through React 19 | Dual CJS/ESM build | Tree-shakeable (`sideEffects: false`)

## 🚀 Installation

```bash
# npm
npm i react-anchorme

# Yarn
yarn add react-anchorme

# pnpm
pnpm add react-anchorme
```

## 🖲 Usage

### Basic usage

The component takes a string as children, detects URLs, emails, and IP addresses in it, and replaces them with clickable HTML links.

```jsx
import React from 'react'
import { Anchorme } from 'react-anchorme'

const SomeComponent = () => {
	return <Anchorme>Lorem ipsum http://example.loc dolor sit amet</Anchorme>
}
```

### Custom props

You can set custom anchor props that are applied to every link created by the component.

```jsx
import React from 'react'
import { Anchorme } from 'react-anchorme'

const SomeComponent = () => {
	return (
		<Anchorme target="_blank" rel="noreferrer noopener">
			Lorem ipsum http://example.loc dolor sit amet
		</Anchorme>
	)
}
```

### Truncate

You can truncate link text by setting the `truncate` prop. This is **display-only** — the `href` always contains the full URL. When text exceeds the specified length, it is truncated with an ellipsis character (`…`).

```jsx
import React from 'react'
import { Anchorme } from 'react-anchorme'

const SomeComponent = () => {
	return (
		<Anchorme truncate={5}>Lorem ipsum example.com dolor sit amet</Anchorme>
	)
}
```

> **Note:** Passing a non-positive `truncate` value will throw an error in development to help catch mistakes. This validation is stripped in production builds.

### Custom link component

You can provide a custom link component that is rendered instead of the default `<a>` element. The component receives all anchor props plus `href` via `LinkComponentProps`.

```jsx
import React from 'react'
import { Anchorme, LinkComponentProps } from 'react-anchorme'

const CustomLink = (props: LinkComponentProps) => {
	return (
		<i>
			<a {...props} />
		</i>
	)
}

const SomeComponent = () => {
	return (
		<Anchorme linkComponent={CustomLink} target="_blank" rel="noreferrer noopener">
			Lorem ipsum http://example.loc dolor sit amet
		</Anchorme>
	)
}
```

## 📋 Props

| Prop            | Type                                    | Required | Description                                                                                                                                                       |
| --------------- | --------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`      | `string \| string[]`                    | Yes      | Text content to parse for links. Arrays of strings are joined internally.                                                                                         |
| `linkComponent` | `React.ElementType<LinkComponentProps>` | No       | Custom component to render links instead of `<a>`.                                                                                                                |
| `truncate`      | `number`                                | No       | Maximum character length for displayed link text. Display-only — does not affect `href`.                                                                          |
| ...anchor props | `React.HTMLProps<HTMLAnchorElement>`    | No       | Any standard `<a>` props (`target`, `rel`, `className`, `style`, etc.) are passed through to every rendered link. `href` is excluded as it is managed internally. |

## 🔗 Automatic protocol handling

The component automatically prepends the appropriate protocol to the `href` attribute when the detected text doesn't include one:

- **URLs without protocol** (e.g. `example.com`) get `http://` prepended
- **Email addresses** get `mailto:` prepended
- **URLs with existing protocol** are left unchanged

Supported protocols: `http://`, `https://`, `ftp://`, `ftps://`, `file:///`, `mailto:`

The displayed link text always shows the original detected text — protocol prepending only affects the `href`.

## 🔷 TypeScript

The package exports the following types:

```ts
import { Anchorme, LinkComponentProps, LinkComponent } from 'react-anchorme'
```

| Export               | Description                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------- |
| `Anchorme`           | The main component                                                                          |
| `LinkComponentProps` | Props type received by a custom `linkComponent` (`{ href: string } & AnchorProps`)          |
| `LinkComponent`      | Type alias for `React.ElementType<LinkComponentProps>` — use to type custom link components |

### Typing a custom link component

```tsx
import { LinkComponent, LinkComponentProps } from 'react-anchorme'

const CustomLink: LinkComponent = (props: LinkComponentProps) => {
	return <a {...props} style={{ color: 'red' }} />
}
```
