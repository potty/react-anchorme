import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Anchorme } from './Anchorme'

describe('Anchorme', () => {
	it('should render component', () => {
		const { getByText } = render(<Anchorme text="test" />)
		expect(getByText(/test/)).toBeInTheDocument()
	})
})
