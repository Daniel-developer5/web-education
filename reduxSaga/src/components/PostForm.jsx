import React from 'react'

import { connect } from 'react-redux'
import { createPost } from '../redux/actions'
import { showAlert } from '../redux/actions'
import Alert from './Alert'

class PostForm extends React.Component {
    state = {
        title: ''
    }

    submitHandler = e => {
        e.preventDefault()

        const { title } = this.state

        if (!title.trim()) {
            return this.props.showAlert('Field is required!')
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost)
        this.setState({ title: '' })
    }

    changeInputHandler = e => this.setState({ title: e.target.value })

    render() {
        return (
            <form onSubmit={ this.submitHandler }>
                { this.props.alert && <Alert text={ this.props.alert } /> }
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={ this.state.title }
                        onChange={ this.changeInputHandler }
                    />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)