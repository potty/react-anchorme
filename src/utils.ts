import anchorme from 'anchorme'

const protocolRegex = /^((file:\/\/\/)|(https?:|ftps?:)\/\/|(mailto:))/i

const hasProtocol = (input: string) => protocolRegex.test(input)

export const getProtocol = (input: string): string => {
	if (hasProtocol(input)) return ''

	return anchorme.validate.email(input) ? 'mailto:' : 'http://'
}
