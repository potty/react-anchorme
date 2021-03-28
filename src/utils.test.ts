import { getProtocol, truncateText } from './utils'

describe('getProtocol', () => {
	it('should return protocol for url', () => {
		const protocol = getProtocol('example.loc')
		expect(protocol).toBe('http://')
	})

	it('should return protocol for email', () => {
		const protocol = getProtocol('foo@bar.com')
		expect(protocol).toBe('mailto:')
	})

	it('should return protocol for IP', () => {
		const protocol = getProtocol('127.0.0.1')
		expect(protocol).toBe('http://')
	})
})

describe('truncateText', () => {
	it('should return truncated text', () => {
		const text = truncateText('example.loc', 3)
		expect(text).toBe('exa…')
	})

	it('should return non truncated text', () => {
		const text = truncateText('example.loc', 50)
		expect(text).toBe('example.loc')
	})

	it('should throw error when maxLength is not positive number', () => {
		expect(() => truncateText('example.loc', -1)).toThrowError()
	})

	it('should not throw error when maxLength is not positive number in production', () => {
		process.env.NODE_ENV = 'production'
		expect(() => truncateText('example.loc', -1)).not.toThrowError()
	})
})
