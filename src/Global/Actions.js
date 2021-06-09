import Axios from 'axios'
import * as Constants from './Constants'
const getDataReducer = (payLoad) => {
    return ({
        type: Constants.GET_DATA,
        payLoad: payLoad
    })
}
export const getData = () => {
    return async (dispatch) => {
        const data = await Axios.get(Constants.API, {
            headers: {
                'Ocp-Apim-Subscription-Key':Constants.API_KEY
            }
        })
        dispatch(getDataReducer(data.data))
    }
}


