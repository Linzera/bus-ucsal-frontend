
const API_URL = "http://192.168.15.1:8080/novaucsal-busucsal/api"



export const fetchHorarios = () => fetch(`${API_URL}/bus/businfo`, {
    method: 'GET', headers: {
        'Content-Type': 'application/json'
    }
})



