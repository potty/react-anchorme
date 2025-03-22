import React from 'react'

import { LinkComponent, LinkComponentProps } from './types'
import { getProtocol, truncateText } from './utils'

type Props = {
	linkComponent?: LinkComponent
} & LinkComponentProps

export const Link = ({
	href,
	linkComponent,
	truncate,
	...rest
}: Props): React.ReactElement => {
	const Component = linkComponent ?? 'a'
	const protocol = getProtocol(href)
	const text = truncate ? truncateText(href, truncate) : href

	return (
		<Component {...rest} href={`${protocol}${href}`}>
			{text}
		</Component>
	)
}
