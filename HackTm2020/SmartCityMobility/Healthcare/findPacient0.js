const fs = require('fs')

const readFileContent = (fileName) => {
	const contents = fs.readFileSync(fileName, 'utf8')

	return contents
}
let healthcareFile = readFileContent('in/healthcare.in')
healthcareFile = healthcareFile.split('\r\n')

const firstLine = healthcareFile[0].split(' ')
