const fs = require('fs')

const readFileContent = (fileName) => {
	const contents = fs.readFileSync(fileName, 'utf8')

	return contents
}

let file = readFileContent('in/intersection.in')
file = file.split('\r\n')

const firstLine = file[0].split(' ')
const xNr = firstLine[0]
const yNr = firstLine[1]

const xArray = file[1].split(' ')
const yArray = file[2].split(' ')

let sendSignal = ''

xArray.forEach((x, idx) => {
	const exists = yArray.find(y => y === x)
	if (exists) {
		sendSignal += `${idx + 1}, `
	}
})

console.log(sendSignal)
