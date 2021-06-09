import * as Constants from './Constants'
const initialState = {
    data: {},
    menu: 0,
    section: 0
}



const Reducer = (state = initialState, Actions) => {
    switch (Actions.type) {
        case Constants.GET_DATA:
            return ({ ...state, data: Actions.payLoad })
            break;
        case Constants.SET_MENU:
            return ({ ...state, menu: Actions.payLoad })
            break;
        case Constants.SET_SECTION:
            return ({ ...state, section: Actions.payLoad })
            break;
        default:
            return { ...state }
            break;
    }



}


export default Reducer