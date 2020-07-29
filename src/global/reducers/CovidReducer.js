export const CovidReducer = (state, action) => {
    switch (action.type) {
        case 'GET_COVID_DATA':
            return action.payload

        default:
            return state;
    }
}
