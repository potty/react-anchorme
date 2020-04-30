# react-anchorme
  
![](https://github.com/actions/potty/react-anchorme/Tests/badge.svg)

## 🚀 Installation

```bash
# npm
npm i react-anchorme

# Yarn
yarn add react-anchorme
```

## 🖲 Usage

### Basic usage

Component takes string as a children, detects urls, emails, IP addresses in it and replaces them with clickable links.

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
