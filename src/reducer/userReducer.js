
const userReducer = (user = [], action) => {
    if (action.type === 'FETCH_USER') {
        return [...user, action.payload];
    }
    return user;
}

export default userReducer;
