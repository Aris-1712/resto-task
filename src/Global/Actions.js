import Axios from 'axios'
const getDataReducer = (payLoad) => {
    return ({
        type: "GET_DATA",
        payLoad: payLoad
    })
}
export const getData = () => {
    return async (dispatch) => {
        const data = await Axios.get("https://dh-dev-apim.azure-api.net/restaurants/info/v1/QA-SUGARMASH/menu", {
            headers: {
                'Ocp-Apim-Subscription-Key': "c5f67862202f4577ab36a72ad04b38ca"
            }
        })
        dispatch(getDataReducer(data.data))
    }
}


