const initialState = {
    openSearchDrawer: false
}

const TOGGLE_SEARCH = 'page/toggleSearch'

export const toggleSearchDrawerAction = () => ({type: TOGGLE_SEARCH})

export default function pageReducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_SEARCH : return{
            ...state,
            openSearchDrawer: !state.openSearchDrawer
        }
            
    }
    return state
}