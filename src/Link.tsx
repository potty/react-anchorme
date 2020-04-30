import React from 'react'

import { AnchorProps } from './types'
import { getProtocol } from './utils'

type Props = {
	href: string
} & AnchorProps

export const Link = ({ href, ...rest }: Props) => {
	const protocol = getProtocol(href)
	return (
		<a {...rest} href={`${protocol}${href}`}>
			{href}
		</a>
	)
}
