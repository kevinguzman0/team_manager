import { createStore } from 'redux'

let key = '9cae6ab52e52873c13cdd7d83d910d0e328f6d3df5cf4c79eaa5540053c8440d'
fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=96&APIkey=${key}`)
.then(res => res.json())
.then(data => {
    // console.log(data.result[0].players);
    
})
.catch(err => console.log(err))


const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Juan Carlitos",
            foto: "https://apiv2.allsportsapi.com/logo/players/10227_w-szczsny.jpg"
        },
        {
            id: 2,
            nombre: "Beto Quiroga",
            foto: "https://apiv2.allsportsapi.com/logo/players/42183_m-locatelli.jpg"
        },
        {
            id: 3,
            nombre: "Alejo Garcia",
            foto: "https://apiv2.allsportsapi.com/logo/players/79274_f-israel.jpg"
        },
        {
            id: 4,
            nombre: "Juan Disain",
            foto: "https://apiv2.allsportsapi.com/logo/players/472_m-perin.jpg"
        },
        {
            id: 5,
            nombre: "Alvaro Felipe",
            foto: "https://apiv2.allsportsapi.com/logo/players/9637_m-de-sciglio.jpg"
        },
        {
            id: 6,
            nombre: "Alexys Lozada",
            foto: "https://apiv2.allsportsapi.com/logo/players/13315_g-chiellini.jpg"
        },
        {
            id: 7,
            nombre: "Harold Pajuelo",
            foto: "https://apiv2.allsportsapi.com/logo/players/56450_m-de-ligt.jpg"
        },
        {
            id: 8,
            nombre: "Manu Rodriguez",
            foto: "https://apiv2.allsportsapi.com/logo/players/72210_f-chiesa.jpg"
        },
        {
            id: 9,
            nombre: "AlejoRodríguez",
            foto: "https://apiv2.allsportsapi.com/logo/players/74235_w-mckennie.jpg"
        },
        {
            id: 10,
            nombre: "Andrés Muquinche",
            foto: "https://apiv2.allsportsapi.com/logo/players/61961_luca-pellegrini.jpg"
        },
        {
            id: 11,
            nombre: "Ricardo Otero",
            foto: "https://apiv2.allsportsapi.com/logo/players/55775_l-bonucci.jpg"
        },
        {
            id: 12,
            nombre: "Deivis Rivera",
            foto: "https://apiv2.allsportsapi.com/logo/players/10670_d-rugani.jpg"
        },
        {
            id: 13,
            nombre: "Percy Tuncar",
            foto: "https://apiv2.allsportsapi.com/logo/players/55233_r-bentancur.jpg"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    switch (action.type) {
        case "AGREGAR_TITULAR":
            return {
                ...state,
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
        case "AGREGAR_SUPLENTE":
            return {
                ...state,
                suplentes: state.suplentes.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
        case "QUITAR_TITULAR":
            return {
                ...state,
                titulares: state.titulares.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }

        case "QUITAR_SUPLENTE":
            return {
                ...state,
                suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }

        default:
            break;
    }

    return state
}

export default createStore(reducerEntrenador)