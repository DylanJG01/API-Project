
export const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS'
export const GET_SPOT = 'spots/GET_SPOT'
export const DELETE_SPOT = 'spot/DELETE_SPOT'
export const ADD_SPOT = 'spot/ADD_SPOT'
export const EDIT_SPOT = 'spot/EDIT_SPOT'

const allSpots = spots => ({
    type: GET_ALL_SPOTS,
    spots
})

export const getAllSpots = () => async dispatch => {
    const res = await fetch('/api/spots')
    // const res = await fetch('/')
    if(res.ok){
        const spots = await res.json();
        console.log("Spots: ", spots);
        return dispatch(allSpots(spots))
    }
    return console.log(res.status, "line 21 store/spots.js")
}

export const getSpot = spot => ({
    type: GET_SPOT,
    spot
})

const initialState = {
    allSpots: {
        spotId: {
            spotData: {}
        }
    },
    singleSpot: {
        spotData: {},
        SpotImages: [],
        Owner: {
            ownerData: {}
        }
    }
}

export default function spotReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_SPOTS:
            const allSpots = {}
            console.log("ACTIONSPOTS LINE48", action.spots)
            action.spots.spots.forEach(spot => {
                console.log("SPOT LINE 50", spot)
                allSpots[spot.id] = spot
            })
            console.log("ALLSPOTS LINE53", allSpots)
            const newState = {...state}
            return {...newState, allSpots}
            
        default: 
            return state
    }
}