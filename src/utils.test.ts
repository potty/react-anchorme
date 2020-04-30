import { getProtocol } from './utils'

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
