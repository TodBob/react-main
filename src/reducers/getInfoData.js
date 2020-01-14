const initialState =  {}

export default function getInfoData(state = initialState, action) {
    switch (action.type) {
        case "DATA_RECEIVED_INFO":
            return action.infoData
        default:
            return state
    }
}