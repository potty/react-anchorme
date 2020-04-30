import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Anchorme from './Anchorme'

describe('Anchorme', () => {
	const URL = 'http://www.example.loc'
	const EMAIL = 'foo@bar.com'
	const IP = '127.0.0.1'

	const expectLink = (el: HTMLElement, url: string) => {
		const linkEl = el.querySelector('a')
		expect(linkEl).not.toBeNull()
		expect(linkEl?.href).toBe(url)
	}

	it('should render link', () => {
		const { container, getByText } = render(<Anchorme>{URL}</Anchorme>)
		expectLink(container, `${URL}/`)
		expect(getByText(URL)).toBeInTheDocument()
	})

	it('should render link and text', () => {
		const { container, getByText } = render(
			<Anchorme>{`foo ${URL} bar`}</Anchorme>,
		)
		expectLink(container, `${URL}/`)
		expect(getByText(/foo/i)).toBeInTheDocument()
		expect(getByText(URL)).toBeInTheDocument()
		expect(getByText(/bar/i)).toBeInTheDocument()
	})

	it('should render only text', () => {
		const { container, getByText } = render(<Anchorme>foo bar</Anchorme>)
		const linkEl = container.querySelector('a')
		expect(linkEl).toBeNull()
		expect(getByText(/foo bar/i)).toBeInTheDocument()
	})

	it('should render email as a link', () => {
		const { container, getByText } = render(<Anchorme>{EMAIL}</Anchorme>)
		expectLink(container, `mailto:${EMAIL}`)
		expect(getByText(EMAIL)).toBeInTheDocument()
	})

	it('should render IP as a link', () => {
		const { container } = render(<Anchorme>{IP}</Anchorme>)
		expectLink(container, `http://${IP}/`)
	})

	it('should render link with custom props', () => {
		const { container, getByText } = render(
			<Anchorme target="_blank" rel="noreferrer noopener">
				{URL}
			</Anchorme>,
		)
		const linkEl = container.querySelector('a')
		expect(linkEl).not.toBeNull()
		expect(linkEl?.href).toBe(`${URL}/`)
		expect(linkEl?.target).toBe('_blank')
		expect(linkEl?.rel).toBe('noreferrer noopener')
		expect(getByText(URL)).toBeInTheDocument()
	})
})
