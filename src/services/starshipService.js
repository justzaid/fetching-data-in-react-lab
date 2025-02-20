// Make all fetch requests here
// Export our functions
// Make a BASE_URL
// Create an index function

const BASE_URL = 'https://swapi.dev/api/starships/'

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}


export {
    index,
}