import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import Loader from './Loader'
import Post from './Post'

const FetchedPosts = () => {
    const
        dispatch = useDispatch(),
        posts = useSelector(state => state.posts.fetchedPosts),
        loading = useSelector(state => state.app.loading)

    if (loading) return <Loader />

    if (!posts.length) {
        return (
            <button
                className="btn btn-primary"
                onClick={() => dispatch(fetchPosts())}
            >
                Load posts
            </button>
        )
    }

    return posts.map(post => <Post post={post} key={post.id} />)
}

export default FetchedPosts