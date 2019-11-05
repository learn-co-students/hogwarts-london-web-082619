const BASE_URL = "http://localhost:3000"
const HOGS_URL = `${BASE_URL}/hogs`

const getHogs = () => fetch(HOGS_URL).then(response => response.json())

export default {
    getHogs
}