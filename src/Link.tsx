import React from 'react'

import { LinkComponent, LinkComponentProps } from './types'
import { getProtocol } from './utils'

type Props = {
	linkComponent?: LinkComponent
} & LinkComponentProps

export const Link = ({ href, linkComponent, ...rest }: Props): JSX.Element => {
	const Component = linkComponent ?? 'a'
	const protocol = getProtocol(href)

	return (
		<Component {...rest} href={`${protocol}${href}`}>
			{href}
		</Component>
	)
}
