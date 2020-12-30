const lifeStatus = process.argv[2]
const drynessLevel = process.argv[3]

if (lifeStatus === '0' && parseInt(drynessLevel) > 10) {
    console.log('WATER')
}