import React, { useMemo } from 'react'
import anchorme from 'anchorme'

import { AnchorProps, LinkComponent } from './types'
import { Link } from './Link'

type Props = {
	children: string | string[]
	linkComponent?: LinkComponent
} & AnchorProps

const Anchorme = ({ children, ...rest }: Props) => {
	const text = Array.isArray(children) ? children.join('') : children

	const parsedText = useMemo(() => {
		const matches = anchorme.list(text)
		if (matches.length === 0) return text

		const elements = []
		let lastIndex = 0
		matches.forEach((match) => {
			// Push text located before matched string
			if (match.start > lastIndex) {
				elements.push(text.substring(lastIndex, match.start))
			}

			// Push Link component
			elements.push(
				<Link {...rest} key={`link-${match.start}`} href={match.string} />,
			)

			lastIndex = match.end
		})

		// Push remaining text
		if (text.length > lastIndex) {
			elements.push(text.substring(lastIndex))
		}

		return elements.length === 1 ? elements[0] : elements
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text])

	return <>{parsedText}</>
}

export default React.memo(Anchorme)
