# react-anchorme
  
![](https://github.com/potty/react-anchorme/workflows/Tests/badge.svg)

React component using [Anchorme.js](https://github.com/alexcorvi/anchorme.js) to detect urls and emails in a text and converts them into clickable HTML links.

## 🚀 Installation

```bash
# npm
npm i react-anchorme

# Yarn
yarn add react-anchorme
```

## 🖲 Usage

### Basic usage

Component takes string as a children, detects urls, emails, IP addresses in it and replaces them with clickable HTML links.

```jsx static
import React from 'react'
import { Anchorme } from 'react-anchorme'

const SomeComponent = () => {
  return (
    <Anchorme>Lorem ipsum http://example.loc dolor sit amet</Anchorme>
  )
}
```

### Custom props

You can set custom anchor props that are applied to every link created by the component.

```jsx static
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
