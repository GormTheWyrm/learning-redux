
const boolReducer = (state = false, action) => {
    switch (action.type) {
        case 'SWAP_BOOL':
            return !state;
        default:
            return state; //without a default things break!
    }

};
export default boolReducer;