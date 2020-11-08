
const fs = require('fs')

const readFileContent = (fileName) => {
	const contents = fs.readFileSync(fileName, 'utf8')

	return contents
}

let file = readFileContent('../in/log.in')
file = file.split('\r\n')
const NM = file[0].split(' ')
const NrCars = NM[0]
const NrEntries = NM[1]
// cars = {
// 	cX: {
// 		checkpoint1: time,
// 		checkpoint2: time,
// 	},
// } 
let cars = {}
let speedingCars = []

for (let i=1; i<=NrEntries; i++) {
	const entry = file[i].split(' ')
	let carField = 'car' + entry[1] //car
	let ckPointField = 'checkpoint' + entry[0]
	// console.log(carField, ckPointField)
	if (!cars[carField]) {
		// console.log('no record')
		cars[carField] = {}
	}
	cars[carField][ckPointField] = entry[2]

	if (cars[carField].checkpoint1 && cars[carField].checkpoint2) {
		// console.log('both records')
		let timePassed
		//check last checkpoint
		// console.log('ck1', +cars[carField].checkpoint1)
		// console.log('ck2', +cars[carField].checkpoint2)
		if (entry[0] === '1') {
			timePassed = +cars[carField].checkpoint1 - +cars[carField].checkpoint2
			// console.log(+cars[carField].checkpoint1)
			// console.log(+cars[carField].checkpoint2)
			// console.log('======')
		} else {
			timePassed = +cars[carField].checkpoint2 - +cars[carField].checkpoint1
			// console.log(+cars[carField].checkpoint1)
			// console.log(+cars[carField].checkpoint2)
			// console.log('======')
		}
		// console.log('entity', entry)
		// console.log('time passed', timePassed)
		if (timePassed < 1.05) {
			speedingCars.push(+carField.replace('car',''))
			// console.log('!!!! cought car', carField)
		}

		// cars[carField] = {}
	}
	// console.log('===========')
}

// Object.keys(cars).forEach(car => {
// 	const entry = cars[car]
// 	if (Math.abs(+entry.checkpoint1 - +entry.checkpoint2) < 1.05) {
// 		speedingCars += ',' + +car.replace('car','')
// 	}
// })

speedingCars.sort((a, b) => {
	if (a < b) {
		return -1
	}
	else return 1
})
console.log(speedingCars)
let carString = ''
speedingCars.forEach(car => carString += `,${car}`)
console.log(carString)
