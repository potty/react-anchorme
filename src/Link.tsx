import React, { ElementType } from 'react'

import { AnchorProps } from './types'
import { getProtocol } from './utils'

export interface LinkComponentProps extends AnchorProps {
	href: string
}

export type LinkComponent = ElementType<LinkComponentProps>

interface Props extends LinkComponentProps {
	LinkComponent?: LinkComponent
}

export const Link = ({ href, LinkComponent, ...rest }: Props) => {
	const protocol = getProtocol(href)

	if (LinkComponent) {
		return (
			<LinkComponent {...rest} href={`${protocol}${href}`}>
				{href}
			</LinkComponent>
		)
	}

	return (
		<a {...rest} href={`${protocol}${href}`}>
			{href}
		</a>
	)
}
