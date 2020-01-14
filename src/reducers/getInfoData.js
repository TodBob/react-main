const initialState = {singlePeopleData: {}}

export default function getInfoData(state = initialState, action) {
    switch (action.type) {
        case "DATA_RECEIVED_INFO":
            return {
                singlePeopleData: action.infoData
            };
        default:
            return state
    }
}