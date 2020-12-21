import { showAlert } from './actions'
import { CREATE_POST } from './types'

const spam = ['spam', 'php']

export const spamWordsMiddleware = ({ dispatch }) => {
    return next => {
        return action => {
            if (action.type === CREATE_POST) {
                const found = spam.filter(word => action.payload.title.includes(word))

                if (found.length) {
                    return dispatch(showAlert('You are spamer!'))
                }
            }

            return next(action)
        }
    }
}