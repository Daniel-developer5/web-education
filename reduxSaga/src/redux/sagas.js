import { takeEvery, call, put } from 'redux-saga/effects'
import { hideLoader, showLoader, showAlert } from './actions'
import { FETCH_POSTS, REQUEST_POSTS } from './types'

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
    
        const payload = yield call(fetchPosts)
        
        yield put({ type: FETCH_POSTS, payload })
        yield put(hideLoader())
    } catch (err) {
        yield put(showAlert('Something has gone wrong'))
        yield put(hideLoader())
    }
}

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    
    return await res.json()
}