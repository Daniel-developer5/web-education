import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
    todos: ITodo[],
    onToggle: (id: number) => void,
    onRemove: (id: number) => void,
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
    const removeHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault()

        onRemove(id)
    }

    if (!todos.length) {
        return <div className="center">There are not any todos</div>
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']

                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li key={todo.id} className={classes.join(' ')}>
                        <label htmlFor="todo">
                            <input 
                                type="checkbox" 
                                id="todo" 
                                checked={todo.completed} 
                                onChange={() => onToggle(todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i
                                className="material-icons red-text" 
                                onClick={e => removeHandler(e, todo.id)}
                            >
                                Delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}