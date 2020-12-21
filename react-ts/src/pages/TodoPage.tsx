import React, { useEffect, useState } from 'react'

import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'

declare const confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    const [ todos, setTodos ] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]

    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo = {
      title, 
      id: Date.now(),
      completed: false,
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    console.log(id)
    
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed, }
      }

      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const sureRemove = confirm('Are you sure to delete todo?')
    if (sureRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  
  console.log(todos)
  
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList 
        todos={todos}
        onToggle={toggleHandler} 
        onRemove={removeHandler}
      />
    </>
  )
}