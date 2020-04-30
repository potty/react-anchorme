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

Basic usage:
```jsx static
import React from 'react'
import { Anchorme } from 'react-anchorme'

const SomeComponent = () => {
  return (
    <Anchorme>Lorem ipsum http://example.loc dolor sit amet</Anchorme>
  )
}
```

Custom props for anchors:
```jsx static
<Anchorme target="_blank" rel="noreferrer noopener">Lorem ipsum http://example.loc dolor sit amet</Anchorme>
```
