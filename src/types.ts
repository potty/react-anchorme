import React from 'react'

export type AnchorProps = Omit<React.HTMLProps<HTMLAnchorElement>, 'href'>

export type LinkComponentProps = {
	href: string
} & AnchorProps

export type LinkComponent = React.ElementType<LinkComponentProps>
