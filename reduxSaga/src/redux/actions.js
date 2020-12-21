import { 
    CREATE_POST, HIDE_LOADER, SHOW_LOADER,
    SHOW_ALERT, HIDE_ALERT, REQUEST_POSTS
} from './types'

export const createPost = post => ({
    type: CREATE_POST,
    payload: post
})

export const showLoader = () => ({ type: SHOW_LOADER })

export const hideLoader = () => ({ type: HIDE_LOADER })

export const showAlert = text => {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export const hideAlert = () => ({ type: HIDE_ALERT })

export const fetchPosts = () => {
    return {
        type: REQUEST_POSTS
    }
    // return async dispatch => {
    //     try {
    //         dispatch(showLoader())
    
    //         const 
    //             res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5'),
    //             json = await res.json()

    //         setTimeout(() => {
    //             dispatch({
    //                 type: FETCH_POSTS,
    //                 payload: json
    //             })
    //         }, 500)

    //         dispatch(hideLoader())
    //     } catch (err) {
    //         dispatch(showAlert('Something has gone wrong'))
    //         dispatch(hideLoader())
    //     }
    // }
}