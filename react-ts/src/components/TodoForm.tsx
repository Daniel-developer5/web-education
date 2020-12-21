import React, { useState } from 'react'

interface TodoFromProps {
    onAdd: (title: string) => void,
}

export const TodoForm: React.FC<TodoFromProps> = ({ onAdd }) => {
    const [ title, setTitle ] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (title) {
            if (e.key === 'Enter') {
                onAdd(title)
                setTitle('')
            }
        }
    }

    return (
        <div className="input-field">
            <input 
                type="text" 
                placeholder="Write Todo" 
                value={title} 
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
        </div>
    )
}