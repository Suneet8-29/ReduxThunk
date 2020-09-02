import jsonPlaceholder from '../api/JSONPlaceholder'
import _ from 'lodash'

export const fetchPosts =  () => {
    return async dispatch => {
        const posts = await jsonPlaceholder.get('/posts');
         dispatch({
            type: 'FETCH_POSTS',
            payload : posts.data
        })       
    }    
}


export const fetchUser =  (userId) => {
    return  dispatch => {

        _fetchUser(userId, dispatch);
    }    
}

const _fetchUser = _.memoize( async (userId, dispatch) => {
    const userDetails = await jsonPlaceholder.get(`/users/${userId}`);
        dispatch({
           type: 'FETCH_USER',
           payload : userDetails.data
       })   
})



